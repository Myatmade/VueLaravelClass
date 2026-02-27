//Polymorphism
// class CreditCardPayment {
//   pay(amount) {
//     console.log(`Paying $${amount} with Credit Card`);
//   }
// }

// class PayPalPayment {
//   pay(amount) {
//     console.log(`Paying $${amount} with PayPal`);
//   }
// }

// class CashPayment {
//   pay(amount) {
//     console.log(`Paying $${amount} with Cash`);
//   }
// }

// function processPayment(paymentMethod, amount) {
//   if (paymentMethod == "credit") {
//     const payment = new CreditCardPayment();
//     payment.pay(amount);
//   } else if (paymentMethod == "paypal") {
//     const payment = new PayPalPayment();
//     payment.pay(amount);
//   } else if (paymentMethod == "cash") {
//     const payment = new CashPayment();
//     payment.pay(amount);
//   }
// }

// processPayment("credit", 100);

class Payment {
  pay(amount) {
    console.log(`Payment method must be implemented`);
  }
}

class CreditCardPayment extends Payment {
  pay(amount) {
    console.log(`Paying $${amount} with Credit Card`);
  }
}
class PayPalPayment extends Payment {
  pay(amount) {
    console.log(`Paying $${amount} with PayPal`);
  }
}
class CashPayment extends Payment {
  pay(amount) {
    console.log(`Paying $${amount} with Cash`);
  }
}

function processPayment(paymentObject, amount) {
  paymentObject.pay(amount);
}

const payment = new CreditCardPayment();
processPayment(payment, 100);
