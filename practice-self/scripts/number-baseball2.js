const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; 
for (let n = 0; n < 9; n += 1) { //n이 0부터 8까지 n = n + 1씩 증가 -> 1, 2, 3, 4, 5, 6, 7, 8, 9
    numbers.push(n + 1);    //numbers배열에 넣어라
}
const answer = [];
for (let n = 0; n < 4; n += 1) {    // n이 0부터 3까지  n = n + 1 씩 증가 -> 1, 2, 3, 4 (4개의 숫자를 뽑아라)
    const index = Math.floor(Math.random() * numbers.length);  //index를 무작위로 뽑는 것 number.length만큼 무작위로 뽑아라 (숫자로 하지 않고 numbers.length로 하는 이유는 numbers에서 숫자 하나씩 뽑아가면 숫자 개수가 달라지니까 numbers.length로 함)
    answer.push(numbers[index]); //numbers index에서 값을 뽑아와서 answer에 넣어라
    numbers.splice(index, 1); // numbers에서 뽑은 index 하나 자리를 없애라
}
console.log(answer); //랜덤으로 뽑은 숫자를 콘솔창에 띄워라


const tries = []; //도전하는 값
    function checkInput(input) {

      if (input.length !== 4) {  // 작성한 숫자가 4개가 아닐 때 
        return alert('4자리 숫자를 입력해 주세요.');
      }
      if (new Set(input).size !== 4) { //중복된 숫자가 있어서 작성된 숫자의 개수가 4가 나오지 않을 때
        return alert('중복되지 않게 입력해 주세요');
      }
      if (tries.includes(input)) {  // input에 작성한 숫자가 시도했던 숫자였는지
        return alert('이미 시도한 값입니다.');
      }
      return true; //위에 검증들을 다 통과하면 return true. return값이 true면 if문 안에 넣을 수 있음
    } 
    //검사하는 코드

    function defeated() {   //패배했을 때 보여줄 메시지
      const message = document.createTextNode(`패배! 정답은 ${answer.join(``)}`);
      $logs.appendChild(message); 
    }

    let out = 0;
    $form.addEventListener('submit', (event) => {   //확인을 눌렀을 때

      event.preventDefault();

      const value = $input.value; // 화면에 작성한 값을 value에 넣음

      if (checkInput(value)) {   //위에 checkinput이 true가 나왔다면

        if (answer.join('') === value) {  //answer의 배열 값과 value의 값이 같은지 확인한다. join은 배열을 문자열로 바꿔주는 메서드임
          $logs.textContent = '홈런';   //값이 같으면 홈런 출력
            return;
        }
        if (tries.length >= 9) { // 도전횟수 10 번이면 패배 출력
          defeated();   //패배 출력
            return;
        }
      } else {
      
      return;
    }
      // 몇 스트라이크 몇 볼인지 검사
      let strike = 0; 
      let ball = 0;
      //answer : 3146, value :1234
      for (let i = 0; i < answer.length; i++) { //answer의 개수만큼 for문을 돌림
        const index = value.indexOf(answer[i]);  //indexOf를 사용해서 answer의 값을 하나씩 확인해서 같은 위치와 같은 숫자가 있는지 확인해줌
        if (index > -1) { // 일치하는 숫자가 있을 경우 ( 일치하는 숫자가 있을 경우 index에 값이 들어가게 돼 인덱스가 0부터 시작하게 되므로 index>-1이 됨)
          if (index === i) { //인덱스의 자리가 같을 경우
            strike += 1;    //스트라이크 하나 증가
          } else { //숫자만 같을 경우
            ball += 1; //볼 하나 증가
          }
        }
      }
      if(strike === 0 && ball === 0) { // 스트라이크랑 볼이 모두 0일 경우
        out++;  //out 카운트 증가
        $logs.append(`${value}:아웃`, document.createElement(`br`));    //화면에 아웃출력
      } else{
      $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br')); //모두 0이 아닐 경우에는 현재 스트라이크 볼 상황 화면에 출력
    }
    if(out === 3) { //만약에 아웃이 3번이라면
      defeated();   //패배 함수 출력
      
      return;

    }
    $input.value='';
  
      tries.push(value); //한번 시도할 때마다 tries에 값 기록하기( 몇번 시도했는지 세기)
    });
    