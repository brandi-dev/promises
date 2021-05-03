
const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor; 
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)

