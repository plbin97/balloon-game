import Balloon from "../Model/Balloon";
import {getScoreBoard} from "../element/scoreBoard";

const balloons: Balloon[] = []
function game() {
  document.body.innerHTML = ''
  const scoreBoard = getScoreBoard()
  document.body.append(scoreBoard)
  const canvas = document.createElement('div')
  canvas.classList.add('canvas')

  for (let i = 0; i < 10; i ++) {
    const balloon = new Balloon()
    balloons.push(balloon)
    canvas.append(balloon.balloonNode)
  }
  document.body.append(canvas)
}

export {game}
