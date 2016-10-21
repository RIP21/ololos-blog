import axios from 'axios';

class PostApi {

  static getAll() {
    return axios.get('/api/posts');
  }

  static save(post) {
    if(post.id) {
      return axios.put(`/api/posts/${post.id}`, post);
    } else {
      return axios.post('/api/posts', post);
    }
  }


  static deletePost(postId) {
    return axios.delete(`/api/posts${postId}`);
  }



}

export default PostApi;
