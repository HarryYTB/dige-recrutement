function start() {
  document.getElementById("splash").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function openForm(type) {
  const form = document.getElementById("form");
  form.classList.remove("hidden");

  form.innerHTML = `
    <h2><b>Formulaire ${type}</b></h2>

    <input id="discord" placeholder="Pseudo Discord">

    <input id="q1" placeholder="Question 1">
    <input id="q2" placeholder="Question 2">
    <input id="q3" placeholder="Question 3">

    <h3>Disponibilités 📅</h3>

    <label><input type="checkbox"> Lundi</label><br>
    <label><input type="checkbox"> Mardi</label><br>
    <label><input type="checkbox"> Mercredi</label><br>
    <label><input type="checkbox"> Jeudi</label><br>
    <label><input type="checkbox"> Vendredi</label><br>

    <br>
    <button onclick="send()">Envoyer ta candidature 📋</button>
  `;
}

function send() {
  document.getElementById("form").innerHTML = `
    <h2><b>Merci ! 🕰</b></h2>
    <p>Nous te répondrons bientôt 👻</p>
    <p>Vérifie tes mails 💌</p>
  `;
}