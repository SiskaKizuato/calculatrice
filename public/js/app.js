// acquisition du body
let body = document.querySelector("body")
body.className = "bgBlack flex justify"

// creation du container qui contiendra toute la calculax
let container = document.createElement("div")
container.className = "container borderT"

body.appendChild(container)

let containBtnAndScreen = document.createElement("div")
containBtnAndScreen.className = "containBtnAndScreen"
container.appendChild(containBtnAndScreen)

// creation des lignes
let row
for (let index = 0; index < 6; index++){
    row = document.createElement("div")
    row.className = "row flex "
    containBtnAndScreen.appendChild(row)
}
let row_tab = document.querySelectorAll(".row")
// creation des col
let rows = document.querySelectorAll('.row');
let firstRowWidth = rows[0].offsetWidth;
let columnWidth = firstRowWidth / 4;
for (let i = 1; i < rows.length - 1; i++) {
    for (let j = 0; j < 4; j++) {
        let column = document.createElement('div');
        column.className = 'column borderTB flex justify align';
        column.style.width = columnWidth + 'px';
        rows[i].appendChild(column);
    }
}

// creation des touches, optimiser le code a l'occasion
let tab_col = document.querySelectorAll(".column")
let p1 = document.createElement("p")
p1.className = "p1 fontClrR fs-big border"
p1.innerText = "1"
tab_col[0].append(p1)

let p2 = document.createElement("p")
p2.className = "p2 fontClrR fs-big"
p2.innerText = "2"
tab_col[1].append(p2)

let p3 = document.createElement("p")
p3.className = "p3 fontClrR fs-big"
p3.innerText = "3"
tab_col[2].append(p3)

let p4 = document.createElement("p")
p4.className = "p4 fontClrR fs-big"
p4.innerText = "+"
tab_col[3].append(p4)

let p5 = document.createElement("p")
p5.className = "p6 fontClrR fs-big"
p5.innerText = "4"
tab_col[4].append(p5)

let p6 = document.createElement("p")
p6.className = "p6 fontClrR fs-big"
p6.innerText = "5"
tab_col[5].append(p6)

let p7 = document.createElement("p")
p7.className = "p7 fontClrR fs-big"
p7.innerText = "6"
tab_col[6].append(p7)

let p8 = document.createElement("p")
p8.className = "p8 fontClrR fs-big"
p8.innerText = "-"
tab_col[7].append(p8)

let p9 = document.createElement("p")
p9.className = "p9 fontClrR fs-big"
p9.innerText = "7"
tab_col[8].append(p9)

let p10 = document.createElement("p")
p10.className = "p10 fontClrR fs-big"
p10.innerText = "8"
tab_col[9].append(p10)

let p11 = document.createElement("p")
p11.className = "p11 fontClrR fs-big"
p11.innerText = "9"
tab_col[10].append(p11)

let p12 = document.createElement("p")
p12.className = "p12 fontClrR fs-big"
p12.innerText = "*"
tab_col[11].append(p12)

let p13 = document.createElement("p")
p13.className = "p13 fontClrR fs-big"
p13.innerText = "C"
tab_col[12].append(p13)

let p14 = document.createElement("p")
p14.className = "p14 fontClrR fs-big"
p14.innerText = "0"
tab_col[13].append(p14)

let p15 = document.createElement("p")
p15.className = "p15 fontClrR fs-big"
p15.innerText = "."
tab_col[14].append(p15)

let p16 = document.createElement("p")
p16.className = "p16 fontClrR fs-big"
p16.innerText = "/"
tab_col[15].append(p16)

let p17 = document.createElement("p")
p17.className = "p17 fontClrR fs-big"
p17.innerText = "="
rows[5].append(p17)

rows[0].style.border = "1px solid white"
rows[5].className = "row5 flex justify align"

let input = document.createElement("input")
rows[0].append(input)
input.className = "input"
console.log(body);

let pS = document.querySelectorAll("p")
p13.addEventListener("click", () => {
    console.log(input.value);
    input.value = ""
    console.log("input clear");
})

let pSWithoutClear = Array.prototype.slice.call(pS, 0, 12).concat(Array.prototype.slice.call(pS, 13));
pSWithoutClear.forEach(function (p) {
    p.addEventListener("click", function () {
        input.value = input.value + p.innerText;
    });
});

            

