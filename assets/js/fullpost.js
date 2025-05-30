console.log("Full post")
function loadfullpost(){
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);
    console.log(id);

    fetch("http://localhost:8080/")
    .then(res => res.json())
        .then(dataList => {
            postsArrayList = dataList;
        document.getElementById("fullTitile").textContent = postsArrayList[id-1].title;
        document.getElementById("content").textContent = postsArrayList[id-1].content;
        document.getElementById("createdDate").textContent =postsArrayList[id-1].createdAt;

        const tags = postsArrayList[id-1].tags;
        const tagsContainer = document.getElementById('tagsContainer');

        tags.forEach(tag => {
            const tagElement = document.createElement('a');
            tagElement.href = "";
            tagElement.innerHTML = `<span class="badge badge-pill p-2 badge-light">${tag}</span>`;
            tagsContainer.appendChild(tagElement);
        });
    });

}

function loadPosts() {
    let postsList = document.getElementById("article-grid");

    let body = "";

    fetch("http://localhost:8080/")
      //fetch("/countries.json")
        .then(res => res.json())
        .then(dataList => {
            postsArrayList = dataList;
            loadModalData();
            const limitedPosts = dataList.slice(0, 2);
            limitedPosts.forEach((element, index) => {

            body += `<div class="row">
           <a href="assets/html/single.html?id=${postsArrayList[index].id}">
 <div class="row justify-content-center">
  <div class="col-11 ">
    <div class="article-card">
      <div class="article-author d-flex align-items-center mb-2">
        <img src="../img/programmer.png" alt="Author" class="rounded-circle" width="32" height="32">
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
        <img src="./img/programmer.png" alt="Author" class="rounded-circle" width="32" height="32">
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
function deletePost(){
    
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);
    console.log(id);

    fetch("http://localhost:8080/" + id, {
    method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
}
loadfullpost();

 loadPosts()

 