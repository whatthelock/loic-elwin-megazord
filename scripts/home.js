const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletActiveClass: 'activeBullet',
      clickable: 'true'
  },

})

gsap.registerPlugin(ScrollTrigger);

let sectionArr = document.querySelectorAll('section');
sectionArr.forEach(function(section) {
  console.log(section)
  let titreArr = section.querySelectorAll('h2');
  let elementArr = section.querySelectorAll('.row:nth-child(2)');
    titreArr.forEach(function(header) {
      elementArr.forEach(function(element) {
        console.log(titreArr)
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            toggleActions: 'restart complete reverse reset',
          },
        })
        .fromTo(header, { y: '100%', opacity: '0%' },
        { y: '0%', opacity: '100%' , duration: 0.5})

        .fromTo(element, { y: '100%', opacity: '0%' },
        { y: '0%', opacity: '100%'}, '-=0.3')
      });
    });
});

    