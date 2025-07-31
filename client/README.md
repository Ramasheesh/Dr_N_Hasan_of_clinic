# Neha Clinic Web App

This is a web application for a heart clinic where users can book appointments and get details about the clinic and doctors.

## Features

- User can book an appointment with a doctor
- User can view the details of the clinic and doctors
- User can view the reviews of the clinic and doctors
- User can view the services provided by the clinic
- User can view the treated patients by the clinic
- User can contact the clinic

## Technologies Used

- Frontend: React, Vite, Tailwind CSS
- Backend: None (static site)

## How to use

Just run `npm install` and then `npm run dev` to start the development server. The app will be available at http://localhost:3000. Edit the files in the `src` directory and the app will reload automatically.

## How to build

Run `npm run build` to build the app for production. The output will be in the `dist` directory.

## How to serve

Run `npm run serve` to serve the production build. The app will be available at http://localhost:5000.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Google Sheets Integration

The booking data is stored in a Google Sheet. To use this feature, you need to have a Google account and create a Google Sheet. Then, you need to go to the Google Cloud Console and create a project. Enable the Google Drive API and Google Sheets API. Create credentials for your project (OAuth client ID) and download the JSON key file. Then, you need to install the `google-auth-library` and `google-api-library` packages. Create a file named `google-credentials.json` with the following content:
