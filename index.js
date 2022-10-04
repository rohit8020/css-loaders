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
        `,
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
            `,
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
            `,
  },
  {
    id: 4,
    code: `/* Loader-4 */
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
  },
  {
    id: 5,
    code: `/* Loader-5 */
        #HTML
        <div class="loader_5">
  <div class="loader5_int"></div>
</div>
#CSS
.loader_5 {
    background-color: rgba(0,0,0,0.5);
    position: relative;
    height: 100vh;
    width: 100vw;
  }

  .loader5_int {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid #009ed2;
    border-right-color: transparent;
    transform-origin: center;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
    },
    {
        id : 6,
        code : `/*Loader - 6*/
        #HTML
        <div class="loader-6">
            <div class="set-one">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="set-two">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>        #CSS
        .loader-6 {
            height: 120px;
            width: 120px;
            position: relative;
          }

          .loader-6 .circle {
            width: 20px;
            height: 20px;
            background: black;
            border-radius: 50%;
            margin: -12.5px;
            -webkit-animation: mesh 3s ease-in-out infinite;
            animation: mesh 3s ease-in-out infinite -1.5s;
          }

          .loader-6 > div .circle:last-child {
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
          }

          .loader-6 > div {
            position: absolute;
            top: 50%;
            left: 50%;
          }

          .loader-6 > div:last-child {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }

          @-webkit-keyframes mesh {
          0% {
            -webkit-transform-origin: 50% -100%;
                    transform-origin: 50% -100%;
            -webkit-transform: rotate(0);
                    transform: rotate(0);
          }
          50% {
            -webkit-transform-origin: 50% -100%;
                    transform-origin: 50% -100%;
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
          50.00001% {
            -webkit-transform-origin: 50% 200%;
                    transform-origin: 50% 200%;
            -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
          }
          100% {
            -webkit-transform-origin: 50% 200%;
                    transform-origin: 50% 200%;
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
          }
          @keyframes mesh {
          0% {
            -webkit-transform-origin: 50% -100%;
                    transform-origin: 50% -100%;
            -webkit-transform: rotate(0);
                    transform: rotate(0);
          }
          50% {
            -webkit-transform-origin: 50% -100%;
                    transform-origin: 50% -100%;
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
          50.00001% {
            -webkit-transform-origin: 50% 200%;
                    transform-origin: 50% 200%;
            -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
          }
          100% {
            -webkit-transform-origin: 50% 200%;
                    transform-origin: 50% 200%;
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
          }
        `
    },
    {
      id:7,
      code:
      `
      ##HTML
      <div class="loader-7">
          <div class="dot-loader-7"></div>
          <div class="dot-loader-7"></div>
          <div class="dot-loader-7"></div>
          <span class="loading-7">Loading...</span>
        </div>

      ##CSS
      .loader-7{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        background: #011015;
      }

      .dot-loader-7{
        width: 120px;
        height: 120px;
        border: 4px solid #011015;
        border-radius: 50%;
        position: absolute;
      }

      .dot-loader-7:nth-child(1){
        border-bottom-width: 10px;
        border-color: rgb(255, 0, 255);
        animation: rotate1 2s linear infinite;

      }

      .dot-loader-7:nth-child(2){
        border-right-width: 10px;
        border-color: rgb(0, 247, 255);
        animation: rotate2 2s linear infinite;

      }

      .dot-loader-7:nth-child(3){
        border-top-width: 10px;
        border-color: rgb(0, 255, 13);
        animation: rotate3 2s linear infinite;

      }
      @keyframes rotate1{
        0%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        50%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
      }

      @keyframes rotate2{
        0%{
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        50%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
      }

      @keyframes rotate3{
        0%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        50%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
      }

      .loading-7{
        color: white;
        font-size: smaller;
      }
      `
    },

    {
      id:8,
      code:
      `
      ##HTML
      <div class="loader-8">
          <div class="loader-hourglass"></div>
      </div>

      ##CSS
      .loader-hourglass {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
      }

      .loader-hourglass:after {
          content: " ";
          display: block;
          border-radius: 50%;
          width: 0;
          height: 0;
          margin: 8px;
          box-sizing: border-box;
          border: 32px solid #fff;
          border-color: #fff transparent #fff transparent;
          animation: loader-hourglass 1.2s infinite;
      }

      @keyframes loader-hourglass {
          0% {
              transform: rotate(0);
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          50% {
              transform: rotate(900deg);
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          100% {
              transform: rotate(1800deg);
          }
      }
      `
    },
    {
      id:9,
      code:
      `
      ##HTML
      <div class="loader-9">
        <div class="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

      ##CSS
      .loader-ripple {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
      }

      .loader-ripple div {
          position: absolute;
          border: 4px solid #fff;
          opacity: 1;
          border-radius: 50%;
          animation: loader-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }

      .loader-ripple div:nth-child(2) {
          animation-delay: -0.5s;
      }

      @keyframes loader-ripple {
          0% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 0;
          }

          4.9% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 0;
          }

          5% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 1;
          }

          100% {
              top: 0px;
              left: 0px;
              width: 72px;
              height: 72px;
              opacity: 0;
          }
      }
      `
    },
    {
      id:10,
      code:
      `
      ##HTML
      <div class="loader-10">
        <div class="l10"></div>
      </div>

      ##CSS
      .loader-10 {
        width: 120px;
        height: 20px;
        background: linear-gradient(#514b82 0 0) left -40px top 0/40px 100% no-repeat #eee;
        -webkit-mask:
          linear-gradient(#000 0 0) top   /100% 5px no-repeat,
          linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
          repeating-linear-gradient(90deg,#000 0 5px, #0000 0 20%) left/calc(100% - 5px) 100%;
        animation: l10 1s infinite linear;
    }
    
    @keyframes l10 {
      100% {background-position: right -40px top 0}
    }
      `
    }
    
];

//There is no need to touch below code, You just have add you loader code inside the codes array
let showcode = document.querySelectorAll('.show-code-btn')
let code_para = document.querySelector('#code-paragraph')
showcode.forEach(btn => {
    btn.addEventListener('click', () => {
        code_para.innerText = codes.find(c => c.id == btn.id).code
    })
})
