let distance = prompt("Quanti km dista la tua destinazione?")
let eta = prompt("Quanti anni hai?")

// Prezzo al kilometro
const price = 0.21

let partialprice = price * distance;
let finalprice;

if(eta<18){
    finalprice = partialprice * 0.2
}
else{
    finalprice = partialprice
}

if(eta>=65){
    finalprice = partialprice * 0.4
}
else{
    finalprice = partialprice
}

console.log(finalprice);