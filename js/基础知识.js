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

