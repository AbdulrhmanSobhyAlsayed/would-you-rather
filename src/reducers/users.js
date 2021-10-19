import {
  RECEIVE_USERS,
  ADD_USER,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
} from "../actions/users";

export function users(state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: action.user,
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          questions: state[action.userId].questions.concat([action.questionId]),
        },
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.answerId,
          },
        },
      };
    default:
      return state;
  }
}
