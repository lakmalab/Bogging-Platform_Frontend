
function loadpostdata(){
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);
    console.log(id);

    fetch("http://localhost:8080/")
    .then(res => res.json())
        .then(dataList => {
            postsArrayList = dataList;
        document.getElementById("title").value = postsArrayList[id-1].title;
        document.getElementById("content").value = postsArrayList[id-1].content;
        document.getElementById("imgUrl").value =postsArrayList[id-1].image_url;
        const tags = postsArrayList[id-1].tags;
        const selectElement  = document.getElementById("choices-multiple-remove-button");
        tags.forEach(tag => {
          const cleanedTag = tag.toLowerCase();

          const option = Array.from(selectElement.options).find(opt => 
              opt.value.toLowerCase() === cleanedTag
            
          );

          
          if (option) {
              option.selected = true;
          }

});

      
    });

}

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
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"), 10);
        const newPost = {
        id: id,
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
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

loadpostdata()