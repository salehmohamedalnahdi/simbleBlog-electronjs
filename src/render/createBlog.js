

let create=async(title,content)=>{
    
    const response=await fetch('https://simbleblog-backend.onrender.com/create', {
     method: 'POST',
     body: JSON.stringify({
       title: title,
       content: content,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   })
   const result=await response.json();
   console.log(result);
}
   
   const submit=document.getElementById('submit')
   submit.addEventListener("click",(event)=>{
     let title=document.getElementById("title").value
     let content=document.getElementById("content").value 

     if(!title || !content)
      {
        return alert("All Fielids Are Required Minimize Or Close Program And Try Again")
      }  
     create(title,content)
     event.preventDefault();
     window.location.href = "home.html"  
   })