import axios from 'axios';

class AuthorsApi {

  static getAll() {
    return axios.get('/api/authors');
  }

  static save(author) {
    if(author.id) {
      return axios.put(`/api/authors/${author.id}`, author);
    } else {
      return axios.post('/api/authors', author);
    }
  }


  static deleteAuthor(authorId) {
    return axios.put(`/api/authors/${authorId}`, {});
  }



}

export default AuthorsApi;
