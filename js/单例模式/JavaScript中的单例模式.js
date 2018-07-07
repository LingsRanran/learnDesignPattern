let MyApp = {};

MyApp.nameSpace = function(name){
    let parts = name.split('.');
    let current = MyApp;

    for(let i in parts){
        if(!current[parts[i]]){
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
}

MyApp.nameSpace('event');
MyApp.nameSpace('dom.style');

console.dir(MyApp)