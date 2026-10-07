const input=require('prompt-sync')();
// console.clear();
// const storename="REHMAN STORE";
// // var item1="MOBILE";
// // var item1="SHOES";
// let item1="MOBILE";
// console.log(item1); 7
// { 
// let item1="SHOES"; // can change it
// console.log(item1);
// }
// // console.log(item1);
// arr=[];
// for(let i=0;i<7;i++){
//     arr[i] = Number(input(`Enter number `));
// }
// console.log(arr);
// let f=astr.pop();
// console.log(d);
// astr.splice(1,0,"price1");
console.log("INVENTORY SYSTEM");
let astr = ["item1", "item2", "item3"];
let x = astr.length;
let d = astr.push("item4", "item5");
let prices=[200,500,230,412,14];
console.log("SrNo.  Item   Price");
for (let i = 0; i < astr.length; i++) {
  console.log((i + 1) + "      " + astr[i] + "  " + prices[i]);
}
let item =Number(input("ENTER A item(from 1 to 5)")); 
let qty =Number(input("ENTER A quantity "));
let itemTotal = qty*prices[item-1];
console.log("TOTAL COST IS "+itemTotal);
let stock=[];
function addstock() { 
  let item_code=Number(input("ENTER item code"));
  let item_name=input("ENTER ITEM NAMe");
  let item_price=Number(input("ENTER price:"));
  let item_quantity=Number(input("ENTER quantity:"));
  let item={
    code:item_code,
    item:item_name,
    price:item_price,
    quantity:item_quantity
  };
  stock.push(item);
  console.log("\n Invenoty updarted");
  console.log();
}
while(true){
  addstock();
  let loop=input("ADD MORE ITEMS 0 for no 1 for 1");
  loop=parseInt(loop);
  if(loop===0)break;
}
console.log("\n Invenoty entry completed");
console.log("\n updates stokc");
console.log(stock);
console.log();
for(let element of stock){
  console.log(element.key);
} 
