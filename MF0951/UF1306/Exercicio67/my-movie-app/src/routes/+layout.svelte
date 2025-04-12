<slot></slot>

<style>

    :global(*) {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    
    @font-face{
        font-family: Poppins-Regular;
        src: url(./styles/fonts/Poppins-Regular.ttf);
    }
    
    @font-face{
        font-family: Poppins-Bold;
        src: url(./styles/fonts/Poppins-Bold.ttf);
    }
    
    :root{
        --font-primary: Poppins-Regular;
        --font-secondary: Poppins-Bold;
        --color-primary: #FEFEFE;
        --color-darkblack: #000;
        --color-blue: #5A38FD;
        --color-black: #141418;
        --color-grey: #B6B6B7;
        --color-subtlegrey: #F0F0F1;
        --padding: 14px;
    
    }
    
    :global(body){
        background: var(--color-black);
        color: var(--color-primary);
        padding-bottom: calc(100px + 1rem);
        -webkit-font-smoothing: antialiased;
    }
    
    :global(body, input, button) {
     font-size: 14px;
     font-family: Poppins;
    }
    
    :global(button) {
     cursor: pointer;
    }
    
      </style>  