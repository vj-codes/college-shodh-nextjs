# Setup Guide for CollegeShodh Project

This guide provides step-by-step instructions on how to set up the **CollegeShodh Next.js Full-Stack Project** on your local machine.

## Prerequisites

Ensure the following tools are installed on your machine:

- **Node.js** (v16 or later) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas** - [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Steps to Set Up the Project

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Coneixement-India-Pvt-Ltd/college-shodh-nextjs.git
```
---
### 2. Install Dependencies

Once inside the project directory, install the required dependencies:

- Using **npm**:

  ```bash
  npm install
  ```

---
### 3. Set Up Environment Variables

#### Copy from `.env.example`

1. In the root directory of your project, locate the `.env.example` file.
2. Copy this file and rename the copy to `.env` using the following command:

```bash
cp .env.example .env
```
**OR**
#### Update .env File

1. Create a `.env` or `.env.local` file in the root directory of your project and add the following necessary environment variables :

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_emailjs_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_emailjs_public_key"
NEXT_PUBLIC_MONGO_ALTAS_URL="your_mongo_atlas_url"
NEXT_PUBLIC_API_URL="your_server_url"
```

2. Replace the placeholder values (your_emailjs_service_id, your_emailjs_template_id, your_emailjs_public_key, your_mongo_atlas_url, your_server_url) with the actual values.

---

### 5. Run the Development Server

Start the development server using either of the following commands:

- Using **npm**:

  ```bash
  npm run dev
  ```

The application will be available at `http://localhost:3000`.

---

### 6. Access the Application

Once the server is running, and mongo-atlas is connected open your browser and visit `http://localhost:3000` to view the application.

---

### 7. Build for Production

To create a production build, use the following commands:

- Using **npm**:

  ```bash
  npm run build
  npm run start
  ```

This will generate a production-ready build and start the application.

---

## Troubleshooting

- **MongoDB connection issues**: Ensure the `DATABASE_URL` is correct in `.env.local` and that MongoDB is running.
- **App not loading**: Make sure that all environment variables are set correctly and the development server is running.

## Additional Notes

- For more information on Next.js, visit the official documentation: [Next.js Documentation](https://nextjs.org/docs).
- If you encounter any issues or have questions, feel free to raise an issue on the [GitHub repository](https://github.com/Coneixement-India-Pvt-Ltd/college-shodh-nextjs.git).


This guide should help you get started with setting up and running your Next.js full-stack project locally.
