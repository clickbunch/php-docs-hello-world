$(function() {
    $('.ad-player-item').each(function(i, el) { initPlayer(el); });

    function initPlayer(el) {
        var num = 0;
        var player = $(el);
        var hiddenPlayer = player.find('audio').first();

        function secondsTimeSpanToHMS(s) {
            var h = Math.floor(s / 3600);
            s -= h * 3600;
            var m = Math.floor(s / 60);
            s -= m * 60;
            return (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
        };
        var audioFilesSelectors = { "ogg": "[src$=ogg]", "mp3": "[src$=mp3]", "aac": "[src$=aac]" };
        var songs = [],
            filePath = null;
        var supportMP3 = hiddenPlayer[0].canPlayType("audio/mpeg") == "maybe" || hiddenPlayer[0].canPlayType("audio/mpeg") == "probably";
        var supportAAC = hiddenPlayer[0].canPlayType("audio/x-aac") == "maybe" || hiddenPlayer[0].canPlayType("audio/x-aac") == "probably";
        var supportOGG = hiddenPlayer[0].canPlayType("audio/ogg") == "maybe" || hiddenPlayer[0].canPlayType("audio/ogg") == "probably";
        if (supportOGG) { filePath = hiddenPlayer.find(audioFilesSelectors.ogg).attr('src'); } else if (supportMP3) { filePath = hiddenPlayer.find(audioFilesSelectors.mp3).attr('src'); } else { filePath = hiddenPlayer.find(audioFilesSelectors.aac).attr('src'); }
        if (filePath == null) { console.log("Browser don't support specified audio files"); }
        songs.push({ src: filePath });
        var timeFinishBtn = player.find('.ad-player-time-finish'),
            nextBtn = player.find('.ad-next'),
            prevBtn = player.find('.ad-prev'),
            playBtn = player.find(".ad-play"),
            progressEl = player.find('progress'),
            initSongSrc = songs[0].src;
        hiddenPlayer.attr("src", initSongSrc);
        hiddenPlayer.attr('order', '0');
        hiddenPlayer[0].onloadedmetadata = function() {
            var dur = this.duration;
            var songLength = secondsTimeSpanToHMS(dur);
            var songLengthParse = songLength.split(".")[0];
            timeFinishBtn.html(songLengthParse);
            progressEl[0].max = dur;
        };
        var items = songs.length - 1;
        nextBtn.on('click', function(event) {
            var e = event || window.Event;
            e.preventDefault();
            e.returnValue = false;
            var songOrder = hiddenPlayer.attr('order');
            if (items == songOrder) {
                num = 0;
                var songSrc = songs[0].src;
                hiddenPlayer.attr('order', '0');
                hiddenPlayer.attr('src', songSrc).trigger('play');
            } else { /*console.log(songOrder);*/
                num += 1;
                var songSrc = songs[num].src;
                hiddenPlayer.attr('src', songSrc).trigger('play');
                hiddenPlayer.attr('order', num);
            }
        });
        prevBtn.on('click', function(event) {
            var e = event || window.Event;
            e.preventDefault();
            e.returnValue = false;
            var songOrder = hiddenPlayer.attr('order');
            if (songOrder == 0) {
                num = items;
                var songSrc = songs[items].src;
                hiddenPlayer.attr('order', items);
                hiddenPlayer.attr('src', songSrc).trigger('play');
            } else {
                num -= 1;
                var songSrc = songs[num].src;
                hiddenPlayer.attr('src', songSrc).trigger('play');
                hiddenPlayer.attr('order', num);
            }
        });
        playBtn.click(function(event) {
            var e = event || window.Event;
            e.preventDefault();
            e.returnValue = false;
            $(this).toggleClass("ad-paused");
            if ($(this).hasClass("ad-paused")) { hiddenPlayer[0].pause(); } else { hiddenPlayer[0].play(); }
        });
        var timeNow = player.find('.ad-player-time-now');
        hiddenPlayer.on('timeupdate', function() {
            var songLength = secondsTimeSpanToHMS(this.duration);
            var songLengthParse = songLength.split(".")[0];
            timeFinishBtn.html(songLengthParse);
            var songCurrent = secondsTimeSpanToHMS(this.currentTime);
            var songCurrentParse = songCurrent.split(".")[0];
            timeNow.html(songCurrentParse);
            progressEl[0].value = this.currentTime;
            if (!hiddenPlayer[0].paused) {
                playBtn.removeClass('ad-paused');
                progressEl.css('cursor', 'pointer');
            }
        });
        hiddenPlayer.on("ended", function() {
            this.currentTime = 0;
            playBtn.trigger("click");
        });
        progressEl.on('click', function(e) {
            var parentOffset = $(this).parent().offset(),
                progressWidth = this.offsetWidth,
                clickedTimePosition = e.pageX - parentOffset.left,
                coefficient = hiddenPlayer[0].duration / progressWidth;
            hiddenPlayer[0].currentTime = clickedTimePosition * coefficient;
        });
    }
});