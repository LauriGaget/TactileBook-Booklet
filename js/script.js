

$(function () {

  $('#mybook').booklet({
    width: 1920,
    height: 1080,
    closed: true,
    autoCenter: true,
    pagePadding: 0,
    pageNumbers: false,
    speed: 2000,
    page: this.currentIndex

  });

  // Ajout Du Swipe  
  var book = document.getElementById("mybook");

  var hammerBook = new Hammer(book);



  hammerBook.on("swiperight", function (e) {

    $('#mybook').booklet("prev")
    page = $('#mybook').booklet("option", "currentIndex")
    console.log(page);
    setTimeout(animePage, 2000);

  })

  hammerBook.on("swipeleft", function (e) {

    $('#mybook').booklet("next")
    page = $('#mybook').booklet("option", "currentIndex")
    console.log(page)
    setTimeout(animePage, 2000);

  })

  // Anime les images //

  function FadeTo(el) {
    $(el).fadeTo(1000, 1);
  }

  function animePage() {

    if (page == 4) {
      setTimeout(FadeTo, 500, "#image-Page2-1");
      setTimeout(FadeTo, 1000, "#image-Page2-2");
      setTimeout(FadeTo, 1500, "#image-Page2-3");
      setTimeout(FadeTo, 2000, "#image-Page2-4");

      setTimeout(FadeTo, 500, "#image-Page3-1");
      setTimeout(FadeTo, 1000, "#image-Page3-2");
      setTimeout(FadeTo, 1500, "#image-Page3-3");
      setTimeout(FadeTo, 2000, "#image-Page3-4");
    }

    else {
      $("#image-Page2-1").fadeOut(100, 0);
      $("#image-Page2-2").fadeOut(100, 0);
      $("#image-Page2-3").fadeOut(100, 0);
      $("#image-Page2-4").fadeOut(100, 0);

      $("#image-Page3-1").fadeOut(100, 0);
      $("#image-Page3-2").fadeOut(100, 0);
      $("#image-Page3-3").fadeOut(100, 0);
      $("#image-Page3-4").fadeOut(100, 0)
    }
    if (page == 6) {

      $("#image-Page5").animate({ top: "60px" }, 1000);

      $("#bandeau-Page6").animate({ right: "60px" }, 2000);

      $("#image-Page6").animate({ top: "360px" }, 2000)

    }

    else {

      $("#image-Page5").animate({ top: "-1000px" }, 1000);

      $("#bandeau-Page6").animate({ right: "2000px" }, 500);

      $("#image-Page6").animate({ top: "-1000px" }, 500)
    }



  }
  // Image fold //
  
  var $container = $('#uc-container'),
    pfold = $('#uc-container').pfold({
      easing: 'ease-in-out',
      folds: 5,
      folddirection: ['left', 'bottom', 'right', 'bottom', 'bottom']
    });

  $container.find('span.clickme').on('click', function () {
    
    pfold.unfold();

  }).end().find('span.close').on('click', function () {

    pfold.fold();

  });
  //Carousselle

  setInterval(function () {
    $(".slideshow ul").animate({ marginLeft: -350 }, 800, function () {
      $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
    })
  }, 3500);

});
