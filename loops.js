
var make_tail_recursive = function(func) {
    return function() {
        // console.log(arguments)
        var args = Array.prototype.slice.call(arguments, 0)
        // console.log(func, args)
        var output = func.apply(func, args)
        // console.log('first call', output)
        while (output instanceof Function) {
            output = output()
            // console.log('recursive call', output)
        }
        return output
    }
}

var sum_of_terms_recursive = function(n) {
    if (n > 0) return n + sum_of_terms_recursive(n - 1)
    return n
}

var sum_of_terms_tail_recursive = function(n) {
    make_tail_recursive(function tail(acc, n) {
        // console.log('tail', acc, n)
        if (n > 0) return function() {return tail(acc + n, n - 1)}
        return acc
    })(0, n)
}

var sum_of_terms_iterative = function(n) {
    var acc = 0
    for (var i = n; i > 0; i--) {
        acc += i
    }
    return acc
}
