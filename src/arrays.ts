/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if(numbers.length ===0){
        return [];
    }
    let newnumbers:number[] = [numbers[0] , numbers[numbers.length-1]]
    return newnumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {

    return numbers.map((num:number): number => num*3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {

    return numbers.map((num:string):number => isNaN(Number(num)) ? 0 :Number(num));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let mapped = amounts.map((num:string):string => num.startsWith('$')?  num.replace('$',""): num);
    let mapped2 = mapped.map((num:string):number => isNaN(Number(num)) ?  0: Number(num) );
    return mapped2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let arr:string[] = [...messages];
    arr = arr.map((item:string):string => item.slice(-1) ==="!" ? item.toUpperCase():item);
    arr = arr.filter((item:string):boolean => item.slice(-1) !=="?");
    return arr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((item:string):boolean =>item.length <4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let allrgb:boolean = colors.every((color:string): boolean => ["red", "green", "blue"].includes(color));
    return allrgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum:string = addends.join("+");
    let total:number = addends.reduce((item:number, currentTotal:number):number => item+currentTotal,0)
    return total+"="+sum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let isNeg:boolean = values.some((num:number):boolean => num <0);
    //console.log(isNeg);
    let arr= [...values];
    if(isNeg===false){
        let sum:number = arr.reduce((num:number, currentTotal:number):number => num+currentTotal,0)
        arr.push(sum);
        return arr;
    } else{
        let negative = arr.findIndex((num:number)=> num<0);
        let sum = arr.slice(0, negative).reduce((num:number, currentTotal:number):number => num+currentTotal,0);
        arr.splice(negative+1,0,sum);
        return arr;
    }
}
