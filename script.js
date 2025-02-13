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

// Envelope Opening Functionality
document.getElementById("envelope").addEventListener("click", function() {
    // Open Envelope (fold and reveal letter)
    this.classList.add("open");

    // Wait 1 second before revealing content
    setTimeout(() => {
        document.getElementById("content").classList.add("revealed");
        document.getElementById("content").style.display = 'block';
        // Play background music
        document.getElementById("bg-music").play();
    }, 1000);
});

// Timer Function (Calculate Time Spent Together)
function updateTime() {
    const startDate = new Date("2021-01-01");
    const currentDate = new Date();
    const timeSpent = currentDate - startDate;

    const years = Math.floor(timeSpent / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(timeSpent / (1000 * 60 * 60 * 24)) % 365;
    document.getElementById("time-count").innerText = `${years} years and ${days} days`;
}

setInterval(updateTime, 1000);
updateTime();

// Skip Button Functionality
document.getElementById("skip-button").addEventListener("click", function() {
    // Immediately reveal the content and skip the envelope animation
    document.getElementById("envelope").classList.add("open");
    document.getElementById("content").classList.add("revealed");
    document.getElementById("content").style.display = 'block';
    // Play background music
    document.getElementById("bg-music").play();
});
