import LinkedList from "../linked-lists/LinkedList.js";

export class AnimalQueue {
    #dogs;
    #cats;
    #size;
    #order;

    constructor() {
        /**
         * @type {LinkedList}
         */
        this.#dogs = new LinkedList();
        /**
         * @type {LinkedList}
         */
        this.#cats = new LinkedList();
        /**
         * @type {number}
         */
        this.#size = 0;
        /**
         * @type {number}
         */
        this.#order = 0;
    }

    /**
     * @returns {number}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    getSize() {
        return this.#size;
    }

    /**
     * @returns {boolean}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    #isEmpty() {
        return this.#size === 0;
    }

    /**
     * @param {Animal}
     * @returns {this}
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    enqueue(animal) {
        const isAnimal = animal instanceof Animal;
        if (!isAnimal) {
            throw new Error("Animal should be a Cat or a Dog.");
        }

        animal.setOrder(this.#order);
        this.#size++;
        this.#order++;

        if (animal instanceof Dog) this.#dogs.add(animal);
        else if (animal instanceof Cat) this.#cats.add(animal);

        return this;
    }

    /**
     * @returns {Animal}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    dequeueAny() {
        if (this.#isEmpty()) return null;

        if (this.#cats.isEmpty()) return this.dequeueDog();
        else if (this.#dogs.isEmpty()) return this.dequeueDog();

        const olderCat = this.#cats.peek()?.element;
        const orderDog = this.#dogs.peek()?.element;

        return olderCat.isOlderThan(orderDog)
            ? this.dequeueCat()
            : this.dequeueDog();
    }

    /**
     * @returns {Animal}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    dequeueDog() {
        if (this.#dogs.isEmpty()) return null;

        this.#size--;
        return this.#dogs.deleteAtBeginning();
    }

    /**
     * @returns {Animal}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    dequeueCat() {
        if (this.#cats.isEmpty()) return null;

        this.#size--;
        return this.#cats.deleteAtBeginning();
    }
}

class Animal {
    #name;
    #order;

    constructor(name) {
        /**
         * @type {string}
         */
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    getOrder() {
        return this.#order;
    }

    setOrder(order) {
        this.#order = order;
    }

    isOlderThan(animal) {
        return this.#order < animal.getOrder();
    }
}

export class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}

export class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}
