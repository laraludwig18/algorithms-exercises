export default class TripleStack {
    constructor() {
        this.array = [];
        this.lengths = [0, 0, 0];
        this.numberOfStacks = 3;
    }

    getLength(stackNumber) {
        return this.lengths[stackNumber - 1];
    }

    push({ stackNumber, element } = {}) {
        const index = this.getLength(stackNumber) * this.numberOfStacks + stackNumber - 1;
        this.array[index] = element;
        ++this.lengths[stackNumber - 1];

        return this;
    }

    pop(stackNumber) {
        const length = this.getLength(stackNumber);
        let element = null;

        if (length > 0) {
            let index = (length - 1) * this.numberOfStacks + stackNumber - 1;
            element = this.array[index];
            this.array[index] = undefined;
            --this.lengths[stackNumber - 1];
        }

        return element;
    }

    peek(stackNumber) {
        const length = this.getLength(stackNumber);
        let element = null;

        if (length > 0) {
            let index = (length - 1) * this.numberOfStacks + stackNumber - 1;
            element = this.array[index];
        }

        return element;
    }

    isEmpty(stackNumber) {
        return this.getLength(stackNumber) === 0;
    }
}
