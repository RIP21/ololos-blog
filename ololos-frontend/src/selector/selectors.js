import {createSelector} from "reselect";

export function getById(entries, id) {
  if (entries[0].id) {
    const object = entries.filter(entry => entry.id == id);
    if (object.length) {
      return object[0];
    }
    return null;
  }
  console.error("Entity don't have 'id' field to do search by entries, please provide properly formatted objects only"); // eslint-disable-line
  return null;
}

const postsSelector = state => state.posts;

export const sortNewPostsFirstSelector = createSelector(
  postsSelector,
  (posts) => [...posts].sort((a, b) => new Date(b.postdate) - new Date(a.postdate))
);
