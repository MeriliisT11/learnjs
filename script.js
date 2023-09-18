function hello(name= 'Nimetu', age = Infinity){
    let yearText = 'years';
    if(age === 1 || age === -1){
        yearText = 'year';
    } 
        // console.log ('hello' + name + 'you are' + age + 'years old');
    console.log (`hello ${name} and you are ${age} ${yearText} old`);

}

hello('Meri', 1);
hello('Liis', 19);
hello('Mari', 22);
hello();

function volume(h, l, w){
    return h*w*l;
}

let answer = volume(4,2,5);
console.log(answer);

function numbers(i) {
    console.log(i);
    if(i<10){
    numbers(i+1);
    }
}
numbers(0);

let nums = [0, 1, 2, 3, 4];

function print(num){
    console.log(num);
}

nums.forEach(print);
nums.forEach(function (num){
    console.log('Num is ' + num);
});

nums.forEach((num) => {
    console.log('Num is ' + num);
});

nums.forEach(num => {
    console.log('Num is ' + num);
});
nums.forEach(num => console.log('Num is ' + num));

let sums = nums.map(num => {
    return num + 10;
});
console.log(sums);

sums = nums.map(num => num + 10);
console.log(sums);

let sum = nums.reduce((total, num) => total+num);
console.log(sum);

let sorted = nums.sort((a,b) => {
    if(a > b) {
        return -1;
    } else if(a < b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(sorted);

console.log(Math.PI);
console.log(Math.round (Math.random () * 50 ) + 50);