function CountDown(id, date) {
    var countDownDate = new Date(date).getTime();
    console.log(document.getElementById(id));

    // Update the count down every 1 second
    var x = setInterval(function() {
        console.log(id);
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById(id).innerHTML = days + "<span class='c-name'> <strong>DAYS</strong></span> " + hours + "<span class='c-name'> <strong>HOURS</strong></span> " +
            minutes + "<span class='c-name'> <strong>MINUTES</strong></span> " + seconds + "<span class='c-name'> <strong>SECONDS</strong></span> ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(id).innerHTML = "EXPIRED";
        }
    }, 1000);
}