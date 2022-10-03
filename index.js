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
    {
        id: 3,
        code: `
            /* Loader-3 */
            #HTML
            <div class="loader"></div>

            ##CSS
            .loader
            {
                position: relative;
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background: linear-gradient(45deg,transparent,transparent 40%,#e5f403);
                animation: animate 2s linear infinite;
            }
            @keyframes animate
            {
                0%
                {
                    transform: rotate(0deg);
                    filter: hue-rotate(0deg);
                }
                100%
                {
                    transform: rotate(360deg);
                    filter: hue-rotate(360deg);
                }
            }
            .loader:before
            {
                content: '';
                position: absolute;
                top: 6px;
                left: 6px;
                right: 6px;
                bottom: 6px;
                background: #000;
                border-radius: 50%;
                z-index: 1000;
            }
            .loader:after
            {
                content: '';
                position: absolute;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                border-radius: 50%;
                z-index: 1;
                background: linear-gradient(45deg,transparent,transparent 40%,#e5f403);
                filter: blur(30px);
            }
            `
    },
    {
        id : 4,
        code : `/* Loader-4 */
        #HTML
        <div class="loader-4">
            
        <div class="dot-loader"></div>
        <div class="dot-loader dot-loader--2"></div>
        <div class="dot-loader dot-loader--3"></div>      

      </div>
      #CSS
      .loader-4{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
    }
    .dot-loader {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: black;
        position: relative;
        -webkit-animation: 1.2s grow ease-in-out infinite;
        animation: 1.2s grow ease-in-out infinite;
      }
      
      .dot-loader--2 {
        -webkit-animation: 1.2s grow ease-in-out infinite 0.15555s;
        animation: 1.2s grow ease-in-out infinite 0.15555s;
        margin: 0 20px;
      }
      .dot-loader--3 {
        -webkit-animation: 1.2s grow ease-in-out infinite 0.3s;
        animation: 1.2s grow ease-in-out infinite 0.3s;
      }
      @-webkit-keyframes grow {
        0%, 40%, 100% {
          -webkit-transform: scale(0);
                  transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
                  transform: scale(1);
        }
      }
      @keyframes grow {
        0%, 40%, 100% {
          -webkit-transform: scale(0);
                  transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
                  transform: scale(1);
        }
      }    
`,
    }
];


//There is no need to touch below code, You just have add you loader code inside the codes array
let showcode = document.querySelectorAll('.show-code-btn')
let code_para = document.querySelector('#code-paragraph')
showcode.forEach(btn => {
    btn.addEventListener('click', () => {
        code_para.innerText = codes[Number(btn.id) - 1].code
    })
})