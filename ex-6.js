/* 
ให้เขียนโปรแกรมช่วยตรวจสอบส่วนลด โดยมีเงื่อนไขคือ
ถ้าซื้อสินค้าครบ 10000 บาทขึ้นไป จะได้ส่วนลด 10%
ถ้าซื้อสินค้าครบ 5000 บาทขึ้นไป จะได้ส่วนลด 5%
นอกนั้นจะไม่ได้ส่วนลด 

สมมติลูกค้าซื้อสินค้าเป็นเงินทั้งสิ้น 15000 บาท จะเห็นข้อความ คุณได้ส่วนลด 10%
สมมติลูกค้าซื้อสินค้าเป็นเงินทั้งสิ้น 6000 บาท จะเห็นข้อความ คุณได้ส่วนลด 5%
สมมติลูกค้าซื้อสินค้าเป็นเงินทั้งสิ้น 100 บาท จะเห็นข้อความ คุณไม่ได้ส่วนลด
*/

function getDiscount (total) {
    if (total >= 10000) {
        return `คุณได้ส่วนลด 10%`
    } else if (total >= 5000){
        return `คุณได้ส่วนลด 5%`
    } else {
        return `คุณไม่ได้ส่วนลด`
    }
}

let customer1total = 15000;
let customer2total = 6000;
let customer3total = 100;

console.log(getDiscount(customer1total))
console.log(getDiscount(customer2total))
console.log(getDiscount(customer3total))