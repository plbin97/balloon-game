import {getScoreBoard} from "./element/scoreBoard";

let score  = 0

const addScore = (value: number) => {
  score += value
  const scoreBoard = getScoreBoard()
  scoreBoard.innerText = `${score}`
}


export {addScore}
