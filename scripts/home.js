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
            start: 'top 90%',
            end: 'bottom 90%',
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
    


// ***** TP06 ***** //

const animation = document.querySelector('.animation-idle');
let isScrolling;

// ***** Instruction 2 ***** //
window.addEventListener('scroll', function() {
	window.clearTimeout( isScrolling );
  animation.classList.add("is-scrolling");
  
  // ***** Instruction 3 ***** //
	isScrolling = setTimeout(function() {
		console.log( 'Scrolling has stopped.' );
    animation.classList.remove("is-scrolling");
	}, 250);
});

// ***** Instruction 1 ***** //
let anim = gsap.timeline({
  scrollTrigger: {
    trigger: '.level',
    
    onUpdate: (e) => {
      
      if(e.progress){
        // ***** Instruction 4 ***** //
         if(e.direction==-1){
          animation.classList.add("direction-up");
          animation.classList.remove("direction-down");
        }else{
          // ***** Instruction 5 ***** //
          animation.classList.add("direction-down");
          animation.classList.remove("direction-up");
        }
      }
    }
  
  }
});

const formParole = document.querySelector('.fromParole');

const text_paroles = document.querySelector('.parole');

formParole.addEventListener("submit", function(event) { 
  let input = document.querySelector('.form-control').value;
  let spinner = document.querySelector('.spinner');
  event.preventDefault();
  const newLineToBr = function(str){
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
  if(input != ""){
    spinner.style.display = 'block';
    fetch(`https://api.lyrics.ovh/v1/caravan palace/${input}`) 
      .then(data => data.json())
      .then(result=>{
        text_paroles.innerHTML = newLineToBr(result.lyrics);
        spinner.style.display = 'none';
      })
      .catch(error => { 
        spinner.style.display = 'none';
        text_paroles.innerHTML = (`Désolé, les paroles n'ont pu être trouvées. En voici la raison:. ${error}`)
      });
    }
});
//lone digger et wonderland