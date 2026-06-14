# JavaScript String Methods — Cheat Sheet

> Quick reference for all common String methods with one-liner examples. Strings are **immutable** — every method returns a *new* string, never mutates the original.

---

## Case & Whitespace

| Method          | Example                          | Result          |
| :-------------- | :------------------------------- | :-------------- |
| `toUpperCase()` | `"playwright".toUpperCase()`     | `"PLAYWRIGHT"`  |
| `toLowerCase()` | `"PLAYWRIGHT".toLowerCase()`     | `"playwright"`  |
| `trim()`        | `"  hello  ".trim()`             | `"hello"`       |
| `trimStart()`   | `"  hello  ".trimStart()`        | `"hello  "`     |
| `trimEnd()`     | `"  hello  ".trimEnd()`          | `"  hello"`     |

---

## Search & Check

| Method          | Example                                | Result              |
| :-------------- | :------------------------------------- | :------------------ |
| `includes()`    | `"playwright".includes("play")`        | `true`              |
| `startsWith()`  | `"https://x".startsWith("https")`      | `true`              |
| `endsWith()`    | `"file.js".endsWith(".js")`            | `true`              |
| `indexOf()`     | `"banana".indexOf("a")`                | `1`                 |
| `lastIndexOf()` | `"banana".lastIndexOf("a")`            | `5`                 |
| `search()`      | `"login?x=1".search(/login/)`          | `0`                 |
| `match()`       | `"a1b2".match(/\d/g)`                  | `["1","2"]`         |
| `matchAll()`    | `[..."a1b2".matchAll(/\d/g)]`          | array of matches    |
| `at()`          | `"play".at(-1)`                        | `"y"`               |
| `charAt()`      | `"play".charAt(0)`                     | `"p"`               |

---

## Extract & Split

| Method                  | Example                        | Result                |
| :---------------------- | :----------------------------- | :-------------------- |
| `slice(start, end)`     | `"playwright".slice(0, 4)`     | `"play"`              |
| `substring(start, end)` | `"playwright".substring(4, 9)` | `"wrigh"`             |
| `split(separator)`      | `"a,b,c".split(",")`           | `["a", "b", "c"]`     |
| `charCodeAt(index)`     | `"A".charCodeAt(0)`            | `65`                  |
| `String.fromCharCode()` | `String.fromCharCode(65)`      | `"A"`                 |

---

## Replace

| Method         | Example                                  | Result           |
| :------------- | :--------------------------------------- | :--------------- |
| `replace()`    | `"test.js".replace(".js", ".ts")`        | `"test.ts"`      |
| `replaceAll()` | `"a.b.c".replaceAll(".", "-")`           | `"a-b-c"`        |

---

## Build & Pad

| Method       | Example                         | Result        |
| :----------- | :------------------------------ | :------------ |
| `concat()`   | `"Hello".concat(" ", "World")`  | `"Hello World"` |
| `repeat()`   | `"ab".repeat(3)`                | `"ababab"`    |
| `padStart()` | `"5".padStart(3, "0")`          | `"005"`       |
| `padEnd()`   | `"5".padEnd(3, "0")`            | `"500"`       |

---

## Type Conversion

| Method         | Example                  | Result   | Direction         |
| :------------- | :----------------------- | :------- | :---------------- |
| `.toString()`  | `(200).toString()`       | `"200"`  | Number → String   |
| `.toString()`  | `true.toString()`        | `"true"` | Boolean → String  |
| `Number()`     | `Number("42")`           | `42`     | String → Number   |
| `parseInt()`   | `parseInt("42px")`       | `42`     | String → Integer  |
| `parseFloat()` | `parseFloat("3.14rem")`  | `3.14`   | String → Float    |

---

## slice() vs substring()

| Feature             | `slice()`       | `substring()`       |
| :------------------ | :-------------- | :------------------ |
| Negative index      | counts from end | treated as `0`      |
| When `start > end`  | returns `""`    | auto-swaps them     |
| Works on Arrays     | Yes             | No                  |

```js
"playwright".slice(-4)        // "ight"       ← negative works
"playwright".substring(-4)    // "playwright" ← treated as 0

"hello".slice(3, 0)           // ""           ← returns empty
"hello".substring(3, 0)       // "hel"        ← auto-swapped to (0, 3)
```

> **Tip:** Use `slice` by default — it handles negatives and works on arrays too.
