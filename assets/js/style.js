$('.testimonial-slider').owlCarousel({
    loop: true,
    nav: true,
    stagePadding: 10,
    margin:10,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 2
      },
      1600: {
        items: 3
      }
    }
  })
  $('.blog-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
  $('.client-slider').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin: 15,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  })