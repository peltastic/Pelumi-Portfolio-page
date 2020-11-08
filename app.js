const worksBtn = document.querySelector(".arrowWorks");
const navIcon = document.querySelector(".navIcon");

const projectLink =  document.getElementById("link2")

const backdropTween = gsap.to(".backdrop", {
  delay: .6,
  duration: .2,
  display:"block",
  reversed: true
})

gsap.to(".social img", {
  repeat: -1,
  yoyo: true,
  y: -10,
  duration: 2,
  ease: "back"
})

gsap.to(".arrowWorks", {
  repeat: -1,
  yoyo: true,
  x: -10,
  duration: 2,
  ease: "back"
})

gsap.to(".navIcon", {
  repeat: -1,
  yoyo: true,
  y: -5,
  duration: 2,
  ease: "back"
})

const tl = gsap.timeline({ paused: true, reversed: true });
const btnTl = gsap.timeline({ paused: true, reversed: true });
const navTl = gsap.timeline({ paused: true, reversed: true });

btnTl.to(".arrowWorks", {
  duration: 1,
  left: "4rem",
  rotationY: "180deg",
  ease: "power2",
});

tl.to(".works", {
  duration: 1,
  x: 0,
  ease: "power2",
});

navTl
  .to(".navIcon .two", {
    duration: 0.2,
    x: -100,
  })
  .to(".navIcon .one", {
    duration: 0.2,
    rotation: "45deg",
    top: "3.3rem",
  })
  .to(".navIcon .three", {
    duration: 0.2,
    rotation: "-45deg",
    top: "3.3rem",
  })
  .to(".nav1", {
    duration: 0.4,
    height: "50%",
  })
  .to(
    ".nav2",
    {
      duration: 0.4,
      height: "50%",
    },
    "-=.4"
  )
  .to(
    ".navLinks",
    {
      duration: .7,
      display: "block",
      left: "10rem"
    },
  )
  .to(".socialNav", {
    duration: .7,
    display: "flex",
    left: "4rem"
  }, "-=.7")

gsap.from(".introPlate h1", {
  duration: 1,
  x: -200,
  opacity: 0,
});

gsap.from(".introPlate", {
  duration: 1,
  x: 100,
  ease: "expo",
});

gsap.from(".introPlate p", {
  duration: 1,
  opacity: 0,
});

projectLink.addEventListener("click", () => {
  navIcon.click()
  worksBtn.click()
})

worksBtn.addEventListener("click", () => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(tl);
  toggleTween(btnTl);
});

navIcon.addEventListener("click", () => {
  
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(navTl);
  toggleTween(backdropTween)
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
