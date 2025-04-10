export const fetchFakeData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await data.json();
  return result;
};
