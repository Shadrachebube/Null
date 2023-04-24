document.addEventListener("DOMContentLoaded", function(){
    let list = document.querySelector(".movie-list")
    list.addEventListener("click", function(e){

        if(e.target.className == "delete"){
            const li = e.target.parentElement
            li.parentNode.removeChild(li)

        }
       
    })
}
) 




document.querySelector("#button").onclick= function(){
   let movie = document.querySelector("#movie").value
  
   //just to check if the data collected has been stored
   let wrap = document.querySelector(".wrapper")
   let list = document.querySelector(".movie-list")
   const ul = document.querySelector("ul")
   
    if (movie == "") {
       return false 
       
    }
    //    if () {
    
     
    //    }
       
    else {
        
    





    let addMovie = document.createElement("span")
    addMovie.classList.add("add")
    addMovie.innerHTML = movie


    const deletebtn = document.createElement("span")
    deletebtn.classList.add("delete")
    deletebtn.innerHTML = "delete"
    
   
    const li = document.createElement("li")
    li.classList.add("li")
    

    wrap.appendChild(list)
    list.appendChild(ul)
    ul.appendChild(li)
    li.appendChild(addMovie)
   li.appendChild(deletebtn)
   
    //if(s.target.className == "btn"){
   // let u =  li.append()
 // let ans = list.append(ul).append(u)
    //list.parentNode.appendChild(ul)
   var me = document.querySelector("#movie").value = ""
    console.log(ans)
    } 
//}
    }






    








    


     
