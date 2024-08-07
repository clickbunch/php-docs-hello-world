//Version: Tue Aug 01 2023 10:43:49 GMT-0300. Environment: juvederm. Type: batd

(function () {
    var tlMain;
    var gdelay=0;

    var start = new Date().getTime();

    function initAnimation() {

        //Timeline Begin
        tlMain = new TimelineMax();
        tlMain.add("init", "+=0");
        tlMain.set("#container", {autoAlpha:1}, "init");
        tlMain.set("#background", {autoAlpha:1}, "init");
        tlMain.set("#cta_container3", {autoAlpha:0}, "init");
        tlMain.set("#cta_text3", {autoAlpha:0}, "init");
        tlMain.to("#loading",0.2, {autoAlpha:0}, "init");

        tlMain.add("lastFrame", 15);

        gdelay=0;
        tlMain.add("frame1", "+=0");
        tlMain.from("#f1_logo", 0.7, {autoAlpha:0, ease: Power1.easeOut,delay: gdelay}, "frame1");
       
        gdelay=0;
        tlMain.add("frame2", "+=1.5");
        tlMain.to("#f1_logo", 0.7, {autoAlpha:0, ease: Power1.easeOut,delay: gdelay}, "frame2");
        tlMain.to("#cta_container1", 0.5, {y:7, ease: Power1.easeOut, delay: gdelay}, "frame2");
        tlMain.to("#cta_text1", 0.5, {y:7, ease: Power1.easeOut, delay: gdelay}, "frame2");
        tlMain.to("#cta_container3", 0.5, {y:7, ease: Power1.easeOut, delay: gdelay}, "frame2");
        tlMain.to("#cta_text3", 0.5, {y:7, ease: Power1.easeOut, delay: gdelay}, "frame2");
        tlMain.from("#logo", 0.7, {autoAlpha:0, ease: Power1.easeOut,delay: gdelay}, "frame2");
        tlMain.from("#disclaimer", 0.7, {autoAlpha:0, ease: Power1.easeOut,delay: gdelay}, "frame2");
        gdelay=gdelay+0.5;
        tlMain.from("#f2_text1", 0.5, {autoAlpha:0, y:5,ease: Power1.easeOut,delay: gdelay}, "frame2");
        gdelay=gdelay+0.3;
        tlMain.from("#f2_text2", 0.5, {autoAlpha:0, y:5,ease: Power1.easeOut,delay: gdelay}, "frame2");
        gdelay=gdelay+0.3;

        gdelay=0;
        tlMain.add("frame3", "+=2");
        tlMain.to("#f2_text1", 0.7, {autoAlpha:0, ease: Power1.easeOut,delay: gdelay}, "frame3");
        tlMain.to("#f2_text2", 0.7, {autoAlpha:0, ease: Power1.easeOut,delay: gdelay}, "frame3");
        tlMain.to("#disclaimer", 0.7, {autoAlpha:0, ease: Power1.easeOut,delay: gdelay}, "frame3");
        gdelay=gdelay+0.2;
		tlMain.from("#f3_text1", 0.5, {autoAlpha:0, y:5,ease: Power1.easeOut,delay: gdelay}, "frame3");
        gdelay=gdelay+0.3;
		tlMain.from("#f3_text2", 0.5, {autoAlpha:0, y:5,ease: Power1.easeOut,delay: gdelay, onComplete: scrollIsi}, "frame3");
        gdelay=gdelay+0.3;

        tlMain.addPause("lastFrame");

    }

    function scrollIsi() {
        var tlScrollingIsi = new TimelineMax();
        tlScrollingIsi.add("scrollIsi", "+=5.4");
        tlScrollingIsi.to("#isi_text_area", 80, {scrollTo:{y:1400}, rotation:0, force3D:true, ease:Power0.easeIn}, "scrollIsi");
    }


    function overScrollIsi(e) {
        TweenMax.killTweensOf("#isi_text_area");
    }

    isiText = document.getElementById("isi_text_area");
    isiText.addEventListener('mouseover', overScrollIsi);

    function loadScript(url, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }

    // Exit Button
    exitBtn = document.getElementById("exitBtn");
    exitBtn.addEventListener('click', click);

    function click(e) {
        window.open(window.clickTag, "_blank");
    }

    exitBtn.addEventListener('mouseover', over);
    exitBtn.addEventListener('mouseout', out);

      function over(e) {
        TweenMax.fromTo("#cta_container1", 0.5, {autoAlpha:1},{autoAlpha:0});
        TweenMax.fromTo("#cta_text1", 0.5, {autoAlpha:1},{autoAlpha:0});
        TweenMax.fromTo("#cta_container3", 0.5, {autoAlpha:0},{autoAlpha:1});
        TweenMax.fromTo("#cta_text3", 0.5, {autoAlpha:0},{autoAlpha:1});
    }

    function out(e) {
        TweenMax.fromTo("#cta_container1", 0.5, {autoAlpha:0},{autoAlpha:1});
        TweenMax.fromTo("#cta_text1", 0.5, {autoAlpha:0},{autoAlpha:1});
        TweenMax.fromTo("#cta_container3", 0.5, {autoAlpha:1},{autoAlpha:0});
        TweenMax.fromTo("#cta_text3", 0.5, {autoAlpha:1},{autoAlpha:0});
    }

    // init scriptload
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js");
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", initAnimation);
    // end scriptload

})();
