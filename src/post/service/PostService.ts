import axios from "axios";

class Service {
  baseUrl = "http://api.forum.local/post";

  async getPosts() {
    const repsponse = await axios.get(`${this.baseUrl}?{recordsPerPage,page}`, {
      params: {
        recordsPerPage: 10,
        page: 1,
      },
    });
    return repsponse.data;
  }
}

const PostService = new Service();
export default PostService;
