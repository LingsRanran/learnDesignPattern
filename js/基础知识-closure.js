//1.封装变量
let cache = {};

let mult = function(){
    let args = Array.prototype.join.call(arguments,',');
    if(cache[args]){
        console.log(`找到了之前算过的${args}`);
        return cache[args];
    }
    let a = 1;
    for(let i=0,l=arguments.length;i<l;i++){
        a = a * arguments[i];
    }

    return cache[args] = a;
};


console.log(mult(1,2,3));
console.log(mult(1,2,3));