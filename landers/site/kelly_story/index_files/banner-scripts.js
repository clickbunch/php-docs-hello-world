let tl;
let imagesArray = "bg.png,decor-left.png,decor-right.png,device.png,f1-txt.png,f2-txt.png,f3-txt.png,f4-txt.png,f5-txt.png,cta.png".split(',');

document.addEventListener('DOMContentLoaded', (e) => {
    window.onload = ()=> checkInitLoadScripts();
});

const checkInitLoadScripts = ()=> {
    window.ScrollToPlugin && window.OverlayScrollbars
        ? init()
        : setTimeout(checkInitLoadScripts, 50);
}

const init = ()=> {
    fileLoader(['./css/styles.css']);
    clickTagLoader();
    setTimeout(startAnimation, 1000);
}

const fileLoader = (list) => {
    list.forEach((path)=>{
        const extension = path.split('.').pop()
    
        let file;
        if (extension === 'js') {
            file = document.createElement('script');
            file.setAttribute('type', 'text/javascript');
            file.setAttribute('src', path);
        } else if (extension === 'css') {
            file = document.createElement('link');
            file.setAttribute('rel', 'stylesheet');
            file.setAttribute('href', path);
        }
        document.querySelector('head').appendChild(file);
    })
}

const clickTagLoader = () => {
    const exitTriggers = document.querySelectorAll('[data-exit]');

    const clickTagHandler = (e)=> {
        e.preventDefault();
        let clickTag = e.target.getAttribute('data-exit');
        window.open(window[clickTag]);
    }
    exitTriggers.forEach( item => item.addEventListener('click', clickTagHandler) )
}

const ISI = (selector, autoScrollSpeed, autoScrollDelay) => {
    let isi = {};
    isi.bannerWrapper = document.querySelector('#banner-wrapper');
    isi.isiContainer = document.querySelector(selector);

    isi.scrollObject = OverlayScrollbars(
        isi.isiContainer.querySelector('.isi-copy-wrapper .isi-copy'), {
            className: 'custom-isi',
            sizeAutoCapable: false,
            overflowBehavior: { x: 'hidden', y: 'scroll'},
            callbacks: {
                onScrollStart: null,
                onScroll: null,
                onScrollStop: null,
            },
        }
    );

    isi.autoScrollTimeline = gsap.timeline();
    isi.scrollAuxiliaryTimeline = gsap.timeline();

    isi.autoScrollSpeed = autoScrollSpeed;
    isi.autoScrollDuration = isi.autoScrollDistance / isi.autoScrollSpeed;
    isi.autoScrollDelay = autoScrollDelay;

    isi.autoScroll = function () {
        isi.scrollObject.scroll({ y: '0%' }, 0, { y: 'linear' });

        isi.autoScrollTimeline.to(
            selector + ' .os-viewport',
            isi.autoScrollDuration,
            {
                scrollTo: {y: isi.autoScrollDistance, autoKill: true},
                ease: Power0.easeNone,
            }
        );
    };

    isi.delayedAutoScroll = function () {
        let delay = (isi.autoScrollDelay >= 0) ? isi.autoScrollDelay * 1000 : 0;
        console.log(delay)
        setTimeout(isi.autoScroll, delay)
    };

    isi.autoScrollDelay === 0 ? isi.delayedAutoScroll() : null;

    isi.scrollStop = function () {
        isi.scrollAuxiliaryTimeline.kill();
    };

    return isi;
}
const onHover = (type,selector) => {
    let elem = selector || '#cta';
    let dict = {
        grow   : {scale:1.05},
        shrink : {scale: 0.95},
        arrow  : {x: 5},
        opacity: {opacity: 0},
        pulse  : {scale:1.1,repeat:3,yoyo:true,duration:0.1},
        reset  : {x:0,y:0,xPercent:0,yPercent:0,scale:1,rotation:0,opacity:1}
    }
    let anim = dict[type] || dict.grow;
    let hover = gsap.timeline({duration:0.3,ease:"power2.out"}); 
    let clickarea = document.querySelector('.exit-trigger');
    clickarea.addEventListener('mouseover',function(evt){
        hover.to(elem, anim);
    },false);
    clickarea.addEventListener('mouseout',function(evt){
        hover.to(elem, dict.reset);
    },false);
}
const startAnimation = ()=> {
    gsap.set('#banner-wrapper', { visibility: 'visible' });
    
/* 🎛️ SET THE ELEMENTS BEFORE ANIMATING */
gsap.set("#f2-txt,#f3-txt", {"opacity":0});
gsap.set("#mask", {"opacity":0, yPercent:-36});
gsap.set("#f3-img", {"opacity":0});
gsap.set("#logo-blue", {"opacity":0, scale: 0.9,yPercent: 5});
gsap.set("#cta", {opacity:0,yPercent:3,transformOrigin: "150px 225px"});
/* 🎞️ CREATE THE TIMELINE */
tl = gsap.timeline();
    tl
    .addLabel("FRAME1_ENTER", 0)
    .addLabel("FRAME1_EXIT", "FRAME1_ENTER+=1")
    .addLabel("FRAME2_ENTER", "FRAME1_EXIT+=0.5")
    .addLabel("FRAME2_EXIT", "FRAME2_ENTER+=4")
    .addLabel("FRAME3_ENTER", "FRAME2_EXIT+=0.5")
    .addLabel("FRAME3_EXIT", "FRAME3_ENTER+=3")
    .addLabel("FRAME4_ENTER", "FRAME3_EXIT+=0.5")
    .addLabel("FRAME4_EXIT", "FRAME4_ENTER+=3")
    .addLabel("FRAME5_ENTER", "FRAME4_EXIT+=0.5")
    .addLabel("FRAME5_EXIT", "FRAME5_ENTER+=3")
    .addLabel("FRAME6_ENTER", "FRAME5_EXIT+=0.5")
/* 🎬 PLAY ANIMATION */
    .to("#logo", 1, {scale:12,transformOrigin: "150px 128px",ease: "power3.in"}, "FRAME1_ENTER+=0.5")
    .to("#f2-txt", 0.75, {"opacity":1,ease: "power3.in"}, "FRAME2_ENTER")
    .to("#logo-blue", 0.75, {"opacity":1,scale:1,ease: "ease",yPercent: 0}, "FRAME2_ENTER+=0.75")
    .to("#f3-img,#mask", 0, {"opacity":1}, "FRAME2_ENTER+=1.5")
    .to("#logo", 0, {"opacity":0}, "FRAME2_ENTER+=1.5")
    .to("#f2-txt", {"opacity":0,ease: "power3.out"}, "FRAME2_EXIT")
    .to("#f3-txt", 0.75, {"opacity":1,ease: "power3.in"}, "FRAME3_ENTER")
    .to("#f3-txt", {"opacity":0,ease: "power3.out"}, "FRAME3_EXIT")
    .to("#mask", 0.65,{yPercent:0,ease: "linear"}, "FRAME4_ENTER")
    .to("#cta", 0.65,{opacity: 1,yPercent:0,ease: "sine.out"}, "FRAME4_ENTER+=0.75")
/* 🎚️ ROUND UP TO 15 seconds */
    //.duration(15);
    .call(function(){onHover('grow')});
    console.log('Animation duration: ' + tl.totalDuration());
}