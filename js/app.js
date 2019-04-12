import {calculateBonus} from "./lib.js";

const sales = [12000, 8000, 10000, 15000, 2000];
const bonusPercent = 0.05;
const minSaleForBonus = 10000;
const sumBonus = calculateBonus(sales, bonusPercent, minSaleForBonus);

console.log(sumBonus);