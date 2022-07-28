const mario = document.querySelector ('.mario');
const pipe = document.querySelector ('.pipe');
textStart = document.querySelector('text-start');
audioStart = new Audio('../audio/audio_theme.mp3')
audioGameOver = new Audio('../audio/audio_gameover.mp3');

//------------ funcao start-----------
const start = () => {

    document.getElementById ("text-start").style.color = "rgb(236,236,236)" ;

    pipe.classList.add ('pipe-animation');

    audioStart.play();
}

document.addEventListener ('keydown',start);




// -------funçao de pular-----------/
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
         
        mario.classList.remove('jump');
    },500);
}

document.addEventListener('keydown', jump);           


//----------- loop -----------------/
const loop = setInterval(()=> {

   const pipePosition = pipe.offsetLeft ;  
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');



    console.log(marioPosition);

      // para finalizar o jogo: 

   if ( pipePosition <= 120 && pipePosition > 0 && marioPosition <80){  // encostou e acabou o jogo  
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = '../img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';


    document.getElementById("text-start").style.color = "black";
    document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";

    function stopAudioStart(){  // funçao para parar o audio.theme
        audioStart.pause();
        }stopAudioStart();

    audioGameOver.play(); // chamada do audio gameover

    function stopAudio(){ // funcao para parar o audio gameover
        audioGameOver.pause();
        }setTimeout(stopAudio, 8000);

    clearInterval(loop);
   }

},10)



