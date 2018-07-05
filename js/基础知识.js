let duck = {
    name:'本来就会嘎嘎叫的鸭',
    duckSinging:function(){
        console.log('嘎嘎嘎...');
    }
};

let chicken = {
    name:'会嘎嘎叫的鸡',
    duckSinging:function(){
        console.log('嘎嘎嘎...');
    }
};

let choir = [];//合唱团

let joinChoir = function(animal){
    if(animal && typeof animal.duckSinging === 'function'){
        choir.push(animal);
        console.log(`恭喜${animal.name}加入合唱团`);
        console.log(`合唱团已有数量：${choir.length}`);
    }
};

joinChoir(duck);
joinChoir(chicken);

//借用其他对象的方法
class A {
    constructor(name) {
        this.name = name;
    }
}

class B {
    constructor() {
        A.constructor.apply(this, arguments);
    }
    getName() {
        return this.name;
    }
}

let b = new B('Ranran');
let a = new A('IronMan');


console.log(b.getName());//借用了A的构造函数
console.log(b.getName.apply(a));//借用了B的getName方法
console.log(b.getName.call(a));//借用了B的getName方法
console.log(typeof a);//

(function(){
    Array.prototype.push.call(arguments,3);
    console.log(arguments);//Arguments(3) [1, 2, 3]
})(1,2);

let c = {};
Array.prototype.push.call(c,'first');
console.log(c.length);
console.log(c)