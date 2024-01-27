import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    -webkit-font-smoothing: antialiased;

  }

  body, input, textarea {
    font-family: 'Roboto Slab', serif; 
    font-size: 16px;
    outline: none;
  }

  button {
    font-family: 'Poppins', sans-serif; 
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  

`;
