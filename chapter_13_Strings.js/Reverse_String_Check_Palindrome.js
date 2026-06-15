// ─────────────────────────────────────────────────────────────
// REVERSE STRING & PALINDROME CHECK
// ─────────────────────────────────────────────────────────────
//
// LOGIC:
//  Step 1 → Start with an empty string rs = ""
//  Step 2 → Loop from the LAST character to the FIRST (i = word.length-1 down to 0)
//  Step 3 → Each iteration, add word[i] to rs  →  builds the reversed string
//  Step 4 → After the loop, compare word and rs (both lowercased)
//           If they are equal → it is a PALINDROME  (reads same forwards & backwards)
//           If not equal      → NOT a palindrome
//
// EXAMPLE — "Madam":
//   i=4 → rs = "m"
//   i=3 → rs = "ma"
//   i=2 → rs = "mad"
//   i=1 → rs = "mada"
//   i=0 → rs = "madam"
//   "madam".toLowerCase() === "madam".toLowerCase() → TRUE → Palindrome ✅
//
// EXAMPLE — "TUSHAR":
//   reversed = "RAHSUT"
//   "tushar" !== "rahsut" → NOT a palindrome ❌
// ─────────────────────────────────────────────────────────────

function reversestring(word){
    let rs = "";
    for (let i = word.length-1 ; i >= 0 ; i--)
    {
        rs += word[i];

    }

    console.log("Original String : ", word);
    console.log("Reverse String : ", rs);

    if(word.toLowerCase() === rs.toLowerCase())
    {
        console.log("It is a palindrome");
    }
    else
    {
        console.log("Not a palindrome");
    }
}

reversestring("TUSHAR");
reversestring("Madam");