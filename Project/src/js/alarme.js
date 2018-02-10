
  var ticker = function() {
    var now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();
      var mont = now.getMonth()+1

    hours = ((hours > 11 ? hours - 12 : hours) / 12) * 60;
    date = now.getDate()+' / '+mont+' / '+now.getFullYear()
   console.log(date);
    document.querySelector(".clock__hours").dataset.value = hours;
    document.querySelector(".clock__seconds").dataset.value = seconds;
    document.querySelector(".clock__minutes").dataset.value = minutes;

    var HMS = document.getElementById('clockNum');
    
      HMS.innerHTML = date;
  }

  setInterval(ticker, 100);