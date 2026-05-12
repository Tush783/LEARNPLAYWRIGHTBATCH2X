/**
 * JavaScript Identifier Rules - All Examples
 * 
 * An identifier is a name given to variables, functions, classes, etc.
 * 
 * Rules for naming identifiers:
 * 1. Can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($)
 * 2. Must start with a letter, underscore (_), or dollar sign ($)
 * 3. Cannot start with a digit
 * 4. Cannot contain spaces
 * 5. Case-sensitive (name and Name are different)
 * 6. Cannot be a reserved keyword
 */

// ============================================
// VALID IDENTIFIERS
// ============================================

// Can start with letters
var name = "John";
var firstName = "John";
var Age = 25;
var userName = "john123";

// Can start with dollar sign ($)
var $ = 10;
var $name = "John";
var $amount = 100;

// Can start with underscore (_)
var _a = 20;
var _name = "John";
var _privateVar = 30;
var __doubleUnderscore = 40;

// Can contain numbers (but not start with them)
var a1 = 30;
var name123 = "John";
var var2 = 50;
var p = 40;

// Can contain dollar signs
var t$ = 70;
var price$ = 99.99;
var amount$USD = 1000;

// ============================================
// INVALID IDENTIFIERS (commented out to avoid errors)
// ============================================

// Cannot start with a number
// var 1a = 50;
// var 123 = 123;
// var 2name = "John";

// Cannot contain spaces
// var tush s = 60;
// var first name = "John";
// var my var = 100;

// Cannot use special characters other than $ and _
// var my-name = "John";
// var my@name = "John";
// var my!name = "John";

// Reserved keywords cannot be used as identifiers
// var var = 10;      // 'var' is a keyword
// var function = 20; // 'function' is a keyword
// var if = 30;       // 'if' is a keyword
// var return = 40;   // 'return' is a keyword
// var class = 50;    // 'class' is a keyword

// ============================================
// IDENTIFIER NAMING CONVENTIONS
// ============================================

// camelCase - most common for variables and functions
var myVariable = 100;
var getUserName = function() {};

// snake_case - sometimes used
var my_variable = 200;
var get_user_name = function() {};

// PascalCase - typically for classes and constructors
var MyClass = function() {};
var UserProfile = {};

// UPPERCASE - constants
var MAX_SIZE = 100;
var PI = 3.14159;

// ============================================
// CASE SENSITIVITY EXAMPLE
// ============================================

var name = "John";    // Different from 'Name'
var Name = "Jane";    // Different from 'name'
var NAME = "Bob";     // Different from 'name' and 'Name'

console.log(name);   // "John"
console.log(Name);   // "Jane"
console.log(NAME);   // "Bob"
