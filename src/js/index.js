// // navabar
// function toggle(id, id2) {
//     // console.log(btn.classList.value)

//     if (btn.classList.value === "small-drop-btn") {
//         btn.classList.add('is-active');
//     } else {
//         btn.classList.remove('is-active');
//     }

//     let n = document.getElementById(id);
//     if (n.style.display != 'none') {
//         n.style.display = 'none';
//         document.getElementById(id2).setAttribute('aria-expanded', 'true');
//     } else {
//         n.style.display = '';
//         document.getElementById(id2).setAttribute('aria-expanded', 'false');
//     }
// }


// // When the user scrolls the page, execute myFunction 
// window.onscroll = function () {
//     stickyHeader()
// };


// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyHeader() {
//     // Get the header
//     var header = document.getElementById("myHeader");
//     var slider = document.querySelector(".slider");

//     // Get the offset position of the navbar
//     var sticky = header.offsetTop + 500;

//     // console.log('scroll')
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//         slider.style.marginTop = '60px';
//     } else {
//         header.classList.remove("sticky");
//         slider.style.marginTop = '0px';

//     }
// }

// //-----------------------------------------
// // navabar
// function toggle(id, id2) {
//     // console.log(btn.classList.value)

//     if (btn.classList.value === "small-drop-btn") {
//         btn.classList.add('is-active');
//     } else {
//         btn.classList.remove('is-active');
//     }

//     let n = document.getElementById(id);
//     if (n.style.display != 'none') {
//         n.style.display = 'none';
//         document.getElementById(id2).setAttribute('aria-expanded', 'true');
//     } else {
//         n.style.display = '';
//         document.getElementById(id2).setAttribute('aria-expanded', 'false');
//     }
// }

// // ----------------------------------------------



// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyHeaderRefense() {
//     // Get the header
//     var header = document.getElementById("myHeader");
//     var slider = document.querySelector(".viewport");

//     // Get the offset position of the navbar
//     var sticky = header.offsetTop + 330;

//     // console.log('scroll')
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//         slider.style.marginTop = '60px';
//     } else {
//         header.classList.remove("sticky");
//         slider.style.marginTop = '0px';

//     }
// }

// var buttons = document.querySelectorAll(".btn_toogle");
// // console.log(button)
// buttons.forEach(function (button) {

//     button.addEventListener('click', function () {
//         console.log(this.className)
//         if (this.className === "btn_shadow_in") {
//             this.className = "btn_shadow_out";
//         } else {
//             this.className = "btn_shadow_in";
//         }
//     })
// })


//text tipping
//    const TypeWriter = function (txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// Type method
// TypeWriter.prototype.type = function () {
//     // current index of word
//     const current = this.wordIndex % this.words.length;

//     //get full txt of current word
//     const fullText = this.words[current];

//     // console.log(fullText)
//     // check if deleting
//     if (this.isDeleting) {
//         //REMOVE CHAR
//         this.txt = fullText.substring(0, this.txt.length - 1)
//     } else {
//         // add char
//         this.txt = fullText.substring(0, this.txt.length + 1)
//     }

//     // insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//     // Initial type speed
//     let typeSpeed = 300;

//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     // If word is complete
//     if (!this.isDeleting && this.txt === fullText) {
//         // make pause on the end
//         typeSpeed = this.wait;

//         this.isDeleting = true
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         // move to next word
//         this.wordIndex++;
//         // pause before start typing]
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);

// }





// class TypeWriter {
//     constructor(txtElement, words, wait = 3000) {
//         this.txtElement = txtElement;
//         this.words = words;
//         this.txt = '';
//         this.wordIndex = 0;
//         this.wait = parseInt(wait, 10);
//         this.type();
//         this.isDeleting = false;
//     }

//     type() {
//         // current index of word
//         const current = this.wordIndex % this.words.length;

//         //get full txt of current word
//         const fullText = this.words[current];

//         // console.log(fullText)
//         // check if deleting
//         if (this.isDeleting) {
//             //REMOVE CHAR
//             this.txt = fullText.substring(0, this.txt.length - 1)
//         } else {
//             // add char
//             this.txt = fullText.substring(0, this.txt.length + 1)
//         }

//         // insert txt into element
//         this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//         // Initial type speed
//         let typeSpeed = 300;

//         if (this.isDeleting) {
//             typeSpeed /= 2;
//         }

//         // If word is complete
//         if (!this.isDeleting && this.txt === fullText) {
//             // make pause on the end
//             typeSpeed = this.wait;

//             this.isDeleting = true
//         } else if (this.isDeleting && this.txt === '') {
//             this.isDeleting = false;
//             // move to next word
//             this.wordIndex++;
//             // pause before start typing]
//             typeSpeed = 500;
//         }

//         setTimeout(() => this.type(), typeSpeed);
//     }
// }


// // Init on dom load
// document.addEventListener('DOMContentLoaded', init);
// // Inigt app
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     //init TypeWriter
//     new TypeWriter(txtElement, words, wait)
// }