class SmartCalculator {
  constructor(initialValue) {
    this.num = initialValue;
    // your implementation
  }

  add(number) {
    this.num += "+" + number;
    return this;
    // your implementation
  }
  
  subtract(number) {
    this.num += "-" + number;
    return this;
    // your implementation
  }

  multiply(number) {
    this.num += "*" + number;
    return this;
    // your implementation
  }

  devide(number) {
    this.num += "/" + number;
    return this;
    // your implementation
  }

  pow(number) {
    this.num += "**" + number;
    return this;
    // your implementation
  }
  toString(){
    return eval(this.num);
  }
}

module.exports = SmartCalculator;