# Welcome to your school app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

<!-- -------------------------------------------------------------- -->

## About School App

School App has two user type ["student","teacher"]
every body login with common login page , gets differentiated in the application with the usertype they hold
signup page is yet to be developed
two test login credentials are available to access the app for respective user type
Both student/teacher has a classId
A student has view access to both time table and course of the class they belong
A Teacher can view,create,edit both time table and course data for the class they are incharge.
Both Teacher and Student can chat with Gemini API [Gemini api is integrated]

# Teacher

A teacher has a home screen with time table and course card
both card contains option to view current published respective data and an option to edit it to publish with updated value

menu bar from header section for teacher includes
gemini ai ==> chat page navigation
logout ==> logouts the user

# Student

A student is presented with 3 tabs
first tab ==> todays time table,
second tab ==> courses data
third tab ==> gemini AI chat

menu bar from header section for student includes
Schedule ==> display entire time table for week
course ==> migrates to courses page
gemini ai ==> chat page navigation
logout ==> logouts the user

## server

A Nodejs backend server is involved in login,view/edit of timetable and course
this server also host gemini api request for client
login is not developed entirely, as of now no database is involved
Major focus of the App is in TimeTable and Course data

APIs for timetable/courses update,login

## Database

RXDB is used for database,
It is a NoSql DB , with the syntax of MongoDB
RXDB free tier is used , hence Database is not persistent

## login credential

# teacher

userId : uma
password: 12345678

# student

userId : uma k
password: 12345678
