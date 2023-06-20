

function outcome() {

    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    if (document.getElementById('box1').checked)
        total = num1 + num2
    else if (document.getElementById('box2').checked)
        total = num1 - num2
    else if (document.getElementById('box3').checked)
        total = num1 * num2
    else
        total = num1 / num2
    document.getElementById('resultArea').innerHTML = 'Result = ' + String(total)

}

function clean() {
    num1 = document.getElementById('num-one').value='';
    num2 = document.getElementById('num-two').value='';
    Result = document.getElementById('resultArea').innerHTML = ''
}