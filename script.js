//Task-1:Compare 2 json have with same properties without order
function areObjectsEqual(obj1, obj2) {
  // Check if both arguments are objects and not null
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return obj1 === obj2;
  }
  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  // Check if all keys in obj1 are in obj2 and have the same values
  for (const key of keys1) {
    if (!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Example usage
let obj1 = {
  name: "person 1",
  age: 5
};

let obj2 = {
  age: 5,
  name: "person 1"
};

console.log(areObjectsEqual(obj1, obj2)); // This should return true


//Task_2:Displays all countries flag in console
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    
   for (var i = 0; i < result.length; i++) {
        console.log(result[i].flags.png);
      }
    };
//Task-3:Print all countries name,region,subregion and population
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
    var data = request1.response;
    var result = JSON.parse(data);
   for (var i = 0; i < result.length; i++) {
        console.log("Country name:"+" "+result[i].name.common,"Region:"+" "+result[i].region,"Sub Region:"+" "+result[i].subregion,"Population:"+" "+result[i].population);
      }
    };
