import cardWidget from "./cardWidget";

const container = document.querySelector('.card-widget-container');
const form = new cardWidget(container);


form.bindToDOM();