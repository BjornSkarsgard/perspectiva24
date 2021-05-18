import $ from "jquery";

$(".btn_scroll").click(function() {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form").offset().top
    }, 2000);
});
