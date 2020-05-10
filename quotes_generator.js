
let quotes = [
    {"Pain makes you stronger, fear makes you braver, heartbreak makes you wiser.": "DRAKE"},
    {"I need to let go of this false hope that you will change your mind and come back to me.": "Unknown"},
    {"The course of true love did never run smooth.": "William Shakespeare"},
    {"Sometimes you just have to accept the fact that some people only enter your life as a temporary happiness.": "Unknown" },
    {"I didn't stop loving you. I decided to stop showing it because no matter how hard I tried, you wouldn't get it.": "Divya Nagesh"}
]
let keys = Object.keys(quotes)



let selectQuote = () => { 
    let randomNum =  Math.floor(Math.random() * quotes.length)
    let obj = quotes[randomNum];
    let arr = Object.keys(obj);
    arr.push(obj[arr])
    document.getElementById("quote_text").innerHTML = arr[0]
    document.getElementById("quote_author").innerHTML = "-"+arr[1]
    return arr
}
// let quoteSelect = quotes[randomNum]
console.log(selectQuote())