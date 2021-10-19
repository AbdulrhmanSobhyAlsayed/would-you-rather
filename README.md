# MyReads Project

This is Second project for Udacity's React and Redux Fundamentals course. the project is a simple Question app for asking would you rather ?? using React framework

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash

├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    └──Components
        ├── App.js # This is the root of your app. Contains route logic.
        ├── Dashboard.js # dashboard component to display list of answered and unanswered questions
        ├── Login.js # login page for set auth user and accessing all other components
        ├── Logout.js # logout component to unset auth user
        ├── Register.js # register component to add new user to the system
        ├── ProtectedRoute.js # This component to protect component from access without set auth user
        ├── LeaderBoard.js # Component to display Users leaders
        ├── QuestionDetails.js # the detail of the question wither is it answered or not
        └── NotFound.js # default component for wrong route
    └── actions  #contain all required actions
    └── middleware  #contain middleware logger to log the state
    └── reducers  #contain required reducers
    └── utils  #contain required dummy api
```
