import {checkCardNumber, cardSystem }from "./cardValidator";

export default class cardWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;
        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);
    }

    static get markup() {
        return `
        <form class="card-form-widget">
            <div class="control">
                <ul class="cards">
                    <li><span class="card visa" title="Visa">Visa</span></li>
                    <li><span class="card mastercard" title="Mastercard">Mastercard</span></li>
                    <li><span class="card mir" title="Mir">Mir</span></li>
                    <li><span class="card amex" title="American_Express">American Express</span></li>
                    <li><span class="card discover" title="Discover">Discover</span></li>
                    <li><span class="card jcb" title="JCB">JCB</span></li>
                    <li><span class="card diners_club" title="Diners_Club">Diners Club</span></li>
                </ul>
                <div class="field">
                    <input type="text" id="card-number" class="input" placeholder="Credit card number">
                    <button class="submit">Click to Validate</button>
                </div>
                <div class="message_container">
                <div class="arrow message"></div>
                <div class="message"></div>
                </div>
                
            </div>
        </form>
        `;
    }

    static get submitSelector() {
        return '.submit';
    }

    static get inputSelector() {
        return '.input';
    }

    static get selector() {
        return '.card-form-widget';
    }

    static get message() {
        return '.message';
    }
    static get card() {
        return '.card';
    }

    bindToDOM() {
        this.parentEl.innerHTML = cardWidget.markup;
        this.element = this.parentEl.querySelector(cardWidget.selector);
        this.submit = this.element.querySelector(cardWidget.submitSelector);
        this.input = this.element.querySelector(cardWidget.inputSelector);
        this.message = this.element.querySelector(cardWidget.message);
        this.cards = this.element.querySelectorAll(cardWidget.card);
        this.element.addEventListener('submit', this.onSubmit);
        this.element.addEventListener('input', this.onInput)
    }

    setCard(cardNumber) {
        this.cards.forEach(element => {
            element.classList.remove('active');
        });
        const card = cardSystem(cardNumber);
        this.cards.forEach(element => {
            if(element.classList.contains(card)) {
                element.classList.add('active');
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        let textMessage;
        const value = this.input.value;
        if(checkCardNumber(value)) {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
            this.message.classList.add('valid');
            this.message.classList.remove('invalid');
            textMessage = "Valid card number";
        } else {
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
            this.message.classList.add('invalid');
            this.message.classList.remove('valid');
            textMessage = "Invalid card number";
        }
        this.message.innerHTML = textMessage;
    }

    onInput(e) {
        e.preventDefault();
        this.input.classList.remove('invalid');
        this.message.classList.remove('invalid');
        this.input.classList.remove('valid');
        this.message.classList.remove('valid');
        const value = this.input.value;
        this.setCard(value);
    }
}