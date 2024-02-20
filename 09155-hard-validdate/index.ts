/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard

  ### Question

  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.

  **Leap year is not considered**

  Good Luck!

  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```

  > View on GitHub: https://tsch.js.org/9155
*/

/* _____________ Your Code Here _____________ */
type twenty_eight = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | 
'11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | 
'24' | '25' | '26' | '27' | '28';
type thirty = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | 
'11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | 
'24' | '25' | '26' | '27' | '28' | '29' | '30';
type thirty_one = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | 
'11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | 
'24' | '25' | '26' | '27' | '28' | '29' | '30' | '31';
type month = {
  '01' : thirty_one,
  '02' : twenty_eight,
  '03' : thirty_one,
  '04' : thirty,
  '05' : thirty_one,
  '06' : thirty,
  '07' : thirty_one,
  '08' : thirty_one,
  '09' : thirty,
  '10' : thirty_one,
  '11' : thirty,
  '12' : thirty_one
};
type concat<T extends string, U extends string> = `${T}${U}`;
type ValidDate<T extends string> =
  T extends `${infer A}${infer B}${infer C}${infer D}` ? 
    concat<A, B> extends keyof month ? 
      concat<C, D> extends month[concat<A, B>] ? true : false
    : false
  : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9155/answer
  > View solutions: https://tsch.js.org/9155/solutions
  > More Challenges: https://tsch.js.org
*/
