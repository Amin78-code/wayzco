$(".slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});

// hero section animation
const allBlocks = document.getElementById("all_blocks_div");
const myTimeout = setTimeout(myGreeting, 3000);
function myGreeting() {
  allBlocks.classList.add("hidden");
}

const blocks = document.getElementsByClassName("block-box");
for (let i = 0; i < 50; i++) {
  const duration = Math.random();
  const f = 2;
  blocks[i].style.animationDelay = f + 4;
  blocks[i].style.animationDuration = 1 + duration * f + "s";
}
