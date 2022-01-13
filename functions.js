// Use the forEach method to solve these problems! If the function returns an array, it should return a NEW array, without mutating the old array.


/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];

findByName('jumpy', petsArray)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    for(let a of arr){
        if(name === a.name){
            return a;
        }
    }

}

/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    const newArr = [];
    arr.map((a) => {
        if(a.type === `dog`){
            newArr.push(a);
        }
    });

    return newArr;
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const newArr = [];

    arr.map((a) => {
        if(a.type === `dog`){
            newArr.push(a.name);
        }
    });

    return newArr;
}


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArr = [];

    arr.map((a) => {
        newArr.push(a.name);
    });

    return newArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArr = [];

    arr.map((a) => {
        newArr.unshift(a.type);
    });
    
    return newArr;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArr = [];

    arr.map((a) => {
        newArr.push({
            nombre: a.name,
            tipo: a.type
        });
    });

    return newArr;
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    return [];
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    return arr.map(a => {
        const temp = {...a};
        temp.isHungry = true;

        return temp;
    });

}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    return arr.map(a => {
        const temp = {...a};
        temp.name = temp.name.toUpperCase();

        return temp;
    });

}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const newArr = [];

    arr.map((a) => {
        newArr.push(a.name + a.type);
    });
    
    return newArr;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    
    return arr.map((a) => {
        const newArr = [];
        newArr.push([`name`, a.name], [`type`, a.type]);

        return newArr;
    });
    
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    const newArr = [];

    arr.map(a => {
        if(a.type === `car`){
            newArr.push(a);
        }
    });

    return newArr;
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    return arr.filter(a => {
        if(a.type === `car` && a.make === `chevy`) return a;
    });

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return arr.reduce((acc, a) => {
        acc += a.model;
        return acc;
    }, ``);
}

/*
(add all ages)
Output: 14 
 */

export function getSumOfAges(arr) {
    return arr.reduce((acc, a) => {
        return acc += a.age;
    }, 0);
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return arr.reduce((acc, a) => {
        if(a.type === `car`){
            acc.car++;
        } else if (a.type === `truck`){
            acc.truck++;
        } else if (a.type === `van`){
            acc.van++;
        }

    }, {
        car: 0,
        truck: 0,
        van: 0
    });
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
