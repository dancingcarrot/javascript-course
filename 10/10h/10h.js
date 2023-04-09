String(25)
console.log('25'-5);
console.log('25' + 5);

// window.document
// window.console.log('window');
// window.alert('window');

function handleCostKeydown(event) {
        if(event.key === 'Enter') {
            calculateTotal();
            
        } //enter클릭시 calculate버튼을 클릭한거랑 같은 결과를 주자.
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    //이전 메시지들을 reset한다
    document.querySelector(`.js-total-cost`)
        .innerHTML = ``;
    document.querySelector(`.displayError`)
        .innerHTML = ``;

     
    if(cost < 0) {
        document.querySelector(`.displayError`)
            .innerHTML = `Error: cost cannot be less than $0`;

            return;
    }

    if (cost < 40 ) {
        cost += 10;
        console.log(cost);
    }
    document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;
}

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    }else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}
