const div = document.querySelector("div");
const buttons = document.querySelectorAll("button");
const text = document.querySelector("p");

const setNumber = (number) => {
    if(div.textContent.length >= 8){
        buttons.disabled;
    }else{
        div.textContent = div.textContent ? `${div.textContent}${number}` : `${number}`;
        text.textContent = div.textContent ? `${parseInt(div.textContent , 2)}` : '';
    }
};
const del = () => {
    div.textContent = div.textContent ? `${div.textContent.substring(0, div.textContent.length - 1)}` : '';
    text.textContent = div.textContent ? `${parseInt(div.textContent , 2)}` : '';
};
