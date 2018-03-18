require(benchmark.js)

var time_it = function(iters, func, args) {
    var start_time = performance.now()
    for (var i = iters; i > 0; i--) {
        func.apply(func, args)
    }
    return performance.now() - start_time
}

console.log('10,000 iterations of sum_of_terms(3000)')
console.log('recursive:', time_it(10000, sum_of_terms_recursive, [3000]), 'ms')
console.log('tail_optimized:', time_it(10000, sum_of_terms_tail_optimized, [3000]), 'ms')
console.log('iterative:', time_it(10000, sum_of_terms_iterative, [3000]), 'ms')


console.log('1,000 iterations of sum_of_terms(30,000)')
console.log('recursive: N/A (stack overflow)')
console.log('tail_optimized:', time_it(1000, sum_of_terms_tail_optimized, [30000]), 'ms')
console.log('iterative:', time_it(1000, sum_of_terms_iterative, [30000]), 'ms')
