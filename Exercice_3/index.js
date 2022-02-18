let form = document.querySelector("form")

form.addEventListener("submit", (e) => {

    e.preventDefault();
    let name = document.getElementById("lastname").value;

    alert("Merci" + name + "de votre participation")

});