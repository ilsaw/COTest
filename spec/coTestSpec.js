const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should Medium Coverage degrade 1 pound on price and sellIn", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(19);
  });

  it("should Full Coverage degrade 1 pound of sellIn and increase 1 to price", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(1);
  });

  it("should Low Coverage degrade 1 pound on price and sellIn", function() {
    const coTest = new CarInsurance([ new Product("Low Coverage", 5, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(6);
  });

  it("should Mega Coverage not change price and sellIn", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("should Mega Coverage not change price and sellIn", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", -1, 80) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(80);
  });

  it("should Special Full Coverage degrade 1 pound sellIn and increase 1 pound of price", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 15, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(14);
    expect(products[0].price).equal(21);
  });

  it("should Special Full Coverage degrade 1 pound sellIn and increase 1 pound of price", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 10, 49) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(50);
  });

  it("should Special Full Coverage degrade 1 pound sellIn and increase 1 pound of price", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 5, 49) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(50);
  });

  it("should Special Full Coverage degrade 1 pound sellIn and decrease 1 pound of price", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Super Sale");
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(4);
  });

  it("should Low Coverage keep sellIn and degrade price", function() {
    const coTest = new CarInsurance([ new Product("Low Coverage", -1, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(5);
  });

  it("should Special Full Coverage keep sellIn and degrade price", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", -1, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(0);
  });
  it("should Full Coverage keep sellIn and degrade price", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", -1, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(9);
  });

  

  

});
