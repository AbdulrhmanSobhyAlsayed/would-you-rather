import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveUser,
  _saveQuestionAnswer,
} from "./_DATA";

export function getUserAvatar(firstName, lastName) {
  return `https://user-avatar.com/api/?first_name=${firstName}&last_name=${lastName}`;
}

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}

export function saveUser(user) {
  return _saveUser(user);
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(questionAnswer) {
  return _saveQuestionAnswer(questionAnswer);
}
