//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
let foodSchedule = [{ name: "Salad", isVegan: true }, { name: "Salmon", isVegan: false }, { name: "Tofu", isVegan: true }, { name: "Burger", isVegan: false }, { name: "Rice", isVegan: true }, { name: "Pasta", isVegan: true }];

for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan != true) {
        foodSchedule[i].name = fruits[i-1];
        foodSchedule[i].isVegan = true
    }
}
console.log(foodSchedule)

