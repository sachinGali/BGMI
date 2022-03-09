'use strict'
document.querySelector('section').addEventListener('contextmenu', function (e) {
     console.log(e.key);
     if (e.key === undefined) {
     document.querySelector('body').style.display = 'none'
}
})

document.addEventListener('click', function (e) {
     let body = document.querySelector('body')
     let bullet = document.createElement('span')
     bullet.classList.add('bullet')
     let x = e.offsetX
     let y = e.offsetY
     bullet.style.left = x + 'px';
     bullet.style.top = y + 'px'
     body.appendChild(bullet)

    

     //add bullet sound on click
     let sound = document.getElementById('audio')
     sound.play();

     //appear blood on screen

     //add random blood image

     let images = [
          'url("/BattleFeild/blood1.png")',
          'url("/BattleFeild/blood2.png")'
     ]

     let blood = document.createElement('span')
     blood.classList.add('blood')

     let bg = images[Math.floor(Math.random() * images.length)]
     blood.style.backgroundImage = bg;

     blood.style.left = Math.random() * innerWidth + 'px'
     blood.style.top = Math.random() * innerHeight + 'px'
     body.appendChild(blood)

     //remove bullet & blood after 6 seconds
     setTimeout(function () {
          blood.remove();
          bullet.remove();
      }, 6000);

})

