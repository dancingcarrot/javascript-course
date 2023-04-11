// title 바꾸기
let messages =2;
setInterval(function() {
    if(document.title ===  `App`) {
        document.title = `(${messages}) New message`;
    } else {
        document.title = `App`;
    }
}, 1000);

