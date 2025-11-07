const message = `Mom,\nI just want you to know how much I appreciate everything you’ve done for us.\n\nYou’ve been so strong through everything—holding the family together, giving us love, and never giving up even when life got tough.\n\nYou’ve always been our strength, our comfort, and the reason we keep moving forward.\n\nI hope you’re doing well, Mom. Please keep taking care of yourself and keep fighting, just like you always have.`;

function showLetter() {
  const bgMusic = new Audio("Nothing's Gonna Hurt You Baby.mp3"); //
  bgMusic.volume = 0.2;
  bgMusic.loop = true;
  bgMusic.play();

  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
