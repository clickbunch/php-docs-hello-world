define(function(require) {

var _ = require('underscore');
var Backbone = require('backbone');
var Mustache = require('mustache');
var relatedTmpl = require('text!templates/Mustache/Articles/extended/related_articles.html');
var widgetTmpl = require('text!templates/Mustache/Articles/extended/link_widget.html');

return Backbone.View.extend({
	
    initialize: function(options) {

    	this.options = options || {};
    	this.update_article_index = options.update_article_index; //updating content ad if defined
        this.model = _.clone(this.model); //shallow copy model
        

        this.widget = this.preProcess();

        if (options.type == 'outbrain') {
            if (this.widget.to_outbrain) {
                this.renderCustomOutbrain();
            }
            else {
                this.renderOutbrain();
            }
        }
        else if (this.widget.to_trending) {
            this.render();
        }
    },

    render: function() {
        var tmpl = this.widget.custom_html || relatedTmpl;
        var html = Mustache.render(tmpl, this.model);
        this.$el.html(html);
    },

    renderOutbrain: function() {

        if (window.Global.IS_ENV_EU) { return }
        if (this.model.hide_outbrain) { return }

        var self = this;

        var ad_class = '.OUTBRAIN';
        var ob_type = config.isMobilePhone ? 'MB_' : 'AR_';
        this.ob_href = 'oprah.com' + window.location.pathname + window.location.search + window.location.hash;
        this.article_count = 0;
        this.pageview_count = 0;

    	if(this.update_article_index != undefined) {
    		$('.article-wrapper')
    		.eq(this.update_article_index)
    		.find(ad_class)
    		.attr('data-widget-id', ob_type + (this.update_article_index + 1))
            .attr('data-src', this.ob_href)
            .attr('id', 'outbrain_widget_' + (this.update_article_index + 1))
    		OBR.extern.refreshSpecificWidget( 0 , this.ob_href); //refresh pageview tracking widget
    		OBR.extern.refreshSpecificWidget( this.update_article_index + 1 , this.ob_href);
    	} else {
    		$('body').prepend('<div class="OUTBRAIN" data-ob-template="Oprah">'); //pageview tracking widget
	        $(ad_class).each(function(idx) {
	        	var widget_id = idx == 0 ? 8 : idx + 1; //pageview tracking widget has id of 8
	            $(this)
	            .attr('data-widget-id', ob_type + widget_id)
	            .attr('data-src', self.ob_href);
	            self.article_count++;
	        })
	        var ob = document.createElement('script');
	        ob.type = 'text/javascript';
	        ob.async = true;
	        ob.src = 'https://widgets.outbrain.com/outbrain.js';
	        var obscr = document.getElementsByTagName('script')[0];
	        obscr.parentNode.insertBefore(ob, obscr);
	        //this.initObPageviews();
    	}

    },
    /*
    initObPageviews: _.throttle(function() {
    	if(typeof OBR == 'undefined') {
    		this.initObPageviews();
    	} else {
    		if(this.pageview_count < this.article_count - 3) {
    			OBR.extern.refreshSpecificWidget( 0 , this.ob_href);
    			this.pageview_count++;
    			this.initObPageviews();
    			
    		}
    	}
    }, 250),
*/
    renderCustomOutbrain: function() {

        var that = this;
        var ad_class = '.OUTBRAIN';
        var tmpl = that.widget.custom_html || widgetTmpl;

    	if(this.update_article_index != undefined) {
    		var model = _.clone(this.model);
    		if (this.update_article_index == 0) model.styles = true;
    		$('.article-wrapper')
    		.eq(this.update_article_index)
    		.find(ad_class)
    		.html(Mustache.render(tmpl, model));
    	} else {     
	        $(ad_class).each(function(idx) {
	            var model = _.clone(that.model);
	            if (idx == 0) {
	                // Only load styles for first module
	                model.styles = true;
	            }
	            this.innerHTML = Mustache.render(tmpl, model);
	        });
    	}
    },

    preProcess: function() {
        var widget = {};

        if (_.isArray(this.model.link_widgets)) {
            widget = this.model.link_widgets[0] || {};
            this.addLinkWidget(widget);
        }

        return widget;
    },

    addLinkWidget: function(widget) {
        var articles = widget.preferences.articles;
        var model = this.model;
        var data = this.normalizeArticles(articles);


        model.trending = data;


        if (widget.logo_url) {
            model.related_sponsor_logo = widget.logo_url;
        }
        model.widget_display_name = widget.display_name;
    },

    normalizeArticles: function(articles) {
        var that = this;
        var rt = [], art;
        var missingThumb;

        _.each(articles, function(art, i) {
            rt.push({
                title: art.article_title,
                link: art.article_destination_url,
                thumb: art.article_promo_image_url,
                attribution: art.article_attribution,
                odd: !(i % 2)
            });
            if (!art.article_promo_image_url) {
                missingThumb = true;
            }
        });

        if (missingThumb) {
            that.model.widget_text_only = true;
            _.each(rt, function(art) {
                art.thumb = null;
            });
        }
        return rt;
    }
});

});
