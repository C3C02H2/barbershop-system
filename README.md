# Appointment Booking Website

A full-stack web application with a main page and admin panel for appointment booking.

## Features

- Main page with company information
- Services section with duration details
- Appointment booking system with time validation
- Gallery
- Contact information
- Admin panel for managing appointments, gallery, and calendar

## Tech Stack

- Backend: Python (Flask)
- Frontend: JavaScript (React)
- Database: SQLite (development), PostgreSQL (production recommended)

## Project Structure

```
/
├── backend/               # Python Flask backend
│   ├── app/               # Application code
│   └── requirements.txt   # Python dependencies
│
└── frontend/              # React frontend
    ├── public/            # Static files
    └── src/               # React source code
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Set up a virtual environment (optional but recommended):
   ```
   python -m venv venv
   venv\Scripts\activate  # Windows
   source venv/bin/activate  # macOS/Linux
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the Flask development server:
   ```
   python app.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Access

- Main website: http://localhost:3000
- Admin panel: http://localhost:3000/admin
- Backend API: http://localhost:5000 