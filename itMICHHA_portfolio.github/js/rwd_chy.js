$(function () {

    $('#fullpage').fullpage({
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection'],
        // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: false,

    });



 
    $(".slideimg").slick({
     slidesToShow: 1,
     speed: 1500,
      autoplay: true,
      fade: true,
      autoplaySpeed: 2000,
      arrows: false,
	  pauseOnHover: false,
      infinite: true,
      });

});




