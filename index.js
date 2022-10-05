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
`,
  },
  {
    id: 6,
    code: `/*Loader - 6*/
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
        `,
  },
  {
    id: 7,
    code: `
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
      `,
  },

  {
    id: 8,
    code: `
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
      `,
  },
  {
    id: 9,
    code: `
      ##HTML
      <div class="loader-box">
        <div class="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      
      #CSS
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
      `,
  },
  {
    id: 10,
    code: `
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
      `,
  },
  {
    id: 11,
    code: `
      ##HTML
      <!-- Loader-11 -->
      <div class="loader-box">
          <div class="loader-11">
            <div class="loader-circle"><div></div></div>
          </div>
          <a href="#demo-modal" id="11" class="show-code-btn">Show Code</a>
      </div>

      ##CSS
      /*  ............Loader-11...............*/
      .loader-circle {
        display: inline-block;
        transform: translateZ(1px);
      }
      .loader-circle > div {
        display: inline-block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        background: #fff;
        animation: loader-circle 2.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
      @keyframes loader-circle {
        0%,
        100% {
          animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
        }
        0% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(1800deg);
          animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
        }
        100% {
          transform: rotateY(3600deg);
        }
      }
      `,
  },
  {
    id: 12,
    code: `
     ##HTML
     <div class="loader-12">
        <span class="loader_arrow"></span>
     </div>
      
     ##CSS
      .loader_arrow {
        width: 48px;
        height: 48px;
        display: inline-block;
        position: relative;
        border: 3px solid;
        border-color:#de3500 #0000 #fff #0000;
        border-radius: 50%;
        box-sizing: border-box;
        animation: 1s rotate linear infinite;
     }
     .loader_arrow:before , .loader_arrow:after{
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        border: 10px solid transparent;
        border-bottom-color:#fff;
        transform: translate(-10px, 19px) rotate(-35deg);
      }
     .loader_arrow:after {
        border-color: #de3500 #0000 #0000 #0000 ;
        transform: translate(32px, 3px) rotate(-35deg);
      }
       @keyframes rotate {
        100%{    transform: rotate(360deg)}
      }
     `,
  },
  {
    id: 13,
    code: `
      ##HTML
      <div class="loader-13">
        <div class="loader13">
          <div class="loader13">
            <div class="loader13">
              <div class="loader13">
                <div class="loader13">
                  <div class="loader13">
                    <div class="loader13">
                      <div class="loader13">
                        <div class="loader13">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      ##CSS
      .loader-13{
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: rebeccapurple;
      }
      .loader13{
          border: 7px groove rebeccapurple;
        
          display: table-cell;
          border-radius: 999px;
          animation: spin 15s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg) }
          to { transform: rotate(360deg) }
        }
      
      `,
  },

  {
    id: 14,
    code: `
          ##HTML
          <div class="loader-14">
              <div class="l-14"></div>
          </div>
    
          ##CSS
          .loader-14 {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            position: relative;
            margin: 0 auto;
          }
        
        
          .l-14{
            -webkit-perspective: 120px;
            -moz-perspective: 120px;
            -ms-perspective: 120px;
            perspective: 120px;
          }
          
          .l-13:before{
            content: "";
            position: absolute;
            left: 25px;
            top: 25px;
            width: 50px;
            height: 50px;
            background-color: #3498db;
            animation: flip 1s infinite;
          }
          
          @keyframes flip {
            0% {
              transform: rotate(0);
            }
          
            50% {
              transform: rotateY(180deg);
            }
          
            100% {
              transform: rotateY(180deg)  rotateX(180deg);
            }
          }
        `,
  },
  {
    id: 15,
    code: 
    `
    ##HTML 
    <div class="spinner-container">
    <div class="spinner"></div>
    </div>
    
    #CSS 
    body {
      --clr-background: whitesmoke;
      --clr-main: tomato;
    }

    .spinner-container {
      height: 70%;
        display: flex;
        align-items: center;
        overflow: hidden;
      justify-content: center;
      background-color: var(--clr-background);
    }

    .spinner-container .spinner {
      height: 100px;
      width: 100px;
      background-color: var(--clr-main);
      border-radius: 50%;
      position: relative;
      animation: animateRotate 3s linear infinite;
    }

    .spinner-container .spinner::before,
    .spinner-container .spinner::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background-color: var(--clr-background);
      top: 50%;
      transform: translateY(-50%);
    }

    .spinner-container .spinner::before {
      height: calc(85% + 3px);
      width: calc(85% + 3px);
      left: -2px;
      animation: animateBall 1s infinite linear alternate;
    }

    .spinner-container .spinner::after {
      height: calc(15% + 3px);
      width: calc(15% + 3px);
      right: -2px;
      animation: animateBall 1s infinite linear alternate-reverse;
    }

    @keyframes animateBall {
      from { height: calc(85% + 3px); width: calc(85% + 3px); }
      to {height: calc(15% + 3px); width: calc(15% + 3px); }
    }

    @keyframes animateRotate {
      to { transform: rotate(360deg); }
    }`,
  },
  {
    id:16,
    code:
    `
    ##HTML
    <div class="loader-16"></div>
    <span class="sat"> loading... </span>
    <a href="#demo-modal" id="16" class="show-code-btn">Show Code</a>

    ##CSS
    
.loader-16{
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ring 2s linear infinite;
  margin-bottom: 56px;
}

@keyframes ring {
  0%{transform: rotate(0deg);
      box-shadow: 1px 4px 2px #e65c00;
  }
  50%{transform: rotate(180deg);
      box-shadow: 1px 4px 2px #18b201;
  }
  100%{transform: rotate(360deg);
      box-shadow: 1px 4px 2px #0456c8;
  }
}
.loader-16:before {
  position: absolute;
  content: ' ';
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

}
.sat{
  color: #000000;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 200px;
  font-weight: bold;
 
}
    `
  },
  {
    id:17,
    code:
    `
    ##HTML
    <div class="loader-17">
    <span class="pp" style="--i:1;"></span>
    <span class="pp" style="--i:2;"></span>
    <span class="pp" style="--i:3;"></span>
    <span class="pp" style="--i:4;"></span>
    <span class="pp" style="--i:5;"></span>
    <span class="pp" style="--i:6;"></span>
    <span class="pp" style="--i:7;"></span>
    <span class="pp" style="--i:8;"></span>
    <span class="pp" style="--i:9;"></span>
    <span class="pp" style="--i:10;"></span>
    <span class="pp" style="--i:11;"></span>
    <span class="pp" style="--i:12;"></span>
    <span class="pp" style="--i:13;"></span>
    <span class="pp" style="--i:14;"></span>
    <span class="pp" style="--i:15;"></span>
    <span class="pp" style="--i:16;"></span>
    <span class="pp" style="--i:17;"></span>
    <span class="pp" style="--i:18;"></span>
    <span class="pp" style="--i:19;"></span>
    <span class="pp" style="--i:20;"></span>
    <a href="#demo-modal" id="17" class="show-code-btn show">Show Code</a>
    </div>
 

  ##CSS
  .loader-17{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    animation: anim 10s linear infinite;
  }
  @keyframes anim
  {
    0%{
       filter: hue-rotate(0deg);
    }
    100%{
        filter: hue-rotate(360deg);
    }
  }
  
  .loader-17 .pp
  {
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    width: 80px;
    height: 80px;
    transform: rotate(calc(18deg * var(--i)));
       
  }
  
  .loader-17 .pp::before{
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 5px;
    background-color: #e9c912;
    box-shadow: 0 0 5px #7ffa1a,
                0 0 10px #7ffa1a,
                0 0 20px #7ffa1a,
                0 0 40px #7ffa1a,
                0 0 60px #7ffa1a,
                0 0 80px #7ffa1a;
  
    animation: sat11 2s linear infinite;
    animation-delay: calc(0.1s * var(--i));
  }
  @keyframes sat11
  {
    0%{
       transform: scale(1);
    }
    80%,100%{
        transform: scale(2);
    }
   
  }
  .show{
    margin-top: 14rem;
    
  }
    `
  },
  {
    id: 18,
    code:
    `
    ##HTML
    <div class="loader-box">
      <div class="loader-18">
        <div class="loader-placeholder">
          <div class="indicator"></div>
        </div>
      </div>
    </div>
 

  ##CSS
  .loader-18 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 45px;
  }
  
  .loader-placeholder {
    width: 100%;
    height: 20px;
    border: 2px solid #6A0DAD;
    border-radius: 8px;
    padding: 2px;
  }
  
  .indicator {
    position: relative;
    width: 30px;
    height: 100%;
    border-radius: 8px;
    background-color: #6A0DAD;
    animation: loader18 1s infinite linear alternate-reverse;
    margin: 0;
  }
  
  @keyframes loader18 {
    0%{
       left: 0px;
    }
    100%{
      left: 130px;
    }
  }
    `
  },
  {
    id: 19,
    code: `
    ##HTML 
    <div class="loading">
        <div></div>
	  </div>
    
    #CSS 
    .loading {
      width: 100vw;
      height: 100vh;
      background-color: white;
      display: grid;
      place-items: center;
      max-width: 100%;
    }
    
    .loading > div {
      width: 10vmax;
      height: 10vmax;
      border-bottom: 5px solid rgba(0, 0, 0, 0.719);
    
      border-radius: 50%;
    
      animation: loadingRotate 800ms linear infinite;
    }
    
    @keyframes loadingRotate {
      to {
        transform: rotateZ(-360deg);
      }
    }
    `
  },
  {
    id: 20,
    code: `
    ###HTML
    <div class="loader-box">
      <div class="loader-20">
        <span class="word1">l</span>
        <span class="word2">o</span>
        <span class="word3">a</span>
        <span class="word4">d</span>
        <span class="word5">i</span>
        <span class="word6">n</span>
        <span class="word7">g</span> 
      </div>
      <a href="#demo-modal" id="20" class="show-code-btn">Show Code</a>
    </div>

    ###CSS
    .loader-20 {
      margin: 0;
      padding: 0;
      font-weight: 100;
      font-size: 1.1em;
      color: #ffffff;
    }
    
    .loader-20 span {
      display: inline-block;
      text-transform: uppercase;
      opacity: 0;
      transform: rotateX(-90deg);
    }
    
    .loader-20 .word1 {
      animation: drop 1.2s ease-in-out infinite;
      animation-delay: 1.2s;
    }
    
    .loader-20 .word2 {
      animation: drop 1.2s ease-in-out infinite;
      animation-delay: 1.3s;
    }
    
    .loader-20 .word3 {
      animation: drop 1.2s ease-in-out infinite;
      animation-delay: 1.4s;
    }
    
    .loader-20 .word4 {
      animation: drop 1.2s ease-in-out infinite;
      animation-delay: 1.5s;
    
    }
    
    .loader-20 .word5 {
      animation: drop 1.2s ease-in-out infinite;
      animation-delay: 1.6s;
    }
    
    .loader-20 .word6 {
      animation: drop 1.2s ease-in-out infinite;
      animation-delay: 1.7s;
    }
    
    .loader-20 .word7 {
      animation: drop 1.2s ease-in-out infinite;
      animation-delay: 1.8s;
    }
    
    @keyframes drop {
        10% {
            opacity: 0.5;
        }
        20% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
        }
        80% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
        }
        90% {
            opacity: 0.5;
        }
        100% {
            opacity: 0;
            top: 6.94em
        }
    }
    `	
  },
  {
    id: 21,
    code: `
    ###HTML
    <div class="loader21">
    <svg class="svg " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13.86">
      <defs>
        <polygon id="hexagon" points="4.29 13.36 0.58 6.93 4.29 0.5 11.71 0.5 15.42 6.93 11.71 13.36 4.29 13.36" />
        <g id="inner-shadow" transform="translate(-2, -2)">
          <use xlink:href="#hexagon" class="inner-shadow" transform="scale(1.25)" />
        </g>
        <g id="inner-shadow-animated" transform="translate(-2, -2)">
          <use xlink:href="#hexagon" class="inner-shadow--animated" transform="scale(1.25)" />
        </g>
      </defs>
      <mask id="mask">
        <rect x="-4" y="-4" width="24" height="24" fill="black" />
        <use xlink:href="#hexagon" fill="white" />
      </mask>
      <use xlink:href="#hexagon" class="fill" />
      <use xlink:href="#hexagon" class="fill--animated" />
      <use xlink:href="#inner-shadow" mask="url(#mask)" />
      
      <use xlink:href="#inner-shadow-animated" mask="url(#mask)" />
    </svg>
   
    </div>

   ###CSS
   .loader21 {
    margin: 0;
    background: chocolate;
    display: flex;
    align-items: center;
    justify-content: center;
   
    --timing: 1.5s infinite linear;
    
}

.svg {
    animation: size var(--timing);
    overflow: visible;
    transform: scale(1);
    width: 4rem;
}

.fill {
    animation: drop-shadow-blink var(--timing);
    fill: white;
    filter: drop-shadow(0 0 2px blue);
}

.fill--animated {
   animation: fill-blink var(--timing);
   fill: blue;
}

.inner-shadow, .inner-shadow--animated {
    fill: transparent;
    stroke: white;
    stroke-width: 2px;
}

.inner-shadow {
    filter: drop-shadow(0 0 1px blue);
}

.inner-shadow--animated {
    animation: inner-shadow-blink var(--timing);
    filter: drop-shadow(0 0 3px blue);
}

@keyframes size {
    0%, 95%, 100% {
        transform: scale(1);
    }
    
    75% {
        transform: scale(.9);
    }
}

@keyframes fill-blink {
    0%, 100% {
        opacity: 0;
    }
    
    75% {
        opacity: .45;
    }
}

@keyframes inner-shadow-blink {
    0%, 100% {
        opacity: 0;
    }
    
    75% {
        opacity: 1;
    }
}

@keyframes drop-shadow-blink {
    0%, 90%, 100%{
        filter: drop-shadow(0 0 6px rgb(104, 104, 255));
    }
    75% {
        filter: drop-shadow(0 0 3px blue);
    }
}
    
    
    `
  }

  ,
  {
    id: 22,
    code:
    `
    ##HTML Code
    <div>
    <span class="dot" id="dot1"></span>
    <span class="dot" id="dot2"></span>
    <span class="dot" id="dot3"></span>
    <span class="dot" id="dot4"></span>
  </div>

    ##CSS Code
    .dot {
      height: 5px;
      width: 15px;
      background-color: black;
      border-radius: 10%;
      display: inline-block;
    }
    
    #dot1 {
      animation: ajay1 1.2s infinite;
    }
    
    #dot2 {
      animation: ajay2 1.2s infinite;
    }
    
    #dot3 {
      animation: ajay3 1.2s infinite;
    }
    
    #dot4 {
      animation: ajay4 1.2s infinite;
    }
    
    @keyframes ajay4 {
      40% {
        height: 50px;
      }
    
      100% {
        opacity: 55%;
        height: 9px;
      }
    }
    
    @keyframes ajay3 {
      30% {
        height: 35px;
      }
    
      100% {
        opacity: 40%;
        height: 6px;
      }
    }
    
    @keyframes ajay2 {
      20% {
        height: 25px;
      }
    
      100% {
        opacity: 25%;
        height: 4px;
      }
    }
    
    @keyframes ajay1 {
      10% {
        /* opacity: 40%; */
        height: 15px;
      }
    
      100% {
        opacity: 10%;
        height: 2px;
      }
    }
    `
},
	

  {
    id: 21,
    code: `
    ###HTML
    <div class="loader-box">
      <div class="loader-21">
          <div class="loading">
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
      </div>
    </div>
    <a href="#demo-modal" id="21" class="show-code-btn">Show Code</a>
  </div>


    ###CSS
    .loader-21 {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .loader-21 .loading {
      display: flex;
      position: absolute;
      width: auto;
      height: 20px;
      transition: all 0.4s ease;
    }
    .loader-21 .loading .loader {
      display: block;
      align-items: flex-end;
      background-color: #ffffff;
      width: 5px;
      height: 5px;
      position: absolute;
      animation: loader 1.2s ease infinite both;
      border-radius: 4px;
      bottom: 0;
    }
    .loader-21 .loading .loader:nth-child(1) {
      transform: translateX(-20px);
    }
    .loader-21 .loading .loader:nth-child(2) {
      animation-delay: 0.4s;
    }
    .loader-21 .loading .loader:nth-child(3) {
      animation-delay: 0.8s;
      transform: translateX(20px);
    }
    @keyframes loader {
      0% {
        height: 5px;
        bottom: 0;
        opacity: 1;
      }
      25% {
        opacity: 0.3;
        bottom: 0;
        height: 15px;
      }
      50% {
        opacity: 1;
        height: 5px;
        bottom: calc(100% - 5px);
      }
      75% {
        opacity: 0.3;
        height: 15px;
        bottom: 0;
      }
      100% {
        opacity: 1;
        height: 5px;
        bottom: 0;
      }
    }
    `	
  }

];

//There is no need to touch below code, You just have add you loader code inside the codes array
let showcode = document.querySelectorAll(".show-code-btn");
let code_para = document.querySelector("#code-paragraph");
showcode.forEach((btn) => {
  btn.addEventListener("click", () => {
    code_para.innerText = codes.find((c) => c.id == btn.id).code;
  });
});
