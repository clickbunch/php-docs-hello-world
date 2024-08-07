function init(){
	var mainTL;
	const width = 300;
	const height = 600;
	let timeline;
	let logo_EFx;
	let logo_EFy;
	const creative = myFT.instantAds.creative.toLowerCase();

	IDsToVars();

	// POPULATE IMAGES
	insertImage(logo, myFT.instantAds.logo, myFT.instantAds.logo_style, true);
	insertImage(bg, myFT.instantAds.bg, myFT.instantAds.bg_style, true);

	// POPULATE COPY( and their styling if declared in manifest.js )
	insertCopy(f1_copy, myFT.instantAds.f1_copy, myFT.instantAds.f1_copy_style);
	insertCopy(f2_copy, myFT.instantAds.f2_copy, myFT.instantAds.f2_copy_style);
	insertCopy(f3_copy, myFT.instantAds.f3_copy, myFT.instantAds.f3_copy_style);
	insertCopy(ef_copy, myFT.instantAds.ef_copy, myFT.instantAds.ef_copy_style);
	insertCopy(ef_sub_copy, myFT.instantAds.ef_sub_copy, myFT.instantAds.ef_sub_copy_style);
	insertCopy(legal, myFT.instantAds.legal, myFT.instantAds.legal_style);
	insertCopy(ctaCopy, myFT.instantAds.ctaCopy, myFT.instantAds.ctaCopy_style);

	insertCopy(offer_sideBar, myFT.instantAds.offer_sideBar, myFT.instantAds.offer_sideBar_style);
	insertCopy(offer_title, myFT.instantAds.offer_title, myFT.instantAds.offer_title_style);
	insertCopy(offer_dollarSign, myFT.instantAds.offer_dollarSign, myFT.instantAds.offer_dollarSign_style);
	insertCopy(offer_price, myFT.instantAds.offer_price, myFT.instantAds.offer_price_style);
	insertCopy(offer_cents, myFT.instantAds.offer_cents, myFT.instantAds.offer_cents_style);
	insertCopy(offer_terms, myFT.instantAds.offer_terms, myFT.instantAds.offer_terms_style);
	
	wrapper.className = 'show';
	initClickTag();

	myFT.on("load", function(){
		initAnimation();
		startAnimation();
		fireReportingEvent();
	});

	function initAnimation() {	
		mainTL = gsap.timeline();

    	mainTL.pause();
		if (creative === 'option1_3frame') {
    		build_opt1_3_frame_offer();
    	}
		if (creative === 'option1_4frame') {
    		build_opt1_4_frame_offer();
    	}
		if (creative === 'option2') {
    		build_opt2_offer();
    	}
    };

		 //Build Timeline
    ///Opt1 3 frame
    function build_opt1_3_frame_offer() {
        mainTL
        .add(main_anim())
        .add(endframe(), "-=.25")
		.add(offer(), "-=0.75");

    };
	///Opt1 4 frame
    function build_opt1_4_frame_offer() {
        mainTL
        .add(main_anim())
		.add(frame_3(), "-=.25")
		.add(endframe(), "-=.25")
		.add(offer(), "-=0.75");

    };
	///Opt2
    function build_opt2_offer() {
        mainTL
        .add(main_anim())
		.add(offer(), "-=5.75")
		.add(endframe(), "-=.25");


    };
	
	function main_anim() {
		gsap.set([f1_copy, f2_copy, f3_copy, ef_copy, ef_sub_copy, offer_title, offer_dollarSign, offer_price, offer_terms, ctaBox, legal, logo], {alpha:0});
		gsap.set([f1_copy, f2_copy, f3_copy], {y:"+=10"});
		gsap.set([ef_copy, ef_sub_copy], {x:"-=10"});
		gsap.set([offer_title, offer_dollarSign, offer_price, offer_cents, offer_terms], {x:"+=20"})
		gsap.set(logo, {transformOrigin:"0% 50%"});



		mainTL.add([

			// frame1
			gsap.to(logo, .6, {alpha:1, ease:Cubic.easeInOut}),
			gsap.to(f1_copy, .6, {y:"-=10", alpha:1, ease:Cubic.easeInOut}),
			
			// frame2
			gsap.to(f1_copy, .6, {y:"-=10", alpha:0, ease:Cubic.easeInOut, delay:2.5}),
			gsap.to(f2_copy, .6, {y:"-=10", alpha:1, ease:Cubic.easeInOut, delay:2.7}),

			gsap.to(f2_copy, .5, {y:"-=10", alpha:0, ease:Cubic.easeInOut, delay:5.4}),
			
		])
	};
	function offer() {
		const tl = gsap.timeline();
		tl
			.add('of', "+=0") 
			.to([offer_title, offer_dollarSign, offer_price, offer_terms], .6, {x:"-=20", alpha:1}, "0f+=.0")

		return tl;
	};

	function frame_3() {
		const tl = gsap.timeline();
		tl
			.add('f3', "+=0") 
			.to(f3_copy, .5, {y:"-=10", alpha:1, ease:Cubic.easeInOut}, "f3+=.0")
			.to(f3_copy, .6, {y:"-=10", alpha:0, ease:Cubic.easeInOut}, "f3+=2.5")
			return tl;
	};

	function endframe() {
		const tl = gsap.timeline();
		tl
			.add('ef', "+=0") 
			.to(ef_copy, .6, {x:"+=10", alpha:1, ease:Cubic.easeInOut}, "ef+=.0")
			.to(logo, .6, {x:logo_EFx, y:logo_EFy, ease:Cubic.easeInOut}, "ef+=.0")
			.to(ef_sub_copy, .6, {x:"+=10", alpha:1, ease:Cubic.easeInOut}, "ef+=.2")
			//.to([offer_title, offer_dollarSign, offer_price, offer_terms], .6, {x:"-=20", alpha:1}, "ef+=.2")
			
			.to(ctaBox, .6, {alpha:1, ease:Cubic.easeInOut}, "ef+=.2")
			.to(legal, .6, {alpha:1, ease:Cubic.easeInOut}, "ef+=.4")
		return tl;
	};

	function IDsToVars(){
		let allElements = document.getElementsByTagName("*");

		for (let q = 0; q<allElements.length; q++){
			let el = allElements[q];
			if (el.id){
				window[el.id]=document.getElementById(el.id);
				el.style.position = "absolute";
				
			}
		}
	};

	function initClickTag () {

		myFT.applyClickTag(wrapper, 1);

		// wrapper.onmouseover = function(){
		// 	if(endFrameReached === true){
		// 		TweenMax.to(ctaOver, .1, {alpha:1});
		// 	}
		// };

		// wrapper.onmouseout = function(){
		// 	TweenMax.to(ctaOver, .1, {alpha:0});
		// }

	};

	function insertCopy(_target, _copy, _style){

		let _breakStr = _style.split(',');
		let _len = _breakStr.length;

		_target.innerHTML = _copy;

		let _styleValue;

		for(let i = 0; i < _len; i ++){

			let _a;

			if(_target === ctaCopy){

				if(_breakStr[i].search('posX:') > -1){

					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.left = _styleValue + 'px';
					TweenMax.set(_target, {x:parseInt(_styleValue)});
					// TweenMax.set(gleamHolder, {x:parseInt(_styleValue)});

				}else if(_breakStr[i].search('posY:') > -1){
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.top = _styleValue + 'px';
					TweenMax.set(_target, {y:parseInt(_styleValue)});
					// TweenMax.set(gleamHolder, {y:parseInt(_styleValue)});
					
				
				}

			}else{

				if(_breakStr[i].search('posX:') > -1){

					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.left = _styleValue + 'px';
					TweenMax.set([_target], {x:parseInt(_styleValue)});
					

				}else if(_breakStr[i].search('posY:') > -1){
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.top = _styleValue + 'px';
					TweenMax.set(_target, {y:parseInt(_styleValue)})
				
				}

			}

			if(_breakStr[i].search('fontSize:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.fontSize = _styleValue + "px";
			
			}else if(_breakStr[i].search('lineHeight:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.lineHeight = _styleValue + "px";
			
			}else if(_breakStr[i].search('width:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.width = _styleValue + 'px';
			
			}else if(_breakStr[i].search('height:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.height = _styleValue + 'px';
			
			}else if(_breakStr[i].search('fontColor:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.color = _styleValue;
			
			}else if(_breakStr[i].search('shadow:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.textShadow = _styleValue;
			
			}else if(_breakStr[i].search('bgColor:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.backgroundColor = _styleValue;
			
			}else if(_breakStr[i].search('letterSpacing') > -1){

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.letterSpacing = _styleValue + 'px';

			}else if(_breakStr[i].search('textAlign') > -1){

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.textAlign = _styleValue;

			}else if(_breakStr[i].search('fontFamily') > -1){
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.fontFamily = _styleValue;
			
			}else if(_breakStr[i].search('borderRadius') > -1){
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.borderRadius = _styleValue + 'px';
			}

		}

	}

	function insertImage(_target, _img, _imgStyle, _isBackground){
		if(_isBackground === true){
			_target.style.backgroundSize = 'contain';
			_target.style.backgroundImage = "url('" + _img + "')";
		}else{
			_target.innerHTML = '<img src="' + _img + '" />';
		}

		let _img_breakStr = _imgStyle.split(',');
		let _img_len = _img_breakStr.length;

		let _img_styleValue;

		for(let i = 0; i < _img_len; i ++){
console.log(_img_breakStr[i]);
			let _a;

			if(_img_breakStr[i].search('scale:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {scale:_img_styleValue});
				
			}else if(_img_breakStr[i].search('EFposX:') > -1){
				_a = _img_breakStr[i].indexOf(':');
				logo_EFx = _img_breakStr[i].slice(_a + 1);
				console.log(logo_EFx);
				
			}else if(_img_breakStr[i].search('EFposY:') > -1){
				_a = _img_breakStr[i].indexOf(':');
				logo_EFy = _img_breakStr[i].slice(_a + 1);
				console.log(logo_EFy);
				
			}else if(_img_breakStr[i].search('posX:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {x:_img_styleValue});
				
			}else if(_img_breakStr[i].search('posY:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {y:_img_styleValue});

			}else if(_img_breakStr[i].search('width:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {width:_img_styleValue});

			}else if(_img_breakStr[i].search('height:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {height:_img_styleValue});

			}

		}
			
	}

	function insertSVG(_target, _img){
		_target.innerHTML = '<object id="' + _target.id +'" data="' + _img +  '" type="image/svg+xml"></object>';
	}

	function startAnimation(){
		// Code for animation		
		mainTL.play();
	};

	function onAnimationComplete(){
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );
		endFrameReached = true;
	};

	function fireReportingEvent() {
        let reportingDimensions = [
            myFT.instantAds.offerPrice_reporting,
            myFT.instantAds.cta_reporting,
            myFT.instantAds.offer_reporting,
        ];
        let trimmedReportingDimensions = reportingDimensions.map((s) => s.trim());
        let validReportingDimension = trimmedReportingDimensions.every(
            (s) => s.length > 0
        );
        let reportingLabel = trimmedReportingDimensions.join("_");
        if (validReportingDimension) {
            Tracker.impressionTrackEvent(reportingLabel);
        }
        // For QA and Dev
        if (inPreviewENV) {
            logToConsole(validReportingDimension, reportingLabel, reportingDimensions)
        }
    }

    function logToConsole(valid, label, dimensions) {
        if (valid) {
            console.log("Fired FT Product and Valid Reporting Label: "+ label);
            console.table({"FT_product": {"Offer Price": dimensions[0], "CTA": dimensions[1], "Offer Type": dimensions[2]}})
        } else {
            console.warn("Did not fire FT Product and Invalid Reporting Lable: " + label)
            console.table({"FT_product": {"Offer Price": dimensions[0], "CTA": dimensions[1], "Offer Type": dimensions[2]}})
        }
    }

    function inPreviewENV() {
        if (window.document.referrer.includes("creativepreview.flashtalking.net") 
            || window.parent.document.referrer.includes("creativepreview.flashtalking.net") 
            || document.location.hostname == ''
            || document.location.hostname == 'localhost'
            || document.location.hostname == '127.0.0.1') {
            return true
        } else {
            return false
        }
    }

	

}