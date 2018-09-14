$(".semiCircle").each(function(){
  
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var perc = parseInt( $val.text(), 10);
  
    $({p:0}).animate({p:perc}, {
      duration: 3000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text(p|0);
      }
    });
  });


  $(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

//Changing Image

let dotBlue = document.querySelector('.dotBlue');
let image  = document.querySelector('.image');
let enterTextColor = document.querySelector('.enterTextColor');
dotBlue.addEventListener('click', function(){
  image.innerHTML = `<img src="images/blue.jpg">`;
  enterTextColor.innerHTML = 'Blue';
  enterTextColor.style.backgroundColor = "blue";  
});

let dotGrey = document.querySelector('.dotGrey');
dotGrey.addEventListener('click', function(){
  image.innerHTML = `<img src="images/grey.jpg">`;
  enterTextColor.innerHTML = 'Metalic Grey';
  enterTextColor.style.backgroundColor = "grey";  
});

let dotRed = document.querySelector('.dotRed');
dotRed.addEventListener('click', function(){
  image.innerHTML = `<img src="images/red.jpg">`;
  enterTextColor.innerHTML = 'Red';
  enterTextColor.style.backgroundColor = "#CA2726";  
  
});

let dotSliver = document.querySelector('.dotSliver');
dotSliver.addEventListener('click', function(){
  image.innerHTML = `<img src="images/silver.jpg">`;
  enterTextColor.innerHTML = 'Sliver';
  enterTextColor.style.backgroundColor = "#ACACAC";  
});
