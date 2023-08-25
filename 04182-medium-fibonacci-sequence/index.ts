/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */
type to_arr<T, C extends any[] = []> = C['length'] extends T ? C : to_arr<T, [any, ...C]>;
type add<T, U> = [...to_arr<T>, ...to_arr<U>]['length'];
type substract<T, U, C extends any [] = []> = T extends U ? C['length'] : substract<T, add<U, 1>, [any, ...C]>;
type Fibonacci<T> = T extends 1 | 2 ? 1 : add<Fibonacci<substract<T, 2>>, Fibonacci<substract<T, 1>>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
