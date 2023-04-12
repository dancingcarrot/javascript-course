
/*
const multiply = (param, param2) => param *param2;

console.log(multiply(2,3));
console.log(multiply(7,10));
*/

/*
function countPositive(nums) {

    //양수 개수를 0개로 초기화
    let positiveNumbers = 0;

    // 양수 만나면 1씩증가
    nums.forEach((num) => {
        if(num>0) {
            positiveNumbers ++;
        }
    });
    return positiveNumbers;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));
*/
/*
function addNum(array, num) {

    return array.map((value) => 
        value + num
    );
}

console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));
*/
/*
function removeEgg(foods) {
    
    return foods.filter((food) => food !== `egg`);
}

console.log(removeEgg([`egg`, `apple`, `egg`, `egg`, `ham`]));
*/
/*
function removeEgg(foods) {
    let eggsRemoved = 0;
    
    return foods.filter((food) => {

        if(food === `egg` & eggsRemoved < 2) {
            eggsRemoved ++;
            return false;
        }
        return true;

    });
}

console.log(removeEgg([`egg`, `apple`, `egg`, `egg`, `ham`]));
*/

