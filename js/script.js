function calcSum() { 
    const a = +document.getElementById('a').value; 
    const b = +document.getElementById('b').value;
    const c1 = a + b;
    document.getElementById('result').innerHTML = 'result ' + c1;   
 } 
 
 function calcSub() {
    const a = +document.getElementById('a').value; 
    const b = +document.getElementById('b').value;
    const c2 = a - b;
    document.getElementById('result').innerHTML = 'result ' + c2;   
 }

 function calcMul() {
    const a = +document.getElementById('a').value; 
    const b = +document.getElementById('b').value;
    const c3 = a * b;
    document.getElementById('result').innerHTML = 'result ' + c3;   
 }

 function calcDiv() {
    const a = +document.getElementById('a').value; 
    const b = +document.getElementById('b').value;
    const c4 = a / b;
    document.getElementById('result').innerHTML = 'result ' + c4;   
 }

 
