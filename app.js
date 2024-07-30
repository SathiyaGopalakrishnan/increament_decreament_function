
let initValue = 0;

function printValue() {
  
    document.getElementById('num').value = initValue;
}

function increament(){
 initValue++;
printValue();
}

function decreament(){
    initValue--;
    printValue();
}