// const doWorkCallback = callback => {
//   setTimeout(() => {
//     callback(undefined, [1, 2, 3]);
//   }, 2000);
//   console.warn("asdf");
// };

// function execute() {
//   doWorkCallback((error, result) => {
//     if (error) {
//       return console.warn(error);
//     }

//     console.warn(result);

//     console.warn("LastLine");
//   });
// }

// execute();

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 2000);
});

async function execute() {
  await doWorkPromise
    .then(result => {
      console.warn("Sucess:", result);
    })
    .catch(error => {
      console.warn("Error: ", console.warn(error));
    });

  console.warn("Last Line.");
}

execute();
