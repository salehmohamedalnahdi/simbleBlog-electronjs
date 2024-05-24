
const HandleDelete=async(id)=>{
  const response= await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
            method: 'DELETE',
          });
        const result= await response.json();
        console.log(result);
        window.location.href = "home.html"
}

onload= async() => {
    const main=document.getElementById('main')

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    result.forEach((data)=>{
      const container=`<div class="container-title-delete"">
      <h3 class="title-blog">Title: ${data.title}</h3>
      <div class="delete">
      <button class="delete-button" onclick="HandleDelete(${data.id})">Delete</button>
      </div>
    </div>
    <div class="content-createdAt">
        <article class="artcle">Content: ${data.body}</article>
        <div class="createdAt"><span>CreatedAt:</span></div>
        </div>`
     main.innerHTML+=container
    })
  };
/*
  let content=`<li id="title">title: ${data.title}</li>
  <li>Discription: ${data.title}</li>`
  list.innerHTML+=content*/