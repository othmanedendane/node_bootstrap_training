$(document).ready(function(){
    $("img").hide();
            $("img").show(1000);
$("#im1").click(function(){
    var im1=$("#im1").attr("src");
    var im2=$("#im2").attr("src");
    var im3=$("#im3").attr("src");
    var im4=$("#im4").attr("src");
    $("#im1").attr("src",im2);
    $("#im2").attr("src",im3);
    $("#im3").attr("src",im4);
    $("#im4").attr("src",im1);
});

$(".choix").mouseenter(function (){
    $(this).css("opacity",1);
}),
$(".choix").mouseleave(function (){
    $(this).css("opacity","");
});

$("#im2").click(function(){
    $("#im1").hide();
    
}),

$("#im2").click(function(){
    var im1=$("#im1").attr("src");
    var im2=$("#im2").attr("src");
    $("#im1").attr("src",im2);
    $("#im2").attr("src",im1);
    $("#im1").fadeIn(1000);
});
$("#im3").mouseenter(function(){
    $("#im1").animate({
        height:"150px",
        width:"150px",
    });
});
    
$("#im3").click(function(){
    $("#im1").hide();
});
    
$("#im3").click(function(){
    var im1=$("#im1").attr("src");
    var im3=$("#im3").attr("src");
    $("#im1").attr("src",im3);
    $("#im3").attr("src",im1);
    $("#im1").fadeIn(500);
    $("#im1").animate({
        height:"400px",
        width:"600px",
    });
});
   

$("#bouton").click(function(){
    var im1=$("#im1").attr("src");
    var im2=$("#im2").attr("src");
    var im3=$("#im3").attr("src");
    var im4=$("#im4").attr("src");
    $("#im1").attr("src",im2);
    $("#im2").attr("src",im3);
    $("#im3").attr("src",im4);
    $("#im4").attr("src",im1);
});
    
$("#im4").click(function(){
    $("#SideImage").animate({
        marginLeft:"197px",
    });
    $("#im1").hide(3000,function(){
        var im1=$("#im1").attr("src");
        var im4=$("#im4").attr("src");
            $("#im1").attr("src",im4);
            $("#im4").attr("src",im1);
            $("#im1").show(3000,function(){
                $("#SideImage").animate({
                    marginLeft:"",
                });
                });
         });   
});
    
    function balle(){
     $("#balle").animate({left:"600px"},600);
    $("#balle").animate({top:"400px"},500);
    $("#balle").animate({left:""},600);
    $("#balle").animate({top:""},600);
    balle();
}
   
$(document).ready(function(){
balle();
        
    });
});
    


