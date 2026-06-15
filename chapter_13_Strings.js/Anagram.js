function anagram(str1 , str2)
{
    if (str1.length !== str2.length)
    {
        console.log("NOT AN ANAGRAM - LENGTH NOT EQUAL");
        return;
    }

    let s1 = str1.toLowerCase().split("").sort().join("");
    let s2 = str2.toLowerCase().split("").sort().join("");

    console.log("Sorted str1:", s1);
    console.log("Sorted str2:", s2);

    if (s1 === s2) {
        console.log(`${str1} and ${str2} ARE anagrams`);
    } else {
        console.log(`${str1} and ${str2} are NOT anagrams`);
    }
}

anagram("Team","Meat")