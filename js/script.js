let distance = prompt("Quanti km dista la tua destinazione?")
let eta = prompt("Quanti anni hai?")

// Prezzo al kilometro
const price = 0.21

let partialprice = price * distance;
let sconto_under = partialprice * 0.2;
let sconto_over = partialprice * 0.4;
let finalprice;

if(eta<18){
    finalprice = partialprice - sconto_under
}

else if (eta>=65){
    finalprice = partialprice - sconto_over
}

else{
    finalprice = partialprice
}

// if(eta>=65){
//     finalprice = partialprice - sconto_over
// }
// else{
//     finalprice = partialprice
// }

// SEPARANDO LE DUE CONDIZIONI COME POTETE VEDERE NEI PUSH PRECEDENTI, LO SCONTO SU UNDER 18 NON FUNZIONAVA, MENTRE QUELLO PER GLI OVER 65 SI


document.getElementById("ticketprice").innerHTML = finalprice.toFixed(2) + "€";