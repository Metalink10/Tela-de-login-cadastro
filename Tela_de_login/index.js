const form = document.getElementById("form");
const btn = document.getElementById("btn");
const loginNome = document.getElementById("nome");
const loginSenha = document.getElementById("senha");
const msg = document.getElementById("msgSucesso");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let valorNome = loginNome.value;
  let valorSenha = loginSenha.value;

  let listaUser = [];

  let userValid = {
    nome: "",
    senha: "",
  };

   fetch("https://cadastre-se-git-main-metalink10s-projects.vercel.app/")
  .then(Response => Response.json())
  .then(result => console.log(result));
  );
 
});
