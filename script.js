//This will input a cover that will slide top when you click the button.
const mysounds = 'audio/sounds.mp3'; 
const container = document.getElementById('container');
const cartoonDiv = document.getElementById('cartoon');
const slideUp = document.getElementById('slide-up');
const cover = document.getElementById('cover');
let sounds = document.getElementById('sounds');
let reveal = document.querySelector('.label');
const myMessage = document.getElementById('myMessage');
const overlayMessage = document.getElementById('overlay_message');
const messageContent = document.getElementById('message_content');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close');

const shinyButton = () =>{
 slideUp.addEventListener( 'click', () => {
                   cover.style.height = '0px';
                   slideUp.style.display='none'; 
                   cartoonDiv.style.animation ="move-to-right 5s linear";
                   setTimeout(() => {cartoonDiv.style.display = 'none'}, 4900)
                   reveal.style.animation ="reveal 4s linear 3s";
                   setTimeout(() => {reveal.style.width = '100%'}, 4900)
                   sounds.innerHTML =`<audio autoplay loop src="audio/sounds.mp3" type="audio/mpeg"></audio>`;
                })
}

shinyButton()

//This is the star around the whole page
const starts = () => {
    
    //initiate count = <how many stars> and i equal to 0 for iteration
    const count = 200;
    let i = 0;
    
    //Iterate the number of stars
    while(i < count){

        //Creates an element inside the document
        const star = document.createElement('i');

        //position the stars randomly
        const x = Math.floor(Math.random()* 100)
        const y = Math.floor(Math.random()* 100)
        
        // Measure of the star at random
        let size = Math.random()*4;

        star.style.top = `${x}%`;
        star.style.left = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        const duration = Math.random()*2;
        star.style.animationDuration =  2+ duration+'s';

        //Insert the star inside the document
        container.appendChild(star);


        i++
    }

}

//Output the stars
starts();


//My happy birthday message

const modalGift =()=>{
    myMessage.addEventListener('click', () => {
        modal.style.height="100%";
        messageContent.style.height="500px";
        messageContent.style.display = 'inline-block'
        messageContent.style.animation = 'fadeIn 1s'; 
    });
}

modalGift();

const modalClose =()=>{
    closeModal.addEventListener('click', () => {
        modal.style.height="0%";
        messageContent.style.height="0px";
        messageContent.style.animation = 'fadeOut 1s';
        setTimeout(() => {messageContent.style.display = 'none'}, 1000)
    });
}

modalClose()