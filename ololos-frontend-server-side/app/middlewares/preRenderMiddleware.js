/**
* This looks at static needs parameter in components
* and waits for the promise to be fullfilled.
*
* It is used to make sure server side rendered pages
* wait for APIs to resolve before returning res.end().
*
* As seen in: https://github.com/caljrimmer/isomorphic-redux-app
*/

const defaultFetchData = () => Promise.resolve();

function preRenderMiddleware({ routes, location, params }) {
  const matchedRoute = routes[routes.length - 1];
  const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;
  return fetchDataHandler(params);
}

export default preRenderMiddleware;
