// // var demoObject = {
// //   name: "Zoe",
// //   age: 21,
// //   Address: {
// //     Home: "123abc",
// //     Office: "456, street...",
// //   },
// //   Phno: 12345,
// // };

// // console.log(demoObject);

// // console.log(demoObject.Address.Home);
// // console.log(demoObject.Address.Office);

// // // ctrl + / to comment/uncomment

// function MyObjectConstructor(name, age, address, Phno) {
//   // this is a pointer that points to the reference of that object
//   this.Name = name;
//   this.Age = age;
//   this.Address = address;
//   this.phno = Phno;
//   this.anything = "aaa";
//   this.sayAllInOne = function () {
//     console.log(" Name:", this.Name, " Age", this.Age);
//   };
// }

// // // search on Low level language vs high level language

// var person1 = new MyObjectConstructor("Zoe", 21, "abc123", 1234);
// var person2 = new MyObjectConstructor("Jhon", 21, "abc123", 1234);
// var person3 = new MyObjectConstructor("Huzaifa", 21, "abc123", 1234);

// // console.log(person1.Name);
// // console.log(person2);
// // console.log(console.log()); // // thats what we were doing in the line below
// // console.log(person3.sayAllInOne());
// person3.sayAllInOne();

// // var person1 = new MyObjectConstructor("Zoe", 21, "abc123", 1234);
// var img1 = new MyObjectConstructor(1, `<img src="img/1.jpg" id="imgone">`);

// var img2 = new MyObjectConstructor(2, `<img src="img/2.jpg" id="imgtwo">`);
// var img3 = new MyObjectConstructor(3, `<img src="img/3.jpg" id="imgthree">`);
// var img4 = new MyObjectConstructor(

// );
// let imageCollection = [img1, img2, img3, img4];

// let imageOne = document.querySelector("#imgs").innerHTML.trim();
// console.log(imageOne);

let btnPrev = document.querySelector("#left");
let btnNext = document.querySelector("#right");
let image = document.querySelector("#imgs");

function MyObjectConstructor(source, id) {
  // this is a pointer that points to the reference of that object
  this.source = source;
  this.id = id;
  this.sayAllInOne = function () {
    return `<img src="${this.source}" id="${this.id}">`;
  };
}

let image1 = new MyObjectConstructor("img/1.jpg", "imgone");
let image2 = new MyObjectConstructor("img/2.jpg", "imgtwo");
let image3 = new MyObjectConstructor("img/3.jpg", "imgthree");
let image4 = new MyObjectConstructor("img/4.jpg", "imgfour");

btnNext.addEventListener("click", clickNext);
btnPrev.addEventListener("click", clickPrevious);
// btnPrev.addEventListener("click", clickPrev);

let gallery = [image1, image2, image3, image4];
let index = 1;

function clickNext() {
  if (index === 4) {
    index = 1;
  } else {
    index = index + 1;
  }
  image.innerHTML = gallery[index - 1].sayAllInOne();
}

function clickPrevious() {
  if (index === 1) {
    index = 4;
  } else {
    index = index - 1;
  }
  image.innerHTML = gallery[index - 1].sayAllInOne();
}

// let image1 = `<img src="img/1.jpg" id="imgone">`;
// let image2 = `<img src="img/2.jpg" id="imgtwo">`;
// let image3 = `<img src="img/3.jpg" id="imgthree">`;
// let image4 = `<img src="img/4.jpg" id="imgfour">`;

// function clickNext(event) {
//   if (image.innerHTML.trim() === image1.sayAllInOne()) {
//     image.innerHTML = image2.sayAllInOne();
//   } else {
//     if (image.innerHTML.trim() === image2) {
//       image.innerHTML = image3;
//     } else {
//       if (image.innerHTML.trim() === image3) {
//         image.innerHTML = image4;
//       } else {
//         if (image.innerHTML.trim() === image4) {
//           image.innerHTML = image1;
//         }
//       }
//     }
//   }
// }

// function clickNext() {
//   if (image.innerHTML.trim() === gallery[0].sayAllInOne()) {
//     image.innerHTML = gallery[1].sayAllInOne();
//   } else {
//     image.innerHTML.trim() === gallery[1].sayAllInOne();
//     image.innerHTML = gallery[2].sayAllInOne();
//   }
// }
