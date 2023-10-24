# All Codes Of Java script

## Freecomdecamp Id:
    * https://www.freecodecamp.org/fcc687d4928-6610-4699-82b4-7cd621022ca6   

```
01) Sum All Numbers in a Range
function sumAll(arr) {
 let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);

02) Diff Two Arrays
function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.map((ele)=>{
    if(!arr2.includes(ele)){
        newArr.push(ele);
    }
  });

  arr2.map((ele)=>{
    if(!arr1.includes(ele)){
        if(!newArr.includes(ele))
          newArr.push(ele);
    }
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

03) Seek and Destroy
function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

04) Wherefore art thou
function whatIsInAName(collection, source) {
  
  const collectionMatches = [];

  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i]);
    }
  }
  return collectionMatches;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

05) Missing letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {

    const charCode = str.charCodeAt(i);

    if (charCode !== str.charCodeAt(0) + i) {

      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");

06)
function uniteUnique(arr) {
  const args = [...arguments];
  let res=[];
  for(let i=0 ; i<args.length ; i++){
    for(let j=0 ; j<args[i].length ; j++){
      if(!res.includes(args[i][j])){
          res.push(args[i][j]);
      }
    }
  }
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

Q) Sum All Primes
function sumPrimes(num) {
  let sum = 0;
  for(let i=2 ; i<=num ; i++){
    if(isPrime(i)){
      sum = sum + i;
    }
  }
  return sum;
}
function isPrime(n){
 
  for(let i=2 ; i<n ; i++){
    if(n%i == 0){
      return false;
    }
  }
  return true;
}

sumPrimes(10);

q)Prime Numner
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4);

Q) Convert HTML Entities
function convertHTML(str) {
  let entity = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "'":"&apos;",
    '"':"&quot;"
  }
  let res = "" ;
  let arr = str.split("");
  for(let i=0 ; i<arr.length ; i++){
    if(entity[arr[i]]){
      res +=entity[arr[i]];
    }else{
      res += arr[i];
    }
  }
  return res;
}

convertHTML("Dolce & Gabbana");

Q) Smallest Common Multiple
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

Q) Steamroller
function steamrollArray(arr) {
   const flattenedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
     
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
     
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);


Q) Binary Agents
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

Q) Map the Debris
unction orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let res = [];
  arr.map((ele)=>{
    const c = Math.pow(earthRadius + ele.avgAlt, 3);
    let temp = 2 * Math.PI * Math.sqrt(c/ GM);
    res.push({name:ele.name,orbitalPeriod:Math.round(temp)})
  });
  return res;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
Q) Make a Person 
const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());

Q) Arguments Optional
function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

addTogether(2,3);

Q) Search and Replace
function myReplace(str, before, after) {
  var index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {

    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {

    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  str = str.replace(before, after);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

Q) Spinal Tap Case

function spinalCase(str) {
   return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');

Q) Everything Be True
function truthCheck(collection, pre) {
   let counter = 0;
  for (let c in collection) {
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  return counter == collection.length;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

Q) Pig Latin
function translatePigLatin(str) {
   if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
  
}

translatePigLatin("california");
Q) Drop it
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

Q) DNA Pairing
function pairElement(str) {
  // Function to match each character with the base pair
  const matchWithBasePair = function(char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  // Find pair for every character in the string
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return pairs;
}

pairElement("GCG");


``` 