var module = {
    id : 'hello',
    exports : {}
    };

var load = function (module) {
    
    function greet(name){
        
        console.log('Hello, ' + name + '!');
        
        }

    };

var exported = load(module);

save(module, exported);

