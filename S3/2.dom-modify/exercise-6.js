//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const startList = document.createElement("ul");
document.body.append(startList)


for(let i of apps){
    const listElement = document.createElement("li");
    startList.appendChild(listElement);
    listElement.textContent = i;
}