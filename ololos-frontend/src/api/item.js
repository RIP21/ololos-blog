import axios from 'axios';

class ItemApi {

  static getAll() {
    return axios.get('/api/items');
  }

  static save(item) {
    if(item.id) {
      return axios.put(`/api/items/${item.id}`, item);
    } else {
      return axios.item('/api/items', item);
    }
  }


  static deletePost(itemId) {
    return axios.put(`/api/items/${itemId}`, {});
  }



}

export default ItemApi;
