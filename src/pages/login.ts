import {game} from "./game";

function login() {
  const frame = document.createElement('div')
  const input = document.createElement('input')
  const button = document.createElement('button')
  button.innerText = 'Login'
  button.onclick = () => {
    game()
  }
  frame.append(input)
  frame.append(button)
  document.body.innerHTML = ''
  document.body.append(frame)
}

export {login}
