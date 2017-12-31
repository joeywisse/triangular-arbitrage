// @flow

/**
 * Returns a number which represents the percentage of profit or losses by performing this trade.
 */

// type PriceProps = {
//     a: number,
//     b: number,
//     c: number,
// };
const calcSingleChain = ({ a, b, c }) => 100 * a * b * c - 100;

export default calcSingleChain;
