import { useEffect, useState } from "react";
import { PostModel } from "src/post/models";
import { PostService } from "src/post/service";

function PostsPage() {
  const [posts, setPosts] = useState(Array<PostModel>);
  const getPosts = async () => {
    const respose = await PostService.getPosts();
    setPosts(respose);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <div>{post.title}</div>
          <div>{post.content}</div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
export default PostsPage;
