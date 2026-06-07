let browser = ['chrome','firefox','safari','opera','edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(browser); //Displays the array after the first element being removed
console.log(removed); //Displays the removed text

for(let i = 0; i < browser.length; i++)
{
    console.log(browser[i]);
    if(browser[i]==="opera")
    {
        console.log("Opera is removed from the selenium!")
    }

    
}

