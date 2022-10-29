window.onload = function themes() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("Theme-1");
};

let themeBtn = document.querySelectorAll(".Theme");
themeBtn.forEach((e) => {
    e.addEventListener("click", (ele) => {
        for (let i = 0; i < themeBtn.length; i++) {
            if (themeBtn[i].classList.contains("active")) {
                themeBtn[i].classList.remove("active");
            }
        }
        ele.target.classList.add("active");
        console.log(ele.target.id);
        const body = document.getElementsByTagName("body")[0];
        body.className = `Theme-${ele.target.id}`;
    });
});

let numBtn = document.querySelectorAll(".keypad #num");
let operBtn = document.querySelector(".keypad #equal");
let screen = document.querySelector(".screen");
let deleteBtn = document.querySelector("#del");
let resetBtn = document.querySelector("#reset");

numBtn.forEach((element) => {
    numberValue(element);
});

function numberValue(element) {
    element.addEventListener("click", (ele) => {
        let element = ele.target.innerHTML;
        if (element === "x") {
            element = "*";
        } else {
            element = ele.target.innerHTML;
        }
        screen.innerHTML += element;
        let x = screen.innerHTML;
        screenValue(x);
    });
}

function screenValue(x) {
    equal.onclick = () => {
        let result = eval(x);
        screen.innerHTML = result;
    };
}
deleteBtn.addEventListener("click", () => {
    let dele = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
    screen.innerHTML = dele;
});

resetBtn.addEventListener("click", () => {
    screen.innerHTML = "";
});