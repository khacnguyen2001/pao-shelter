$(document).ready(function () {
  $("#gallery").slick({
    speed: 2000,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: true,
  });
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".navbar").addClass("background-dark");
      $(".navbar").addClass("background-dark");
    } else {
      $(".navbar").removeClass("background-dark");
    }
    var st = $(this).scrollTop();
    if (st == 0) {
      $(".navbar").removeClass("top-100");
    } else if (st > lastScrollTop) {
      $(".navbar").addClass("top-100");
    } else {
      $(".navbar").removeClass("top-100");
    }
    lastScrollTop = st;
  });
  //
  $(".bars-icon").on("click", function () {
    $(".sub-menu").addClass("l-0");
    $(".order-app .order-app-li-1").addClass("animate__slideInLeft");
    $(".order-app .order-app-li-2").addClass("animate__slideInRight");
    $(".sub-menu .logo").addClass("animate__backInDown");
    $(".sub-menu .text-logo").addClass("animate__pulse");
    $(".sub-menu .sub-text-logo").addClass("animate__pulse");
    $("body").addClass("overflow");
    $(".sub-menu-list p").addClass(" animate__fadeInLeft");
  });
  $(".close").on("click", function () {
    $(".sub-menu .logo").removeClass("animate__backInDown");
    $(".order-app .order-app-li-1").removeClass("animate__slideInLeft");
    $(".order-app .order-app-li-2").removeClass("animate__slideInRight");
    $(".sub-menu .text-logo").removeClass("animate__pulse");
    $(".sub-menu .sub-text-logo").removeClass("animate__pulse");
    $(".sub-menu").removeClass("l-0");
    $("body").removeClass("overflow");
    $(".sub-menu-list p").removeClass(" animate__fadeInLeft");
  });

  //
  var scrollContainer = $(".scroll-container");

  $("#prev-btn").click(function () {
    scrollContainer.animate(
      {
        scrollLeft: "-=945",
      },
      300
    );
  });
  $("#next-btn").click(function () {
    scrollContainer.animate(
      {
        scrollLeft: "+=945",
      },
      300
    );
  });

  $(".moveButton1").click(function () {
    scrollContainer.animate(
      {
        scrollLeft: "-=3100",
      },
      300
    );
  });
  $(".moveButton").click(function () {
    if ($(window).width() >= 1024) {
      scrollContainer.animate(
        {
          scrollLeft: "+=3100",
        },
        300
      );
    } else if ($(window).width() >= 767) {
      scrollContainer.animate(
        {
          scrollLeft: "+=2360",
        },
        300
      );
    } else if ($(window).width() <= 767) {
      scrollContainer.animate(
        {
          scrollLeft: "+=2360",
        },
        300
      );
    }
  });
  $(".moveButton2").click(function () {
    if ($(window).width() >= 1024) {
      scrollContainer.animate(
        {
          scrollLeft: "+=3100",
        },
        300
      );
    } else if ($(window).width() >= 767) {
      scrollContainer.animate(
        {
          scrollLeft: "+=2770",
        },
        300
      );
    } else if ($(window).width() <= 767) {
      scrollContainer.animate(
        {
          scrollLeft: "+=2770",
        },
        300
      );
    }
  });

  $("#moveButton li").click(function () {
    $("#moveButton li").removeClass("active");
    $(this).addClass("active");
  });

  $(".sub-menu-list li a").click(function () {
    $(".sub-menu").removeClass("l-0");
    $("body").removeClass("overflow");
  });

  const refreshCss = () => {
    let link = $("#css-link");
    let newHref = "/assets/css/style.css?" + new Date().getTime(); // appending timestamp to URL to force refresh
    link.attr("href", newHref);
    console.log(newHref);
  };
  setTimeout(function () {
    refreshCss();
  }, 1000);
  setTimeout(function () {
    $(".loading").addClass("animate__fadeOut");
    // $(".loading").addClass("d-none");
  }, 3000);
  setTimeout(function () {
    $(".loading").addClass("d-none");
    // $(".loading").addClass("d-none");
  }, 4000);
});
