/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printingmap);
  function printingmap(arrayitem){
    if(arrayitem.profession == "developer"){
      console.log(arrayitem);
    }

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printforeach);
  function printforeach(arrayitem){
    if(arrayitem.profession === "developer"){
      console.lof(arrayitem);
    }

function addData() {
  //Write your code here
  let newObject = { id: 4, name: "Priya", age: "20", profession: "Developer"};
  arr.push(newObject);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let filtered_arr = arr.filter(function (value){
    if ( value.profession !== "admin"){
      return value;
    }
    console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here
    let arr1 = [ { id: 5, name: "Himanshu", age: "22". profession: "Developer" },
                { id: 6, name: "Sam", age: "21". profession: "Programmer" },
                { id: 7, name: "Evan", age: "19". profession: "Manager" },
                { id: 8, name: "Derek", age: "20". profession: "Developer" },
                { id: 9, name: "Sanjh", age: "22". profession: "Programmer" },
                ];
    let concatArray = arr.concat(arr1);
    console.log(concatArray);
  }
