import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addUserAnswer, addUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addQuestionAnswer(qid, answer, authUser) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    answer,
    authUser,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();

    saveQuestion({ optionOneText, optionTwoText, author: authUser })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question.id, question.author));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();

    saveQuestionAnswer({ authUser, qid, answer }).then(() => {
      dispatch(addQuestionAnswer(qid, answer, authUser));
      dispatch(addUserAnswer(qid, answer, authUser));
      dispatch(hideLoading());
    });
  };
}
