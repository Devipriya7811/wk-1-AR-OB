//Excercise-1
const myFood = ["Pasta","Burger","Sandwich","Noodles","Pizza"];
console.log(myFood.join());


//Excercise-2
const arr1 = [1,2,3];
const arr2 = [100,1,2,10];
const result = arrayDifference(arr1,arr2);

function arrayDifference(arr1, arr2) {
  const difference = [];

  
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      difference.push(arr1[i]);
    }
  }

  
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      difference.push(arr2[i]);
    }
  }

  return difference;
}
console.log(result);

//Excercise-3
//array of arrays
const zippedArray = [[1, 'a'], [2, 'b'], [3, 'c']];
const ungroupedArray = ungroupArray(zippedArray);


function ungroupArray(array) {
  const maxLength = Math.max(...array.map(subarray => subarray.length));
// Create the result array
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const subarray = [];

    for (const arr of array) {
      if (arr[i] !== undefined) {
        subarray.push(arr[i]);
      }
    }
    result.push(subarray);
  }
  return result;
}
console.log(ungroupedArray);

//Excercise-4//

const number = [1,2,2,3,4,3,5,6,2,2,3,4,2,2];
const mostFrequent = findMostFrequentItem(number);

function findMostFrequentItem(number){
  let frequencyCounter = {};
  let maxFrequency = 0;
  let mostFrequentItem = null;

  for(let item of number){
    frequencyCounter[item] = (frequencyCounter[item] || 0) +1;
    if(frequencyCounter[item] > maxFrequency){
      maxFrequency = frequencyCounter[item];
      mostFrequentItem = item;
    }
  }
  return mostFrequentItem;
} 
console.log("Most Frequency Item:", mostFrequent);

//Excercise-5//
const num = [1,2,3,4,3,2,1,5,6,7];
const uniqueValues = findUniqueValues(num);

function findUniqueValues(num) {
  const uniqueValues = new Set(num);
  const uniqueArray = Array.from(uniqueValues);
  return uniqueArray;
}
console.log(uniqueValues);

//seven//

var person = {
  name: 'dp',
  age: '23',
  city: 'cbe',
};
var length = getObjectLength(person);

function getObjectLength(obj) {
  return Object.keys(obj).length;
}
console.log(length);

//SIX//

const cylinder = new Cylinder(3, 5);
const volume = cylinder.getVolume();

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}
console.log("Volume of the cylinder:", volume);














