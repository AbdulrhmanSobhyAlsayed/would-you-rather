import { showLoading, hideLoading } from "react-redux-loading";
import { saveUser } from "../utils/api";
import { setAuthUser } from "./authUser";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER = "ADD_USER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserQuestion(questionId, userId) {
  return {
    type: ADD_USER_QUESTION,
    questionId,
    userId,
  };
}

export function addUserAnswer(questionId, answerId, userId) {
  return {
    type: ADD_USER_ANSWER,
    questionId,
    answerId,
    userId,
  };
}

export function handleAddUser(firstName, lastName) {
  return (dispatch) => {
    dispatch(showLoading());

    saveUser({ firstName, lastName })
      .then((user) => {
        dispatch(addUser(user));
        dispatch(setAuthUser(user.id));
      })
      .then(() => dispatch(hideLoading()));
  };
}
