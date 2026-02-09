 const RANDOM_DEEDS_POOL = [
    'ARAVIA Anti-Acne Serum — это идеальное решение для тех, кто столкнулся с проблемами кожи.',
    'Icon Skin — это средство, специально разработанное для борьбы с акне и постакне.',
    ' La Roche-Posay изначально была задумана как восстановительная — увлажняющий крем ',
    'Pekah предназначено для ухода за кожей лица, шеи и зоны декольте.',
    ' VENUS предназначен для ежедневного использования и направлен на поддержание оптимального уровня увлажненности кожи.',
    'The Act Labs — это увлажняющее средство, предназначенное для ежедневного ухода. ',
];
const deedsList = document.querySelector('#deeds-list');
const deedForm = document.querySelector('#deed-form');
const inputDeed = document.querySelector('#input-deed');
const btnRandom = document.querySelector('#btn-random');

const deeds = [];
 deedForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const inputField = document.getElementById('input-deed');
    const inputValue = inputField.value.trim();

    if (inputValue) {
        const newItem = document.createElement('div');
        newItem.textContent = inputValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', function() {
            deedsList.removeChild(newItem);
        });
    
        newItem.appendChild(deleteButton);
        deedsList.appendChild(newItem);

        inputField.value = '';
    }
})
function getRandomDeed() {
    const randomIndex = Math.floor(Math.random() * RANDOM_DEEDS_POOL.length);
    return RANDOM_DEEDS_POOL[randomIndex];
}

btnRandom.addEventListener('click', function() {
    const newDeed = getRandomDeed();
    const newDeedElement = document.createElement('div');
    newDeedElement.textContent = newDeed;
    deedsList.appendChild(newDeedElement);
});