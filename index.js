// There is no need to touch below code, You just have add you loader code inside the [codes.js] file
let showcode = document.querySelectorAll(".show-code-btn");
let code_para = document.querySelector("#code-paragraph");
showcode.forEach((btn) => {
  btn.addEventListener("click", () => {
    code_para.innerText = codes.find((c) => c.id == btn.id).code;
  });
});
