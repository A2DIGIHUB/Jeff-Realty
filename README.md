# Jeff-Realty Property Management System

A modern real estate platform built with React, Node.js, and PostgreSQL, featuring property listings and management capabilities.

## Features

- Property Upload System
  - Drag-and-drop image upload
  - Form validation
  - Real-time image previews
  - Secure file storage using AWS S3
- User Authentication
  - JWT-based authentication
  - Role-based access control
- Database Integration
  - PostgreSQL for reliable data storage
  - Efficient queries with proper indexing
- Responsive Design
  - Mobile-first approach
  - Modern UI with Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- AWS Account (for S3 storage)
- npm or yarn

## Project Structure

```
jeff-realty/
├── frontend/           # React frontend
│   ├── src/
│   │   ├── components/
│   │   └── ...
│   ├── package.json
│   └── ...
├── backend/            # Node.js backend
│   ├── src/
│   │   ├── index.js
│   │   └── schema.sql
│   ├── package.json
│   └── .env.example
└── README.md
```

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   - Database credentials
   - AWS S3 credentials
   - JWT secret

5. Set up the database:
   - Create a PostgreSQL database
   - Run the schema.sql script to create tables

6. Start the server:
   ```bash
   npm run dev
   ```

## Database Setup

1. Create a new PostgreSQL database:
   ```sql
   CREATE DATABASE jeff_realty;
   ```

2. Connect to the database and run the schema:
   ```bash
   psql -d jeff_realty -f backend/src/schema.sql
   ```

## AWS S3 Setup

1. Create an S3 bucket in your AWS account
2. Configure CORS for the bucket
3. Create an IAM user with S3 access
4. Add the credentials to your `.env` file

## Development

- Frontend runs on `http://localhost:3000`
- Backend API runs on `http://localhost:3001`

## Security Considerations

- All API endpoints are protected with JWT authentication
- File uploads are restricted by size and type
- Database queries use parameterized statements to prevent SQL injection
- CORS is configured for security

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
