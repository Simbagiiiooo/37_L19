const buttonClick = document.getElementsByClassName('big-five-list-item');
const removeFirstButtonClick = document.getElementById('remove-first-item-button');
const removeAllButtonClick = document.getElementById('remove-all-button');

buttonClick[0].addEventListener('click', () => {
    console.log('button lion');
    const newAnimal = document.createElement("li");
    const newListItem = document.getElementById("spotted-animals-list");
    newListItem.appendChild(newAnimal);
    newAnimal.innerText = "Lion";
});

buttonClick[1].addEventListener('click', () => {
    console.log('button leopard');
    const newAnimal = document.createElement("li");
    const newListItem = document.getElementById("spotted-animals-list");
    newListItem.appendChild(newAnimal);
    newAnimal.innerText = "Leopard";
});

buttonClick[2].addEventListener('click', () => {
    console.log('button elephant');
    const newAnimal = document.createElement("li");
    const newListItem = document.getElementById("spotted-animals-list");
    newListItem.appendChild(newAnimal);
    newAnimal.innerText = "Elephant";
});

buttonClick[3].addEventListener('click', () => {
    console.log('button rhino');
    const newAnimal = document.createElement("li");
    const newListItem = document.getElementById("spotted-animals-list");
    newListItem.appendChild(newAnimal);
    newAnimal.innerText = "Rhino";
});

buttonClick[4].addEventListener('click', () => {
    console.log('button buffalo');
    const newAnimal = document.createElement("li");
    const newListItem = document.getElementById("spotted-animals-list");
    newListItem.appendChild(newAnimal);
    newAnimal.innerText = "Buffalo";
});

removeFirstButtonClick.addEventListener('click',() => {
    const parentDeleteListItem = document.getElementById('spotted-animals-list');
    const deleteListItem = document.getElementsByTagName('li')[5];
    const removedListItem = parentDeleteListItem.removeChild(deleteListItem);
    return removedListItem;
})

removeAllButtonClick.addEventListener('click', () => {
    const parentDeleteListItem = document.getElementById('spotted-animals-list');
    parentDeleteListItem.innerText = "";
})


