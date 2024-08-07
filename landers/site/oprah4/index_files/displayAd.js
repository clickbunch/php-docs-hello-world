(function(){var jk=function(a,b){a.ready&&(a.Jg.obBridgeExposureChanged||(a.Jg.obBridgeExposureChanged=[]),a.Jg.obBridgeExposureChanged.push(b))},kk=function(a){a.Cp.register("open",b=>{if(!a.state.Tu&&b.se){OBR.controller.uf({link:a.Qe,VI:!1});var c=document.createElement("a");c.setAttribute("href",b.se);OBR.controller.uy(c,new MouseEvent("click"),"paid-rec");a.state.Tu=!0}})},lk=function(a){a.Cp.register("unload",()=>{a.j.A({zc:!0}).style.display="none"})};var mk=class{constructor(a,b){this.cM=a;this.id=b;this.Zg={};window.addEventListener("message",c=>{this.handleEvent(c)})}register(a,b){this.Zg[a]||(this.Zg[a]=[]);this.Zg[a].push(b)}handleEvent(a){if(("https://widgets.outbrain.com"===a.origin||"null"===a.origin)&&a.data&&a.data.id&&a.data.cmd){a=a.data;var b=a.cmd,c=a.id,d=a.payload;this.Zg[b]&&this.Zg[b].forEach(e=>e({ON:b,id:c,se:d}))}}};var nk=class{constructor(a,b,c,d){this.j=a;this.Gc=b;this.Cp=new mk(b.contentWindow,c);this.Qe=d;this.state={Tu:!1};this.VB=OBR._jsc.Oj}B(){kk(this);lk(this);jk(this.VB,a=>{var b=a.detail;a=b.visibleFrom;var c=b.visibleTo;OBR._jsc.Be(a)&&OBR._jsc.Be(c)&&(b=a/window.devicePixelRatio,c/=window.devicePixelRatio,a=this.Gc.getBoundingClientRect(),b=Math.max(a.y,b),b={x:a.x,y:b,width:a.width,height:Math.min(a.bottom,c)-b},c=this.Cp,c.cM.postMessage({cmd:"exposureChange",payload:[0===a.width||0===a.height?
0:100*b.width*b.height/(a.width*a.height),b],id:c.id},"*"))})}};OBR.gt||function(){class a{B(b){try{if(b){this.j=b;OBR.ya.Yb(b,{Qm:!0});var c=b.A();if(c){b.$c()&&this.UM(c);var d=b.BH(),e=OBR.g.I(c).querySelector(".display-frame");if(e||d){var f=b.hc("display",null);if(f||f.html){var g=OBR.g.I(c).querySelector(".ob-display-wrapper"),k=g&&g.getAttribute("data-oburl");if(d)this.kG(b,c,f,k);else{var l=`ob-display-${Date.now()}`;e.setAttribute("id",l);var q=b.lH(),h=this.pJ(f.html,l,q);e.setAttribute("srcdoc",h);var m=b.l("allowSameOrigin",!1),p,r,t,u=b.l("forceAllowTopNavigation",
!1)||(null==(p=b.U)?void 0:null==(r=p.call(b))?void 0:null==(t=r.l)?void 0:t.call(r,"shouldEnableBridgeDisplay",!0))&&!0===OBR.i.Ka;if(m||u){const v=e.getAttribute("sandbox"),x=v?v.split(" "):[];m&&x.push("allow-same-origin");u&&x.push("allow-top-navigation");e.setAttribute("sandbox",x.join(" "));const A=e.parentElement;A.style.height=`${f.height}px`;document.createDocumentFragment().appendChild(e);A.appendChild(e)}q&&(this.sI=new nk(b,e,l,k),this.sI.B())}}else OBR.error({name:"DisplayControllerError",
message:"No display data was sent by renderer"})}}}}catch(v){OBR.error({name:"DisplayControllerError",message:v})}}kG(b,c,d,e){const f=`ob-sf-${b.F()}-${b.H()}`;(b=OBR.g.I(c).querySelector(".ob-display-frame-target"))?(b.setAttribute("id",f),!0!==OBR.i.Cv.getValue()?this.uG(()=>{setTimeout(()=>{this.px(f,d,e)},0)}):this.px(f,d,e)):OBR.error({name:"DisplayControllerError",message:"safe frame target frame cannot be found"})}uG(b){void 0===window.$sf&&(b=OBR.g.Xa(0,"https://widgets.outbrain.com/safeframe/top.js",
!0,!1,b,null),OBR.g.Qb(b));OBR.i.Cv.Gk(!0)}px(b,c,d){if("undefined"===typeof $sf&&void 0===window.$sf)OBR.error({name:"DisplayControllerError",message:"safe frame failed to load"});else{$sf.host.Config()||new $sf.host.Config({renderFile:"https://widgets.outbrain.com/safeframe/r.html",positions:{}});new $sf.host.PosConfig({id:b,w:c.width,h:c.height,dest:b,supports:{"exp-ovr":!1,"exp-push":!1,"read-cookie":!1,"write-cookie":!1}});var e=null;d&&(e=new $sf.host.PosMeta({Qe:d},"ob"));b=new $sf.host.Position(b,
c.html,e);$sf.host.render(b)}}UM(b){const c=b.querySelector(".ob-widget");if(!b.shadowRoot&&c&&b.attachShadow){const d=this.j.$i(),e=this.j.Og();OBR.g.attachShadow(b,c,{mode:"open"},d,e)}}ZE(b){const c=OBR._jsc.Oj.Kw;return`<base href="${"https://widgets.outbrain.com"}" />
          <script>
            window.OB_ID = '${b}';
            window.MRAID_ENV = {
            version: '${"3.0"}',
            sdk: 'Outbrain',
            sdkVersion: '${c.uK}',
            appId: '${c.KB}',
            ifa: '${c.Uf}',
            limitAdTracking: ${null===c.Uf},
            coppa: false
            }
          </script>`}pJ(b,c,d){return`<div>${d?this.ZE(c):""}<div id="displayContent">$ORIGINAL_HTML</div>
              <script>
                window.onload = function() {
                  setTimeout(function() {
                    const css = '$RESET_CSS';
                    const styleElement = document.createElement('style');
                    const head = document.getElementsByTagName('head');
                    styleElement.setAttribute('id', 'ob-css-reset');
                    styleElement.appendChild(document.createTextNode(css));
                    head[0].appendChild(styleElement);
                  }, 0);
               };
              </script>
            </div>`.replace("$RESET_CSS","html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}").replace("$ORIGINAL_HTML",
b)}}OBR.gt=new a;OBR.s.V(OBR.s.v.ql)}();}).call(window);
