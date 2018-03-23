document.addEventListener('DOMContentLoaded',function() {

  let startButton = document.getElementById('startButton');
  let resetButton = document.getElementById('reset');

  //Refresh page if reset button is executed
  resetButton.addEventListener('click', function(){
    window.location.reload();
  });

  let counter = 0; // 1 = Computer Start
  let playerCounter = 0; // 1 = Player Start
  let playerPos = 0; // vraiable for player's position
  let divider = 30; // Car's total steps
  let victory = 0; // 1 = Player wins, 2 = Computer wins
  let diff = 0; // variable to store difficulty level
  let speed = 0; //Speed of com's car

  startButton.addEventListener('click', function(){

    counter++; // Instructs computer to move
    startButton.innerHTML = 'Accelerate!!!'; //Change button value once game start
    let difficulty = document.getElementById('difficulty'); //Get difficulty

    //Run Game based on difficulty set
    if(diff == 0){
      if(difficulty.selectedIndex == 0){
        speed += 300;
      }else if(difficulty.selectedIndex == 1){
        speed += 200;
      }else{
        speed += 100;
      }
      diff++;
    }

    //Execute code for Com's car
    if(counter == 1){
      let comMoves = document.getElementById('car'); //Get Com Car
      let raceTrack1 = document.getElementById('raceTrack1'); //Get track 1

      let carLength = comMoves.clientWidth; //car length
      let trackLength = raceTrack1.clientWidth - carLength; //Length of track 1

      let perStep = trackLength / divider; //1 car movement

      let position = 0; //Starting position of Car

      let cRace = setInterval(function(){

        //if player wins, terminate process immediately
        if(victory == 1){

          clearInterval(cRace);

          }else{

          //Set current position for car
          position += perStep;

          if (position < trackLength){

          comMoves.style.transform = `translate(${position}px, 0px)`

            }else{

          clearInterval(cRace);
          alert('You lose, computer won!!!')
          victory = 2;

          }

       }

     }, speed);

     playerCounter = 1; //Get player to start

    }

    //Execute player's code
    if (playerCounter == 1){

      let player = document.getElementById('player'); //Get player
      let raceTrack2 = document.getElementById('raceTrack2'); //Get track 2

      let carLength = player.clientWidth; //Get car length
      let trackLength = raceTrack2.clientWidth - carLength; //Length of track 2

      let perStep = trackLength / divider;

      startButton.innerHTML = 'Accelerate!!!';

      if(playerPos < trackLength){

        //Code to stop player if computer won
        if(victory == 0){

          player.style.transform = `translate(${playerPos}px, 0px)`

        }else{

          alert('You lose, computer won!!!')

        }

      }else{

        alert('You Won!!!');
        victory = 1;

      }

      //Set current position for player
      playerPos += perStep;

    }

  });

});
