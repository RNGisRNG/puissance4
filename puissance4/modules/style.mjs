export function style_css(){
    css_main();
    css_header();
    css_container();
    css_table();
    css_td();
    css_trays_p();
    css_player_div();
}

function css_main(){
    const main = document.querySelector("main")

    main.style.display = "flex";
    main.style.flex = "flex";
    main.style.flexDirection = "column";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
}

function css_header()
{
    const header = document.querySelector(".header")

    header.style.height = "30vh";
    header.style.display = "flex";
    header.style.flexDirection = "column";
    header.style.justifyContent = "space-around";
}

function css_player_div(){
    const playerDiv = document.querySelector(".header div");

    playerDiv.style.display = "flex";
    playerDiv.style.flexDirection = "column";
    playerDiv.style.justifyContent = "space-around";
    playerDiv.style.alignItems = "center";
}

function css_container()
{
    const container = document.querySelector(".container")

    container.style.maxWidth = "800px";
}

function css_table()
{
    const table = document.querySelector("table")

    table.style.width = "800px";
    table.style.height = "700px";
    table.style.margin = "40px 0";
    table.style.backgroundColor = "blue";
}

function css_td()
{
    const td = document.querySelectorAll("td")

    for(let i = 0; i < td.length; i++){
        td[i].style.width = "100px";
        td[i].style.height = "80px";
    }
}

function css_trays_p()
{
    const traysP = document.querySelectorAll(".trays p")

    for(let i = 0; i < traysP.length; i++){
        traysP[i].style.backgroundColor = "white";
        traysP[i].style.width = "100px";
        traysP[i].style.height = "100px";
        traysP[i].style.border = "4px outset darkblue";
        traysP[i].style.borderRadius = "50%";
        traysP[i].style.boxSizing = "border-box";
        traysP[i].style.margin = "0 auto";
    }
}