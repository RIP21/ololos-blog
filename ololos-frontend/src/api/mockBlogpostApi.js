import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
export const posts = [
  {
    id: 1,
    title: 'Iceland Part 1',
    authorId: 'rip21',
    postdate: new Date(2016, 8, 23),
    body: '<h1>Всем привет, это пример поста про Исландию.</h1>'
  }, {
    id: 2,
    title: 'Iceland Part 2',
    authorId: 'rip21',
    postdate: new Date(2016, 8, 24),
    body: '<h1>Всем привет, это пример ВТОРОГО поста про Исландию.</h1>'
  }, {
    id: 3,
    title: 'Krakow',
    authorId: 'rip21',
    postdate: new Date(2016, 8, 25),
    body: '<h1>Всем привет, это пример поста про Краков, какой он классный и все такое.</h1>'
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return Math.max(...posts.map(post => parseInt(post.id))) + 1;
};

class BlogpostApi {
  static getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }

  static save(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (post.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (post.id) {
          const existingCourseIndex = posts.findIndex(a => a.id == post.id);
          posts.splice(existingCourseIndex, 1, post);
        } else {
          // Just simulating creation here.
          // The server would generate ids and watchHref's for new courses in a real app.
          // Cloning so copy returned is passed by value rather than by reference.
          post.id = generateId();
          post.postdate = new Date();
          posts.push(post);
        }

        resolve(Object.assign({}, post));
      }, delay);
    });
  }

  static deletePost(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = posts.findIndex(course => course.id == postId
        );
        posts.splice(indexOfCourseToDelete, 1);
        resolve({id: postId});
      }, delay);
    });
  }
}

export default BlogpostApi;
