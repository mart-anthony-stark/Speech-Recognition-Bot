const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const btn = document.querySelector('#btn')
const btnFace = document.querySelector('#btn span')
const textView = document.querySelector('h3.text')
const recognition = new SpeechRecognition()

recognition.onstart= () => {
  console.log('Listening...')
  btnFace.classList.add('speaking')
  btnFace.innerText = "Speaking"
  textView.innerText = ''
}

recognition.onresult = (e) =>{
  const text = e.results[0][0].transcript
  console.log(text)
  textView.innerText = text
}

recognition.onaudioend = () => {
  console.log('Ended...')
  btnFace.classList.remove('speaking')
  btnFace.innerText = "Speak"
}

btn.addEventListener('click', () => {
  recognition.start()
})