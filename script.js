let games = [
  { name: "Afterparty", price: 125 },
  { name: "Dauntless", price: 100 },
  { name: "The Division 2", price: 200 },
  { name: "Metro Exodus", price: 85 },
  { name: "Tetris 99", price: 20 },
  { name: "Wargroove", price: 50 }
];

let numbersArr = [1, 2, 3, 4, 5];

//reduce
let sumReducer = (accumulator, currentItem) => {
  return { price: accumulator.price + currentItem.price };
};

let expensiveReducer = (accumulator, currentItem) => {
  return { price: Math.max(accumulator.price, currentItem.price) };
};

// let reduceResult = games.reduce(sumReducer);
// console.log(reduceResult.price);

let reduceResult = games.reduce(expensiveReducer);
// console.log(reduceResult.price);

//some
// let someResult = games.some(item => {
//   return item.price < 20;
// });
// console.log(someResult);

//map
// let gamesPrice = games.map(item => {
//   return { name: item.name, price: item.price * 2 };
// });

// console.log(gamesPrice);

// //keys, values
// let values = games.values();

// for (let value of values) {
//   console.log(value);
// }

//find, findIndex
// let findResult = games.find(item => {
//   return item.price < 100;
// });
// let findResult = games.findIndex(item => {
//   return item.price == 100;
// });
// console.log(findResult);

//filter
// let filterResult = games.filter(item => {
//   return item.price > 80;
// });
// console.log(filterResult);

// //every
// let everyResult = games.every(item => {
//   return item.price > 21;
// });
// console.log(everyResult);

// //forEach
// numbersArr.forEach(item => {
//   //   console.log(item);
// });
// games.forEach(item => {
//   console.log(item);
// });

//toString
// console.log(numbersArr.toString());

// //join
// console.log(numbersArr.join("\t"));

//includes
// console.log(numbersArr.includes(2));
// console.log(numbersArr.includes(6));

//concat
// let moreNumbers = [6, 7, 8];
// console.log(numbersArr.concat(moreNumbers));

//reverse
// console.log(numbersArr.reverse());

//sort
// console.log(numbersArr.sort());

//fill(value, start, end)
// console.log(numbersArr.fill(8, 0, 2));

//copywithin(target, start, end)
// console.log(numbersArr.copyWithin(-2));

//slice(begin, end);
// let sliceResult = numbersArr.slice(2, -2);
// console.log(sliceResult);

//splice(start, deleteCount, item1, item2, item3)
// let spliceResult1 = numbersArr.splice(2, 2, 6, 7, 8, 9, 10);
// console.log(spliceResult1);
// console.log(numbersArr);

// //shift
// let shiftResult = numbersArr.shift();
// console.log(shiftResult);
// console.log(numbersArr);

// //unshift
// let unshiftResult = numbersArr.unshift(shiftResult);
// console.log(unshiftResult);
// console.log(numbersArr);

// //push
// let pushResult = numbersArr.push(10);
// // console.log(numbersArr);
// // console.log(pushResult);

// games.push({ name: "Control", price: 250 });
// // console.log(games);

// //pop
// let popResult1 = numbersArr.pop();
// // console.log(popResult1);
// // console.log(numbersArr);

// let popResult2 = games.pop();
// console.log(popResult2);
// console.log(games);

//indexOf
// console.log(numbersArr.indexOf(6));

// console.log(numbersArr[2]);

//length
// console.log(games.length, numbersArr.length);
