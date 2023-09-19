const form = document.querySelector("form")

 function convert_To_Meter(number) {
   return (number * 0.0254)
}

function displayResult(result) {
    const resultWrapper = document.querySelector(".result-wrapper")
    resultWrapper.textContent = number1.value+" "+"inches"+ " = " + result +" "+"Meterts"
}


function SubmitButtonClick() {
    const number_in_meter = convert_To_Meter(parseInt(number1.value))
    displayResult(number_in_meter)
    
}

form.addEventListener("submit", function(e) {
    e.preventDefault()
    SubmitButtonClick()
})
