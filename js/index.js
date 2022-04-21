// count down
var countDownDate = new Date("11/01/2021 21:30:00").getTime();
var timeDown = setInterval(function () {
    var now = new Date().getTime();
    var distance = (countDownDate - now) / 1000;
    var days = Math.floor(distance / (60 * 60 * 24));
    var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor((distance % (60)));
    d.innerHTML = days + ' day  ';
    h.innerHTML = hours + ' hour  ';
    mi.innerHTML = minutes + ' min  ';
    s.innerHTML = seconds + ' sec  ';
    if (distance < 0) {
        clearInterval(timeDown);
        demo.innerHTML = "Đã kết thúc";
    }
}, 1000);
// carousel
var owl = $('.Latest-News');
owl.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fas fa-arrow-left '></i>", "<i class=' fas fa-arrow-right' ></i>"],
    margin: 30,
    responsive: {
        0: {
            items: 2
        },
        700: {
            items: 2
        },
        800: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});

// form-validate
function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["psw"].value;
    if (y == "" && x == "") {
        document.getElementById("error-password").style.visibility = 'visible';
        document.getElementById("error-username").style.visibility = 'visible';
        return false;
    }
    else if (x == "") {
        document.getElementById("error-username").style.visibility = 'visible';
        document.getElementById("error-password").style.visibility = 'hidden';
        return false;
    }
    else if (y == "") {
        document.getElementById("error-password").style.visibility = 'visible';
        document.getElementById("error-username").style.visibility = 'hidden';
        return false;
    } else {
        alert("Login successful !!");
        return true;
    }
}

