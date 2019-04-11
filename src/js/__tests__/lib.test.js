import {calculateBonus} from "../lib.js";


test('it should calculate bonus', () => {
    const sales = [12000, 8000, 10000, 15000, 2000];
    const bonusPercent = 0.05;

    const expected = 350;

    const result = calculateBonus(sales, bonusPercent);

    expect(result).toBe(expected);
});