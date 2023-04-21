const $screen = document.querySelector(`#screen`);
const $result = document.querySelector(`#result`);


let startTime;
let endTime;
const records=[];

let timeoutId;
$screen.addEventListener(`click`, (event) => {
    if(event.target.classList.contains(`waiting`)) {
        $screen.classList.remove(`waiting`);
        $screen.classList.add(`ready`);
        $screen.textContent = '초록색이 되면 클릭하세요';
        timeoutId = setTimeout(function() {
            startTime = new Date();
            $screen.classList.remove(`ready`);
            $screen.classList.add(`now`);
            $screen.textContent = '클릭하세요';
        }, Math.floor(Math.random() * 1000) + 2000) //2초에서 3초 사이 2000~ 3000사이 수

    } else if (event.target.classList.contains(`ready`)){

        clearTimeout(timeoutId);
        $screen.classList.remove(`ready`);
        $screen.classList.add(`waiting`);
        $screen.textContent = '너무 성급하시군요!';
    } else if (event.target.classList.contains(`now`)) {
        //끝 시간 재기
        //시간 차이 저장하기
        endTime = new Date();
        const current = endTime - startTime;
        records.push(current);
        const average = records.reduce((a, c) => a + c) / records.length;
        $result.textContent = `현재 ${current}ms, 평균: ${average}ms`;
        const topFive = records.sort((p, c) => p - c).slice(0,5);
        topFive.forEach((top, index) => {
            $result.append(
                document.createElement(`br`),
                `${index + 1}위: ${top}ms`,
            );
        });
        startTime = null;
        endTime = null;
        console.log(`topFive`);
        $screen.classList.remove(`now`);
        $screen.classList.add(`waiting`);
        $screen.textContent = '클릭해서 시작하세요';
        
        
    }


})

