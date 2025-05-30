console.log("Hello")
var selectedTags = [];

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

function loadPosts() {

    fetch("http://localhost:8080/")
    .then(res => res.json())
    .then(res => { console.log(res) })

}

document.getElementById("btn-load-product")
    .addEventListener("click", loadPosts)

