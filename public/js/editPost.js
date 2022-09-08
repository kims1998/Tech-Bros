const post = document.getElementById("post");
const deleteBtn = document.getElementById("delete");
const updateForm = document.getElementById("update-form");

const deletePost = async (e) =>{
    e.preventDefault();
    const id = post.getAttribute("data-postId");

    const response = await fetch(`/dashboard/${id}`, {
        method: "DELETE"
    });

    if(response.ok){
        document.location.replace("/dashboard");
    } else {
        alert("Failed to delete the post!");
    };
};

const updatePost = async (e) => {
    e.preventDefault();

    const titleEl = document.getElementById("title-text");
    const contentEl = document.getElementById("content-text");
    const title = titleEl.value;
    const content = contentEl.value;
    const id = post.getAttribute("data-postId");

    const response = await fetch(`/dashboard/singlepost/${id}`, {
        method: "PUT",
        body: JSON.stringify({title, content}),
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok){
        document.location.replace("/dashboard");
    } else {
        alert("Failed to update the post, please try again.");
    };
};

deleteBtn.addEventListener("click", deletePost);
updateForm.addEventListener("submit", updatePost);