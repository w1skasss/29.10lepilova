// лепилова шленова 821

// 1
// let input = document.getElementById("input");
// let elem = document.getElementById("elem");
// input.addEventListener("blur", function() {
//     elem.textContent += input.value;
// });

// 2
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let elem = document.getElementById("elem");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     let sum = Number(input1.value) + Number(input2.value) + Number(input3.value);
//     elem.textContent = "Сумма: " + sum;
// });

// 3
// let input = document.getElementById("input");
// let sumElem = document.getElementById("sumElem");
// input.addEventListener("blur", function() {
//     let number = input.value;
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += parseInt(number.charAt(i));
//     }
//     sumElem.textContent = "Сумма: " + sum;
// });

// 4
// let input = document.getElementById("input");
// let averageElem = document.getElementById("averageElem");
// input.addEventListener("blur", function() {
//     let numbers = input.value.split(",");
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += parseInt(numbers[i]);
//     }
//     let average = sum / numbers.length;
//     averageElem.textContent = "Среднее арифметическое: " + average;
// });

// 5
// let fioInput = document.getElementById("fioInput");
// let surnameInput = document.getElementById("surnameInput");
// let nameInput = document.getElementById("nameInput");
// let patronymicInput = document.getElementById("patronymicInput");
// fioInput.addEventListener("blur", function() {
//     let fullName = fioInput.value.split(" ");
//     surnameInput.value = fullName[0];
//     nameInput.value = fullName[1];
//     patronymicInput.value = fullName[2];
// });

// 6
// let input = document.getElementById("input");
// input.addEventListener("blur", function() {
//     let text = input.value;
//     let words = text.split(" ");
//     let formattedText = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//     input.value = formattedText;
// });

// 7
// let input = document.getElementById("input");
// let wordCount = document.getElementById("wordCount");
// input.addEventListener("blur", function() {
//     let text = input.value;
//     let words = text.split(" ");
//     words = words.filter(function(word) {
//         return word !== "";
//     });
//     let count = words.length;
//     wordCount.textContent = "Количество слов: " + count;
// });

// 8
// let input = document.getElementById("input");
// input.addEventListener("blur", function() {
//     let input = input.value;
//     let parts = input.split(".");
//     let formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
//     input.value = formattedDate;
// });

// 9
// let input = document.getElementById("input");
// let checkButton = document.getElementById("checkButton");
// let result = document.getElementById("result");
// checkButton.addEventListener("click", function() {
//     let word = input.value.toLowerCase();
//     if (word === word.split("").reverse().join("")) {
//         result.textContent = "палиндром";
//     } else {
//         result.textContent = "не палиндром";
//     }
// });

// 10
// let input = document.getElementById("input");
// let result = document.getElementById("result");
// input.addEventListener("blur", function() {
//     let number = input.value;
//     if (number.includes("3")) {
//         result.textContent = "Число содержит внутри себя цифру 3";
//     } else {
//         result.textContent = "Число не содержит внутри себя цифру 3";
//     }
// });

// 11
// let paragraphs = document.getElementsByTagName("p");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].textContent += " " + (i + 1);
//     }
// });

// 12
// let links = document.getElementsByTagName("a");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     for (let i = 0; i < links.length; i++) {
//         links[i].textContent += " (" + links[i].href + ")";
//     }
// });

// 13
// let links = document.getElementsByTagName("a");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     for (let i = 0; i < links.length; i++) {
//         if (links[i].href.startsWith("http://")) {
//             links[i].textContent += " →";
//         }
//     }
// });

// 14
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

// 15
// let input = document.getElementById("input");
// let result = document.getElementById("result");
// input.addEventListener("blur", function() {
//     let date = input.value;
//     let dayOfWeek = getDayOfWeek(date);
//     result.textContent = dayOfWeek;
// });
// function getDayOfWeek(dateString) {
//     let dateParts = dateString.split(".");
//     let day = parseInt(dateParts[0]);
//     let month = parseInt(dateParts[1]) - 1;
//     let year = parseInt(dateParts[2]);
//     let date = new Date(year, month, day);
//     let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     return daysOfWeek[date.getDay()];
// }

// 16
// let input = document.getElementById("input");
// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// button1.addEventListener("click", function() {
//     let currentValue = parseInt(input.value);
//     input.value = currentValue + 1;
// });
// button2.addEventListener("click", function() {
//     let currentValue = parseInt(input.value);
//     if (currentValue > 0) {
//         input.value = currentValue - 1;
//     }
// });

// 17
// let input = document.getElementById("input");
// let paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener("click", function() {
//         let currentValue = parseInt(input.value);
//         input.value = currentValue + 1;
//     });
// }

// 18
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//     let div = divs[i];
//     let text = div.innerHTML;
//     if (text.length > 10) {
//         text = text.substring(0, 10) + "...";
//     }
//     div.innerHTML = text;
// }

// 19
// function generateRandomString() {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let randomString = "";
//     for (let i = 0; i < 8; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         randomString += characters.charAt(randomIndex);
//     }
//     document.getElementById("randomInput").value = randomString;
// }

// 20
// function generateRandomString() {
//     let input = document.getElementById("randomInput");
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

// 21
// function convertToFahrenheit() {
//     let inputF = document.getElementById("inputF");
//     let celsiusResult = document.getElementById("result");
//     let fahrenheit = parseFloat(inputF.value);
//     let celsius = (fahrenheit - 32) * 5/9;
//     celsiusResult.textContent = "Температура цельсия: " + celsius.toFixed(2);
// }

// 22
// function calculateFactorial() {
//     let input = document.getElementById("input");
//     let result = document.getElementById("result");
//     let number = parseInt(input.value);
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     result.textContent = "Factorial: " + factorial;
// }

// 23
// function calculateRoots() {
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let input3 = document.getElementById("input3");
//     let result = document.getElementById("result");
//     let a = parseInt(input1.value);
//     let b = parseInt(input2.value);
//     let c = parseInt(input3.value);
//     let discriminant = Math.pow(b, 2) - (4 * a * c);
//     if (discriminant > 0) {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         result.textContent = "Roots: " + root1 + ", " + root2;
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         result.textContent = "корень: " + root;
//     } else {
//         result.textContent = "нет корней";
//     }
// }
