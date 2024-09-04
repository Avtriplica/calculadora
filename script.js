body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #333; /* Cor de fundo preta */
}

.calculator {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #222; /* Fundo da calculadora em preto */
}

#display {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    font-size: 2em;
    border: none;
    background-color: #111; /* Fundo do visor em preto escuro */
    color: #fff; /* Texto do visor em branco */
    text-align: right;
    overflow: hidden; /* Garante que o texto não cause rolagem */
    white-space: nowrap; /* Evita quebras de linha no texto */
    text-overflow: ellipsis; /* Adiciona reticências se o texto for muito longo */
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

button {
    font-size: 1.5em;
    padding: 20px;
    border: 1px solid #555;
    background-color: #444; /* Fundo dos botões em cinza escuro */
    color: #fff; /* Texto dos botões em branco */
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #555; /* Fundo dos botões ao passar o mouse */
}

button:active {
    background-color: #666; /* Fundo dos botões quando clicados */
}

.zero {
    grid-column: span 2; /* Faz o botão 0 ocupar duas colunas */
}
