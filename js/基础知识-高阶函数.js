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
    let _self = this;// 保存原函数的引用 
    return function(){// 返回包含了原函数和新函数的"代理"函数 
        beforefn.apply(this,arguments); // 执行新函数，修正 this 
        return _self.apply(this,arguments);  // 执行原函数 
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

//3. 高阶函数的其他应用
//Ⅰ， currying(部分求值)
let currying = function(fn){
    let args = [];

    return function(){
        if(arguments.length === 0){
            return fn.apply(this,args);
        }else{
            [].push.apply(args,arguments);
            return arguments.callee;
        }
    }
};

let cost = (function(){
    let money = 0;

    return function(){
        for(let i=0;i<arguments.length;i++){
            money += arguments[i];
        }
        return money;
    }
})();

cost = currying(cost);

console.log(cost(100));//未求值
console.log(cost(200));//未求值
console.log(cost(300));//未求值

console.log(cost());//此时求值 600

//Ⅱ，uncurrying
Function.prototype.uncurrying = function(){
    let self = this;
    return function(){
        let obj = Array.prototype.shift.call(arguments);
        return self.apply(obj,arguments);
    }
};

let push = Array.prototype.push.uncurrying();

(function(){
    push(arguments,5);
    console.log(arguments);
})(1,2,3,4);