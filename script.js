/* ===================================
   Forever Sia ❤️
   script.js
=================================== */

const starsContainer = document.getElementById("stars");
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");
const message = document.getElementById("message");

// ===== Create Stars =====
for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    starsContainer.appendChild(star);
}

// ===== Floating Hearts =====

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 350);

// ===== Start Story =====

startBtn.addEventListener("click", () => {

    // Play music
    bgMusic.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
    });

    // Change content
    document.querySelector("h3").innerHTML = "For My Beautiful Sia ❤️";

    message.innerHTML = `

        Every love story has beautiful moments...

        <br><br>

        Ours has them too.

        <br><br>

        But sometimes...

        I make mistakes.

        <br><br>

        Today I only want one chance...

        to tell you everything from my heart. 🥹❤️

    `;

    startBtn.innerHTML = "Continue ❤️";

    startBtn.onclick = () => {

        // Part 2 placeholder

        document.querySelector(".glass").innerHTML = `

        <h1>Coming in Part 2 ❤️</h1>

        <p style="margin-top:20px;line-height:1.8;">

        🥺 Romantic Apology Letter

        <br><br>

        ❤️ Relationship Counter

        <br><br>

        🌹 Falling Rose Petals

        <br><br>

        😂 Running No Button

        <br><br>

        💚 Growing Yes Button

        <br><br>

        💌 Open My Heart

        </p>

        `;

    };

});
