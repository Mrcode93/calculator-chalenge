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

numBtn.forEach((element) => {
    numberValue(element);
});
// operBtn.forEach((oper) => {
//     numberValue(oper);
// });

function numberValue(element) {
    element.addEventListener("click", (ele) => {
        equal.addEventListener("click", () => {
            if (screen.innerHTML <= 0) {
                console.log("the screen is empty");
            } else {
                screen.innerHTML = eval(screen.innerHTML);
                console.log(screen.innerHTML);
            }
        });
        console.log(ele.target.innerHTML);
        const val = ele.target.innerHTML;
        screen.innerHTML += val;
    });
    screen.innerHTML = "";
}