$(function () {

    // Trigger nice scroll
    $('html').niceScroll({
        cursorcolor: "#e2db1a",
        cursorwidth: "8px",
        cursorborder: "1px solid #e2db1a",
        cursorborderradius: 0
    });

    // Trigger mouse-scroll
    var sections = ["#first","#second","#third","#fourth"];
    var count = 0;
    $(".scroll").on('click',function scrollFunc(){
        $(this).attr("href", sections[count]);
        if(count < sections.length - 1) {
            count++;
        }
        else {
            count = 0;
        }
        
    });

    //Trigger menu
    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('.menu-section').toggleClass("on").slideDown();
        $("nav #menu").toggleClass('hidden');
      });

});