
const HandleDelete=async(id)=>{
  const response= await fetch('https://simbleblog-backend.onrender.com/delete/'+id, {
            method: 'DELETE',
          });
        const result= await response.json();
        console.log(result);
        window.location.href = "home.html"
        //window.location.reload()
}

onload= async() => {
    const main=document.getElementById('main')

    const response = await fetch('https://simbleblog-backend.onrender.com/blogs');
    const result = await response.json();
    
    result.forEach((data)=>{
      const createdAt = new Date(data.createdAt);
      const formattedDate = createdAt.toLocaleString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
      const container=`<div class="container-title-delete"">
      <h3 class="title-blog">Title: ${data.title}</h3>
      <div class="delete">
      <button class="delete-button" onclick="HandleDelete(${data.id})">Delete</button>
      </div>
    </div>
    <div class="content-createdAt">
        <article class="artcle">Content: ${data.content}</article>
        <div class="createdAt"><span>CreatedAt: ${formattedDate}</span></div>
        </div>`
     main.innerHTML+=container
    })
  };
