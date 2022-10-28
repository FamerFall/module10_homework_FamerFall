let numberText;
let numberMath;

numberText = prompt('Пожалуйста, введите в таймер время (в секундах) оставшееся до взрыва');

numberMath = + numberText;

typeof(numberMath);


function even(numberMath){
   if (Number.isInteger(numberMath) == true) {
     return numberMath % 2 == 0
   }  else {
     return "Десятичное"
   }
}; //Вынес отдельно, чтобы не запутаться


if (numberMath === 0) {
  console.log("Ах, да! Не вводи 0")
} else if(even(numberMath) == true) {
  console.log("Чётное")
} else if(even(numberMath) === "Десятичное") {
  console.log("Пожалуйста, вводите только целые числа. Текст и дробные значения не принимаются. Поторопитесь. Бомба сама себя не взорвёт -_-")
} else {
  console.log("Нечётное")
};
