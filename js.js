let Gparent=document.getElementById("Grandparent")
let Parent=document.getElementById("parent")
let Child=document.getElementById("child")



// Gparent.addEventListener('click',(e)=>{
 
//     console.log("grand parent clicked")
// })

// Parent.addEventListener('click',(e)=>{
   
//     console.log("parent clicked")
// })

// Child.addEventListener('click',(e)=>{
    
//     console.log("child clicked")
// })


// Gparent.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log("grand parent clicked")
//     Gparent.style.backgroundColor="red"
// })

// Parent.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log("parent clicked")
//     Parent.style.backgroundColor="pink"
// })


// Child.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log("child clicked")
//     Child.style.backgroundColor="blue"
// })


// Gparent.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grand parent clicked")
//         Gparent.style.backgroundColor="red"
//         },3000)
   
// })

// Parent.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//         console.log("parent clicked")
//         Parent.style.backgroundColor="pink"
//         },2000)
// })


// Child.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     setTimeout(()=>{
//     console.log("child clicked")
//     Child.style.backgroundColor="blue"
//     },1000)
    
// })

// Gparent.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("Grand parent clicked")
//         Gparent.style.backgroundColor="red"
//         },3000)
   
// },true)

// Parent.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//         console.log("parent clicked")
//         Parent.style.backgroundColor="pink"
//         },2000)
// },true)


// Child.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     setTimeout(()=>{
//     console.log("child clicked")
//     Child.style.backgroundColor="blue"
//     },1000)
    
// },true)


Gparent.addEventListener("click",(e)=>{
  e.stopPropagation()
    console.log("grand parent clikced");
},false)


Parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log(" parent clikced");
},true)

 

Child.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child clikced");
},false)
