$(document).ready(function(){
    $("#hide").click(function(){
        $(".first, .second, .third, .fourth, .fifth, .sixth").hide();
    });

    $("#show").click(function(){
        $("p").show();
    });
});
