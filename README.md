# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @csb3/lotide`

**Require it:**

`const _ = require('@csb3/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Tests if two values are equal and logs the result.
* `assertArraysEqual(actual, expected)`: Tests if two arrays are equal and logs the result.
* `assertObjectsEqual(object1, object2)`: Tests if two objects are equal and logs the result.
* `countLetters(string)`: Returns an object with each letter that appears in the string and the number of times it appears.
* `countOnly(allItems, itemsToCount)`: From an array of items, count only the elements that appear in the second array. Returns an object with each item and the number of times they appear in the first array. 
* `eqArrays(array1, array2)`: Tests if two arrays are equal. Returns a boolean.
* `eqObjects(object1, object2)`: Tests if two objects are equal. Returns a boolean.
* `findKey(object, callback)`: Returns the first value in an object which meets the requirements of the callback function
* `findKeyByValue(object, value)`: If a property of an object has a certain value, return the key paired with that value
* `flatten(array)`: Flattens an array containing arrays into a single array
* `head(array)`: Feturns the first item in an array
* `letterPositions(sentence)`: Returns an object with the letters that appear in a sentence and an array of indices where each letter appears
* `map(array, callback)`: Completes the callback function on all values in the array. Returns a new array. 
* `middle(array)`: Returns an array with the middle value in an array if the array length is an odd number; returns the middle two values if the array length is an even number. Returns an empty array if the original array length is less than 3. 
* `tail(array)`: Returns all items in an array except the first.
* `takeUntil(array, callback)`: Returns items from an array until the callback function evaluates to true. 
* `without(array, toRemove)`: Removes items in the second array from the first array. Returns a new array. 

