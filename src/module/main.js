// Get the user's name and display it on the page
let userName = prompt('Enter your username:');
while (!userName) {
  userName = prompt('Enter your username:');
}
document.getElementById("userName").innerText = userName;

//Function to display the current highscore list
export async function displayHighscore() {
  const url = "https://miniproject-try-default-rtdb.europe-west1.firebasedatabase.app/highscore.json";
  const response = await fetch(url);
  const highscoreList = document.querySelector("#highscore-list");

  if (response.ok) {
    const highscoreArray = Object.entries(await response.json());
    highscoreArray.sort((a, b) => b[1].score - a[1].score);
    highscoreList.innerHTML = "";
    for (let i = 0; i < highscoreArray.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<span class="name">${highscoreArray[i][1].name}</span>
      <span class="score">${highscoreArray[i][1].score}</span>`;
      highscoreList.appendChild(listItem);
    }
  }
}

// Function to update the highscore list with a new entry
export async function updateHighscore(name, score) {
  const url = "https://miniproject-try-default-rtdb.europe-west1.firebasedatabase.app/highscore.json";
  const response = await fetch(url);
  const highscoreArray = Object.entries(await response.json() || {});
  
  // Check if the name already exists in the highscore array
  const existingNameIndex = highscoreArray.findIndex(entry => entry[1].name.toLowerCase() === name.toLowerCase());

  if (existingNameIndex !== -1) {
    // If the name already exists, add the new score to the existing score for that entry
    highscoreArray[existingNameIndex][1].score += score;
  } else {
    // If the name does not exist, add a new entry to the highscore array
    highscoreArray.push(["", { name: name, score: score }]);
  }

  highscoreArray.sort((a, b) => b[1].score - a[1].score);
  highscoreArray.splice(5);

  const updates = {};
  for (let i = 0; i < highscoreArray.length; i++) {
    updates[i] = highscoreArray[i][1];
  }

  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  };

  return fetch(url, requestOptions);
  
}

// Initialize the highscore list with five entries containing undefined names and zero scores
async function initializeHighscore() {
  const url = "https://miniproject-try-default-rtdb.europe-west1.firebasedatabase.app/highscore.json";
  const response = await fetch(url);
  if (response.ok) {
    const snapshot = await response.json();
    if (snapshot === null) {
      const updates = {};
      for (let i = 0; i < 5; i++) {
        updates[i] = { name: undefined, score: 0 };
      }
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      };
      return fetch(url, requestOptions);
    }
  }
}

// Call initializeHighscore() to initialize the highscore list when the page loads
initializeHighscore();


// Display the current highscore list when the page loads
displayHighscore();


export { userName };
