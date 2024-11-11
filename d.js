let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = 'de-DE'
    window.speechSynthesis.speak(text_speak)
}

function wishME() {
    let day = new Date()
    let hours = day.getHours()
    console.log(hours)
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', () => {
    wishME()
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase());



}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"

    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, what can i help you")
    } else if (message.includes("who are you")) {
        speak("i am virtual assistant , created by Nitesh")
    } else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    } else if (message.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.com/")
    } else if (message.includes("open instagram")) {
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    } else if (message.includes("open facebook")) {
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    } else if (message.includes("open whatsapp")) {
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com/")
    } else if (message.includes("open linkedin")) {
        speak("opening linkedin")
        window.open("https://www.linkedin.com/in/nitesh-kumar-70183b2a8/")
    } else {
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}