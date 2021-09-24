const title = document.querySelector(".red")
console.log(title)
function handleClick(){
    if(title.style.color==="red"){
        title.style.color = "blue"
    }else{
        title.style.color = "red"
    }
}

title.addEventListener("click", handleClick);

const btn = document.querySelector("#btn")
const element = document.querySelector("#blue")
//element = <h1 class="red title hidden" id="blue">제목2</h1>
console.log(element)


function btnClick(){
    console.log("button click")
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden')
    }else{
        element.classList.add('hidden')
    }

}

btn.addEventListener("click",btnClick)
