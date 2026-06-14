//String Conversion

// toString() changes a number into text (a string)
(200).toString(); // "200" ✅ correct

// toString() changes true/false into the TEXT "true"/"false"
// the result is a STRING, not a real boolean — that's why your
// comment //true (without quotes) is a bit misleading
true.toString(); // "true"

// Number() converts text into a real number
// "20" becomes the number 20 — nothing gets added or multiplied,
// so the comment //42 was incorrect
Number("20"); // 20

// parseInt() reads a string from the start and grabs only the digits,
// stopping as soon as it finds a letter (like "px")
parseInt("42px"); // 42 ✅ correct

// parseFloat() works like parseInt(), but it also keeps decimal points
parseFloat("3.14rem"); // 3.14 ✅ correct