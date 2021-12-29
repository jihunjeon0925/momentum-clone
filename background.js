const image = []
for(let i=0; i<5; i++){
    image.push(`${i}.jpg`)
}

const random = Math.floor(Math.random() * image.length)

const imgElement = document.createElement('img')

imgElement.src = `./img/${image[random]}`

console.log(imgElement)

document.body.appendChild(imgElement)