function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}
let num = 10;
res = factorial(num)
console.log(res);