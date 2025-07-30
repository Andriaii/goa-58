
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Posts loaded:", data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

fetchPosts();
