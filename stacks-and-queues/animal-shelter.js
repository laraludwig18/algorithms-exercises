"use strict";

import assert from "node:assert/strict";
import { AnimalQueue, Cat, Dog } from "./AnimalQueue.js";

const animalQueue = new AnimalQueue()
    .enqueue(new Dog("Dog 1"))
    .enqueue(new Cat("Cat 1"))
    .enqueue(new Dog("Dog 2"))
    .enqueue(new Cat("Cat 2"));

assert.strictEqual(animalQueue.dequeueAny()?.getName(), "Dog 1");

assert.strictEqual(animalQueue.dequeueDog()?.getName(), "Dog 2");
assert.strictEqual(animalQueue.dequeueCat()?.getName(), "Cat 1");
    
assert.strictEqual(animalQueue.getSize(), 1);
