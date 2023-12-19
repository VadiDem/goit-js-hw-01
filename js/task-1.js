function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      totalQuantity += products[key];
    }
  }
  return totalQuantity <= containerSize;
}
