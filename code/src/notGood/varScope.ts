class VarScope {
  constructor() {
    {
      // tslint:disable-next-line:no-var-keyword prefer-const
      var hello = "bonjour";
    }
    console.log(hello);
  }
}

new VarScope();

class DoubleVar {
  customer: any = {
    isDead: true
  };

  constructor() {
    if (this.customer.isDead) {
      // tslint:disable-next-line:no-var-keyword prefer-const
      var result = "Il est mort";
    } else {
      // tslint:disable-next-line:no-var-keyword prefer-const
      var result = "Il est vivant";
    }
    console.log(result);
  }
}

// new DoubleVar();
