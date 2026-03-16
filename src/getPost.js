export async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
    console.log(data);
  return data.posts;
};