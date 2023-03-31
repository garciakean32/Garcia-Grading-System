function handleSubmit() {
    const inputValue1 = parseInt(document.getElementById('grades-input1').value)
    const inputValue2 = parseInt(document.getElementById('grades-input2').value)
    const inputValue3 = parseInt(document.getElementById('grades-input3').value)
    const inputValue4 = parseInt(document.getElementById('grades-input4').value)
    const inputValue5 = parseInt(document.getElementById('grades-input5').value)
    const inputValue6 = parseInt(document.getElementById('grades-input6').value)
    const inputValue7 = parseInt(document.getElementById('grades-input7').value)

    var add = inputValue1 + inputValue2 + inputValue3 + inputValue4 + inputValue5 + inputValue6 + inputValue7;
    let average = add / 7;


    if (average > 100) {
        alert('DESCRIPTOR => DOES NOT EXIST\n\nREMARKS => DOES NOT EXIST')
    }
    else if (average >= 90 && average <= 100) {
        alert("DESCRIPTOR => OUTSTANDING\n\nREMARKS => PASSED")
    }
    else if (average >= 85 && average <= 89) {
        alert("DESCRIPTOR => VERY SATISFACTORY\n\nREMARKS => PASSED")
    }
    else if (average >= 80 && average <= 84) {
        alert("DESCRIPTOR => SATISFACTORY\n\nREMARKS => PASSED")
    }
    else if (average >= 75 && average <= 79) {
        alert("DESCRIPTOR => FAIRLY SATISFACTORY\n\nREMARKS => PASSED")
    }
    else if (average < 75) {
        alert("DESCRIPTOR => DID NOT MEET EXPECTATIONS\n\nREMARKS => FAILED")

    }



}
