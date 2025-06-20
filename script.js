const logDiv = document.getElementById('log');
const attackBtn = document.getElementById('attack-btn');

let hp1 = 100;
let hp2 = 100;

function writeLog(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  logDiv.appendChild(p);
  logDiv.scrollTop = logDiv.scrollHeight;
}

function updateSprites() {
  document.getElementById('sprite1').style.opacity = hp1 > 0 ? '1' : '0.4';
  document.getElementById('sprite2').style.opacity = hp2 > 0 ? '1' : '0.4';
}

function rollDamage() {
  return Math.floor(Math.random() * 20) + 5;
}

attackBtn.addEventListener('click', () => {
  if (hp1 <= 0 || hp2 <= 0) {
    writeLog('Battle over! Refresh to play again.');
    return;
  }

  const dmg1 = rollDamage();
  hp2 = Math.max(0, hp2 - dmg1);
  writeLog(`Your Serperior hits Emboar for ${dmg1} damage! (Emboar HP: ${hp2})`);
  updateSprites();

  if (hp2 <= 0) {
    writeLog('You win! 🎉');
    return;
  }

  const dmg2 = rollDamage();
  hp1 = Math.max(0, hp1 - dmg2);
  writeLog(`Emboar hits Serperior for ${dmg2} damage! (Serperior HP: ${hp1})`);
  updateSprites();

  if (hp1 <= 0) {
    writeLog('You lose! 😢');
  }
});
