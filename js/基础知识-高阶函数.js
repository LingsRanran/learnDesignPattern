//1. 函数作为参数传递(callback,Array.prototype.sort)
console.log([1,4,3].sort(function(a,b){
    return a-b;
}));//Array(3) [1, 3, 4]

/*
    2.函数作为返回值输出
        Ⅰ. 判断数据的类型 
        Ⅱ. getSingle

*/
//Ⅰ,
let Type = {};

for(let i=0,type;type = ['String','Array','Number'][i++];){
    (function(type){
        Type['is'+type] = function(obj){
            return Object.prototype.toString.call(obj) === `[object ${type}]`;
        }
    })(type);
}

console.log(Type.isString('xxx'));//true
console.log(Type.isArray([]));//true
console.log(Type.isNumber(18));//true

//Ⅱ,
let getSingle = function(fn){
    let ret;
    return function(){
        return ret || (ret = fn.apply(this,arguments))
    }
}

let getScript = getSingle(function(){
    //return document.createElement( 'script' ); //浏览器环境下才有document对象
})

let script1 = getScript();

let script2 = getScript();

console.log(script1 === script2);//浏览器环境 true

//3,高阶函数实现AOP
Function.prototype.before = function(beforefn){
    let _self = this;
    return function(){
        beforefn.apply(this,arguments);
        return _self.apply(this,arguments);
    }
}

Function.prototype.after = function(afterfn){
    let _self = this;
    return function(){
        let ret = _self.apply(this,arguments);
        afterfn.apply(this,arguments);
        return ret;
    }
}

function fn(){
    console.log('fn函数执行');
}

fn = fn.before(function(){
    console.log('fn函数之前执行');
}).after(function(){
    console.log('fn函数之后执行');
});

fn();