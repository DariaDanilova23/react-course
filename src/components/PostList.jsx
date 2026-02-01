import PostItems from "./PostItem";
export default function PostList({ posts, tittle, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{tittle}</h1>
      {posts.map((post, index) => (
        <PostItems
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
