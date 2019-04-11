export function calculateBonus(sales, bonusPercent) {
    let total = 0;

    for (const sale of sales) {
        if (sale > 10000){
            const sum = sale - 10000;
            const bonus = sum * bonusPercent;
            total += bonus;
        }
    }

    return total;
}
