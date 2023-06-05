"use strict";

import assert from "node:assert/strict";
import { describe, it, beforeEach } from 'node:test';

import { AnimalQueue, Cat, Dog } from "../../src/stacks-and-queues/AnimalQueue.js";

describe("animal-shelter", () => {
    let animalQueue = null;

    beforeEach(() => {
        animalQueue = new AnimalQueue()
            .enqueue(new Dog("Dog 1"))
            .enqueue(new Cat("Cat 1"))
            .enqueue(new Dog("Dog 2"))
            .enqueue(new Cat("Cat 2"));
    });

    describe('dequeueAny', () => {
        it("should dequeue the first enqueue dog", () => {
            assert.strictEqual(animalQueue.dequeueAny()?.getName(), "Dog 1");
            assert.strictEqual(animalQueue.getSize(), 3);
        });
    });

    describe('dequeueDog', () => {
        it("should dequeue the first enqueue dog", () => {
            assert.strictEqual(animalQueue.dequeueDog()?.getName(), "Dog 1");
            assert.strictEqual(animalQueue.getSize(), 3);
        });
    });

    describe('dequeueCat', () => {
        it("should dequeue the first enqueue cat", () => {
            assert.strictEqual(animalQueue.dequeueCat()?.getName(), "Cat 1");
            assert.strictEqual(animalQueue.getSize(), 3);
        });
    });
});
