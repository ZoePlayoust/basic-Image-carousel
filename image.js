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
//   4,
//   `<div class="image-container" id="imgs"><img src="img/4.jpg id="imgfour" /></div>`
// );
// let imageCollection = [img1, img2, img3, img4];

// let imageOne = document.querySelector("#imgs").innerHTML.trim();
// console.log(imageOne);

let btnPrev = document.querySelector("#left");
let btnNext = document.querySelector("#right");
let image = document.querySelector("#imgs");

let image1 = `<img src="img/1.jpg" id="imgone">`;
let image2 = `<img src="img/2.jpg" id="imgtwo">`;
let image3 = `<img src="img/3.jpg" id="imgthree">`;
let image4 = `<img src="img/4.jpg" id="imgfour">`;

btnNext.addEventListener("click", clickNext);
btnPrev.addEventListener("click", clickPrevious);
// btnPrev.addEventListener("click", clickPrev);

function clickNext(event) {
  if (image.innerHTML.trim() === image1) {
    image.innerHTML = image2;
  } else {
    if (image.innerHTML.trim() === image2) {
      image.innerHTML = image3;
    } else {
      if (image.innerHTML.trim() === image3) {
        image.innerHTML = image4;
      } else {
        if (image.innerHTML.trim() === image4) {
          image.innerHTML = image1;
        }
      }
    }
  }
}

function clickPrevious(event) {
  if (image.innerHTML.trim() === image1) {
    image.innerHTML = image4;
  } else {
    if (image.innerHTML.trim() === image2) {
      image.innerHTML = image1;
    } else {
      if (image.innerHTML.trim() === image3) {
        image.innerHTML = image2;
      } else {
        if (image.innerHTML.trim() === image4) {
          image.innerHTML = image3;
        }
      }
    }
  }
}
