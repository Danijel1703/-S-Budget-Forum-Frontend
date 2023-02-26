import { useEffect, useState } from "react";
import PostModel from "../models/PostModel";
import PostService from "../service/PostService";

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
