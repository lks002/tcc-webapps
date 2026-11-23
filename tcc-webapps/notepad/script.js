function atualizarStatus(){
    const texto = document.getElementById("texto").value;
    const linhas = texto.split("\n").lenght;
    document.getElementById("info").textContent = "length : " + texto.length + linhas;

}
