Modernizr.on('ambientlight',function(result) {
    if (!result) {
        console.log("load lighting js");
        const scriptPath = "scripts";
        const script = document.createElement('script');
        script.src = scriptPath + '/lighting.js';
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log("load lighting css");
        const stylePath = "css";
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = stylePath + '/lighting.css';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
});
