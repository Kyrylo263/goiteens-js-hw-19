// 1.

const animalList = document.querySelector(".animal-list");
const foodList = document.querySelector(".food-list");
const technologyList = document.querySelector(".technology-list");
const animal = document.querySelector(".animal");
const food = document.querySelector(".food");
const technology = document.querySelector(".technology");
function func1(list) {
    const childrenArr = list.children;
    const arrList = [...childrenArr];
    const listDone = document.createElement("ul");
    const category = document.createElement("li");
    category.textContent = `Категорія: ${list.previousElementSibling.textContent}`;
    listDone.append(category);
    const count = document.createElement("li");
    count.textContent = `Кількість елементів: ${arrList.length}`;
    listDone.append(count);
    return listDone
    // return `Категорія: ${list.previousElementSibling.textContent}. Кількість елементів: ${arrList.length}`
};
console.log(func1(foodList));

// 2.

const ingredientsList = document.querySelector(".ingredients");
const ingredientsArr = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
ingredientsArr.map(ingredient => {
    const lastItem = document.createElement("li");
    lastItem.textContent = ingredient;
    ingredientsList.append(lastItem);
});
console.log(ingredientsList);

// 3.

const galleryList = document.querySelector(".gallery");
const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
images.map(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    li.append(img);
    galleryList.insertAdjacentHTML('beforeend', li);
});
console.log(galleryList);

// 4.