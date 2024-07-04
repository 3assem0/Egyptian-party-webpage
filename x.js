
/*leftmenu*/


$(".left-menu li").hide()
$(".openlist").click(function(){
    // $(".left-menu").removeClass('d-none')
    $(".left-menu li").show()
    $(".left-menu").animate({ width:'32%'},50)
   $(".home-content").animate({marginLeft :'32%'},50)
})

$(".out").click(function(){
    // $(".left-menu").addClass('d-none')
    $(".left-menu li").hide()
    $(".left-menu").animate({ width:'0px'},50)
   $(".home-content").animate({marginLeft :'0px'},50)
})



/*scrollmenu*/
$(".left-menu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})



/*Accordion*/


$('.singers .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});



/*counter*/


window.onload = function() {
   
    countDownToTime("10 october 2025 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }



/*textarea*/

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});



