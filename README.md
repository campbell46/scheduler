# Interview Scheduler

Using the latest tools and techniques, we build and test a React application that allows users to book and cancel interviews. We combine a concise API with a WebSocket server to build a realtime experience.

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.


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