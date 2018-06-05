class CardComponent extends HTMLElement {
  constructor () {
    super()
    let shadow = this.attachShadow({mode: 'open})
    
    // Sizing
    this.style.width = '400px'
    this.style.height = '180px'
    
    // Flex properties
    this.style.display = 'flex'
    this.style.flexDirection = 'column'
    this.style.justifyContent = 'flex-start'
    this.style.alignItems = 'flex-start'
    
    // Misc styles
    this.style.backgroundColor = '#FFFFFF'
    this.style.zIndex = '5'
    
    let title = document.createElement('h1')
    title.innerText = this.getAttribute('data-title')
  }
}
