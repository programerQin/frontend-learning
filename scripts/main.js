// const heading1 = document.querySelector("h1");
// heading1.textContent = "Hello World!";
const image = document.querySelector("img");
image.onclick = function () {
    
    const imageSrc = image.getAttribute("src");
    if(imageSrc === "" || imageSrc === "images/极光.png"){
        image.setAttribute("src", "images/纳西妲.png");
    }else{
        image.setAttribute("src", "images/极光.png");
    }
};

const button = document.querySelector("button");
console.log(button);
const myHeading = document.querySelector("h1");
function setUserName(name){
    myHeading.textContent = `Hello ${name}`;
    alert("Welcome to my website!");
    // button.disabled = true;
    // button.setAttribute("disabled", true);   
}
// 初始化页面
let lastLoginUser = localStorage.getItem("name");
if(lastLoginUser){
    setUserName(lastLoginUser);
}else{
    button.setAttribute("disabled", false);
}

button.onclick = function () {
    console.log("button clicked");
    const userName = prompt("please enter your name");
    if(!userName){
        myHeading.textContent = "Hello World!";
        alert("Please enter your name!");
    }else{
        localStorage.setItem("name", userName);
        setUserName(userName);
    }
};