// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minItem = inventory[0]
for(let item of inventory){
  if(item.quantity <= minItem.quantity){
    minItem = item
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minItem.name}ซึ่งมี ${minItem.quantity} ชิ้น`)