// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";
// export function addArticle(payload) {
//   return { type: ADD_ARTICLE, payload };
// }
export const addArticle = (article) => {
    // returns an action
    return {
      type: 'ADD_ARTICLE',
      payload: article
    };
  };