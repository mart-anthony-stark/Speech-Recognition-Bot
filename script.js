const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const btn = document.querySelector('#btn')
const btnFace = document.querySelector('#btn span')
const textView = document.querySelector('h3.text')
const recognition = new SpeechRecognition()

const artyom = new Artyom()

recognition.lang = 'en-US'

recognition.onstart= () => {
  console.log('Listening...')
  btnFace.classList.add('speaking')
  btnFace.innerText = "Speaking"
  textView.innerText = ''
}

recognition.onresult = (e) =>{
  const text = e.results[0][0].transcript
  console.log(text)
  textView.innerText = '' + text
  
  if(text.includes('hello')){
    let utterance = new SpeechSynthesisUtterance("Good day sir");
    speechSynthesis.speak(utterance);
  }
}

recognition.onaudioend = () => {
  console.log('Ended...')
  btnFace.classList.remove('speaking')
  btnFace.innerText = "Speak"
}

btn.addEventListener('click', () => {
  if(btnFace.classList.contains('speaking')){
    return recognition.stop()
  }
  recognition.start()
})