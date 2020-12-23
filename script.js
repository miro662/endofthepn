window.onload = function() {
    var timeuntil = document.getElementById("timeuntil");
    var endOfPN = new Date(2021, 0, 1, 0, 0);

    function fillWithZeros(number, targetLength) {
        var numberStr = number.toString();
        while (numberStr.length < targetLength) {
            numberStr = "0" + numberStr;
        }
        return numberStr;
    }

    function updateTimeUntil() {
        var now = Date.now();
        var diff = endOfPN - now;

        if (diff <= 0) {
            timeuntil.innerHTML = "IT'S OVER";
        } else {
            var milliseconds = diff % 1000;
            var seconds = Math.floor(diff / 1000) % 60;
            var minutes = Math.floor(diff / (1000 * 60)) % 60;
            var hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            timeuntil.innerHTML = "" + days 
                + ":" + fillWithZeros(hours, 2)
                + ":" + fillWithZeros(minutes, 2)
                + ":" + fillWithZeros(seconds, 2)
                + ":" + fillWithZeros(milliseconds, 3);
        }
    }

    window.setInterval(updateTimeUntil, 10);
};