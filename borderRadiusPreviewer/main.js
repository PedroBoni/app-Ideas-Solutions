const divMain = document.querySelector("body > label");
const simpleMode = document.querySelector("#simple");
const mediumMode = document.querySelector("#medium");
const advancedMode = document.querySelector("#advanced");
let modeStyle = 1;
let percentagesMedium = [0,0,0,0];
let percentagesAdvanced = [0,0,0,0,0,0,0,0];

window.onload = () => {
    document.querySelector("form").reset();
};
function applyBorderRadius(event){
    if(event.target.value > 100)
        document.getElementById(event.target.id).value = 100;

    let percentage = event.target.value;
   
    if(modeStyle == 1){
        divMain.style.borderRadius = `${percentage}%`;
    };
    if(modeStyle == 2){
        percentagesMedium[event.target.id - 2] = percentage;
        let porcent = `${percentagesMedium[0]}% ${percentagesMedium[1]}% ${percentagesMedium[2]}% ${percentagesMedium[3]}%`;
        divMain.style.borderRadius = porcent;
    }
    else if(modeStyle == 3){
        percentagesAdvanced[event.target.id - 6] = percentage;
        let porcent = `${percentagesAdvanced[0]}% ${percentagesAdvanced[2]}% ${percentagesAdvanced[4]}% ${percentagesAdvanced[6]}% / ${percentagesAdvanced[1]}% ${percentagesAdvanced[3]}% ${percentagesAdvanced[5]}% ${percentagesAdvanced[7]}%`;
        divMain.style.borderRadius = porcent;
    };
};
function applyColor(event){
    divMain.style.backgroundColor = event.target.value;
};
function applySizeBox(event, type){
    if(type == 1)
        divMain.style.width = `${event.target.value}px`;
    else
        divMain.style.height = `${event.target.value}px`;
};
function applyMode(mode){
    if(mode == 1){
        simpleMode.style.display = "block";
        mediumMode.style.display = "none";
        advancedMode.style.display = "none";
        modeStyle = 1;
    }
    else if(mode == 2){
        simpleMode.style.display = "none";
        mediumMode.style.display = "block";
        advancedMode.style.display = "none";
        modeStyle = 2;
    }
    else if(mode == 3){
        simpleMode.style.display = "none";
        mediumMode.style.display = "none";
        advancedMode.style.display = "block";
        modeStyle = 3;
    };
};
function copyStyle(event){
    const style = document.querySelector("label").style;
    let text = `element{${style.cssText}}`;

    navigator.clipboard.writeText(text).then(function() {
        console.log('Copied style!');
    }, function(err) {
        console.error('Error copied style: ', err);
    });
};