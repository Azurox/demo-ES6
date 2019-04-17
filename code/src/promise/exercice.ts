// To launch
// tsc exercice.ts --lib ES2015 && node exercice.js

class ExercicePromise {
  constructor(private CustomerService: CustomerService, private CardService: CardService, private CardBrandService: CardBrandService) {}

  async $onInit() {}
}

// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
/** SERVICE DEFINITION */

class CustomerService {
  getCustomerByName(name: string): Promise<{ name: string; customerId: string }> {
    return new Promise(resolve => {
      resolve({
        name,
        customerId: "770661"
      });
    });
  }
}

class CardService {
  getCard(customerId: string): Promise<{ cardId: string }> {
    return new Promise(resolve => {
      resolve({
        cardId: "8888 XXX 1111"
      });
    });
  }
}

class CardBrandService {
  getCardBrand(cardId: string): Promise<{ brand: string }> {
    return new Promise(resolve => {
      resolve({
        brand: "VISA"
      });
    });
  }
}

const exo = new ExercicePromise(new CustomerService(), new CardService(), new CardBrandService());
exo.$onInit();

/** Reponse */

// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----
// ----

// $onInit() {
//     this.CustomerService.getCustomerByName("michel").then(result => {
//         this.CardService.getCard(result.customerId).then(result => {
//             this.CardBrandService.getCardBrand(result.cardId).then(result => {
//                 console.log(result);
//             });
//         });
//     });
// }

// const customer = await this.CustomerService.getCustomerByName("michel");
// const card = await this.CardService.getCard(customer.customerId);
// const brand = await this.CardBrandService.getCardBrand(card.cardId);
// console.log(brand);
