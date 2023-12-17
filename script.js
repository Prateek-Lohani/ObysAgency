function loadingAnimation(){
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.5,
    duration: 1,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 33);
    },
  });
  tl.to('.line h2',{
      animationName:"anime",
      opacity:1
  })
  tl.to("#loader", {
    opacity: 0,
    duration: 0.1,
    delay: 3.2,
  });
  tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5
  })
  
  tl.to('#loader',{
  display:"none"
  }
  )

  tl.from("#nav",{
    opacity:0,
    duration:.2
  })

  tl.from('.hero1 h1,.hero2 h1,.hero3 h2,.hero4 h1',{
    y:120,
    stagger:.1
  })

}

function cursorAnimation(){
  document.addEventListener("mousemove",function(details){
    
    gsap.to('#crsr',{
      left:details.x,
      top:details.y
    })
  })
  
  Shery.makeMagnet("#nav-part2 h2");
}


loadingAnimation();
cursorAnimation();


