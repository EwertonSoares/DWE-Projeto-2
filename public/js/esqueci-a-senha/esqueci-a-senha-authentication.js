var btnConfirmar = document.getElementById("btnConfirmar");
var spanEmailVazio = document.getElementById("email-vazio");
var h2 = document.getElementById("faca-seu-cadastro");
var loader = document.getElementById("backgroud-loader");
var path = window.location.pathname;
var email = document.getElementById("email");

if (path === "/index.html" || path === "/administrador.html") {
    email = document.getElementById("email-nova-senha");
}

btnConfirmar.addEventListener("click", function () {
    loader.style.display = "block";

    firebase.auth().sendPasswordResetEmail(email.value)
        .then(function () {
            loader.style.display = "none";
            alert(`Enviamos um email para de redifinição de senha para ${email.value}`);
            window.location.href = "/index.html";

        }).catch(function (error) {
            loader.style.display = "none";

            if (email.value.length === 0) {
                h2.style.display = "none";
                spanEmailVazio.style.display = "block";
                email.style.borderColor = "#ff0000";

                return;
            }

            tratarErroEsqueciASenha(error.message);
        });
});