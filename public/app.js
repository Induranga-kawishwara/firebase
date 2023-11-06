// document.addEventListener("DOMContentLoaded", (event) => {
//   const app = firebase.app();
//   console.log(app);
//   const db = firebase.firestore();
//   const myPost = db.collection("posts").doc("firstpost");
//   myPost.onSnapshot((doc) => {
//     const data = doc.data();
//     document.write(data.title + "<br>");
//     document.write(data.createAt + "<br>");
//   });
// });

// function googleLogin() {
//   const provide = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provide)
//     .then((result) => {
//       const user = result.user;
//       document.write(`Hello ${user.displayName}`);
//       console.log(user);
//     })
//     .catch(console.log);
// }

// document.addEventListener("DOMContentLoaded", (event) => {
//   const app = firebase.app();
//     const db = firebase.firestore();
//     const productsRef = db.collection("products");
//     const query = productsRef.where("price", ">", 10);

//     query.get().then((products) => {
//       products.forEach((doc) => {
//         data = doc.data();
//         document.write(`${data.name} at $${data.price}`);
//       });
//     });
// });

document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
});

function uploadFile(files) {
  const storageRef = firebase.storage().ref();
  const hosteFer = storageRef.child("horse.jpg");
  const file = files.item(0);
  const task = hosteFer.put(file);

  task.then((snapshot) => {
    console.log(snapshot);
    const url = snapshot.downloadURL;
    document.querySelector("#imgUpload").setAttribute("src", url);
  });
}
