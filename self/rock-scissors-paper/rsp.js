const $computer = document.querySelector(`#computer`);
const $scissors = document.querySelector(`#scissors`);
const $rock = document.querySelector(`#rock`);
const $paper = document.querySelector(`#paper`);
const $score = document.querySelector('#score');
const IMG_URL =`./rsp.png`;
$computer.style.background = `url(${IMG_URL}) -464px 0`;
$computer.style.backgroundSize = `auto 200px`;

const rspX = {
  scissors : '0', //가위
  rock: '-220px', // 바위
  paper:'-440px' //보
};

let computerChoice = 'scissors';
const changeComputerHand = () => {
  if (computerChoice === 'scissors') {
    computerChoice = 'rock';
  } else if (computerChoice === 'rock') {
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    computerChoice = 'scissors';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = `auto 200px`;

}
let intervalId = setInterval(changeComputerHand, 50);

const scoreTable = {
  rock : 0,
  scissors : 1,
  paper:-1,
};

let clickable = true; 
let computer = 0;
let me = 0;
const clickButton = (event) => { 
  if(clickable) { //clickable이 true일 때 내부코드 실행
      clearInterval(intervalId);
      clickable = false; //버튼을 클릭하면 clickable false로 바뀜
  //점수 계산 및 화면 표시
  const myChoice = event.target.textContent === '바위'
    ? 'rock'
    : event.target.textContent === '가위'
      ? 'scissors'
      : 'paper';
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;

    let message;

    if ([2, -1].includes(diff)) {
      me += 1;
      message = '승리';
    } else if ([-2, 1].includes(diff)) {
      computer += 1;
      message = '패배';
    } else  {
      message = '무승부';
    }
    if (me === 3) {
      $score.textContent = `나의 승리 ${me}:${computer}`;
    } else if (computer === 3) {
      $score.textContent = `컴퓨터의 승리 ${me}:${computer}`;
    } else {
      $score.textContent = `${message} ${me}:${computer}`;
      setTimeout(() => {
        clickable = true;
        intervalId = setInterval(changeComputerHand, 50);
      }, 1000);
    }
    
}
};

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
