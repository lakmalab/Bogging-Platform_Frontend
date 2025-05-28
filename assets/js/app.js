console.log("Hello")
function savePost() {

        const newPost = {
        id: 4,
        title: "New Phone Z",
        content: "Writing clean code makes your projects easier to read, maintain, and scale. This post covers some essential tips for improving your code quality...",
        tags: [
            "Clean Code",
            "Best Practices",
            "Development"
        ],
        category: "Software Engineering",
        comments_count: 22222,
        createdAt: "2025-05-27T18:10:13",
        updated_at: "2025-05-27T18:10:13",
        image_url: "ADD_YOUR_IMAGE_URL_HERE"
        }
         fetch("http://localhost:8080/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newPost)
         })
}

document.getElementById("save-button")
    .addEventListener("click", savePost )

function loadPosts() {

    fetch("http://localhost:8080/")
    .then(res => res.json())
    .then(res => { console.log(res) })

}

document.getElementById("btn-load-product")
    .addEventListener("click", loadPosts)

