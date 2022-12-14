function createGame(player1, hour, player2){
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="${player2}">
  </li>
  `
}

let delay = -0.9;
function createCard(date, day, games) {
  delay = delay + 0.9;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo NLW">
 </header>
   <main id="cards">
    ${createCard(
      "24/11",
      "quinta",
      createGame("south korea", "10:00", "uruguay") +
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia")
    )}
    ${createCard(
      "28/11",
      "segunda",
      createGame("camaroon", "07:00", "serbia") +
        createGame("south korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland")
    )}
    ${createCard(
      "02/12",
      "sexta",
        createGame("ghana", "12:00", "uruguay") +
        createGame("switzerland", "16:00", "serbia") +
        createGame("brazil", "16:00", "camaroon")
    )}
   </main>
`
