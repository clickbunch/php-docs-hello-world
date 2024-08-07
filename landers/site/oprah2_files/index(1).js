function init(){

	const width = 160;
	const height = 600;
	let timeline;
	const creative = myFT.instantAds.creative.toLowerCase();

	IDsToVars();

	// POPULATE IMAGES
	insertImage(logo, myFT.instantAds.logo, myFT.instantAds.logo_style, true);
	insertImage(logo2, myFT.instantAds.logo2, myFT.instantAds.logo2_style, true);
	insertImage(bg, myFT.instantAds.bg, myFT.instantAds.bg_style, true);
	insertImage(device, myFT.instantAds.device, myFT.instantAds.device_style, true);
	insertImage(athlete, myFT.instantAds.athlete, myFT.instantAds.athlete_style, true);
	insertImage(athleteProps, myFT.instantAds.athleteProps, myFT.instantAds.athleteProps_style, true);
	console.log(myFT.instantAds.athleteProps_style);
	insertImage(athleteInfo, myFT.instantAds.athleteInfo, myFT.instantAds.athleteInfo_style, true);
	insertImage(athleteSignature, myFT.instantAds.athleteSignature, myFT.instantAds.athleteSignature_style, true);
	insertImage(messaging, myFT.instantAds.messaging, myFT.instantAds.messaging_style, true);

	// POPULATE COPY( and their styling if declared in manifest.js )
	insertCopy(f1_copy, myFT.instantAds.f1_copy, myFT.instantAds.f1_copy_style);
	insertCopy(f2_copy, myFT.instantAds.f2_copy, myFT.instantAds.f2_copy_style);
	insertCopy(f3_copy, myFT.instantAds.f3_copy, myFT.instantAds.f3_copy_style);
	insertCopy(f4_copy, myFT.instantAds.f4_copy, myFT.instantAds.f4_copy_style);
	insertCopy(disclaimer, myFT.instantAds.disclaimer, myFT.instantAds.disclaimer_style);
	insertCopy(legal, myFT.instantAds.legal, myFT.instantAds.legal_style);
	insertCopy(uscInfo, myFT.instantAds.uscInfo, myFT.instantAds.uscInfo_style);
	insertCopy(ctaCopy, myFT.instantAds.ctaCopy, myFT.instantAds.ctaCopy_style);

	insertCopy(offer_sideBar, myFT.instantAds.offer_sideBar, myFT.instantAds.offer_sideBar_style);
	insertCopy(offer_title, myFT.instantAds.offer_title, myFT.instantAds.offer_title_style);
	insertCopy(offer_dollarSign, myFT.instantAds.offer_dollarSign, myFT.instantAds.offer_dollarSign_style);
	insertCopy(offer_price, myFT.instantAds.offer_price, myFT.instantAds.offer_price_style);
	insertCopy(offer_cents, myFT.instantAds.offer_cents, myFT.instantAds.offer_cents_style);
	insertCopy(offer_terms, myFT.instantAds.offer_terms, myFT.instantAds.offer_terms_style);
	insertCopy(offer_agree, myFT.instantAds.offer_agree, myFT.instantAds.offer_agree_style);
	insertCopy(offer_boltOn_copy, myFT.instantAds.offer_boltOn_copy, myFT.instantAds.offer_boltOn_copy_style);
	insertImage(offer_boltOn_image, myFT.instantAds.offer_boltOn_image, myFT.instantAds.offer_boltOn_image_style, true);
	
	wrapper.className = 'show';
	initClickTag();

	myFT.on("load", function(){
		initAnimation();
		startAnimation();
		fireReportingEvent();
	});
	
	function initAnimation() {


		timeline = gsap.timeline( {
			delay:.2,
			onComplete: onAnimationComplete
		} );

		timeline.pause();

		if(creative.includes('hsd') === true){

			gsap.set([f1_copy, f2_copy, f3_copy, f4_copy, offer, ctaBox, device, athleteInfo, athleteProps, athleteSignature, disclaimer, legal, logo2, uscInfo, messaging], {alpha:0});
			gsap.set(athlete, {alpha:0, scale:.9, transformOrigin:"0% 100%"});
			gsap.set(bg, {transformOrigin:"50% 50%"});

			if(creative === "hsd alt"){

				gsap.set(athlete, {x:-10, y:0, alpha:0, scale:1, transformOrigin:"0% 0%"});

				timeline.add([

					// frame1
					gsap.to(f1_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:0}),

					gsap.to(athlete, .5, {alpha:1, ease:Cubic.easeInOut}),
					gsap.to(athlete, 4.1, {x:6, y:0, scale:1, ease:Linear.easeNone}),
					gsap.to(bg, 5, {scale:1.4, ease:Linear.easeNone}),
					gsap.to(athleteSignature, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1}),
					gsap.to(athleteInfo, .5, {alpha:1, ease:Cubic.easeInOut, delay:.2}),
					
					// frame2
					gsap.to([f1_copy, athleteSignature, athleteInfo], .5, {alpha:0, ease:Cubic.easeInOut, delay:2}),
					gsap.to([f2_copy, disclaimer], .5, {alpha:1, ease:Cubic.easeInOut, delay:2.2}),
				
					// frame3
					gsap.to([f2_copy, athlete, disclaimer], .5, {alpha:0, ease:Cubic.easeInOut, delay:4.5}),
					gsap.to([f3_copy, offer], .5, {alpha:1, ease:Cubic.easeInOut, delay:4.7}),
					gsap.to(logo, .5, {y:"-=48", ease:Cubic.easeInOut, delay:4.7}),
					gsap.to(ctaBox, .5, {alpha:1, ease:Cubic.easeInOut, delay:4.7}),
					gsap.to(legal, .5, {alpha:1, ease:Cubic.easeInOut, delay:4.7}),

					// frame 4
					gsap.to([f3_copy, offer, legal], .5, {alpha:0, ease:Cubic.easeInOut, delay:8.4}),
					gsap.to([f4_copy, logo2], .5, {alpha:1, ease:Cubic.easeInOut, delay:8.7, onStart:function(){
						if(creative === 'hsd offer'){
							gsap.to(offer, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1});
						}
					}}),

					gsap.to(messaging, .5, {alpha:1, ease:Cubic.easeInOut, delay:8.8}),
					gsap.to(uscInfo, .5, {alpha:1, ease:Cubic.easeInOut, delay:8.9}),
					

				])

			}else if(creative === 'hsd alt hm'){

				gsap.set(athlete, {x:0, y:0, alpha:0, scale:.94, transformOrigin:"50% 100%"});

				timeline.add([

					// frame1
					gsap.to(f1_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:0}),

					gsap.to(athlete, .5, {alpha:1, ease:Cubic.easeInOut}),
					gsap.to(athlete, 4.1, {x:0, y:0, scale:1, ease:Linear.easeNone}),
					gsap.to(bg, 5, {scale:1.4, ease:Linear.easeNone}),
					gsap.to(athleteSignature, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1}),
					gsap.to(athleteInfo, .5, {alpha:1, ease:Cubic.easeInOut, delay:.2}),
					
					// frame2
					gsap.to([f1_copy, athleteSignature, athleteInfo], .5, {alpha:0, ease:Cubic.easeInOut, delay:2}),
					gsap.to([f2_copy, disclaimer], .5, {alpha:1, ease:Cubic.easeInOut, delay:2.2}),
				
					// frame3
					gsap.to([f2_copy, athlete, disclaimer], .5, {alpha:0, ease:Cubic.easeInOut, delay:4.5}),
					gsap.to([f3_copy, offer], .5, {alpha:1, ease:Cubic.easeInOut, delay:4.7}),
					gsap.to(logo, .5, {y:"-=0", alpha:0, ease:Cubic.easeInOut, delay:4.7}),
					gsap.to(logo2, .5, {alpha:1, ease:Cubic.easeInOut, delay:4.7}),
					gsap.to(ctaBox, .5, {alpha:1, ease:Cubic.easeInOut, delay:4.7}),
					gsap.to(legal, .5, {alpha:1, ease:Cubic.easeInOut, delay:4.7}),

					// frame 4
					gsap.to([f3_copy, offer, legal], .5, {alpha:0, ease:Cubic.easeInOut, delay:8.4}),
					gsap.to([f4_copy, logo2], .5, {alpha:1, ease:Cubic.easeInOut, delay:8.7, onStart:function(){
						if(creative === 'hsd offer'){
							gsap.to(offer, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1});
						}
					}}),

					gsap.to(messaging, .5, {alpha:1, ease:Cubic.easeInOut, delay:8.8}),
					gsap.to(uscInfo, .5, {alpha:1, ease:Cubic.easeInOut, delay:8.9}),
					

				])

			}else{

				timeline.add([

					// frame1
					gsap.to(f1_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:0}),

					gsap.to(athlete, .5, {alpha:1, ease:Cubic.easeInOut}),
					gsap.to(athlete, 5.5, {x:-40, y:0, scale:1, ease:Linear.easeNone}),
					gsap.to(bg, 5, {scale:1.4, ease:Linear.easeNone}),
					gsap.to(athleteSignature, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1}),
					gsap.to(athleteInfo, .5, {alpha:1, ease:Cubic.easeInOut, delay:.2}),
					
					// frame2
					gsap.to([f1_copy, athleteSignature, athleteInfo], .5, {alpha:0, ease:Cubic.easeInOut, delay:2}),
					gsap.to(f2_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:2.2}),
				
					// frame3
					gsap.to(f2_copy, .5, {alpha:0, ease:Cubic.easeInOut, delay:3.8}),
					gsap.to(f3_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:4}),

					// frame 4
					gsap.to([f3_copy, athlete, logo], .5, {alpha:0, ease:Cubic.easeInOut, delay:5.9}),
					gsap.to([f4_copy, logo2], .5, {alpha:1, ease:Cubic.easeInOut, delay:6.2, onStart:function(){
						if(creative === 'hsd offer'){
							gsap.to(offer, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1});
						}
					}}),

					gsap.to(device, .5, {alpha:1, ease:Cubic.easeInOut, delay:6.3}),
					gsap.to(ctaBox, .5, {alpha:1, ease:Cubic.easeInOut, delay:6.4}),
					gsap.to([uscInfo, legal], .5, {alpha:1, ease:Cubic.easeInOut, delay:6.5}),
					

				])

			}

		}else if(creative.includes('xm')){

			gsap.set([f1_copy, f2_copy, f3_copy, f4_copy, offer, ctaBox, device, athleteInfo, athleteSignature, disclaimer, legal, logo2, uscInfo, messaging], {alpha:0});
			gsap.set(athlete, {alpha:0, scale:.93, transformOrigin:"0% 100%"});
			gsap.set(athleteProps, {alpha:0, scale:.93, transformOrigin:"50% 50%"});
			gsap.set(bg, {transformOrigin:"50% 50%"});

			timeline.add([

				// // frame1
				gsap.to(f1_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:0}),

				gsap.to([athlete, athleteProps], .5, {alpha:1, ease:Cubic.easeInOut}),
				gsap.to(athlete, 5.2, {x:-5, y:0, scale:1, ease:Linear.easeNone}),
				gsap.to(bg, 5, {scale:1.4, ease:Linear.easeNone}),
				gsap.to(athleteProps, 5.2, {x:70, y:-110, scale:1, rotation:25, ease:Linear.easeNone}),
				gsap.to(athleteSignature, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1}),
				gsap.to(athleteInfo, .5, {alpha:1, ease:Cubic.easeInOut, delay:.2}),
				
				// frame2
				gsap.to([f1_copy, athleteSignature, athleteInfo], .5, {alpha:0, ease:Cubic.easeInOut, delay:2}),
				gsap.to(f2_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:2.2}),
				gsap.to(disclaimer, .5, {alpha:1, ease:Cubic.easeInOut, delay:2.3}),


				// frame 3
				gsap.to([f2_copy, athlete, athleteProps, disclaimer], .5, {alpha:0, ease:Cubic.easeInOut, delay:4.7}),

				gsap.to(messaging, .5, {alpha:1, ease:Cubic.easeInOut, delay:5.1}),
				gsap.to(logo, .6, {x:0, y:"-=49", ease:Cubic.easeInOut, delay:5.1}),
				gsap.to(f3_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:5.1, onStart:function(){
					if(creative === 'xm offer'){
						gsap.to(offer, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1});
					}
				}}),

				gsap.to(device, .5, {alpha:1, ease:Cubic.easeInOut, delay:5.1}),
				gsap.to(ctaBox, .5, {alpha:1, ease:Cubic.easeInOut, delay:5.2}),
				gsap.to([uscInfo, legal], .5, {alpha:1, ease:Cubic.easeInOut, delay:5.3}),
				

			])


		}else if(creative.includes('x1') === true){

			gsap.set([f1_copy, f2_copy, f3_copy, f4_copy, offer, ctaBox, device, athleteInfo, athleteProps, athleteSignature, disclaimer, legal, logo2, uscInfo, messaging], {alpha:0});
			gsap.set(device, {transformOrigin:"50% 50%"});

			timeline.add([

				// frame1
				gsap.to(f1_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:0}),
				gsap.to(device, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1}),
				
				// frame2
				gsap.to(f1_copy, .5, {alpha:0, ease:Cubic.easeInOut, delay:2.5}),
				gsap.to(f2_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:2.7}),
			
				// frame3
				gsap.to(f2_copy, .5, {alpha:0, ease:Cubic.easeInOut, delay:5}),
				gsap.to(f3_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:5.2}),

				// frame 4
				gsap.to(f3_copy, .5, {alpha:0, ease:Cubic.easeInOut, delay:7.5}),
				gsap.to(f4_copy, .5, {alpha:1, ease:Cubic.easeInOut, delay:7.7, onStart:function(){
					// if(creative === 'x1 offer'){
					// 	gsap.to(offer, .5, {alpha:1, ease:Cubic.easeInOut, delay:.1});
					// }
				}}),

				gsap.to(device, .5, {x:0, y:0, scale:1, ease:Cubic.easeInOut, delay:7.7}),
				gsap.to(ctaBox, .5, {alpha:1, ease:Cubic.easeInOut, delay:7.7}),
				gsap.to([uscInfo, legal], .5, {alpha:1, ease:Cubic.easeInOut, delay:7.8}),
				

			])

		}

		


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
		// 		gsap.to(ctaOver, .1, {alpha:1});
		// 	}
		// };

		// wrapper.onmouseout = function(){
		// 	gsap.to(ctaOver, .1, {alpha:0});
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
					gsap.set(_target, {x:parseInt(_styleValue)});
					// gsap.set(gleamHolder, {x:parseInt(_styleValue)});

				}else if(_breakStr[i].search('posY:') > -1){
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.top = _styleValue + 'px';
					gsap.set(_target, {y:parseInt(_styleValue)});
					// gsap.set(gleamHolder, {y:parseInt(_styleValue)});
					
				
				}

			}else{

				if(_breakStr[i].search('posX:') > -1){

					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.left = _styleValue + 'px';
					gsap.set([_target], {x:parseInt(_styleValue)});
					

				}else if(_breakStr[i].search('posY:') > -1){
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.top = _styleValue + 'px';
					gsap.set(_target, {y:parseInt(_styleValue)})
				
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
			// _target.style.width = width + 'px';
			// _target.style.height = height + 'px';
			_target.style.backgroundSize = 'contain';
			_target.style.backgroundImage = "url('" + _img + "')";
		}else{
			_target.innerHTML = '<img src="' + _img + '" />';
		}

		let _img_breakStr = _imgStyle.split(',');
		let _img_len = _img_breakStr.length;

		let _img_styleValue;

		for(let i = 0; i < _img_len; i ++){

			let _a;

			if(_img_breakStr[i].search('scale:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				gsap.set(_target, {scale:_img_styleValue});
			
			}else if(_img_breakStr[i].search('posX:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				gsap.set(_target, {x:_img_styleValue});
				
			}else if(_img_breakStr[i].search('posY:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				gsap.set(_target, {y:_img_styleValue});

			}else if(_img_breakStr[i].search('width:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				gsap.set(_target, {width:_img_styleValue});

			}else if(_img_breakStr[i].search('height:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				gsap.set(_target, {height:_img_styleValue});

			}

		}
			
	}

	function insertSVG(_target, _img){
		_target.innerHTML = '<object id="' + _target.id +'" data="' + _img +  '" type="image/svg+xml"></object>';
	}

	function breakString(_str, _type) {
	  let _newString = '';

	  if (_type === 'perWord') {
	    let _s = _str.replace(/ /g, ' ]');
	    _s = _s.replace(/<br>/g, ']');
	    _s = _s.split(']');

	    for (let i = 0; i < _s.length; i++) {
	      if (i === _s.length - 1) {
	        _newString += '<div class="perWord">' + _s[i] + '</div> ';
	      } else {
	        _newString += '<div class="perWord">' + _s[i] + '</div> ';
	      }
	    }

	    _newString = _newString.replace(/ <\/div>/g, '<br></div>');
	   
	  }

	  if (_type === 'perChar') {
	    let _s = _str.replace(/ /g, ']');
	    _s = _s.replace(/<br>/g, '}');
	    _s = _s.split('');

	    for (let i = 0; i < _s.length; i++) {
	      if (i === _s.length - 1) {
	        _newString += '<div class="perChar">' + _s[i] + '</div>';
	      } else {
	        _newString += '<div class="perChar">' + _s[i] + '</div>';
	      }
	    }

	    _newString = _newString.replace(/]/g, ' ');
	    _newString = _newString.replace(/}/g, '<br>');
	    _newString = _newString.replace(/<div class="perChar"><br><\/div>/g, '<br>');
	  
	  }

	  if (_type === 'perLine') {
	    let _s = _str.replace(/<br>/g, '<br>]');
	    _s = _s.split(']');

	    for (let i = 0; i < _s.length; i++) {
	      if (i === _s.length - 1) {
	        _newString += '<div class="perLine">' + _s[i] + '</div> ';
	      } else {
	        _newString += '<div class="perLine">' + _s[i] + '</div> ';
	      }
	    }

	    _newString = _newString.replace(/]/g, '');
	    _newString = _newString.replace(/<br><\/div>/g, '</div>');

	   
	  }

	  return _newString;
	}



	function startAnimation(){
		// Code for animation		
		timeline.play();
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
        if (inPreviewENV()) {
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