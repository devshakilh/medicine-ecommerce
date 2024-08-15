
### Database sheet link (`frontend/README.md`)
https://docs.google.com/document/d/1-f1iHq1KWeaQspRKLwzrb9Z9o5VaA1D_AzmsDkPfKBg/edit?usp=sharing
```markdown
# Medicine E-Commerce Platform - Frontend

## Overview

This is the frontend part of the Medicine E-Commerce Platform built with Next.js, TypeScript, Tailwind CSS, and Redux. It provides user interfaces for product management, shopping cart, user authentication, and admin dashboard.

## Technology Stack

- **Programming Language:** TypeScript
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **State Management:** Redux, RTK Query, Axios
- **Notification:** React Toastify
- **Modal:** React Portal
- **SEO:** Next.js `next/head` for static and dynamic meta tags
- **Authentication:** JWT

## Features

1. **User Authentication:**
   - Registration and Login with JWT.
   - Email verification with countdown timer.
   - Role-based access control (Super admin, Admin, User).

2. **Product Management:**
   - Dynamic product pages with category-based filtering.
   - Add to cart functionality with variant selection and price updates.
   - Product details with options to add to the cart.

3. **Admin Dashboard:**
   - Manage users, products, orders, and categories.
   - CRUD operations for categories, variants, and products.
   - Pagination for tables.

4. **Shopping Cart:**
   - Add, remove, and update cart items.
   - Manage product quantities and handle stock out scenarios.
   - Display cart summary with total price and discounts.

5. **Responsive Design:**
   - Ensure seamless user experience across devices.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
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

Create a `.env.local` file in the `frontend` directory with the following variables:

```env
NEXT_PUBLIC_API_URL=<your-backend-api-url>
NEXT_PUBLIC_APP_NAME=Medicine E-Commerce Platform
```

## Testing

Run frontend tests with:

```bash
npm test
```

## Deployment

Deploy the frontend to Vercel or any other hosting platform.

## Documentation

- **Components:** Detailed component documentation available in the `/docs` directory.
- **API Integration:** Refer to `/services` for API interactions.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License.

```

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
   npm run dev
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
