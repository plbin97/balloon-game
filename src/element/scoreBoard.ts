let scoreBoard: HTMLDivElement | null = null

function getScoreBoard() {
  if (!scoreBoard) {
    scoreBoard = document.createElement('div')
    scoreBoard.classList.add('scoreBoard')
    scoreBoard.id = 'scoreBoard'
    scoreBoard.innerText = '0'
  }
  return scoreBoard
}

export {getScoreBoard}
