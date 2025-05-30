console.log("Hello")
var selectedTags = [];

///////////////////////// Load Post////////////////////////////
function loadPosts() {
    let postsList = document.getElementById("postsList");

    let body = "";

    fetch("http://localhost:8080/")
      //fetch("/countries.json")
        .then(res => res.json())
        .then(dataList => {
            postsArrayList = dataList;
            loadModalData();
            dataList.forEach((element, index) => {

            body += `<div class="row">
            <a href="assets/html/single.html?id=${postsArrayList[index].id}">
 <div class="row justify-content-center">
  <div class="col-8 ">
    <div class="article-card">
      <div class="article-author d-flex align-items-center mb-2">
        <img src="assets/img/programmer.png" alt="Author" class="rounded-circle" width="32" height="32">
        <div class="ms-2">
          <strong>Lakmal Abeyrathne</strong>
          <span class="badge bg-primary ms-1">✦✦</span>
          <div class="text-muted small">${formatDate(postsArrayList[index].createdAt)}</div>
        </div>
      </div>

      <h3 class="article-title fw-bold text-primary mb-2">
        ${postsArrayList[index].title} <span>🔥</span>
      </h3>

      <div class="article-tags mb-2 text-muted">
  ${postsArrayList[index].tags.map(tag => `#${tag}`).join(' ')}
</div>

      <div class="article-footer d-flex align-items-center justify-content-between text-muted small">
        <div>
          <span>❤️ 🐱 😲 🙌 🔥</span> <span class="ms-1">89 reactions</span>
          <span class="ms-3"><i class="bi bi-chat"></i> ${postsArrayList[index].comments_count || 0} comments</span>
        </div>
        <div>
          5 min read
        </div>
      </div>
    </div>
  </div>
</div>
`;
            });

            postsList.innerHTML = body;
        })
}
function formatDate(date) {
    if (!date) return 'Unknown date';
    return new Date(date).toLocaleDateString('en-US', { 
        year: 'numeric', month: 'long', day: 'numeric' 
    });
}

async function loadModalData(index) {
    let modalBody = document.getElementById("modal-body");
    console.log(postsArrayList[index]);

    modalBody.innerHTML = `<div class="row">
  <div class="col-xl-6 col-lg-6">
    <div class="article-card">
      <div class="article-author d-flex align-items-center mb-2">
        <img src="assets/img/programmer.png" alt="Author" class="rounded-circle" width="32" height="32">
        <div class="ms-2">
          <strong>Lakmal Abeyrathne</strong>
          <span class="badge bg-primary ms-1">✦✦</span>
          <div class="text-muted small">May 29</div>
        </div>
      </div>

      <h3 class="article-title fw-bold text-primary mb-2">
        10 Open Source Gems To Become The Ultimate Developer <span>🔥</span>
      </h3>

      <div class="article-tags mb-2">
        <span class="text-muted me-2">#webdev</span>
        <span class="text-muted me-2">#javascript</span>
        <span class="text-muted me-2">#programming</span>
        <span class="text-muted me-2">#opensource</span>
      </div>

      <div class="article-footer d-flex align-items-center justify-content-between text-muted small">
        <div>
          <span>❤️ 🐱 😲 🙌 🔥</span> <span class="ms-1">89 reactions</span>
          <span class="ms-3"><i class="bi bi-chat"></i> 7 comments</span>
        </div>
        <div>
          5 min read
        </div>
      </div>
    </div>
  </div>
</div>
`;
}


function search() {
    let searchTxt = document.getElementById("txtSearch").value;
    console.log(searchTxt);
    fetch(`https://restcountries.com/v3.1/all`).then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

loadPosts();




///////////////////////// Load Posts End////////////////////////////

///////////////////////// Add Post////////////////////////////
$(document).ready(function () {
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
      removeItemButton: true,
      maxItemCount: 7,
      searchResultLimit: 10,
   
    });

    multipleCancelButton.passedElement.element.addEventListener('change', function (event) {
      selectedTags = Array.from(event.target.selectedOptions).map(option => option.value);
      console.log(selectedTags);
    });
  });

function savePost() {
        const newPost = {
        id: 5,
        title: document.getElementById("title").value,
        content: "Writing clean code makes your projects easier to read, maintain, and scale. This post covers some essential tips for improving your code quality...",
        tags: selectedTags,
        category: "Software Engineering",
        comments_count: 22222,
        createdAt: "2025-05-27T18:10:13",
        updated_at: "2025-05-27T18:10:13",
        image_url:  document.getElementById("imgUrl").value
        }
         fetch("http://localhost:8080/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newPost)
         })
}

document.getElementById("addBtn")
    .addEventListener("click", savePost )



document.getElementById("btn-load-product")
    .addEventListener("click", loadPosts)

///////////////////////// Add Post End////////////////////////////
