
let messages = 2;
//interval 함수셋팅
let intervalId; 

let isDisplayingNotification;

displayNotification();

function displayNotification() {
    //알림이 띄어지고 있다면 리턴해라
    if(isDisplayingNotification) {
        return;
    }

    isDisplayingNotification = true;

    intervalId = setInterval(function() {
       
            if(document.title ===  `App`) {
                document.title = `(${messages}) New message`;
            } else {
                document.title = `App`;
            }
            
            
        }, 1000);
        
    }
    
    //메시지가 0일 때 알림 띄우기를 멈춰라
    //알림띄우기를 false로 바꾸고 clearInterval한다
    //App을 띄운다.
    function stopNotification() {
        isDisplayingNotification = false;

        clearInterval(intervalId);
        document.title = `App`;
   
}

