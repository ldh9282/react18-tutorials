export const getTotals = (cart) => {
    let totalAmount = 0;
    let totalCost = 0;

    for (let { amount, price } of cart.values()) {
        totalAmount += amount;
        totalCost += price * amount;
    }
    totalCost = totalCost.toFixed(2);
    return { totalAmount, totalCost };
};
