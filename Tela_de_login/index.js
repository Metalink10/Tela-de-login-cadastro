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

   fetch("https://cadastre-se-git-main-metalink10s-projects.vercel.app")
  .then(Response => Response.json())
  .then(result => console.log(result));
  );
  console.log(listaUser)

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(key, value);
  }

  if (valorNome === "" && valorSenha === "") {
    alert("Preencha os campos ou cadastre-se para acessar");
  } else if (valorNome == userValid.nome && valorSenha == userValid.senha) {
    window.localStorage
    setTimeout(() => {
      window.location.href = "https://cadastrar-tela-de-cadastro.vercel.app/";
      msg.setAttribute("style", "display: block");
    }, 2000);
  } else {
    alert("Cadastre-se para acessar");
  }
});
