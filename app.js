document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

setInterval(() => {
  if (document.onWayTo !== null) {
    document.onWayTo = null;
  }
}, 450);


function stopScrollEvent(phone) {
  if (phone.matches) { // If media query matches
    console.log("Mobile user detected")
    const content = document.querySelector(".content")
    content.style.display = "block !important";
  }else{
    attachScroll()
  }
}

const display = window.matchMedia("(max-width: 799px)");

stopScrollEvent(display) // Call listener function at run time
display.addEventListener('change', stopScrollEvent)

function attachScroll() {
  document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('.section')];
    // console.log(sections)
    if (document.onWayTo === null) {
      const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
      if (destIndex >= 0 && destIndex < sections.length) {
        console.log({destIndex,direction})
        document.onWayTo = destIndex;
        window.scroll(0, sections[destIndex].offsetTop);
      }
    }
  
    sections.forEach((section,index) => {
      const accesories = document.getElementById("accessories")
      if (window.pageYOffset === section.offsetTop) {
        console.log(section.offsetTop)
        document.lastCentered = index;
        section.classList.add("active");
        if (document.onWayTo === index) {
          document.onWayTo = null;
        }
      }else {
        section.classList.remove("active")
      }
    })
  
    document.lastScrollPosition = window.pageYOffset;
  })
  
}


