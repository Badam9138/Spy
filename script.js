const topics = ["Mosque", "Airport", "School", "Hospital"];
let players = 4; // you can make this dynamic later

function startGame() {
  const chosenTopic = topics[Math.floor(Math.random() * topics.length)];
  const spyIndex = Math.floor(Math.random() * players);

  let roles = Array(players).fill(chosenTopic);
  roles[spyIndex] = "❓ You are the SPY!";

  let currentPlayer = 0;

  function showNext() {
    if (currentPlayer >= players) {
      document.getElementById("playerRole").innerHTML = "All players have seen their roles!";
      return;
    }

    let role = roles[currentPlayer];
    document.getElementById("playerRole").innerHTML = `
      <h2>Player ${currentPlayer + 1}</h2>
      <p>${role}</p>
      <button onclick="next()">Next Player</button>
    `;
    currentPlayer++;
  }

  window.next = showNext;
  showNext();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
  