!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic("1", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    /* eslint-disable */
    !function () {
      if ("1" == (name = "bsaddev", url = window.location.href, name = name.replace(/[\[\]]/g, "\\$&"), (name = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)").exec(url)) ? name[2] ? decodeURIComponent(name[2].replace(/\+/g, " ")) : "" : null)) for (var s = document.querySelectorAll("script"), i = s.length - 1; 0 <= i; i--) if (s[i]) {
        var src = s[i].getAttribute("src");if (src && -1 != src.indexOf("/BrightspotAdCode.") && -1 == src.indexOf("/BrightspotAdCode.dev.js")) return s[i].parentNode.removeChild(s[i]), (s = document.createElement("script")).src = "https://s3adtech.ewscloud.com/brightspot/BrightspotAdCode.dev.js", document.head.appendChild(s);
      }var fnCheckRefreshAd,
          topAdhesionRequested,
          name,
          url,
          IS_CMS = !1,
          _disable = (-1 === window.location.pathname.indexOf("/cms/content/") && -1 === window.location.pathname.indexOf("/cms/_preview") && -1 === window.location.pathname.indexOf("/_preview") || (IS_CMS = !0), []),
          AdDebugger = (-1 !== window.location.search.indexOf("_disable=") && (_disable = window.location.search.replace("?_disable=", "").split(",")), { displayPreroll: function () {
          this.isEnabled() && (this.prerollUrls = [], window.addEventListener("message", function (e) {
            if (e.data && "string" == typeof e.data) try {
              if ("AD_PREROLL_URL" == (j = JSON.parse(e.data)).event) {
                var prerollUrl = atob(j.data);if (-1 == AdDebugger.prerollUrls.indexOf(prerollUrl) && (AdDebugger.prerollUrls.push(prerollUrl), "" != prerollUrl)) {
                  for (var vcontainer = document.querySelector(".scripps-videoad-debugger"), keyVals = (vcontainer || ((vcontainer = document.createElement("div")).className = "scripps-videoad-debugger", document.body.appendChild(vcontainer)), prerollUrl.split("?")[1].split("&")), kvHtml = "", i = 0; i < keyVals.length; i++) if ("" != keyVals) {
                    var tmp = keyVals[i].split("=");if ("cust_params" == tmp[0]) {
                      kvHtml += "<p><span>" + tmp[0] + ":</span>";for (var cpTmp, custParams = decodeURIComponent(tmp[1]).split("&"), j = 0; j < custParams.length; j++) "" != custParams[j] && (kvHtml += "<br/>" + (cpTmp = custParams[j].split("="))[0] + ": " + cpTmp[1]);kvHtml += "</p>";
                    } else "iu" == tmp[0] && (kvHtml += "<p><span>" + tmp[0] + ":</span>" + tmp[1] + "</p>");
                  }vcontainer.innerHTML += "<div><h3>Preroll Request</h3>" + kvHtml + "</div>";
                }
              }
            } catch (ex) {}
          }));
        }, display: function (type, data1, data2) {
          this.isEnabled() && this.isValid(type, data1, data2) && (this.data || (this.data = []), this.data.push({ type: type, data1: data1, data2: data2 }), this.cleanUpData(type, data1, data2), this.renderData(), this.bindEvents());
        }, isEnabled: function () {
          return this.enableCheck || (this.enableCheck = !0, this.enabled = "?ads" === window.location.search || "?adops" === window.location.search, this.isAdOps = "?adops" === window.location.search), this.enabled;
        }, isValid: function (type, d1, d2) {
          return "SLOT_RENDER" === type || d1.status && "ad_slot_defined" === d1.status;
        }, renderData: function () {
          if (document.body) {
            for (var css, container = document.querySelector(".scripps-ad-debugger"), slotRenderHtml = (container || ((container = document.createElement("div")).className = "scripps-ad-debugger", document.body.appendChild(container), (css = document.createElement("style")).innerHTML = ".scripps-videoad-debugger,.scripps-ad-debugger{position:fixed;bottom:0;right:0;background:rgba(235,235,235,.95);padding:10px;height:50%;width:30%;overflow:scroll;z-index:99999999}.scripps-videoad-debugger{left:0;}.scripps-videoad-debugger h3,.scripps-ad-debugger h3{cursor:pointer;text-decoration:underline}.scripps-ad-debugger .ad-debug-wrapper:nth-child(odd){background:rgba(255,255,255,.7)}.scripps-videoad-debugger p,.scripps-ad-debugger p{margin:0 0 10px 0}.scripps-videoad-debugger p span,.scripps-ad-debugger p span{font-size:.8em}.scripps-ad-debugger .padleft{padding:0 0 10px 10px}@media only screen and (max-width:650px){.scripps-ad-debugger{width:100%}}", document.body.appendChild(css)), container.innerHTML = ""), renderedCount = 0, counter = 0, numRenderedAds = this.data.filter(function (x) {
              x.type;
            }).length, i = this.data.length - 1; 0 <= i; i--) {
              var d = this.data[i];"SLOT_RENDER" === d.type && (renderedCount = numRenderedAds - counter, counter++), this.isAdOps ? slotRenderHtml += this.renderSlotRenderAdOps(d, renderedCount) : slotRenderHtml += this.renderSlotRender(d, renderedCount);
            }container.innerHTML = "" + slotRenderHtml;
          }
        }, renderPageSettings: function (data) {
          return "";
        }, renderSlotRender: function (data, count) {
          var d1,
              html = "";return '<div class="ad-debug-wrapper" style="padding: 10px;">' + (html = data.data1 ? (d1 = data.data1).isEmpty ? '<h3 class="div-id" data-divid="' + data.data2.config.divId + '">Ad ' + (d1.ad ? "" : count) + "</h3><p>Available Sizes: " + data.data2.config.s + "</p><p>Empty: true</p>" : this.getRenderedHtml("renderSlotRender", d1, data.data2, d1.ad ? "" : count) : html) + "</div>";
        }, getRenderedHtml: function (type, data, data2, count) {
          var html = "",
              data2 = { divId: (data.ad || data2).config.divId, sizes: (data.ad || data2).config.s, slot: data.ad ? data.ad.gptSlot : data.slot, status: data.ad ? "(waiting to be loaded)" : "" };return html = "renderSlotRender" === type ? (html = '<h3 style="margin-bottom: 3px;" class="div-id" data-divid="' + data2.divId + '">Ad ' + count + " " + data2.status + "</h3>", html = (html += "<p><span>Available Sizes:</span> " + data2.size + "</p>") + "<p><span>Ad Unit:</span> " + data2.slot.getAdUnitPath().replace("/6088", "") + "</p>", (html = (html += "<p><span>fname:</span> " + (type = data2.slot.getTargetingMap()).fname + "</p>") + "<p><span>categories:</span> " + type.categories + "</p>") + "<p><span>au:</span> " + type.au + "</p></div>") : (html = '<h3 style="margin-bottom: 3px;" class="div-id" data-divid="' + data2.divId + '">Ad ' + count + " " + data2.status + "</h3>", (html = (html = (data.ad ? html : (html = (html = (html = (html = (html = (html += '<p>Rendered Ad Info</p><div class="padleft">') + "<p>Div Id: " + data2.divId + "</p><p>Requested Sizes: " + data2.sizes + "</p>") + "<p>Rendered Size: " + (data.size ? data.size.toString().replace(",", "x") : "") + "</p>") + '<p>Advertiser Id: <a target="_blank" href="https://www.google.com/dfp/6088#delivery/ListOrders/companyId=' + data.advertiserId + '">' + data.advertiserId + "</a></p>") + '<p>Campaign Id: <a target="_blank" href="https://www.google.com/dfp/6088#delivery/OrderDetail/orderId=' + data.campaignId + '">' + data.campaignId + "</a></p>") + '<p>Creative Id: <a target="_blank" href="https://www.google.com/dfp/6088#delivery/CreativeDetail/creativeId=' + data.creativeId + '">' + data.creativeId + "</a></p>") + '<p>Line Item Id: <a target="_blank" href="https://www.google.com/dfp/6088#delivery/LineItemDetail/orderId=' + data.campaignId + "&lineItemId=" + data.lineItemId + '">${data.lineItemId}</a></p></div>') + '<p>Targeting</p><div class="padleft">') + "<p>Ad Unit: " + data2.slot.getAdUnitPath().replace("/6088", "") + '</p></div><p>Key Values</p><div class="padleft">') + "<p>" + this.jsonToHtml(data2.slot.getTargetingMap()) + "</p></div>");
        }, renderSlotRenderAdOps: function (data, count) {
          var d1,
              html = "";return '<div class="ad-debug-wrapper" style="padding: 10px;">' + (html = data.data1 ? (d1 = data.data1).isEmpty ? '<h3 class="div-id" data-divid="' + data.data2.config.divId + '">Ad ' + (count + 1) + '</h3><p>Rendered Ad Info</p><div class="padleft"><p>Div Id: ' + data.data2.config.divId + "</p><p>Empty: true</p></div>" : this.getRenderedHtml("renderSlotRenderAdOps", d1, data.data2, d1.ad ? "" : count) : html) + "</div>";
        }, findKeyValues: function (j) {
          for (var key in j) if (j[key] && j[key].pos && j[key].fname) return j[key];
        }, jsonToHtml: function (j) {
          var key,
              html = "";for (key in j) if ("kw" === key) for (var i = 0; i < j[key].length; i++) html += key + ": " + j[key][i] + "<br/>";else html += key + ": " + j[key] + "<br/>";return html;
        }, bindEvents: function () {
          for (var adIdDivs = document.querySelectorAll(".scripps-ad-debugger h3"), i = 0; i < adIdDivs.length; i++) adIdDivs[i].addEventListener("click", function (e) {
            var operator,
                oVal,
                maxCycles,
                int,
                e = e.currentTarget.getAttribute("data-divid"),
                d = document.getElementById(e);d && (d.scrollIntoView(), operator = "-", oVal = 1, maxCycles = 0, int = setInterval(function () {
              "-" === operator ? oVal -= .1 : oVal += .1, (d.style.opacity = oVal) <= 0 ? operator = "+" : 1 <= oVal && (operator = "-", maxCycles++), 3 === maxCycles && clearInterval(int);
            }, 20));
          });
        }, cleanUpData: function (type, data1, data2) {
          if ("SLOT_RENDER" === type) for (var i = 0; i < this.data.length; i++) if (this.data[i].data1.ad && this.data[i].data1.ad.gptSlot === data1.slot) {
            this.data.splice(i, 1);break;
          }
        } }),
          ScrippsUtils = { getPageType: function () {
          var metaType;return this.pageType || (metaType = document.querySelectorAll('meta[property="og:type"]')[0], this.pageType = metaType ? metaType.getAttribute("content") : "none"), "none" === this.pageType ? "" : this.pageType;
        }, isArticle: function () {
          return "article" === this.getPageType();
        }, callLetters: function () {
          return window.callLetters;
        }, getPageKeywords: function () {
          var metaKeywords;return this.pageKeywords || (metaKeywords = document.querySelectorAll('meta[name="keywords"]')[0], this.pageKeywords = metaKeywords ? metaKeywords.getAttribute("content") : "none"), "none" === this.pageKeywords ? "" : this.pageKeywords;
        }, scrollTo: function (to, duration) {
          duration = duration || 500;function animateScroll() {
            t = currentTime += 20, b = start, c = change;var t,
                b,
                c = (t /= duration / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;element.scrollTop = c, currentTime < duration && setTimeout(animateScroll, 20);
          }var element = document.body,
              start = element.scrollTop,
              change = to - start,
              currentTime = 0;animateScroll();
        }, getComputedStyles: function (element) {
          var style = element.currentStyle || window.getComputedStyle(element),
              element = { width: element.offsetWidth, margin: parseFloat(style.marginLeft) + parseFloat(style.marginRight), padding: parseFloat(style.paddingLeft) + parseFloat(style.paddingRight), border: parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth) };return element.outerWidth = element.width + element.margin + element.padding + element.border, element;
        }, addClass: function (elements, cssClass) {
          for (var len = elements.length, i = 0; i < len; i++) elements[i].classList.add(cssClass);
        }, removeClass: function (elements, cssClass) {
          for (var len = elements.length, i = 0; i < len; i++) elements[i].classList.remove(cssClass);
        }, debounce: function (func, wait, immediate) {
          var timeout,
              self = this;return function () {
            var context = self,
                args = arguments,
                callNow = immediate && !timeout;clearTimeout(timeout), timeout = setTimeout(function () {
              timeout = null, immediate || func.apply(context, args);
            }, wait), callNow && func.apply(context, args);
          };
        }, onWindowResize: function (func) {
          var self;void 0 === this.onResizeFns && (this.onResizeFns = [], this.onResizeFns.push(func), self = this, window.addEventListener("resize", this.debounce(function () {
            for (var i = self.onResizeFns.length - 1; 0 <= i; i--) self.onResizeFns[i]();
          }, 400)));
        }, offsetTop: function (element) {
          var bodyRect = document.body.getBoundingClientRect();return element.getBoundingClientRect().top - bodyRect.top;
        }, domReady: function (fn) {
          "loading" !== document.readyState ? fn() : document.addEventListener ? document.addEventListener("DOMContentLoaded", fn) : document.attachEvent("onreadystatechange", function () {
            "complete" === document.readyState && fn();
          });
        }, intersectValues: function (ar1, ar2) {
          for (var vals = [], len1 = ar1.length, len2 = ar2.length, i = 0; i < len1; i++) for (var i2 = 0; i2 < len2; i2++) ar1[i] === ar2[i2] && (vals.push(ar1[i]), i2 = len2);return vals;
        }, hasSessionStorageAccess: function () {
          try {
            var storage = window.sessionStorage;return storage.setItem("test", "test"), storage.removeItem("test"), !0;
          } catch (e) {
            return !1;
          }
        } },
          StickyRightRail = { init: function (elementToStick, leftColumn) {
          var self = this;!this.inited && elementToStick && leftColumn && (this.inited = !0, setTimeout(function () {
            self.ele = elementToStick, self.eleTop = ScrippsUtils.offsetTop(elementToStick), self.eleWidth = elementToStick.offsetWidth, self.eleHeight = elementToStick.offsetHeight, self.rightCol = elementToStick.parentNode, self.rightColHeight = self.rightCol.offsetHeight, self.leftColumn = leftColumn, self.leftColTop = ScrippsUtils.offsetTop(leftColumn), self.leftColWidth = leftColumn.offsetWidth, self.leftColHeight = leftColumn.offsetHeight, self.checkShouldStick(), window.addEventListener("scroll", function () {
              self.checkShouldStick();
            }), setInterval(function () {
              self.leftColHeight = self.leftColumn.offsetHeight, self.isSticky || self.isStickyBottom || (self.eleTop = ScrippsUtils.offsetTop(elementToStick), self.eleHeight = elementToStick.offsetHeight);
            }, 1e3), ScrippsUtils.onWindowResize(function () {
              self.leftColHeight = self.leftColumn.offsetHeight, self.checkShouldStick();
            });
          }, 1e3));
        }, checkShouldStick: function () {
          this.headerPadding = 53;var scrollPosition = (window.scrollY || document.documentElement.scrollTop) + this.headerPadding;!this.isSticky && scrollPosition >= this.eleTop && scrollPosition <= this.leftColTop + this.leftColHeight - this.eleHeight ? (this.isSticky = !0, this.isStickyBottom = !0, this.stick("fixed")) : this.isSticky && scrollPosition <= this.eleTop ? (this.isSticky = !1, this.isStickyBottom = !1, this.stick()) : this.isSticky && scrollPosition >= this.leftColTop + this.leftColHeight - this.eleHeight && (this.isStickyBottom = !0, this.isSticky = !1, this.stick("bottom"));
        }, stick: function (type) {
          "fixed" === type ? this.ele.setAttribute("style", "position:fixed;top:0;margin-top:" + this.headerPadding + "px;") : "bottom" === type ? this.ele.setAttribute("style", "position:static;margin-top:" + (this.leftColHeight - this.eleHeight - this.rightCol.offsetHeight) + "px;") : this.ele.setAttribute("style", "position:static;");
        } },
          sUserHub = { init: function () {
          this.addBodyClasses();var logoutBtns = document.querySelectorAll(".js-suh-logout");if (logoutBtns[0]) for (var i = 0; i < logoutBtns.length; i++) {
            var logoutBtn = logoutBtns[i];logoutBtn.removeAttribute("href"), logoutBtn.addEventListener("click", function () {
              sUserHub.logout(), window.location.reload();
            });
          }
        }, logout: function () {
          this.deleteCookie("tP2s41s"), this.deleteCookie("subscriberResources"), this.deleteCookie("subscriber"), this.setCookie("subscriber_gtm", "false"), this.deleteCookie("uh_last_logged_in"), this.deleteCookie("uh_is_logged_in"), this.deleteCookie("uh_userRef"), this.deleteCookie("uh_token");
        }, isLoggedIn: function () {
          return "true" === this.getCookie("uh_is_logged_in");
        }, deleteCookie: function (cName) {
          var date = new Date(),
              date = (date.setTime(date.getTime() + -864e5), "; expires=" + date.toGMTString());document.cookie = cName + "=" + date + "; path=/";
        }, setCookie: function (name, value, exp) {
          var d = new Date(),
              d = (d.setTime(d.getTime() + 864e6), "uref" === name && d.setTime(d.getTime() + 31536e7), "expires=" + d.toUTCString());exp && (d = exp), document.cookie = name + "=" + value + ";" + d + ";path=/";
        }, getCookie: function (cName) {
          for (var x, y, ARRcookies = document.cookie.split(";"), i = 0; i < ARRcookies.length; i++) if (x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("=")), y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1), (x = x.replace(/^\s+|\s+$/g, "")) === cName) return unescape(y);
        }, addBodyClasses: function () {
          this.isLoggedIn() ? document.body.classList.add("suh-is-loggedIn") : document.body.classList.add("suh-is-not-loggedIn");
        }, hasAdFreeAccess: function () {
          var ck = this.getCookie("tP2s41s"),
              c = this.dc(ck);return !!(ck && 0 < ScrippsUtil.intersectValues(["RESOURCE_MONTHLY", "RESOURCE_ANNUAL", "RESOURCE_DAY", "INAPPMO", "INAPPYEAR", "RESOUCE_ASG_MONTH", "RESOURCE_ASG_YEAR", "RESOURCE_ASG_ANNUAL"], c.split(",")).length);
        }, k: function () {
          return "SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare";
        }, dc: function (coded) {
          for (var chr, uncoded = "", i = (coded = decodeURIComponent(coded)).length - 1; 0 <= i; i--) uncoded += "a" <= (chr = coded.charAt(i)) && chr <= "z" || "A" <= chr && chr <= "Z" ? String.fromCharCode(65 + this.k().indexOf(chr) % 26) : chr;return uncoded;
        }, ec: function (uncoded) {
          for (var chr, coded = "", i = (uncoded = (uncoded = uncoded || "").toUpperCase().replace(/^\s+|\s+$/g, "")).length - 1; 0 <= i; i--) coded += 65 <= (chr = uncoded.charCodeAt(i)) && chr <= 90 ? this.k().charAt(chr - 65 + 26 * Math.floor(2 * Math.random())) : String.fromCharCode(chr);return encodeURIComponent(coded);
        } },
          AdTargetingParams = { kw: function () {
          var metaKw = document.querySelector('meta[name="keywords"]');return metaKw ? metaKw.getAttribute("content").split(",") : [];
        }, categories: function () {
          var tmpSection,
              categories = "";return window.jsTags && (categories += window.jsTags), window.jsSection && (tmpSection = window.jsSection, -1 === categories.indexOf(tmpSection) && ("" != categories && (categories += ","), categories += tmpSection), "section" == window.jsPageType) && (tmpSection = window.location.pathname.toLowerCase().split("/"))[2] && (categories += "," + tmpSection[1].replace(/-/g, " ")), (categories = "" === categories && "section" === window.jsPageType ? "/" === window.location.pathname ? "home" : window.location.pathname.toLowerCase().split("/").join(" ") : categories).trim().replace(/&/g, "and").replace(/'/g, "").toLowerCase();
        }, gallery: function () {
          return "gallery" === window.jsPageType ? "modal_gallery" : "";
        }, pt: function () {
          var ptArray = [];return "article" === window.jsPageType ? ptArray.push("detail") : ptArray.push("landing"), "true" === window.jsHasVideo ? ptArray.push(!0) : ptArray.push(!1), ptArray;
        }, fname: function () {
          return window.jsFname && -1 === window.jsFname.indexOf("template") ? window.jsFname : "";
        }, site: function () {
          return -1 !== window.location.host.indexOf("localhost:") ? "dev" : -1 !== window.location.host.indexOf("qa.ewscripps.psdops.com") ? "qa" : "prod";
        } },
          DynamicTargetingParams = { getWxTempVal: function () {
          var temp;return !this.wxTempVal && (this.wxTempVal = "", temp = !(temp = window.jsWxTemp) && ScrippsUtils.hasSessionStorageAccess() && window.sessionStorage ? window.sessionStorage.getItem("wx_temp") : temp) && (this.wxTempVal = (temp = temp, isNaN(temp) ? "" : (temp = +temp) <= 32 ? "32below" : 100 <= temp ? "100plus" : temp % 10 == 0 ? temp + "-" + (temp + 9) : 10 * Math.floor(temp / 10) + "-" + (10 * Math.ceil(temp / 10) - 1))), this.wxTempVal;
        }, getWxConditionVal: function () {
          var tmpCond;return !this.wxCondVal && (this.wxCondVal = "", tmpCond = !(tmpCond = window.jsWxCond) && ScrippsUtils.hasSessionStorageAccess() && window.sessionStorage ? window.sessionStorage.getItem("wx_cond") : tmpCond) && (this.wxCondVal = { clear: "clear", "mostly clear": "clear", "partly cloudy": "cloudy", "mostly cloudy": "cloudy", "mostly cloudy / windy": "cloudy", fair: "cloudy", cloudy: "cloudy", "blowing snow": "snow", drizzle: "rain", fog: "fog", "freezing drizzle": "freezing_rain", "freezing rain": "freezing_rain", "heavy drizzle": "rain", "heavy rain": "rain", "heavy snow": "snow", "light drizzle": "rain", "light fog": "fog", "light rain": "rain", "light snow": "snow", "patchy fog": "fog", rain: "rain", "rain showers": "rain", sleet: "freezing_rain", snow: "snow", thunderstorms: "rain" }[tmpCond.toLowerCase()]), this.wxCondVal;
        } },
          ScrippsOutstreamPlayer_init = function () {
        if (IS_CMS) return !1;if (-1 != _disable.indexOf("outstream")) return !1;var validParagraphLength = 120;window.ddls && window.ddls.outstream_paragraphLength && (validParagraphLength = window.ddls.outstream_paragraphLength);let cnx_id,
            cnx_player_id,
            cnx_script_id,
            newPlayerActive = !1;window.ddls && function (valueList) {
          let res = !0;return valueList.forEach((val, ind) => {
            res = res && function (val) {
              return null != val && "" !== val && 0 < val.length && "none" !== val && "x" !== val;
            }(val);
          }), res;
        }([window.ddls.global_connatix_id, window.ddls.connatix_player_id, window.ddls.connatix_script_id]) && (cnx_id = window.ddls.global_connatix_id, cnx_player_id = window.ddls.connatix_player_id, cnx_script_id = window.ddls.connatix_script_id, newPlayerActive = !0);var s;if (window.ddls && "true" == window.ddls.connatix_disable_on_video_articles) {
          var firstWheelItem = document.querySelectorAll(".ScrippsWheelItemSlider .WheelItem-wheelItems > *")[0];if (firstWheelItem && -1 != firstWheelItem.className.indexOf("WheelItemVideo")) return !1;
        }if ("true" !== window.jsDisableInlineVideoAds && "article" === window.jsPageType && window.ddls && (window.ddls.outstream_teadsId || window.ddls.outstream_connatixId || newPlayerActive)) {
          if ("true" === window.ddls.outstream_disabled) return !1;if (window.ddls.outstream_excludeCategories && window.jsTags) for (var tSplit = window.jsTags.toLowerCase().split(","), cSplit = window.ddls.outstream_excludeCategories.toLowerCase().split(","), i = 0; i < cSplit; i++) if (-1 !== tSplit.indexOf(cSplit[i])) return !1;if (!/(?:; ([^;)]+) Build\/.*)?\bSilk\/([0-9._-]+)\b(.*\bMobile Safari\b)?/.exec(navigator.userAgent)) {
            if (newPlayerActive) {
              firstWheelItem = document;if (!window.cnx) {
                window.cnx = {}, window.cnx.cmd = [];let t = firstWheelItem.createElement("iframe");t.src = "javascript:false", t.display = "none", t.onload = function () {
                  var n = t.contentWindow.document,
                      c = n.createElement("script");c.src = "//cd.connatix.com/connatix.player.js?cid=" + cnx_id, c.setAttribute("async", "1"), c.setAttribute("type", "text/javascript"), n.body.appendChild(c);
                }, firstWheelItem.head.appendChild(t);
              }
            } else window.ddls.outstream_connatixId && "0" !== window.ddls.outstream_connatixId && !function (n) {
              var t;window.cnxps || (window.cnxps = {}, window.cnxps.cmd = [], (t = n.createElement("iframe")).display = "none", t.onload = function () {
                var n = t.contentWindow.document,
                    c = n.createElement("script");c.src = "//cd.connatix.com/connatix.playspace.js", c.setAttribute("async", "1"), c.setAttribute("type", "text/javascript"), n.body.appendChild(c);
              }, n.head.appendChild(t));
            }(document);if (window.ddls.outstream_connatixId && "0" !== window.ddls.outstream_connatixId || newPlayerActive) {
              for (var d, script_body, cInt, p = document.querySelectorAll(".RichTextArticleBody p"), validPCount = 0, i = 0; i < p.length; i++) if (!p[i].parentNode.classList.contains("twitter-tweet") && (p[i] && p[i].textContent.length > validParagraphLength && validPCount++, 3 === validPCount)) {
                3 < p.length && ((d = document.createElement("div")).id = "outstream_connatix_container", p[i].parentNode.insertBefore(d, p[i]), newPlayerActive ? ((script_body = document.createElement("script")).setAttribute("id", cnx_script_id), d.appendChild(script_body), new Image().src = `https://capi.connatix.com/tr/si?token=${cnx_player_id}&cid=` + cnx_id, window.cnx.cmd.push(function () {
                  window.cnx({ playerId: cnx_player_id }).render(cnx_script_id);
                })) : window.cnxps.cmd.push(function () {
                  window.cnxps({ playerId: window.ddls.outstream_connatixId }).render(d.id);
                }), cInt = setInterval(function () {
                  var lbl,
                      closeBtn = document.querySelector(".cnx-close-button");closeBtn && (clearInterval(cInt), (lbl = document.createElement("p")).setAttribute("style", "margin-bottom: 0; font-family: Libre Franklin; font-size: 1vw; text-align: center;"), lbl.innerHTML = "Recent Stories from " + window.location.host.replace("www.", ""), p[i].parentNode.insertBefore(lbl, document.querySelector(".cnx-main-container")), closeBtn.addEventListener("click", function () {
                    lbl.parentNode.removeChild(lbl);
                  }, !0));
                }, 1e3));break;
              }
            } else window.ddls.outstream_teadsId && ((s = document.createElement("script")).async = !0, s.src = "//a.teads.tv/page/" + window.ddls.outstream_teadsId + "/tag", document.body.appendChild(s));
          }
        }
      },
          disableInviewRefreshing = !1,
          disableRightRailRefreshing = !1,
          enableInfiniteRefresh = "true" === window.ddls.enableInfiniteRefresh,
          adTimeouts = {},
          rightRailRefreshTimeout = null,
          inviewRefreshTimeout = null,
          rightRailRefresh = !1,
          inviewRefresh = !1,
          ScrippsAdsLib = { init: function (c) {
          var pageData, pathSplit, prebidders;return -1 !== window.location.host.indexOf("facebook.com") || "wcpo" === c.appId && sUserHub.hasAdFreeAccess() ? (window.jsDisableDisplayAds = "true", window.jsTags += " Hide Ads", !1) : ("snews" === c.appId && (c.appId = "scrippsnews.com", window.jsSiteLocation = ""), "Brand Spotlight" !== window.jsSection && document.documentElement && -1 === document.documentElement.className.indexOf("brandSpotlight") && ScrippsUtils.domReady(function () {
            ScrippsOutstreamPlayer_init();
          }), AdDebugger.displayPreroll(), void ("true" !== window.jsDisableDisplayAds && ((pageData = { zone: this.getAdUnitZone(), zoneAppend: "article" === this.getPageType() ? "/detail" : "/landing" }).targetingParams = this.getAllTargetingParams(), pageData.targetingParamsFn = this.targetingParamsFn, "gallery" === window.jsPageType && (window.adsOnPage = []), "article" === window.jsPageType && (pageData.removeFnameFromZone = !0, pathSplit = window.location.pathname.split("/"), !pageData.zone) && (pathSplit.length <= 2 || 3 === pathSplit.length && "" === pathSplit[2]) && (pageData.zone = "/default/no-category", window.jsSection) && (pageData.zone = "/" + window.jsSection.toLowerCase().replace(/ /g, "_").replace(/'/g, "")), "/" === window.location.pathname && (pageData.zone = "/home"), pathSplit = "ssp.", !window.jsSiteLocation && "" != window.jsSiteLocation || (pathSplit = window.jsSiteLocation), prebidders = this.getPrebidders(), c = { appId: c.appId, pageData: pageData, disableOOP: !0, adsOnPage: window.adsOnPage || [], selector: ".google-dfp-ad", overrideAppSettings: { networkId: "6088", siteLocation: pathSplit }, prebidders: prebidders, breakPoints: [{ name: "mobile", width: 879 }, { name: "desktop", width: 999999 }], lazyLoad: { scrollTimeout: 300, threshold: 400 }, callback: function (data) {
              window.scrippsAdLibCallback && window.scrippsAdLibCallback(data), AdDebugger.display("AD_LIB_CALLBACK", data), window.ddls && window.ddls.enablePrebidderGATracking && data.timeout && "MediaNet" !== data.name && (this.timeouts = this.timeouts || {}, this.timeouts[data.name] = this.timeouts[data.name] || 0, this.timeouts[data.name]++, 1 === this.timeouts[data.name]) && (data = { event: "GenericEvent", gaCategory: "Prebidders", gaAction: data.status, gaLabel: data.name }, window.dataLayer) && window.dataLayer.push(data);
            } }, window.location.search && -1 !== window.location.search.indexOf("?scrippsadtest=") && (c.pageData.zone = window.location.search.split("=")[1], c.overrideAppSettings.siteLocation = "", c.appId = "scripps"), window.ddls && "true" === window.ddls.defaultNoUserConsent && (c.defaultNoUserConsent = !0), ScrippsAdLib.init(c), "mobile" === ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && this.initInviewRefresh(2e3), this.initLegacyCode())));
        }, initAdBlockerDetection: function () {
          window.adblockDetector && window.ddls && window.ddls.enableAdBlockerGATracking && window.adblockDetector.init({ found: function () {
              window.dataLayer && window.dataLayer.push({ event: "GenericEvent", gaCategory: "Ad Blocker Detected", gaAction: "", gaLabel: "" });
            }, notFound: function () {} });
        }, getPrebidders: function () {
          var a9 = { name: "AmazonMultiSlot", opts: { pubID: "3295", adServer: "googletag", timeout: 1500 } },
              bidders = (window.ddls && "true" === window.ddls.defaultNoUserConsent && (a9.opts.params = { us_privacy: "1YYN" }), [a9]);if (window.ddls && "true" === window.ddls.enableMediaNet && bidders.push({ name: "MediaNet", opts: { customerId: "8CU6Q6626" } }), window.ddls && "true" === window.ddls.enableMediaNetPrebid && bidders.push({ name: "MediaNetPrebid", opts: { customerId: "8CU2N1270" } }), window.ddls && "true" === window.ddls.enableMagnitePrebidder && bidders.push({ name: "Rubicon", opts: { wrapperName: "5776_Scripps_Local_Stations" } }), 0 < _disable.length) for (var i = bidders.length - 1; 0 <= i; i--) -1 != _disable.indexOf(bidders[i].name) && bidders.splice(i, 1);return bidders;
        }, initLegacyCode: function () {
          window.ScrippsAdUtils = { createNativeTeaser: function (data) {
              var wrapperDiv = document.getElementById(data.name).parentNode,
                  tmpNativeDiv = (wrapperDiv && (tmpNativeDiv = wrapperDiv.nextSibling) && tmpNativeDiv.classList && tmpNativeDiv.classList.contains("is-sponsored") && tmpNativeDiv.parentNode.removeChild(tmpNativeDiv), wrapperDiv.previousSibling.cloneNode(!0));(tmpNativeDiv = tmpNativeDiv.querySelector(".TrackedBannerPromo") ? document.querySelector(".Page-mainContent .List-items-row-item").cloneNode(!0) : tmpNativeDiv).classList.add("is-sponsored");tmpNativeDiv.querySelector(".Image") || ((cListItem = tmpNativeDiv.querySelector(".ListItem")).innerHTML = '<div class="ListItem-media"><img class="Image"></div>' + cListItem.innerHTML), tmpNativeDiv.querySelectorAll(".Image")[0].setAttribute("src", data.image), tmpNativeDiv.querySelectorAll(".Image")[0].setAttribute("data-src", data.image), tmpNativeDiv.querySelectorAll(".ListItem")[0].setAttribute("href", data.click);for (var sourceEle = tmpNativeDiv.querySelectorAll("source"), i = 0; i < sourceEle.length; i++) sourceEle[i].parentNode.removeChild(sourceEle[i]);var cListItem = tmpNativeDiv.querySelector(".ListItem-category"),
                  cListItem = (cListItem && (cListItem.innerHTML = "Sponsored"), tmpNativeDiv.querySelector(".ListItem-author")),
                  cListItem = (cListItem && (cListItem.innerHTML = ""), tmpNativeDiv.querySelector(".ListItem-date"));cListItem && (cListItem.innerHTML = ""), tmpNativeDiv.querySelectorAll(".ListItem-title")[0].innerHTML = data.headline, tmpNativeDiv.querySelectorAll(".ListItem-info")[0].innerHTML += '<div class="ListItem-logo"><img src="' + data.logo + '"/></div>', null !== wrapperDiv.nextSibling ? wrapperDiv.parentNode.insertBefore(tmpNativeDiv, wrapperDiv.nextSibling) : wrapperDiv.parentNode.appendChild(tmpNativeDiv), wrapperDiv.setAttribute("style", "position:absolute;margin-left:-10px;");
            } };
        }, initInviewRefresh: function (checkInterval) {
          var self = this;setInterval(function () {
            for (var currentTime = new Date().getTime(), adsReadyToRefresh = [], i = 0; i < ScrippsAdLib._processedAds.length; i++) {
              var a = ScrippsAdLib._processedAds[i];a.rendered && a.renderedData && -1 == a.config.divId.indexOf("MAD_NATIVE") && (a.ivTime && 3e4 <= currentTime - a.renderedData.time ? "MAD_INVIEW" !== a.config.divId && "MAD_RIGHT_RAIL" !== a.config.divId && 1 < a.renderedData.size.length && 5221840051 !== a.renderedData.lineItemId && adsReadyToRefresh.push(a) : a.renderedData.isEmpty && 3e4 <= currentTime - a.renderedData.time && adsReadyToRefresh.push(a));
            }if (0 < adsReadyToRefresh.length) {
              for (var scrollData = self.getScrollData(), adIdsToRefresh = [], j = 0; j < adsReadyToRefresh.length; j++) self.isInView(adsReadyToRefresh[j], scrollData) && adIdsToRefresh.push(adsReadyToRefresh[j].config.divId);window._ScrippsAdLib.refreshAds(adIdsToRefresh);
            }
          }, checkInterval);
        }, getScrollData: function () {
          return { scrollPosition: window.scrollY || document.documentElement.scrollTop, windowHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight };
        }, isInView: function (ad, sData) {
          if (sData = sData || !1, ad.rendered) {
            sData = sData || this.getScrollData();var adNode = document.getElementById(ad.config.divId);if (adNode) {
              var adPos,
                  adHeight = adNode.offsetHeight;if (adHeight && 0 <= adNode.offsetLeft) return adPos = (ad.topPosition || this.offset(adNode).top) + adHeight / 2, ad.config.other.isFixed ? 0 <= (adPos = adNode.getBoundingClientRect().top + adHeight / 2) && adPos <= sData.windowHeight : adPos > sData.scrollPosition && adPos < sData.scrollPosition + sData.windowHeight;
            }
          }return !1;
        }, offset: function (element) {
          var bodyRect = document.body.getBoundingClientRect(),
              element = element.getBoundingClientRect();return { top: element.top - bodyRect.top, left: element.left };
        }, addAdBodyClasses: function (eventData, adContainer, label) {
          eventData.isEmpty ? document.body.className += " ad--" + label + "-empty" : document.body.className += " ad--" + label + "-loaded ad--" + label + "-" + eventData.size.toString().replace(",", "x");
        }, getAdUnitZone: function () {
          return "";
        }, getPageType: function () {
          var m = document.querySelectorAll('meta[property="og:type"]')[0];return m ? m.getAttribute("content") : "default";
        }, getAllTargetingParams: function () {
          for (var targetingParams = {}, keys = Object.keys(AdTargetingParams), i = 0; i < keys.length; i++) {
            var k = keys[i];targetingParams[k] = AdTargetingParams[k]();
          }return targetingParams;
        }, targetingParamsFn: function () {
          return window.jsInitialBreakpoint || (window.jsInitialBreakpoint = ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint), { temp: DynamicTargetingParams.getWxTempVal(), weather: DynamicTargetingParams.getWxConditionVal(), device: window.jsInitialBreakpoint };
        }, getCurrentSizeBreakpoint: function () {
          return ScrippsAdLib.getCurrentSizeBreakpoint();
        }, handleAdInterventions: function () {}, getSetPPID: function () {
          if ("true" != window.ddls.enableAdPPID) return !1;if (ScrippsUtils.hasSessionStorageAccess() && window.sessionStorage) {
            var ppid = window.sessionStorage.getItem("ppid");if (ppid) return this.setPPID({ id: ppid }), !1;
          }ppid = document.createElement("script");ppid.src = "https://usr-service.herokuapp.com/usr?cb=ScrippsAdsLib.setPPID", ppid.async = !0, ppid.type = "text/javascript", document.head.appendChild(ppid);
        }, setPPID: function (data) {
          data && data.id && (ScrippsUtils.hasSessionStorageAccess() && window.sessionStorage && window.sessionStorage.setItem("ppid", data.id), window.googletag || (window.googletag = window.googletag || { cmd: [] }), window.googletag.cmd.push(function () {
            window.googletag.pubads().setPublisherProvidedId(data.id);
          }));
        } },
          ImageLazyLoad = (IS_CMS || -1 == window.location.search.indexOf("noads=1") && ScrippsAdsLib.init({ appId: window.callLetters }), IS_CMS || "true" === window.jsDisableDisplayAds || "true" == window.ddls.enableIntRefreshV2 || (ScrippsAdLib.subscribeEvent("impressionViewable", {}, function (eventData, adContainer) {
        enableInfiniteRefresh && "mobile" !== ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && ("MAD_RIGHT_RAIL" == adContainer.config.divId && (rightRailRefreshTimeout = setTimeout(function () {
          window._ScrippsAdLib.refreshAds(["MAD_RIGHT_RAIL"]);
        }, 3e4)), "MAD_INVIEW" == adContainer.config.divId) && (inviewRefreshTimeout = setTimeout(function () {
          window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
        }, 3e4));
      }), ScrippsAdLib.subscribeEvent("slotRenderEnded", {}, function (eventData, adContainer) {
        switch (AdDebugger.display("SLOT_RENDER", eventData, adContainer), eventData.isEmpty || (document.body.classList.remove("no-ad-request"), document.getElementById(adContainer.config.divId).classList.add("sal--loaded")), adContainer.config.divId) {case "MAD_HOMEPAGE_HEADER":case "MAD_HEADER":
            ScrippsAdsLib.addAdBodyClasses(eventData, adContainer, "header");break;case "MAD_RIGHT_RAIL":
            rightRailRefreshTimeout = null, ScrippsAdsLib.addAdBodyClasses(eventData, adContainer, "right-rail"), "mobile" !== ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && ((adDiv = document.getElementById("MAD_RIGHT_RAIL")).parentNode.classList.contains("sal--wrapper") && (adDiv = adDiv.parentNode), StickyRightRail.init(adDiv, document.querySelectorAll(".articleWrap, .left-column")[0]), !eventData.isEmpty && eventData.slot && (adDiv = eventData.slot.getHtml()) && -1 !== adDiv.indexOf("disablerefresh=true") && (rightRailRefresh = !0), enableInfiniteRefresh && eventData.isEmpty && (rightRailRefreshTimeout = setTimeout(function () {
              window._ScrippsAdLib.refreshAds(["MAD_RIGHT_RAIL"]);
            }, 3e4)), enableInfiniteRefresh || rightRailRefresh || (rightRailRefresh = !0, setTimeout(function () {
              window._ScrippsAdLib.refreshAds(["MAD_RIGHT_RAIL"]);
            }, 3e4), setTimeout(function () {
              window._ScrippsAdLib.refreshAds(["MAD_RIGHT_RAIL"]);
            }, 6e4)));break;case "MAD_INVIEW":
            var inviewDivId, adDiv;eventData.isEmpty || (inviewRefreshTimeout = null, "mobile" !== ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint ? enableInfiniteRefresh && "visible" === document.visibilityState || inviewRefresh || (inviewRefresh = !0, inviewRefreshTimeout = setTimeout(function () {
              window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
            }, 3e4), setTimeout(function () {
              window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
            }, 6e4)) : ((adDiv = document.querySelector(".cnsmbl-video-footer-mobile")) && adDiv.parentNode.removeChild(adDiv), inviewRefreshTimeout = setTimeout(function () {
              window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
            }, 3e4)), inviewDivId = adContainer.config.id || adContainer.config.divId, ScrippsAdsLib.addAdBodyClasses(eventData, adContainer, "inview"), (adDiv = document.createElement("div")).innerHTML = "close", adDiv.className = "MAD_INVIEW_CLOSE", document.getElementById(inviewDivId).appendChild(adDiv), setTimeout(function () {
              document.getElementById(inviewDivId).className += " show-background";
            }, 2e3), window._ScrippsAdLib.hideInview = function (opts) {
              opts = opts || { refresh: 90 }, document.getElementById(inviewDivId).style.display = "none", clearTimeout(inviewRefreshTimeout), inviewRefreshTimeout = setTimeout(function () {
                window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
              }, 1e3 * opts.refresh);
            }, window._ScrippsAdLib.closeInview = function (opts) {
              clearTimeout(inviewRefreshTimeout), window.googletag.destroySlots([eventData.slot]), document.body.classList.remove("ad--inview-loaded"), document.body.classList.add("ad--inview-closed");var adDiv = document.getElementById(adContainer.config.id);adDiv.parentNode.removeChild(adDiv);
            }, adDiv.onclick = function () {
              clearTimeout(inviewRefreshTimeout), window.googletag.destroySlots([eventData.slot]), document.body.classList.remove("ad--inview-loaded"), document.body.classList.add("ad--inview-closed");var adDiv = document.getElementById(inviewDivId);adDiv.parentNode.removeChild(adDiv);
            });}
      }), enableInfiniteRefresh && "desktop" === ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && window.document.addEventListener("visibilitychange", function () {
        "hidden" === document.visibilityState ? (clearTimeout(inviewRefreshTimeout), clearTimeout(rightRailRefreshTimeout)) : "visible" === document.visibilityState && (inviewRefreshTimeout = setTimeout(function () {
          window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
        }, 3e4), rightRailRefreshTimeout = setTimeout(function () {
          window._ScrippsAdLib.refreshAds(["MAD_RIGHT_RAIL"]);
        }, 3e4));
      })), IS_CMS || "true" === window.jsDisableDisplayAds || "true" != window.ddls.enableIntRefreshV2 || (fnCheckRefreshAd = function (ad, curDateTime) {
        var viewportHeight;"hidden" == document.visibilityState || 0 == ad.s_ivCount || ad.renderedData.size && 10 == ad.renderedData.size[0] && 1 == ad.renderedData.size[1] || "MAD_INVIEW" == ad.config.divId && disableInviewRefreshing || "MAD_RIGHT_RAIL" == ad.config.divId && disableRightRailRefreshing || !ad.renderedData || 0 == ad.renderedData.time || curDateTime - new Date(ad.renderedData.time) < 3e4 || ("MAD_INVIEW" == ad.config.divId || "MAD_RIGHT_RAIL" == ad.config.divId || ad.config.iNode && (curDateTime = (curDateTime = ad.config.iNode).getBoundingClientRect(), viewportHeight = window.innerHeight, 0 <= curDateTime.top && curDateTime.top <= viewportHeight / 2 || curDateTime.bottom >= viewportHeight / 2 && curDateTime.bottom <= viewportHeight)) && (window._ScrippsAdLib.refreshAds([ad.config.divId]), window.dataLayer && (window.dataLayer.push({ event: "GenericEvent", gaCategory: "Intelligent Refresh - Desktop", gaAction: "Refresh - " + ad.config.divId, gaLabel: ad.renderedData.advertiserId + " - " + ad.renderedData.lineItemId }), window.dataLayer.push({ event: "GenericEvent", gaCategory: "Intelligent Refresh - Desktop", gaAction: "Rendered Count - " + ad.config.divId + " " + ad.s_renderedCount, gaLabel: ad.renderedData.advertiserId + " - " + ad.renderedData.lineItemId })), ad.s_ivCount = 0, ad.renderedData.time = 0);
      }, "mobile" !== ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && setInterval(function () {
        for (var curDateTime = new Date(), i = 0; i < ScrippsAdLib._processedAds.length; i++) fnCheckRefreshAd(ScrippsAdLib._processedAds[i], curDateTime);
      }, 2e3), ScrippsAdLib.subscribeEvent("slotRenderEnded", {}, function (eventData, adContainer) {
        switch (AdDebugger.display("SLOT_RENDER", eventData, adContainer), eventData.isEmpty || (document.body.classList.remove("no-ad-request"), document.getElementById(adContainer.config.divId).classList.add("sal--loaded")), adContainer.config.divId) {case "MAD_HOMEPAGE_HEADER":case "MAD_HEADER":
            ScrippsAdsLib.addAdBodyClasses(eventData, adContainer, "header");break;case "MAD_RIGHT_RAIL":
            ScrippsAdsLib.addAdBodyClasses(eventData, adContainer, "right-rail"), "mobile" !== ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && ((adDiv = document.getElementById("MAD_RIGHT_RAIL")).parentNode.classList.contains("sal--wrapper") && (adDiv = adDiv.parentNode), StickyRightRail.init(adDiv, document.querySelectorAll(".articleWrap, .left-column")[0]), !eventData.isEmpty) && eventData.slot && (adDiv = eventData.slot.getHtml()) && -1 !== adDiv.indexOf("disablerefresh=true") && (disableRightRailRefreshing = !0, clearTimeout(adTimeouts.MAD_RIGHT_RAIL));break;case "MAD_INVIEW":
            var adDiv;eventData.isEmpty || (inviewRefreshTimeout = null, "mobile" === ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && ((adDiv = document.querySelector(".cnsmbl-video-footer-mobile")) && adDiv.parentNode.removeChild(adDiv), inviewRefreshTimeout = setTimeout(function () {
              window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
            }, 3e4)), ScrippsAdsLib.addAdBodyClasses(eventData, adContainer, "inview"), (adDiv = document.createElement("div")).innerHTML = "close", adDiv.className = "MAD_INVIEW_CLOSE", document.getElementById(adContainer.config.id).appendChild(adDiv), setTimeout(function () {
              document.getElementById(adContainer.config.id).className += " show-background";
            }, 2e3), window._ScrippsAdLib.hideInview = function (opts) {
              opts = opts || { refresh: 90 }, document.getElementById(adContainer.config.id).style.display = "none", disableInviewRefreshing = !0, clearTimeout(adTimeouts.MAD_INVIEW), setTimeout(function () {
                window._ScrippsAdLib.refreshAds(["MAD_INVIEW"]);
              }, 1e3 * opts.refresh);
            }, window._ScrippsAdLib.closeInview = function (opts) {
              clearTimeout(inviewRefreshTimeout), window.googletag.destroySlots([eventData.slot]), document.body.classList.remove("ad--inview-loaded"), document.body.classList.add("ad--inview-closed");var adDiv = document.getElementById(adContainer.config.id);adDiv.parentNode.removeChild(adDiv), disableInviewRefreshing = !0, clearTimeout(adTimeouts.MAD_INVIEW);
            }, adDiv.onclick = function () {
              clearTimeout(inviewRefreshTimeout), window.googletag.destroySlots([eventData.slot]), document.body.classList.remove("ad--inview-loaded"), document.body.classList.add("ad--inview-closed");var adDiv = document.getElementById(adContainer.config.id);adDiv.parentNode.removeChild(adDiv), disableInviewRefreshing = !0, clearTimeout(adTimeouts.MAD_INVIEW);
            });break;case "MAD_INVIEW_2":
            var madInview2;eventData.isEmpty || ((madInview2 = document.getElementById("MAD_INVIEW_2")).classList.add("slide-down"), setTimeout(function () {
              madInview2.classList.remove("slide-down"), 0;
            }, 5e3));}enableInfiniteRefresh && eventData.isEmpty && (adTimeouts[adContainer.config.divId] = setTimeout(function () {
          window._ScrippsAdLib.refreshAds([adContainer.config.divId]);
        }, 15e3));
      }), enableInfiniteRefresh && "desktop" === ScrippsAdLib.getCurrentSizeBreakpoint().breakpoint && window.document.addEventListener("visibilitychange", function () {
        if ("hidden" === document.visibilityState) for (var keys = Object.keys(adTimeouts), i = 0; i < keys.length; i++) clearTimeout(adTimeouts[keys[i]]);else if ("visible" === document.visibilityState) for (keys = Object.keys(adTimeouts), i = 0; i < keys.length; i++) clearTimeout(adTimeouts[keys[i]]), adTimeouts[keys[i]] = setTimeout(function () {
          window._ScrippsAdLib.refreshAds([keys[i]]);
        }, 3e4);
      }), "true" == window.ddls.enableTopAdhesionAd && (topAdhesionRequested = !1, window.MutationObserver) && (url = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
          "class" === mutation.attributeName && ((mutation = mutation.target).classList.contains("action") ? topAdhesionRequested || (topAdhesionRequested = !0, window._ScrippsAdLib.createAd.push({ s: "320x50", p: "above", d: "mobile", i: "append", is: "body:not(.no-adhesion)", ll: "false", id: "MAD_INVIEW_2" })) : mutation.classList.contains("action") || (mutation = document.getElementById("MAD_INVIEW_2")) && mutation.classList.remove("slide-down"));
        });
      }), name = document.getElementById("scroll-follow"), url.observe(name, { attributes: !0 })), (url = document.createElement("style")).textContent = `
  #MAD_INVIEW_2{transition: top 0.5s ease-in-out;position:fixed;z-index:999;width:100%;text-align:center;background:#fff;padding-bottom: 5px;top:-85px}
  #MAD_INVIEW_2.slide-down{top: 48px;}
  `, document.head.appendChild(url)), { init: function (c) {
          this.check();var sTimeout = !1;window.addEventListener("scroll", function () {
            clearTimeout(sTimeout), sTimeout = setTimeout(function () {
              ImageLazyLoad.check();
            }, 10);
          });
        }, check: function () {
          for (var scrollPosition = window.scrollY || document.documentElement.scrollTop, llImgs = document.querySelectorAll(".ImageLazyLoadContainer"), i = 0; i < llImgs.length; i++) {
            var lImg = llImgs[i];this.shouldLoad(scrollPosition, lImg) && (lImg.classList.remove("ImageLoading"), (lImg = lImg.querySelector("img")).src = lImg.dataset.src);
          }
        }, shouldLoad: function (scrollPosition, img) {
          var windowHeight = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight,
              threshold = windowHeight;return this.offsetTop(img) - threshold <= scrollPosition + windowHeight;
        }, offsetTop: function (element) {
          var bodyRect = document.body.getBoundingClientRect();return element.getBoundingClientRect().top - bodyRect.top;
        } });ScrippsUtils.domReady(function () {
        ImageLazyLoad.init();
      });
    }();
  })(this);

  return _retrieveGlobal();
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});