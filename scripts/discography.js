gsap.registerPlugin(ScrollTrigger);


let section = document.querySelectorAll('section')

section.forEach(function(section){

    

  gsap.timeline({
    scrollTrigger: {
      start: 'top 90%',
      end: 'bottom 90%',
      trigger: section,
      toggleActions: 'restart complete reverse reset',
    }
  })

.from(section, {opacity: 0})
.to(section, {opacity: 100})

gsap.timeline({
    scrollTrigger: {
      trigger: 'video',
      toggleActions: 'restart complete reverse reset',
    }
  })
  
    .from('video', {scale: 0})
    .to('video', {scale: 1})
    
    
  let images = section.querySelectorAll('section img');
  images.forEach(function(img){
    gsap.timeline({
      scrollTrigger: {
        trigger: img,
        toggleActions: 'restart complete reverse reset',
      }
    })

      .from(img, { scale: 0 })
      .to(img, { scale: 1 })
  });

  
})

let body = document.querySelector('body');
let isScrolling;
let animCoeur = document.querySelector('.anim');

window.addEventListener('scroll', () => {
    isScrolling = setTimeout( () => {
        animCoeur.className = 'idle'
    }, 250);
});


let anim = gsap.timeline({
    scrollTrigger: {
      trigger: '.animation',
        onUpdate: (e) => {
            if (e.progress) {
                if(e.direction==-1){
                    animCoeur.className = "up"
                } else {
                    animCoeur.className = "down"
                }
            }
        }
    }
});
