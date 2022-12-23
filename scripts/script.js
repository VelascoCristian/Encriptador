const encrypt = () => {
    let result = document.querySelector(".input").value;
    result = result.toLowerCase();
    result = result.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    result = result.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    result = result.replace(/e/gm, "enter");
    result = result.replace(/i/gm, "imes");
    result = result.replace(/a/gm, "ai");
    result = result.replace(/o/gm, "ober");
    result = result.replace(/u/gm, "ufat");
    
    document.querySelector(".munheco").style.setProperty("display","none");
    document.querySelector(".outputIndication").style.setProperty("display","none");
    document.querySelector(".output").innerHTML = result;
    document.querySelector(".output").style.setProperty("margin-top","2vh");
    document.querySelector(".output").style.setProperty("height","80%");
    document.querySelector(".output").style.setProperty("text-align","left");
    document.querySelector(".copy").style.setProperty("display","block");
}

const copy = () => {
    let result = document.querySelector(".output").innerHTML;
    navigator.clipboard.writeText(result);
}

const decrypt = () => {
    let result = document.querySelector(".input").value;
    result = result.toLowerCase();
    result = result.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    result = result.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    result = result.replace(/enter/gm, "e");
    result = result.replace(/imes/gm, "i");
    result = result.replace(/ai/gm, "a");
    result = result.replace(/ober/gm, "o");
    result = result.replace(/ufat/gm, "u");

    document.querySelector(".munheco").style.setProperty("display","none");
    document.querySelector(".outputIndication").style.setProperty("display","none");
    document.querySelector(".output").innerHTML = result;
    document.querySelector(".output").style.setProperty("margin-top","2vh");
    document.querySelector(".output").style.setProperty("height","80%");
    document.querySelector(".output").style.setProperty("text-align","left");
    document.querySelector(".copy").style.setProperty("display","block");
}
