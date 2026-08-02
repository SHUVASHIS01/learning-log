const salary = 5000;
const isBCS = true;

if (salary > 4000 && isBCS) {
    console.log("Shupatro");

} 
else if (salary > 4500 || isBCS === false) {
    console.log("chole ar ki");
}
else{
    console.log("onno patro khuji");
}

const price = 5000;
if (price >=5000) {
    var discount = price * 0.1;
    const priceAfterDiscount = price - discount;
    console.log("Price after discount: " + priceAfterDiscount);

}
else if (price < 5000 && price >= 3000) {
    var discount = price * 0.05;
    const priceAfterDiscount = price - discount;
    console.log("Price after discount: " + priceAfterDiscount);
}
else {
    console.log("No discount available");
}

//nested loop
const money = 5000;
if (money > 4000) {
    console.log("bro you aree rich");
    if (money > 6000) {
        console.log("bro you are super rich");
    }
    else if (money > 5000 && money <= 6000) {
        console.log("valoi rich");
    }
}
else {
    if (money > 3000 && money <= 4000) {
        console.log("bro you are middle class");
    }
    else if (money > 2000 && money <= 3000) {
        console.log("bro you are poor");
        console.log("taka chaibi na");
    }
}