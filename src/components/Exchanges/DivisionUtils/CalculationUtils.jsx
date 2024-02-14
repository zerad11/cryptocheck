const calculateResult = (inputValue, orders, commission, isAsks) => {
    let totalAmount = 0;
    let totalVolume = 0;

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const price = parseFloat(order.price);
        const volume = parseFloat(order.volume);
        const amount = parseFloat(order.amount);

        if (totalAmount + amount <= inputValue) {
            totalAmount += amount;
            totalVolume += volume;
        } else {
            const remainingAmount = inputValue - totalAmount;
            totalVolume += remainingAmount / price;
            break;
        }
    }

    return isAsks ? totalVolume / commission : totalVolume * commission;
};

export { calculateResult };
