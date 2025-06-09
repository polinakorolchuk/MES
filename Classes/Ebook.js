import { Book } from './Book.js';

export class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Цена: ${this.price}`);
    }
}

const myEbook = new Ebook("JS Book", "Polina Korolchuk", 2025, 100);
myEbook.displayInfo();