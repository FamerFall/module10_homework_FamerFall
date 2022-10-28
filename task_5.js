let mass = [12, 22, 50, 50, 19];

console.log (mass.length); //вывожу количество элементов
let result = mass.map(function(item, index, array) {
  return item
});
console.log (result) //перебераю массив с помощью map

console.log (mass[0]); // вывожу каждый элемент массива, в этой главе цикл неизвестен
console.log (mass[1]);
console.log (mass[2]);
console.log (mass[3]);
console.log (mass[4]);
