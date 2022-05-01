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


let animTete = document.querySelector('.anim');
let body = document.querySelector('body');
let isScrolling;


window.addEventListener('scroll', () => {
    isScrolling = setTimeout( () => {
        animTete.className = 'idle'
    }, 250);
});


let anim = gsap.timeline({
    scrollTrigger: {
      trigger: '.animation',
        onUpdate: (e) => {
            if (e.progress) {
                if(e.direction==-1){
                    animTete.className = "up"
                } else {
                    animTete.className = "down"
                }
            }
        }
    }
});

let findtitre = document.querySelector('.findtitre');
let findbtn =  document.querySelector('.recherche');
let spinner = document.querySelector('.spinner');
let parolesdiv = document.querySelector('.paroles');


const newLineToBr = function(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

findbtn.addEventListener('click', function(e){
  e.preventDefault();
  spinner.style.display = 'inline-block';
  
  if(findtitre.value == ''){
    findtitre.value = "Veuillez mettre le nom d'un titre ici";
    spinner.style.display = 'none';
    
  }
  else{
    fetch(`https://api.lyrics.ovh/v1/caravan palace/${findtitre.value}`) 
    .then(data => data.json()) 
    .then(actor => { 
      const newParoles = newLineToBr(actor.lyrics)
      spinner.style.display = 'none'
      parolesdiv.innerHTML = `<br><h2> Paroles de: ${findtitre.value} </h2><br> ${newParoles};`
    })
    .catch(error => {
      spinner.style.display = 'none'
      parolesdiv.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison: ${error}`});
  }
})


