let input = document.querySelector("#input")
let addbtn = document.getElementById("addbtn")
let listin=document.getElementById("listin")
let center = document.getElementById('center')
let deleteall = document.getElementById("deleteall")


function add(){
    let li = document.createElement("li")
    let deletebtn=document.createElement('button')
    let editbtn=document.createElement('button')
    let div=document.createElement("div")
    let div1=document.createElement("div")
    let error = document.querySelector(".error")
    let span = document.createElement('span')
    let flag= true
    if(error){
        error.remove()
    }
    if(listin.children.length==1){
        deleteall.style.display = 'block'
    }
   

    deleteall.addEventListener('click',()=>{
        listin.innerHTML =''
        deleteall.style.display = 'none'
        

    })
    
    
    
    if(input.value.trim()!=""){
        li.classList.add("li-text")
div1.appendChild(span)
        span.innerText = input.value
    div1.style = 'width:70%;height:40px;background-color: rgb(233, 228, 228);padding-left:10px;display:flex;justify-content:space-between'
    let tick =document.createElement('div')
    let arrow = document.createElement('span')
    let btn2=document.createElement('div')
    btn2.style = 'display:flex;gap:20px'
    arrow.innerText ='⬆'
    arrow.style = 'cursor:pointer'
    div1.appendChild(btn2)
    btn2.appendChild(arrow)
    tick.style = 'width:15px;height:15px;margin:12px 5px 0px 0px;border:1px solid black ;background-color:white'
    tick.addEventListener("click",()=>{
    

            span.style.textDecoration = "line-through"
            span.style.opacity =0.5
            tick.style.background = 'red'
            flag=false
})
arrow.addEventListener('click',function(e){
    let current = li;
    let previous = li.previousElementSibling;

    if (previous) {
        listin.insertBefore(current, previous);
    }
})

    
    btn2.appendChild(tick)

    listin.appendChild(li)
    editbtn.innerText = "Edit"
    deletebtn.innerText ="Delete"
editbtn.classList.add("editbtn","edit")
deletebtn.setAttribute('class','delete btn btn-danger')
deletebtn.style.height = "40px"
    div.appendChild(editbtn)
    div.appendChild(deletebtn)
    div.className = 'd-flex justify-content-center gap-3'
    li.appendChild(div1)
    li.appendChild(div)
    input.value =''

    deletebtn.addEventListener('click',function(e){
      
    li.classList.add('left')   
    if(listin.children.length==1){
        deleteall.style.display = 'none'
    }

    li.addEventListener('animationend', () => {
        li.remove()
    })
})
console.log(div1)
    editbtn.addEventListener("click",function(e){
      if(flag){
          let ininpt=document.createElement('input')
        ininpt.type = 'text'
        ininpt.value = span.innerText
        
        span.innerText =''
        
        span.appendChild(ininpt)
        ininpt.style = 'width:70%;height:40px;background-color: rgb(233, 228, 228);padding-left:10px;outline:none'
        ininpt.focus()
        ininpt.addEventListener("keydown",(e)=>{
            if(e.key=="Enter"){

                span.innerText = ininpt.value
                ininpt.remove()
            }
            
        })
      }
        

    })

    
}else{
    let p=document.createElement("p")
        p.style = 'color:red;text-align:center'
        p.innerText = 'Please Enter Anythings'
        p.className='error'

        
        center.appendChild(p)
        
    }
}
addbtn.addEventListener("click",add)
input.addEventListener("keypress",(e)=>{if(e.key==="Enter")add()})


