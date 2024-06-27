const bgcolor = document.body


const arraynum = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];


const colorbutton = document.querySelector("#colorbutton");
console.log(colorbutton)

colorbutton.addEventListener('click',function (){

    let colorcode = '#'

    
    while(colorcode.length < 7){
        let num  = Math.floor(Math.random()*15)
        colorcode+= arraynum[num]

    }
    console.log(colorcode)
    bgcolor.style.background = colorcode
    
}
)

colorbutton.addEventListener("mouseover",function(e){

    colorbutton.style.backgroundColor= "dodgerblue"
    colorbutton.style.color = "white"
    colorbutton.style.borderColor = "#F0F3F4"
    
})

colorbutton.addEventListener("mouseout",function(e){

    colorbutton.style.backgroundColor = "tomato"
    colorbutton.style.color = "black"
    colorbutton.style.borderColor = "black"
    
})

colorbutton.addEventListener("mousedown",function(e){

    colorbutton.style.backgroundColor = "#9B59B6"
    colorbutton.style.color = "#ECF0F1"
    colorbutton.style.borderColor = "#ECF0F1"
    

})



