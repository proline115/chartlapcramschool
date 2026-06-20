const SKIP_OPENING = false;


const container =
document.querySelector(".container");

const banner =
document.getElementById("banner");

const tap =
document.getElementById("tapStart");

const left =
document.querySelector(".left");

const right =
document.querySelector(".right");

const bottom =
document.querySelector(".bottom");


window.addEventListener(
"DOMContentLoaded",
init
);


function init(){

    banner.style.display =
"none";

document
.getElementById(
"openingCover"
)
.classList.add(
"hide"
);

    document.body.style.overflow =
    "hidden";


    if(SKIP_OPENING){

        enterMain();

        return;

    }


    left.classList.add(
        "show"
    );

    right.classList.add(
        "show"
    );


    setTimeout(
        ()=>{

            bottom.classList.add(
                "show"
            );

        },

        500
    );


    setTimeout(
        ()=>{

            tap.classList.add(
                "show"
            );

        },

        1700
    );

}


function startSite(){

    if(
        !tap.classList.contains(
            "show"
        )
    ){

        return;

    }


    banner.style.display =
    "flex";


    document
    .getElementById(
        "openingCover"
    )
    .classList.add(
        "hide"
    );


    left.classList.add(
        "hide"
    );

    right.classList.add(
        "hide"
    );

    bottom.classList.add(
        "hide"
    );

    tap.classList.add(
        "hide"
    );


    setTimeout(

        enterMain,

        1500

    );

}



function enterMain(){

    document
    .getElementById(
        "openingCover"
    )
    ?.remove();


    container.style.display =
    "none";


    document.body.style.overflow =
    "auto";

}



// Tap以外でも開始
container.addEventListener(

    "click",

    startSite

);