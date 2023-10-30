// лепилова 821

// № 1
// let elem = document.querySelector('#input');
// let input = document.querySelector('#elem');
// elem.addEventListener('blur', function() { 
//   let elem1 = elem.value;
//   input.textContent += ' ' + elem1;
//   console.log(input.textContent);
// });

// № 2
// document.querySelector('#buttonSum').addEventListener('click', function() {
//     let input1 = parseInt(document.querySelector('#input1').value);
//     let input2 = parseInt(document.querySelector('#input2').value);
//     let input3 = parseInt(document.querySelector('#input3').value);
//     let sum = (isNaN(input1) ? 0 : input1) + (isNaN(input2) ? 0 : input2) + (isNaN(input3) ? 0 : input3);
//     let result = document.querySelector('#result');
//     result.textContent = `${sum}`;
//     console.log(`${sum}`);
// });

// № 3
// let input = document.getElementById('input');
// let result = document.getElementById('result');
// input.addEventListener('blur', function() {
//     let number = input.value;
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += parseInt(number.charAt(i));
//     }
//     result.textContent = 'Сумма цифр числа: ' + sum;
// });

// № 4
// document.getElementById('input').addEventListener('blur', function() {
//     let input = this.value;
//     let number = input.split(',');
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += parseInt(number[i]);
//     }
//     let average = sum / number.length;
//     result.textContent = 'Среднее арифметическое: ' + average;
// });

// № 5
// document.getElementById('fioInput').addEventListener('blur', function() {
//     let fioInput = this.value.split(' ');
//     if (fioInput.length >= 3) {
//         document.getElementById('surnameInput').value = fioInput[0];
//         document.getElementById('nameInput').value = fioInput[1];
//         document.getElementById('patronymicInput').value = fioInput[2];
//     } else {
//         alert('Введите ваше ФИО полностью');
//     }
// });

// № 6
// document.querySelector('#fioInput').addEventListener('blur', function() {
//     let fioInput = this.value.split(' ');
//     if (fioInput.length >= 3) {
//         let input1 = capitalizeFirstLetter(fioInput[0]);
//         let input2 = capitalizeFirstLetter(fioInput[1]);
//         let input3 = capitalizeFirstLetter(fioInput[2]);
//         this.value = `${input1} ${input2} ${input3}`;
//     } else {
//         alert('Введите ФИО полностью');
//     }
// });

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// № 7
// document.querySelector('#textInput').addEventListener('blur', function() {
//     let text = textInput.value;
//     let words = text.split(' ');
//     let count = words.filter(word => word !== '').length;
//     let wordCount = document.querySelector('#wordCount');
//     wordCount.textContent = "Количество слов: " + count;
// });

// № 8
// document.querySelector('#dateInput').addEventListener('blur', function() {
//     let dateInput = this.value;
//     let part = dateInput.split('.');
//     if (part.length === 3) {
//         let elem = `${part[2]}-${part[1]}-${part[0]}`;
//         this.value = elem;
//     } else {
//         alert('Введите дату в формате 31.12.2016');
//     }
// });

// № 9
// document.querySelector('#wordInput').addEventListener('blur', function() {
//     let word = this.value.toLowerCase();
//     let wordInput = word.split('').reverse().join('');
//     if (word === wordInput) {
//         result.textContent = "слово читается с начала и с конца одинаково";
//     } else {
//         result.textContent = "слово читается с начала и с конца по-разному";
//     }
// });

// № 10
// document.querySelector('#numberInput').addEventListener('blur', function() {
//     let number = this.value;
//     if (number.includes('3')) {
//         result.textContent = "Число содержит внутри себя цифру 3";
//     } else {
//         result.textContent = "Число не содержит внутри себя цифру 3";
//     }
// });

// № 11
// document.querySelector('#elem').addEventListener('click', function() {
//     let elem = document.querySelectorAll('p');
//     for (let i = 0; i < elem.length; i++) {
//         elem[i].textContent += " " + (i + 1);
//     }
// });

// № 12
// document.getElementById('elem').addEventListener('click', function() {
//     let links = document.querySelectorAll('a');
//     links.forEach(function(link) {
//         let href = link.getAttribute('href');
//         link.textContent += ` (${href})`;
//     });
// });

// № 13
// document.getElementById('elem').addEventListener('click', function() {
//    let links = document.querySelectorAll('a');
//     links.forEach(function(link) {
//         let href = link.getAttribute('href');
//         if (href.startsWith('http://')) {
//             link.textContent += '→';
//         }
//     });
// });

// № 14
// let number1 = document.getElementById("number1");
// let number2 = document.getElementById("number2");
// let number3 = document.getElementById("number3");
// let button = document.getElementById("button");
// number1.addEventListener("click", function() {
//     let square = parseInt(number1.textContent) ** 2;
//     number1.textContent = square;
// });
// number2.addEventListener("click", function() {
//     let square = parseInt(number2.textContent) ** 2;
//     number2.textContent = square;
// });
// number3.addEventListener("click", function() {
//     let square = parseInt(number3.textContent) ** 2;
//     number3.textContent = square;
// });

// № 15
let dateInput = document.getElementById("dateInput");
let result = document.getElementById("result");
dateInput.addEventListener("blur", function() {
    let date = dateInput.value;
    let dayOfWeek = getDayOfWeek(date);
    result.textContent = dayOfWeek;
});
function getDayOfWeek(dateString) {
    let dateParts = dateString.split(".");
    let day = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1;
    let year = parseInt(dateParts[2]);
    let date = new Date(year, month, day);
    let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return daysOfWeek[date.getDay()];
}

// № 16
// let numberInput = document.getElementById("numberInput");
// let increaseButton = document.getElementById("increaseButton");
// let decreaseButton = document.getElementById("decreaseButton");
// increaseButton.addEventListener("click", function() {
//     let currentValue = parseInt(numberInput.value);
//     numberInput.value = currentValue + 1;
// });
// decreaseButton.addEventListener("click", function() {
//     let currentValue = parseInt(numberInput.value);
//     if (currentValue > 0) {
//         numberInput.value = currentValue - 1;
//     }
// });

// № 17
// let numberInput = document.getElementById("numberInput");
// let paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener("click", function() {
//         let currentValue = parseInt(numberInput.value);
//         numberInput.value = currentValue + 1;
//     });
// }

// № 18
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//     let div = divs[i];
//     let text = div.innerHTML;
//     if (text.length > 10) {
//         text = text.substring(0, 10) + "...";
//     }
//     div.innerHTML = text;
// }

// № 19
// function generateRandomString() {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let randomString = "";
//     for (let i = 0; i < 8; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         randomString += characters.charAt(randomIndex);
//     }
//     document.getElementById("randomStringInput").value = randomString;
// }

// № 20
// function generateRandomString() {
//     let input = document.getElementById("randomStringInput");
//     let string = input.value;
//     let shuffledString = shuffleString(string);
// input.value = shuffledString;
// }
// function shuffleString(string) {
//     let characters = string.split("");
//     for (let i = characters.length - 1; i > 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i + 1));
//         let temp = characters[i];
//         characters[i] = characters[randomIndex];
//         characters[randomIndex] = temp;
//     }
//     return characters.join("");
// }

// № 21
// function convertToFahrenheit() {
//     let fahrenheitInput = document.getElementById("fahrenheitInput");
//     let celsiusResult = document.getElementById("result");
//     let fahrenheit = parseFloat(fahrenheitInput.value);
//     let celsius = (fahrenheit - 32) * 5/9;
//     celsiusResult.textContent = "Temperature in Celsius: " + celsius.toFixed(2);
// }

// № 22
// function calculateFactorial() {
//     let numberInput = document.getElementById("numberInput");
//     let result = document.getElementById("result");
//     let number = parseInt(numberInput.value);
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     result.textContent = "Factorial: " + factorial;
// }

// № 23
// function calculateRoots() {
//     let inputA = document.getElementById("inputA");
//     let inputB = document.getElementById("inputB");
//     let inputC = document.getElementById("inputC");
//     let result = document.getElementById("result");
//     let a = parseInt(inputA.value);
//     let b = parseInt(inputB.value);
//     let c = parseInt(inputC.value);
//     let discriminant = Math.pow(b, 2) - (4 * a * c);
//     if (discriminant > 0) {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         result.textContent = "Roots: " + root1 + ", " + root2;
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         result.textContent = "Root: " + root;
//     } else {
//         result.textContent = "No real roots";
//     }
// }