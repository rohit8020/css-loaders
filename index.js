//There is no need to touch below code, You just have to add your loader's code 
// inside the codes array i.e in the file codes.js
let showcode = document.querySelectorAll(".show-code-btn");
let code_para = document.querySelector("#code-paragraph");
showcode.forEach((btn) => {
  btn.addEventListener("click", () => {
    code_para.innerText = codes.find((c) => c.id == btn.id).code;
  });
});
