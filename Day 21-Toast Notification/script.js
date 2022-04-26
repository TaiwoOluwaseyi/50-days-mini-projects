const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


const Messages = [
  'Message one', 
  'Message two', 
  'Message three',
  'Message four',
]

button.addEventListener('click', () => createNotification('Hey Miss Carter'))

function createNotification(message = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')

  notif.innerText = message ? message :   getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return Messages[Math.floor(Math.random() * Messages.length)]
}
