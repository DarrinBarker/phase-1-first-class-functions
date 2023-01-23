function receivesAFunction(cb) {
    return(cb());
}
receivesAFunction(function (){return cb})

function returnsANamedFunction() {
    return function returnsANamedFunction(){};

}

function returnsAnAnonymousFunction() {
    return function() {};
    
}