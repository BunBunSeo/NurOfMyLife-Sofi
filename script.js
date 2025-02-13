document.getElementById("envelope").addEventListener("click", function() {
    this.classList.add("open");
    setTimeout(() => {
        document.getElementById("content").classList.remove("hidden");
        document.getElementById("bg-music").play();
    }, 1500);
});

// Friendship Timer
function updateTimer() {
    const startDate = new Date("2024-02-14"); // Adjust to your real friendship start date
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("time-count").innerText = `${days} days together 💗`;
}
updateTimer();

// Secret Star Messages
const messages = [
    "You're the moon in my sky, Sofi!",
    "May our bond shine forever!",
    "You're the best thing in my universe!"
];

function revealMessage(index) {
    document.getElementById("secret-message").innerText = messages[index];
}

/* Add Skip Button Styling */
#skip-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
}

#skip-button {
    background-color: #ff5f99;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#skip-button:hover {
    background-color: #ff3f7f;
}
