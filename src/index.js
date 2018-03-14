/**
 * Smart calculator. Priority order is observed.
 */
class SmartCalculator {
  constructor(initialValue) {
    this.variable = initialValue + '';
  }

  add(number) {
    this.variable += ' + ' + number;
    return this;
  }
  
  subtract(number) {
    this.variable += ' - ' + number;
    return this;
  }

  multiply(number) {
    this.variable += ' * ' + number;
    return this;
  }

  devide(number) {
    this.variable += ' / ' + number;
    return this;
  }

  pow(number) {
    this.variable += ' ^ ' + number;
    return this;
  }

  /**
   * It's rather hard reproduce exponentiation operation in required order.
   * Method splits all command line by whitespace, reproduces exponentiation operation from the end.
   */
  calculatePow() {
    var arr = this.variable.split(' ');
    
    var n = arr.lastIndexOf('^');
    
    while(n > 0) {
      var firstOperand = arr[n - 1];
      var secondOperand = arr[n + 1];
      var result = Math.pow(firstOperand, secondOperand);
      arr[n - 1] = result;
      arr[n] = '';
      arr[n+ 1] = '';
      n = arr.lastIndexOf('^');
    }

    this.variable = '';

    for(var i = 0; i < arr.length; i++) {
      this.variable += arr[i];
    }
  }

}

SmartCalculator.prototype.toString = function() {
  this.calculatePow()
  return eval(this.variable);
}

module.exports = SmartCalculator;
