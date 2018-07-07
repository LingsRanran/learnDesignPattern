//1.封装变量
/* let cache = {};

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


console.log(mult(1,2,3));//6
console.log(mult(1,2,3));//找到了之前算过的1,2,3  //6 */

//将上述代码的cache也写入函数
let mult = (function(){
    let cache = {};
    let calculate = function(){
        let a = 1;
        for(let i=0;i<arguments.length;i++){
            a *= arguments[i];
        };
        return a;
    };

    return function(){
        let args = Array.prototype.join.call(arguments,',');
        if(args in cache){
            console.log(`找到了之前算过的${args}`);
            return cache[args];
        }
        return cache[args] = calculate.apply(null,arguments);
    }
})();

console.log(mult(1,2,3));//6
console.log(mult(1,2,3));//找到了之前算过的1,2,3 //6