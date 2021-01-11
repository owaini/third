var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.menu__list a');

function indicator(e) {
    marker.style.left = e.offsetLeft +"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        indicator(e.target);
    })
})

var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 4000);

const slidshow = document.querySelector('.slideshow');

setInterval(()=> {
    const firstIcon = slidshow.firstElementChild;
    
    firstIcon.classList.add('faded-out');

    const thirdIcon = slidshow.children[8];

    thirdIcon.classList.add('light');

    thirdIcon.previousElementSibling.classList.remove('light')
    setTimeout(()=> {

        slidshow.removeChild(firstIcon);

     slidshow.appendChild(firstIcon);

        setTimeout(() => {
          firstIcon.classList.remove('faded-out');
        },500)

    }, 500)
    
}, 3000)
