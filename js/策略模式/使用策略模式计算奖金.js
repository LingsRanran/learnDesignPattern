/*
 * @Author: Ranran
 * @Date: 2018-07-09 15:44:44
 * @LastEditors: Ranran
 * @LastEditTime: 2018-07-09 17:07:31
 * @Description: 
 * @Email: ranran0036@163.com
 * @GitHub: github.com/LingsRanran
 */

class PerformanceS{
    calculate(salary){
        return salary * 4;
    }
};

class PerformanceA{
    calculate(salary){
        return salary * 3;
    }
};

class PerformanceB{
    calculate(salary){
        return salary * 2;
    }
};


class Bouns{
    constructor(){
        this.salary = null;
        this.strategy = null;
    }

    setSalary(salary){
        this.salary = salary;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    getBouns(){
        return this.strategy.calculate(this.salary);
    }
};

let bouns = new Bouns();

bouns.setSalary(10000);
bouns.setStrategy(new PerformanceS());

console.log(bouns.getBouns());

bouns.setStrategy(new PerformanceA());
console.log(bouns.getBouns());