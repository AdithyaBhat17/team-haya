const backgroundChange = () => {
    const domNode = document.getElementById('hero')
    for(let i=0; i<12;i++) {
        setTimeout(() => {
            domNode.style.backgroundImage = 
            `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./assets/backgrounds/${i + 1}.JPG')`
        }, (i + 1) * 3000)
    }
        
    
}

window.addEventListener('loadend', () => {
    backgroundChange()
})