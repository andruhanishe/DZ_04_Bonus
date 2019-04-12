export function calculateBonus(sales, bonusPercent, minSaleForBonus) {
    let total = 0;

    for (const sale of sales) {
        if (sale > minSaleForBonus){
            const sum = sale - minSaleForBonus;
            const bonus = sum * bonusPercent;
            total += bonus;
        }
    }

    return total;
}
