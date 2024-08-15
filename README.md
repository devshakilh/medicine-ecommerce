### Datanase design link

https://docs.google.com/document/d/1-f1iHq1KWeaQspRKLwzrb9Z9o5VaA1D_AzmsDkPfKBg/edit?usp=sharing

### Backend README (`backend/README.md`)

```markdown
# Medicine E-Commerce Platform - Backend

## Overview

This is the backend part of the Medicine E-Commerce Platform built with Express.js and Mongoose. It provides RESTful APIs for user authentication, product management, and order handling.

## Technology Stack

- **Programming Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Email Service:** Nodemailer
- **Error Handling:** Comprehensive error handling with custom messages

## Features

1. **User Authentication:**
   - Registration with email verification and password hashing.
   - Login with JWT for authentication.
   - Token management (Access and Refresh Tokens).

2. **CRUD Operations:**
   - **Categories:** Manage primary, secondary, and tertiary categories.
   - **Variants:** Manage product variants with name and price.
   - **Products:** Manage products with details, photos, and pricing.
   - **Shipping Address:** CRUD operations for user addresses.
   - **Orders:** Manage orders and filter by date.

3. **Backend Implementation:**
   - **Controllers:** Define logic for authentication, CRUD operations.
   - **Models:** Define schemas for users, products, categories, variants, and orders.
   - **Routes:** Define endpoints for various functionalities.
   - **Middleware:** Authentication middleware for protecting routes.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Development Server:**

   ```bash
  npx ts-node server.ts
   ```

5. **Build for Production:**

   ```bash
   npm run build
   ```

6. **Run the Production Build:**

   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
EMAIL_SERVICE=<your-email-service>
EMAIL_USER=<your-email-user>
EMAIL_PASS=<your-email-password>
```

## Testing

Run backend tests with:

```bash
npm test
```

## Deployment

Deploy the backend to Heroku or any other cloud provider.

## Documentation

- **API Endpoints:** Detailed API documentation is available in the `/docs` directory.
- **Models and Controllers:** Refer to `/models` and `/controllers` for structure and logic.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.
