export default function addingHtmlToTheDom(listArray, writeThingsToList) {
  listArray.forEach((element) => {
    writeThingsToList.innerHtml += `<li class="toDoList__items">${element}</li>`;
  });
}
