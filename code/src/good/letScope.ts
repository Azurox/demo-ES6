class LetScope {
  constructor() {
    {
      // tslint:disable-next-line:prefer-const
      let hello = "bonjour";
    }
    console.log(hello);
  }
}

new LetScope();
