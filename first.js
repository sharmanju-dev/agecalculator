// setTimeout(() => {
//     console.log("hello world");
// }, 2000);

// setInterval(() =>{
//     const now = new Date();
//     console.log(now.toLocaleTimeString());
// },1000
// );


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolved after 3 seconds!");
//     }, 3000);
//   });
  
//   myPromise.then((message) => {
//     console.log(message);
//   });
 

// const form = document.getElementById("myForm");
// const output = document.getElementById("output");

//   form.addEventListener("submit", function(event) {
//     event.preventDefault(); // prevent page reload
//     const name = document.getElementById("username").value;
//     output.textContent = "You entered: " + name;
//   });

function delayPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, 2000);
  });
}

async function callAsync() {
  console.log("Waiting...");
  const result=await delayPromise();
  console.log(result);
}

callAsync();
