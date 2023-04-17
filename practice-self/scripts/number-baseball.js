const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

//랜덤 값 뽑기
const numbers = [];
for(let n = 0; n < 9; n += 1) {
    numbers.push(n+1);
}

const answer = [];
for(let n = 0; n < 4; n += 1) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}

console.log(answer);

//도전하기
const tries = [];
    let out =0;
    // 반복해서 실행해야 하는 구문이기 때문에 함수 사용해줌
    // 조건에 맞는지 확인해주는 함수
    function checkInput(input) { 
        
        if (input.length !== 4) { //input에 적은 숫자가 4개가 아닐 경우
            return alert('4자리 숫자를 입력해주세요');
        }
        if (new Set(input).size !== 4) { //중복된 숫자가 있을 경우(new Set이 중복된 숫자를 제거해줌)
            return alert('중복되지 않게 해주세요');
        }
        if (tries.includes(input)) { //시도했던 값인지 확인하기  (includes가 input에 tries와 같은 값이 있는 지 확인해줌)
            return alert('이미 시도한 값입니다.');
        }
        //이 모든 경우를 다 통과했다면
        return true;
    }
    
    function defeated() {
        const message = document.createTextNode(`패배! 정답은 ${answer.join(``)}`);
                $logs.appendChild(message); 
        $input.value='';
    }

    //홈런 검사하기
    $form.addEventListener('submit', (event) => {

        event.preventDefault(); //form을 submit하면 새로고침이 돼서 초기화가 되기 때문에 그 기본속성을 막아줌
        const value = $input.value; 

        if(!checkInput(value)) {
            return;          
        } 
        if(answer.join('') === value ){ //랜덤 숫자가 input값과 같다면
                $logs.textContent = '홈런!';
                return;
        }
        if(tries.length >= 9) { //시도한 횟수가 10번 이상일 때
             defeated();
                return;
        }
        

        //몇 스트라이크 몇 볼인지 검사하기
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < answer.length; i++) {

            //answer배열안에 특정 값이 있나 확인하기
            const index = value.indexOf(answer[i]);

            //먼저 숫자나 자리가 일치하는 경우가 있는가?
            if(index > -1) { //일치하는 경우가 있을 경우
                if(index === i) { //인덱스의 자리가 같을 경우
                    strike += 1;
                } else { //자리가 같지않을 경우
                    ball += 1;
                }
            }
        } 
        //스트라이크도 없고 볼도 없는 경우
        if(strike === 0 && ball === 0) {
            out++;
            $logs.append(`${value}:아웃`, document.createElement(`br`));
        } else {
            $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br')); 
        }
        //아웃을 3번 했다면
        if( out === 3) {
            defeated();
            return;
        }

        $input.value='';
        tries.push(value); //몇 번 시도했는지 저장하기

    });

    