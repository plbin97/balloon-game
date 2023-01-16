import {addScore} from "../score";

class Balloon {
  balloonNode: HTMLDivElement
  speed: number
  constructor() {
    this.balloonNode = document.createElement('div')
    this.balloonNode.style.left = `${Math.random() * 500}px`
    this.balloonNode.style.bottom = '50px'
    this.balloonNode.classList.add('balloon')
    this.speed = Math.random() * 5 + 1
    this.balloonNode.style.animationDuration = `${20/this.speed}s`
    this.balloonNode.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    this.balloonNode.onclick = () => {
      console.log(this.balloonNode)
      this.balloonNode.style.display = 'none'
      addScore(Math.ceil(this.speed))
      setTimeout(() => {
        this.balloonNode.style.display = 'block'
      }, 1000)
    }
  }

}

export default Balloon
