## JS Benchmark

Inspired by [a blog article](http://raganwald.com/2013/03/28/trampolines-in-javascript.html) on using [thunks](https://en.wikipedia.org/wiki/Thunk) to achieve tail recursion, I decided to write a function to implement tail recursion in vanilla JS, and then benchmark that against traditional recursion and an iterative implementation of the same code.


These are my results on firefox:
```
10,000 iterations of sum_of_terms(3000)
recursive: 12618.739999999998 ms
tail_optimized: 11038.399999999994 ms
iterative: 18.37999999999738 ms

1,000 iterations of sum_of_terms(30,000)
recursive: N/A (stack overflow)
tail_optimized: 11177.24000000002 ms
iterative: 18.360000000015134 ms
```

**conclusion**

I was hoping that javascript's interpreter would be smart enough to figure out that the empty, anonymous function being allocated over could just be reused and that therefor the tail_optimized version of the code would be fast. But alas, it is not.

Maybe someone can run this on Safari, since apparently [it's the only browser that's implemented](https://kangax.github.io/compat-table/es6/) the new ES6 tail-call optimization spec.