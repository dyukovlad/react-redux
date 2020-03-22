import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbiden = ["php", "spam", "func"];

export function forbidenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbiden.filter(w => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert("Ты спамер"));
        }
      }
      return next(action);
    };
  };
}
