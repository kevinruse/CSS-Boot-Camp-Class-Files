window.addEventListener('devicelight', function(event) {
    if (event.value >= 30000) {
        console.log('bright outdoor light');
        document.getElementById('mainSection').className += 'brightLight';
    }

    else if (event.value < 30000) {
        console.log('normal indoor light');
        document.getElementById('mainSection').className += 'normalIndoor';
    }
});