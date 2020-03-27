const assert = require('assert');
const Rectangle = require('../Rectangle');

const rectangle = new Rectangle(10, 5);
const rectangle2 = new Rectangle(15, 15);

describe('Rectangle', () => {
    it('is an object', () => {
      assert.strictEqual(typeof rectangle, 'object');
    });
    it('verifying if the object is a square or not', () => {
      assert.strictEqual(rectangle2.isSquare(), true);
      assert.strictEqual(rectangle.isSquare(), false);
    });
    it('verifyng the area of the object', () => {
      assert.strictEqual(rectangle.getArea(), 50);
    });
    it('verifyng the perimeter of the object', () => {
      assert.strictEqual(rectangle.getPerimeter(), 30);
    });
  });