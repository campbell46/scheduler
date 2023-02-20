# Interview Scheduler

Interview Scheduler is a single-page application that allows users to book, edit and delete interviews. Each day displays available spots for convenience. Users can add an interview by inputting their name and selecting an interviewer.

## Features
- User can switch between days
- Days show available interviews
- Users can book an interview by inputting their name and selecting an interviewer
- Users can edit/delete their interviews

## Final Product

#### Switching Days
!["Switching days dynamically displays interviews for selected day."](https://github.com/campbell46/scheduler/blob/master/docs/SelectDay.gif?raw=true)

#### Booking Interview
!["Switching days dynamically displays interviews for selected day."](https://github.com/campbell46/scheduler/blob/master/docs/BookInterview.gif?raw=true)

#### Editing Interview
!["Switching days dynamically displays interviews for selected day."](https://github.com/campbell46/scheduler/blob/master/docs/EditInterview.gif?raw=true)

#### Delete Interview
!["Switching days dynamically displays interviews for selected day."](https://github.com/campbell46/scheduler/blob/master/docs/DeleteInterview.gif?raw=true)


## Setup

Install dependencies with `npm install`.

## Run The API Server

App requires the Scheduler-API to also be running. 
Follow instructions here:

https://github.com/lighthouse-labs/scheduler-api

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- Axios
- Classnames
- React
- React-test-renderer
- Prop types
- Sass
- Storybook
- Normalize