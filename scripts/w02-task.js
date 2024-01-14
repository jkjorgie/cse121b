/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jay Jorgensen';
let currentYear = '2024';
let profilePicture = 'images/profile.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ['Oranges', 'Lamb Chops', 'Chips & Salsa'];
foodElement.innerHTML = favFoods.join(', ');
favFood = 'Lamb Tikka Masala';
favFoods.push(favFood);
foodElement.innerHTML += '<br>' + favFoods.join(', ');
favFoods.shift();
foodElement.innerHTML += '<br>' + favFoods.join(', ');
favFoods.pop();
foodElement.innerHTML += '<br>' + favFoods.join(', ');