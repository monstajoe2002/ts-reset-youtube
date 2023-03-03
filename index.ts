import "@total-typescript/ts-reset";


//Hover on the variable name to see the type,
//or install the `twodash` extension for VSCode

//JSON parse
const json = JSON.parse("{}");
//     ^?
console.log(json);
//Fetch API

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    //           ^?
  });

//arrays with undefined values will be of type `number[]`
const arr = [1, 2, undefined].filter(Boolean);
//     ^?
console.log(arr)
//String array as const
const names = ["John", "Jane", "Jack"] as const;
names.includes("Youssef"); // This will throw an error regardless because "Youssef" is not a valid value
//      ^?
