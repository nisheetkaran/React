// const heading = React.createElement("h1",
//     {
//         id: "head",
//         xyz: "abc"
//     }, "Hello from react");

// console.log(heading); //object


const parent = React.createElement("div", { id: "parent" }, 
React.createElement("div", { id: "child" },[
[React.createElement("h1", {}, "I am h1 tag"), React.createElement("p", {}, "I am p tag")], 
[React.createElement("h1", {}, "I am h1 tag"), React.createElement("p", {}, "I am p tag")]]));

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);