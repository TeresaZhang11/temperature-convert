let input = document.getElementById('input');
let inputUnit = document.getElementById('inputUnit');

let output = document.getElementById('output');
let outputUnit = document.getElementById('outputUnit');


input.oninput = () => {

    if(inputUnit.value === outputUnit.value){
        output.value = parseFloat(input.value);
    } else if (inputUnit.value === "celsius" && outputUnit.value === "fahrenheit"){
        output.value = parseFloat((9 / 5 * input.value + 32).toFixed(2));
    } else if (inputUnit.value === "celsius" && outputUnit.value === "kelvin"){
        output.value = parseFloat((input.value + 273.15).toFixed(2));
    } else if(inputUnit.value === "fahrenheit" && outputUnit.value === "celsius"){
        output.value = parseFloat(((input.value - 32) * (5/9)).toFixed(2));
    } else if(inputUnit.value === "fahrenheit" && outputUnit.value === "kelvin"){
        output.value = parseFloat((5/9 *(input.value - 32) + 273.15).toFixed(2));
    } else if(inputUnit.value === "kelvin" && outputUnit.value === "fahrenheit"){
        output.value = parseFloat((9 / 5 * (input.value - 273.15) + 32).toFixed(2));
    } else if(inputUnit.value === "kelvin" && outputUnit.value === "celsius"){
        output.value = parseFloat((input.value - 273.15).toFixed(2));
    }

};
