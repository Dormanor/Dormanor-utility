const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;

  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }

  if (text.length > 50) {
    if (synth.speaking && isSpeaking) {
      button.innerText = "Pause";
      synth.resume();
      isSpeaking = false;
    } else {
      button.innerText = "Resume";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    button.innerText = "Speaking";
  }

  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      button.innerText = "Convert to Speech";
    }
  });
};

button.addEventListener("click", textToSpeech);
function rightClick(clickEvent) {
    clickEvent.preventDefault();
    // return false;
}
document.onclick = hideMenu;
document.oncontextmenu = rightClick;
  
function hideMenu() {
    document.getElementById("contextMenu")
            .style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("contextMenu")
            .style.display == "block")
        hideMenu();
    else{
        var menu = document.getElementById("contextMenu")

        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}
const myButton = document.querySelector("#myButton");

myButton.addEventListener("click", () => {
  myButton.classList.add("animate");
});
