const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}.`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
    Object.assign(order.order.delivery, {deliveryPerson: "Luiz Silva"});
    Object.assign(order.order.pizza.marguerita, {price: 15});
    Object.assign(order.payment, {total: 50});
    const array = Object.keys(order.order.pizza);
    const arrayDrinks = Object.values(order.order.drinks.coke);
  return `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${array[0]}, ${array[1]} e ${arrayDrinks[0]} é de R$ ${order.payment.total},00.`
};

console.log(orderModifier(order));
