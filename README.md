# KOMMUNIchat

A full stack web chat application

## Installation

## 1. Clone this project

```bash
  git clone https://github.com/violin11909/KOMMUNIchat.git
```
## 2. Set up environment
Create a new .env in the frontend
```bash
  VITE_API_URL=your_backend_url
  VITE_FIREBASE_API_KEY=your_firebase_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_firebase_app_ip
  VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement
```
Create a new .env in the backend
```bash
  PORT=your_port
  NODE_ENV='development'
  MONGO_URI=your_mongo_uri
  JWT_SECRET=your_secret
  JWT_EXPIRE=your_expire
  JWT_COOKIE_EXPIRE=your_cookie_expire
  FRONTEND_URL=your_frontend_url
```
you have to set up your firebase 
## 3. Installation & run

```bash
  cd frontend
  npm install
  npm run dev
```

```bash
  cd backend
  npm install
  npm run dev
```

The client will be running on http://localhost:5173
The server will be running on http://localhost:5000

## Documentation

[https://firebase.google.com/docs/storage/web/upload-files](https://firebase.google.com/docs/storage/web/upload-files)


