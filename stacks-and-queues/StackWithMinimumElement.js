import Stack from "./Stack.js";

export default class StackWithMinimumElement extends Stack {
    constructor() {
        super();

        /**
        * Additional stack to save minimum elements.
        * @property {Array<any>}
        * @default []
        */
        this.minimumElements = new Stack();
    }

    /**
    * Time complexity: O(1)
    * Space complexity: O(1)
    *  
    * Add element to top of stack.
    * @param {any} element
    * @return {this}
    */
    push(element) {
        if (!this.getMinimumElement() || element <= this.getMinimumElement()) {
            this.minimumElements.push(element);
        }

        return super.push(element);
    }

    /**
    * Time complexity: O(1)
    * Space complexity: O(1)
    * 
    * Remove element from top of stack.
    * @return {any}
    */
    pop() {
        const element = super.pop();

        if (element === this.getMinimumElement()) {
            this.minimumElements.pop();
        }

        return element;
    }

    /**
    * Time complexity: O(1)
    * Space complexity: O(N)
    * 
    * @return {any}
    */
    getMinimumElement() {
        if (this.minimumElements.isEmpty()) return null;

        return this.minimumElements.peek();
    }
}
