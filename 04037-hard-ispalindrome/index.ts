/*
  4037 - IsPalindrome
  -------
  by jiangshan (@jiangshanmeta) #hard #string

  ### Question

  Implement type ```IsPalindrome<T>``` to check whether  a string or number is palindrome.

  For example:

  ```typescript
  IsPalindrome<'abc'> // false
  IsPalindrome<121> // true
  ```

  > View on GitHub: https://tsch.js.org/4037
*/

/* _____________ Your Code Here _____________ */
type NumberToString<T extends number> = `${T}`;
type StringToArray<T, C extends unknown[] = []> = T extends `${infer L}${infer R}` ?
  StringToArray<R, [...C, L]>
: C;
type ReverseArray<T, C extends unknown[] = []> =  T extends [...infer Head, infer Tail] ? ReverseArray<Head, [...C, Tail]> : C;
type EqualArrays<T, U> = T extends [infer L, ...infer R] ? U extends [infer LL, ...infer RR] ? Equal<L, LL> extends true ? EqualArrays<[...R], [...RR]> : false : true : true;
type IsPalindrome<T> = T extends number ? EqualArrays<StringToArray<NumberToString<T>>, ReverseArray<StringToArray<NumberToString<T>>>> : EqualArrays<StringToArray<T>, ReverseArray<StringToArray<T>>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abba'>, true>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<2332>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4037/answer
  > View solutions: https://tsch.js.org/4037/solutions
  > More Challenges: https://tsch.js.org
*/
