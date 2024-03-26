//Task-1:Compare 2 json have with same properties without order
function areObjectsEqual(obj1,obj2){
  const newObj1=JSON.stringify(obj1);
  const newObj2=JSON.stringify(obj2);
  return(newObj1===newObj2);
}
let obj1=
{
name:"person 1",
age:5
};
let obj2=
{
  age:5,
  name:"person 1"
}
console.log(areObjectsEqual(obj1,obj2));

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