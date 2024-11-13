function verify(a,b,c) {
        console.log("a, b, c")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);

    if (a<b && b<c){
        result='Выполняется неравенство  A < B < C';
    }
    else if (a<b && b>c){
        result = "Выполняется неравенство  A < B > C";
    }
    else
        result='Не выполняется'
    }

document.getElementById("result").innerText = result;

}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);