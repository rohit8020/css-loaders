/* 
You can add more code in the codes array as given below.
You have to copy the HTML code of the loader and CSS code 
and paste inside the codes array in the form ->
- Make a new object inside the codes array
-   {
        "id": it should be number(1+ previous id number),
        "code": 
        `
        ##HTML Code
        <div></div>...

        ##CSS Code
        .loader-nth{
            ...
        }
        `
    },
- Add  the newly created object to the codes array
*/
let codes = [
    {
    id: 1,
    code: `
        /* loader-1 */
        ##HTML
        <div class="loader-1">
          <div></div>
          <div></div>
          <div></div>
        </div>

        ##CSS
        .loader-1 {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
            background-color: rgb(42, 119, 163);
        }
        
        .loader-1 div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: #fff;
            animation: loader-1 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        
        .loader-1 div:nth-child(1) {
            left: 8px;
            animation-delay: -0.24s;
        }
        
        .loader-1 div:nth-child(2) {
            left: 32px;
            animation-delay: -0.12s;
        }
        
        .loader-1 div:nth-child(3) {
            left: 56px;
            animation-delay: 0;
        }
        
        @keyframes loader-1 {
            0% {
                top: 8px;
                height: 64px;
            }
        
            50%,
            100% {
                top: 24px;
                height: 32px;
            }
        }
        `
    },
    {
        id: 2,
        code: `
            /* Loader-2 */
            #HTML
            <div class="loader-2"></div>

            ##CSS
            .loader-2 {
                border: 16px solid #f3f3f3;
                /* Light grey */
                border-top: 16px solid #3498db;
                /* Blue */
                border-radius: 50%;
                width: 120px;
                height: 120px;
                animation: spin 2s linear infinite;
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
            `
    },
];


//There is no need to touch below code, You just have add you loader code inside the codes array
let showcode=document.querySelectorAll('.show-code-btn')
let code_para=document.querySelector('#code-paragraph')
showcode.forEach(btn=>{
       btn.addEventListener('click', ()=>{
            code_para.innerText = codes[Number(btn.id)-1].code
       })
})