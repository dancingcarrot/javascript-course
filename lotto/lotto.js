


//숫자 45개 뽑고 6개 슬라이스하기

const candidate = Array(45).fill().map((v, i) => i+1);    //45개 배열 만들기
const shuffle = []; //배열 저장할 곳
//랜덤 값 저장하기
while (candidate.length > 0 ){
  const random = Math.floor(Math.random() * candidate.length); //무작위 인덱스를 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; //배열에 들어 있는 값을 꺼내어 
  shuffle.push(value); //shuffle 배열에 넣기
}

console.log(shuffle);

//뽑힌 공 보여주기
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
//보너스 공 보여주기
const bonus = shuffle[6];
console.log(winBalls, bonus);

//결과 공 위에 보여주기
const $result = document.querySelector(`#result`);

function colorize(number, $tag) {
  if(number < 10) {
    $tag.style.backgroundColor = 'red';
    $tag.style.color = 'white';
  } else if (number < 20) {
    $tag.style.backgroundColor = 'orange';
  }else if(number < 30) {
    $tag.style.backgroundColor = 'yellow';
  }else if(number < 40) {
    $tag.style.backgroundColor = 'blue';
    $tag.style.color = 'white';
  } else {
    $tag.style.backgroundColor = 'green';
    $tag.style.color='white';
  }
}
const $bonus = document.querySelector(`#bonus`);

const drawBall = (number, $target) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  colorize(number, $ball);
  $ball.textContent = number;
  $target.appendChild($ball);
};

for (let i = 0; i < 6; i++ ) {
  setTimeout(() => {
    drawBall(winBalls[i], $result);
   }, (i+1) * 1000);
}


setTimeout(() => {
 drawBall(bonus, $bonus);
},7000);
