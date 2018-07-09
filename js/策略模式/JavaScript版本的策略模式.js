/*
 * @Author: Ranran
 * @Date: 2018-07-09 15:44:23
 * @LastEditors: Ranran
 * @LastEditTime: 2018-07-09 17:07:37
 * @Description: 
 * @Email: ranran0036@163.com
 * @GitHub: github.com/LingsRanran
 */

let strategies = {
    'S':function(salary){
        return salary * 4;
    },
    'A':function(salary){
        return salary * 3;
    },
    'B':function(salary){
        return salary * 2;
    },
};

let calcBouns = function(level,salary){
    return strategies[level](salary);
}


console.log(calcBouns('S',10000));


console.log(calcBouns('B',5000));