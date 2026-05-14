// Valid identifiers
var $ = 10;         // starts with $
var _a = 20;        // starts with _
var a1 = 30;        // starts with a letter, contains a digit
var t$ = 70;        // contains letter and $ sign
var myVariable = 80; // plain letter-only identifier
var camelCase = 90;  // common JavaScript style

// Invalid identifiers
// 1. Cannot start with a number
// 2. Cannot contain spaces
// 3. Cannot be a reserved word
var 1a = 50;       // invalid: starts with a number
var 123 = 123;     // invalid: starts with a number
var tush s = 60;   // invalid: contains a space
var var = 100;     // invalid: reserved word
var function = 110; // invalid: reserved word

// Case sensitivity examples
var myVar = 1;
var myvar = 2;      // different from myVar

// Note: underscores and dollar signs are allowed anywhere except starting digits
var _myVar = 3;
var my$Var = 4;