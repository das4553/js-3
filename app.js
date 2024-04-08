for (let i = 0; i <= 20; i++) {
  console.log(i);
}

let i = 0;

while (i <= 30) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 40);

let currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    currentDay = "კვირა";
    break;
  case 1:
    currentDay = "ორშაბათი";
    break;
  case 2:
    currentDay = "სამშაბათი";
    break;
  case 3:
    currentDay = "ოთხშაბათი";
    break;
  case 4:
    currentDay = "ხუთშაბათი";
    break;
  case 5:
    currentDay = "პარასკევი";
    break;
  case 6:
    currentDay = "შაბათი";
    break;
}

console.log(currentDay);

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log(numbers[1]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[7]);
console.log(numbers[8]);
