function hitung(calculator){
    let calc = document.getElementById("calcForm");
    let a1 = parseFloat(calc.angka1.value);
    let a2 = parseFloat(calc.angka2.value);
    let total;

    switch(calculator){
        case "+" : 
            if (isNaN(a1) || isNaN(a2)) {
                alert("Hanya tuliskan angka!");
            }    
            else {
                total = a1 + a2; 
                calc.hasil.value = total;
            };
        break;

        case "-" :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Hanya tuliskan angka!");
            }    
            else {
                total = a1 - a2;
                calc.hasil.value = total;
            };
        break;

        case "x" :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Hanya tuliskan angka!");
            }    
            else {
                total = a1 * a2;
                calc.hasil.value = total;
            };
        break;

        case ":" :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Hanya tuliskan angka!");
            }    
            else {
                total = a1 / a2;
                calc.hasil.value = total;
            };
        break;

        case "^" :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Hanya tuliskan angka!");
            }    
            else {
                total = Math.pow(a1,a2);
                calc.hasil.value = total; 
            };
        break;

        default:
        break;
    }
    
}