// To launch
// tsc exercice.ts --lib ES2015 && node exercice.js

class ExerciceNonRelatedPromise {
  constructor(private CustomerInfoService: CustomerInfoService, private ToggleService: ToggleService) {}

  async $onInit() {
    const customerInfoPromise = this.CustomerInfoService.getCustomerByName("michel");
    const toggleStatePromise = this.ToggleService.getToggleState("ING_37412");

    const [customerInfo, statePromise] = await Promise.all([customerInfoPromise, toggleStatePromise]);
  }
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

class CustomerInfoService {
  getCustomerByName(name: string): Promise<{ name: string; customerId: string; dead: boolean }> {
    return new Promise(resolve => {
      resolve({
        name,
        customerId: "770661",
        dead: true
      });
    });
  }
}

class ToggleService {
  getToggleState(feature: string): Promise<{ activated: boolean }> {
    return new Promise(resolve => {
      resolve({
        activated: true
      });
    });
  }
}

const exoNonRelated = new ExerciceNonRelatedPromise(new CustomerService(), new CardService(), new CardBrandService());
exoNonRelated.$onInit();

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
//     const customerInfoPromise = this.CustomerInfoService.getCustomerByName("michel");
//     const toggleStatePromise = this.ToggleService.getToggleState("ING_37412");

//     Promise.all([customerInfoPromise, toggleStatePromise]).then(result => {
//         console.log(result);
//     });
// }

// async $onInit() {
//     const customerInfoPromise = this.CustomerInfoService.getCustomerByName("michel");
//     const toggleStatePromise = this.ToggleService.getToggleState("ING_37412");

//     const result = await Promise.all([customerInfoPromise, toggleStatePromise]);
// }

// async $onInit() {
//     const customerInfoPromise = this.CustomerInfoService.getCustomerByName("michel");
//     const toggleStatePromise = this.ToggleService.getToggleState("ING_37412");

//     const [customerInfo, statePromise] = await Promise.all([customerInfoPromise, toggleStatePromise]);
// }
