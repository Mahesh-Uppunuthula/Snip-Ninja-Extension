$("#home").click(function (){
    console.log("redirect to home page");
    chrome.tabs.create({url:'https://snip-ninja.netlify.app/'});
})