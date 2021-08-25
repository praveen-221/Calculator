var result = "";
const userin = document.getElementById('userinp');
const output = document.getElementById('res');

function calc (value) {
    result += value;
    userin.value = result;
    console.log(result);
    console.log(result.length);
    console.log(result.charAt(0));
}

function remval () {
    result = result.substring(0,result.length - 1);
    userin.value = result;
    console.log(result);
}

function out () {
    if (result.length == 0 || result == "") {
        alert ("Enter Input...");
        return;
    }
    try {
        ans = eval (result);
        output.value = ans;
        console.log(ans);
    }
    catch (err) {
        alert ("Invalid Input...");
    }
}

function reset () {
    userin.value = "";
    output.value = "";
    result = "";
}

window.onload(reset());