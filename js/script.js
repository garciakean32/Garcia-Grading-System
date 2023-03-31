function handleSubmit() {
    const inputValue = document.getElementById('grades-input').value

    if (inputValue > 100)
        alert('DESCRIPTOR => DOES NOT EXIST\n\nREMARKS => DOES NOT EXIST')

    else if (inputValue >= 90 && inputValue <= 100)
        alert("DESCRIPTOR => OUTSTANDING\n\nREMARKS => PASSED")

    else if (inputValue >= 85 && inputValue <= 89)
        alert("DESCRIPTOR => VERY SATISFACTORY\n\nREMARKS => PASSED")

    else if (inputValue >= 80 && inputValue <= 84)
        alert("DESCRIPTOR => SATISFACTORY\n\nREMARKS => PASSED")

    else if (inputValue >= 75 && inputValue <= 79)
        alert("DESCRIPTOR => FAIRLY SATISFACTORY\n\nREMARKS => PASSED")

    else if (inputValue <= 75)
        alert("DESCRIPTOR => DID NOT MEET EXPECTATIONS\n\nREMARKS => FAILED")





}