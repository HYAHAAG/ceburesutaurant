$(function() {
    $("#toTop").on("click", function(){
       $("html, body").animate({scrollTop: 0}, 500);
    });

    $(".contents").hide();

    $("h2").on("mouseover", function(){
        $(this).parent().find(".contents").slideDown(500);
    });

    const now = new Date();
    const year = now.getFullYear();

    $("footer div").html("Copyright &copy; "+year+" SeedKun Inc.");

    const month = now.getMonth() + 1;
    console.log(month);
    console.log(now.getDate());
    console.log(now.getHours());
    console.log(now.getDay());

    switch (now.getDay()){
        case 5:
            console.log("金曜日");
            break;
    }
});
