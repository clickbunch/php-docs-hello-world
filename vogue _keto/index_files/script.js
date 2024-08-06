$(function() {

    $('.lazy').lazy();

    $("a").on("touchend, click", function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('#form').offset().top }, 400);
    });
    $(".ac_footer a, .ac_gdpr_fix a, body .priv").unbind("click");

    $('body .priv').off("click");
    $('body .priv').each(function () {
        var $this = $(this),
            link = $this.eq(0);
        var filePath = $this.attr('data-href');
        link.attr('href', filePath);
    });


    // countdownStart
    var storageCountdownReset = "countdownResetAirbag",
        storageCountdownTime = "countdownTimeAirbag",
        countdownResetTimeVal = 26,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
        localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
        if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
            var countdownTime = (new Date).getTime() + 15e5;
            localStorage.setItem(storageCountdownTime, countdownTime);
            localStorage.setItem(storageCountdownReset, nowDateTime);
        }
    }

    if (localStorage.getItem(storageCountdownTime)) {
        var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
        countdownTime = (new Date).getTime() + 15e5;
    }

    $(".countdown").countdown(countdownTime, function(s) {
        $(this).html(s.strftime('' +
            '<span class="countdown__item">%M</span>' + ':' +
            '<span class="countdown__item">%S</span>'
        ));
    }).on('update.countdown', function(e) {
        countdownTime = e.finalDate.getTime();
        localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function(e) {
        $('.countdown').countdown('stop');
    });
    // countdownEnd

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    function randRange(data) {
        var newTime = data[Math.floor(data.length * Math.random())];
        return newTime;
    }

    function lastpack(numpack) {
        var minNumPack = 3; // Минимальное количество упаковок
        var lastClass = $('.lastpack'); // Объект
        var numpackCookie = getCookie("lastpack");
        var timeArray = new Array(2000, 13000, 15000, 7000, 6000, 11000);

        if (numpackCookie == undefined) {
            document.cookie = numpack;
        } else {
            var numpack = numpackCookie;
        }

        if (numpack > minNumPack) {
            numpack--;
            document.cookie = "lastpack=" + numpack;
            lastClass.text(numpack);
        } else {
            lastClass.text(minNumPack);
        }
        clearInterval(timer);
        timer = setInterval(lastpack, randRange(timeArray), numpack);
    }

    var timer = setInterval(lastpack, 0, 22);
})