class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
        if (this.products[i].name != 'Mega Coverage') {
          this.products[i].price = ReducePrice(this.products[i]);
          if(this.products[i].name == 'Super Sale'){
            this.products[i].price = ReducePrice(this.products[i]); 
          }
        }
      } else {
        this.products[i].price = IncreasePrice(this.products[i]);
        if (this.products[i].name == 'Special Full Coverage') {
          if (this.products[i].sellIn < 11) {
            this.products[i].price = IncreasePrice(this.products[i]);
          }
          if (this.products[i].sellIn < 6) {
            this.products[i].price =  IncreasePrice(this.products[i]);
          }
        }
      }
      if (this.products[i].name != 'Mega Coverage') {
        this.products[i].sellIn = DecreaseSellIn(this.products[i]);
      }
      if (this.products[i].sellIn <= 0) {
        if (this.products[i].name != 'Full Coverage') {
          if (this.products[i].name != 'Special Full Coverage') {
            if (this.products[i].name != 'Mega Coverage') {
              this.products[i].price = ReducePrice(this.products[i]);
            }
          } else {
            this.products[i].price = 0;
          }
        } else {
          this.products[i].price = IncreasePrice(this.products[i]);
        }
      }
    }
    return this.products;
  }
}

let ReducePrice = (product) => {
  let r = product.price > 0 ? --product.price : 0;
  r = Math.max(0, r);
  return r;
}

let IncreasePrice = (product) => {
  
  let r = product.price < 50 ? ++product.price : product.price;
  return r;
}

let DecreaseSellIn = (product) => {
  return --product.sellIn;
}

module.exports = {
  Product,
  CarInsurance
}