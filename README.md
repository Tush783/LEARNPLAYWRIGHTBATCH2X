# LEARNPLAYWRIGHTBATCH2X

> A structured, progressive JavaScript curriculum designed to build deep language fluency — from first principles through advanced functional patterns — as a foundation for professional Playwright test automation.

---

## Table of Contents

- [About This Repository](#about-this-repository)
- [Who This Is For](#who-this-is-for)
- [Curriculum Overview](#curriculum-overview)
- [Project Structure](#project-structure)
- [Chapter Reference](#chapter-reference)
- [Getting Started](#getting-started)
- [Learning Path](#learning-path)
- [Requirements](#requirements)

---

## About This Repository

This repository is a chapter-by-chapter JavaScript curriculum built for QA engineers and developers who want a solid language foundation before writing production-grade Playwright automation. Every chapter contains numbered scripts that progress logically — from concept introduction, to practical examples, to real-world scenarios, to interview-level questions.

The goal is not just to memorize syntax, but to genuinely understand *how* JavaScript works under the hood — so that when you write test automation, you write it with confidence.

---

## Who This Is For

| Audience | How to use this repo |
| :------- | :------------------- |
| **Beginner** | Follow chapters 01–06 in order to establish a solid JS foundation |
| **Intermediate** | Jump to chapters 07–12 for control flow, arrays, and functions |
| **QA / SDET** | Use `IQ` files throughout each chapter to prepare for technical interviews |
| **Playwright learner** | Complete all chapters before moving into Playwright — this is your prerequisite |

---

## Curriculum Overview

| # | Chapter | Key Concepts |
| :-: | :------ | :----------- |
| 01 | Basics | Environment setup, Node.js, first script |
| 02 | JavaScript Concepts | Identifiers, naming rules, comments |
| 03 | Identifiers & Literals | VS Code shortcuts, naming conventions |
| 04 | Advanced JS Concepts | `var` / `let` / `const`, scope, hoisting, temporal dead zone |
| 05 | Literals | All literal types — string, number, boolean, null, undefined, template |
| 06 | Operators | Arithmetic, comparison, logical, ternary, nullish coalescing, type operators |
| 07 | If / Else | Conditionals, real-world branching, leap year, API response handling |
| 08 | Switch Statement | Multi-way branching, fall-through, case grouping |
| 09 | User Input | `readline`, `prompt-sync`, interactive console programs |
| 10 | Loops | `for`, `while`, `do...while`, `for...of`, `for...in`, `forEach` |
| 11 | Arrays | Creation, access, mutation, transformation, searching, sorting, slicing |
| 12 | Functions | All 4 types, arrow functions, IIFE, closures, higher-order functions, pure functions |
| 13 | Strings | String methods, searching, transformation, type conversion, cheat sheet |

---

## Project Structure

```
LEARNPLAYWRIGHTBATCH2X/
│
├── chapter_01_Basics/
├── chapter_02_Javascript_Concepts/
├── chapter_03_Identifier_Literals/
├── chapter_04_Javascript_Concepts/
├── chapter_05_Literal/
├── chapter_06_double_triple_equal.js/
├── chapter_07_If_else/
├── chapter_08_Switch_Statement/
├── chapter_09_User_Input/
├── chapter_10_Loops/
├── chapter_11_Arrays/
├── chapter_12_Functions/
└── chapter_13_Strings.js/
    └── javascript_Stringcheatsheet.md   ← String methods quick reference
```

---

## Chapter Reference

### Chapter 01 — Basics
> `chapter_01_Basics/`

Environment verification and first steps in JavaScript with Node.js.

| File | Topic |
| :--- | :---- |
| `01_Basics.js` | Hello World and console output |
| `02_JS.js` | Script structure and execution model |
| `03_JS_Verify_Setup.js` | Confirming the Node.js environment |
| `04_HotCode.js` | Hot reloading during active development |

---

### Chapter 02 — JavaScript Concepts
> `chapter_02_Javascript_Concepts/`

The building blocks of JavaScript: identifiers, naming rules, and code comments.

| File | Topic |
| :--- | :---- |
| `00_All_Identifier_Examples.js` | All identifier patterns consolidated |
| `05_JS_Basics.js` | High-level language overview |
| `06_JS_Identifier_Rules.js` | Valid and invalid naming rules |
| `07_Identifier_Part2.js` | Edge cases and advanced naming patterns |
| `08_Comments.js` | Single-line, multi-line, and inline comments |

---

### Chapter 03 — Identifiers & Literals Reference
> `chapter_03_Identifier_Literals/`

VS Code keyboard shortcut references for Windows and macOS, and identifier naming conventions.

---

### Chapter 04 — JavaScript Concepts (Advanced)
> `chapter_04_Javascript_Concepts/`

Deep understanding of variable declarations, scope rules, and JavaScript's hoisting mechanism.

| File | Topic |
| :--- | :---- |
| `09_var_let_const.js` | Side-by-side comparison of all three declarations |
| `10_functions.js` | Function declaration fundamentals |
| `11_var_explained.js` | How `var` behaves and why it causes bugs |
| `12_let_people_love.js` | Why the industry moved to `let` |
| `13_const_explained.js` | When and why to reach for `const` |
| `14_var_functionscope.js` | `var` scoping inside functions |
| `15_let_scope.js` | Block-level scoping with `let` |
| `16_Hoisting.js` | Variable hoisting explained step by step |
| `17_Hoisting_fn.js` | Function declaration hoisting |
| `18_let_hoisting.js` | `let` and the temporal dead zone |
| `19_let_hoisting_block.js` | Block-scoped hoisting edge cases |
| `20_let_const.js` | Combined `let` / `const` real-world scenarios |
| `21_Jr_QA.js` | Interview questions for junior QA engineers |

---

### Chapter 05 — Literals
> `chapter_05_Literal/`

Every literal type in JavaScript with clear, runnable examples.

| File | Topic |
| :--- | :---- |
| `22_Literal.js` | Introduction to JavaScript literals |
| `23_null_undefined.js` | The critical distinction between `null` and `undefined` |
| `24_null.js` | Null behavior and use cases |
| `25_Literal_All.js` | All literal types in a single reference file |
| `26_Literal_Number_all.js` | Integer, float, hex, binary, and octal formats |
| `27_String.js` | String literal syntax |
| `28_Template_Literal.js` | Template literals and `${}` interpolation |
| `29_Backtick_single_and_double_string.js` | Comparing all three quote styles |

---

### Chapter 06 — Operators
> `chapter_06_double_triple_equal.js/`

Comprehensive coverage of every JavaScript operator — from arithmetic to nullish coalescing.

| File | Topic |
| :--- | :---- |
| `30_Operator.js` | Operator categories overview |
| `31_Arithmetic_OP.js` | `+`, `-`, `*`, `/` |
| `32_Modulus_OP.js` | `%` remainder operator |
| `33_Expo_OP.js` | `**` exponentiation |
| `34_IQ.js` | Interview question |
| `35_Comparison_OP.js` | `>`, `<`, `>=`, `<=` |
| `36_Comparision_Strict_Loose.js` | `==` vs `===` — loose vs strict equality |
| `37_IQ_Loose_Strict.js` | IQ: equality traps |
| `38_Confusion_Comparsion.js` | Common comparison pitfalls |
| `39_Logical_Op.js` | `&&`, `\|\|`, `!` logical operators |
| `40_String_Con_Op.js` | String concatenation with `+` |
| `41_Ternary_Op.js` | Ternary `? :` conditional operator |
| `42_Type_Op.js` | `typeof` type checking |
| `43_Incre_Decre_Op.js` | `++` and `--` operators |
| `44_Null_Op.js` | Nullish coalescing `??` |
| `45_Post_Incre.js` | Post-increment vs pre-increment |
| `46_IQ_Increment_D.js` | IQ: increment/decrement traps |
| `47_Advance_ID.js` | Advanced operator interview questions |

---

### Chapter 07 — If / Else
> `chapter_07_If_else/`

Conditional logic from basic `if` blocks through real-world API response handling and leap year logic.

| File | Topic |
| :--- | :---- |
| `48_If_Else.js` | Basic `if` / `else` |
| `49_If_Elseif_else.js` | Multi-branch `else if` chains |
| `50_Real_If_else.js` | Real-world conditional example |
| `51_API_If_Else.js` | Handling API HTTP status codes conditionally |
| `52_IQ_If_Else.js` | Interview question |
| `53_If_Else_Real.js` | Advanced real-world scenario |
| `54_IQ.js` | Interview question |
| `55_IE.js` | Edge cases and boundary conditions |
| `56_IQ_1.js` | Interview question 1 |
| `57_IQ_2.js` | Interview question 2 |
| `58_Leap_Year.js` | Leap year calculator |
| `Assignment1–5.js` | Practice assignments |

---

### Chapter 08 — Switch Statement
> `chapter_08_Switch_Statement/`

Multi-way branching, fall-through behavior, default cases, and grouping multiple cases together.

| File | Topic |
| :--- | :---- |
| `59_Switch.js` | Basic switch syntax |
| `60_No_Break.js` | Fall-through behavior without `break` |
| `61_Default.js` | The default case |
| `62_Real_Time_Example.js` | Month and day real-world example |
| `63_Switch_Group.js` | Grouping multiple cases under one handler |
| `64_IQ.js` | Interview question |
| `66_IQ3.js` | Interview question 3 |
| `67_IQ4.js` | Interview question 4 |

---

### Chapter 09 — User Input
> `chapter_09_User_Input/`

Reading and handling user input in Node.js console applications.

| File | Topic |
| :--- | :---- |
| `68_User_Input.js` | Introduction to stdin input |
| `69_Node_Readlline.js` | Asynchronous input with the `readline` module |
| `70_Prompt_Sync.js` | Synchronous input with `prompt-sync` |

---

### Chapter 10 — Loops
> `chapter_10_Loops/`

Every looping construct in JavaScript, with practical use cases and interview-level questions.

| File | Topic |
| :--- | :---- |
| `71_For_Loops.js` | Classic `for` loop |
| `72_For_Loop.js` | Loop variations and patterns |
| `73_For_Loop2.js` | Nested loops |
| `74_IQ.js` | Interview question |
| `75_For_OF_IN_EACH.js` | `for...of`, `for...in`, `forEach` compared |
| `76_While.js` | `while` loop |
| `77_Do_While.js` | `do...while` basics |
| `78_Do_While.js` | `do...while` advanced patterns |
| `79_IQ.js` – `82_IQ.js` | Interview questions series |

---

### Chapter 11 — Arrays
> `chapter_11_Arrays/`

Complete array coverage — from creation and access through transformation, searching, sorting, slicing, and type checking.

| File | Topic |
| :--- | :---- |
| `83_Arrays.js` | Introduction to arrays |
| `84_Array.js` | Array declaration and initialization |
| `85.Access_Array.js` | Accessing and updating elements by index |
| `86_Adding_Removing_Array.js` | `push`, `pop`, `shift`, `unshift` |
| `87_Adding_Remove2.js` | `splice` and additional mutation methods |
| `88_Real_Example.js` | Real-world array use case |
| `89_Searching.js` | `indexOf`, `find`, `findIndex`, `includes` |
| `90_iterate.js` | `forEach` and `for...of` iteration |
| `91_Transform_Array.js` | `map`, `filter`, `reduce`, `sort` |
| `92_Array.js` | Sorting — default string sort vs numeric comparator |
| `93_Array_Slicing.js` | `slice` — non-destructive sub-array extraction |
| `94_Concat_array.js` | `concat` and spread operator to merge arrays |
| `95_Array_Checking.js` | `Array.isArray`, `every`, `some` |
| `Assignment_FizzBuzz.js` | FizzBuzz challenge using array logic |
| `Assignment_TriangleClassifier.js` | Triangle classification assignment |

---

### Chapter 12 — Functions
> `chapter_12_Functions/`

All four function types, arrow functions, IIFE, default/rest/spread parameters, scope, closures, higher-order functions, and pure functions.

| File | Topic |
| :--- | :---- |
| `96_Functions.js` | What functions are and why they matter |
| `97_Type1_Fn_Basic_Funtions.js` | Type 1 — no parameters, no return value |
| `98_Tyoe2_Fn_With_Param_No_Return.js` | Type 2 — with parameters, no return value |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 — no parameters, with return value |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 — with parameters and return value |
| `101_Template_Literal.js` | Template literals used inside functions |
| `102_Fn_Expression.js` | Function expressions stored in variables |
| `103_Arrow_Fn.js` | Arrow function syntax and behavior |
| `104_Arrow_Fn_Real.js` | Real-world arrow function — HTTP status code validator |
| `105_IIFE.js` | Immediately Invoked Function Expressions |
| `106_Default_Param_Fn.js` | Default parameter values |
| `107_IQ.js` | Interview question |
| `108_Rest_Param_Fn.js` | Rest parameters (`...args`) |
| `109_IQ_.js` | Interview question |
| `110_Spread_IQ.js` | Spread operator interview question |
| `111_Scope_Fn.js` | Function scope and variable visibility |
| `112_IQ.js` | Interview question |
| `113_Closure.js` | Closures — concept and introduction |
| `114_Closure.js` | Closures — advanced patterns |
| `115_API_REAL_Closure.js` | Real-world closure simulating an API counter |
| `116_Higher_Order_Fn.js` | Higher-order functions, callbacks, `map`, `filter` |
| `117_Pure_Functions.js` | Pure vs impure functions with side-effect examples |

---

### Chapter 13 — Strings
> `chapter_13_Strings.js/`

Comprehensive string method coverage with real-world examples, type conversion, and a built-in cheat sheet reference.

| File | Topic |
| :--- | :---- |
| `118_Strings.js` | Introduction to strings and immutability |
| `119_String_Properties.js` | `length`, index access, `charAt` |
| `120_Search_Checking.js` | `includes`, `startsWith`, `endsWith`, `indexOf`, `search` |
| `121_Substring.js` | `slice` vs `substring` — differences and traps |
| `122_Transform_Str.js` | `toUpperCase`, `toLowerCase`, `trim`, `replace`, `split` |
| `123.SC.js` | String conversion — `toString`, `Number`, `parseInt`, `parseFloat` |
| `javascript_Stringcheatsheet.md` | Complete string methods quick-reference cheat sheet |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or later (LTS recommended)
- [Visual Studio Code](https://code.visualstudio.com/)
- Playwright (optional — for automation examples): `npm i -D playwright`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tush783/LEARNPLAYWRIGHTBATCH2X.git
cd LEARNPLAYWRIGHTBATCH2X

# 2. Install dependencies (required only for prompt-sync or Playwright)
npm install
```

### Running a Script

```bash
# Run any chapter script directly with Node.js
node chapter_01_Basics/01_Basics.js
node chapter_12_Functions/117_Pure_Functions.js
node chapter_13_Strings.js/121_Substring.js
```

### Running Playwright Tests

```bash
npx playwright test
```

---

## Learning Path

Follow this sequence for the most effective learning experience:

```
Phase 1 — Foundation
  Chapter 01  →  Environment setup and first script
  Chapter 02  →  Identifiers and language basics
  Chapter 03  →  VS Code shortcuts and naming conventions
  Chapter 04  →  var / let / const, scope, and hoisting

Phase 2 — Language Core
  Chapter 05  →  Literals and data types
  Chapter 06  →  All operators
  Chapter 07  →  Conditional logic
  Chapter 08  →  Switch statements

Phase 3 — Data & Iteration
  Chapter 09  →  User input
  Chapter 10  →  All loop types
  Chapter 11  →  Arrays — full coverage

Phase 4 — Functions & Strings
  Chapter 12  →  Functions — all types, closures, HOF, pure functions
  Chapter 13  →  Strings — methods, transformation, conversion
```

> Each chapter's `IQ` files simulate real technical interview questions for QA / SDET roles. Review them after completing each chapter.

---

## Requirements

| Tool | Version | Notes |
| :--- | :------ | :---- |
| Node.js | 16+ LTS | [nodejs.org](https://nodejs.org/) |
| npm | Bundled with Node.js | No separate install needed |
| Visual Studio Code | Latest | [code.visualstudio.com](https://code.visualstudio.com/) |
| Playwright | Latest | `npm i -D playwright` — optional |

---

## Notes

- All scripts are written for **learning and clarity**, not production use.
- Experiment freely — modifying examples is the fastest way to build intuition.
- The `IQ` files throughout each chapter mirror real interview questions for QA / developer roles.
- Chapter 13 includes a standalone `javascript_Stringcheatsheet.md` — a complete string methods reference.

---

_Last updated: June 14, 2026_
