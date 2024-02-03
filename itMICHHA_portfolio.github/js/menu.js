



$(function () {

    $("#pc_gnb li a").mouseenter(function () {
        $("#t_menu").stop().slideDown(300);
    });

    $("#allmenu").mouseleave(function () {
        $("#t_menu").stop().slideUp(300);
    });



    $("#pc_gnb li a").mouseover(function () {
        $("#header").css("background", "#fff");
        $("#pc_gnb li a").css("color", "000");
    });

    $("pc_gnb").mouseleave(function () {
        $("#header").css("background", "none");
        $("pc_gnb li a").css("color", "fff");
    });

    $("#hamburger_icon").click(function () {
        $("#m_menu").animate({ marginLeft: "75%" }, 300);
        $(".cross").stop().show();
    });


    $(".cross").click(function () {
        $("#m_menu").animate({ marginLeft: "0" }, 300);
        $("#hamburger_icon").stop().show();
        $(".cross").stop().hide();
    });


    $(".accordion-toggle a ").click(function () {
        if ($(this).next().is(":visible")) {
            $(this).next().stop().slideUp(500);
            //   $(this).removeClass("active-tab");
            $(this).removeClass("active");

        } else {
            $(".menu-submenu").stop().slideUp(500);
            $(this).next().stop().slideDown(500);
            // $(".menu-list >li").removeClass("active-tab");
            // $(this).addClass("active-tab");
            $(".accordion-toggle> a").removeClass("active");
            $(this).addClass("active");
        }
    });
});
