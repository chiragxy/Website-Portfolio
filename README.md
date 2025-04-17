


# HR Portfolio Viewer

<!-- Add a screenshot or logo of your app here -->
<!-- Example: ![HR Portfolio Viewer Screenshot](./path/to/your/screenshot.png) -->

This project is an HR Portfolio Viewer application built using **Next.js**. It utilizes **[Clerk](https://www.clerk.com/)** for secure user authentication and management.
![image](https://github.com/user-attachments/assets/971b88de-ed94-4151-ae15-c2bb0e1b49f9)


This application allows users (like HR personnel or hiring managers) to log in and view candidate portfolios. It features local Create, Read, Update, and Delete (CRUD) functionality, storing portfolio data directly in the browser's local storage for demonstration purposes. No database setup is required for the core portfolio features.

## Core Features

*   **Secure User Authentication:** Handles sign-up, sign-in, and user sessions using Clerk.
*   **Protected Dashboard:** Main application area accessible only after user login.
*   **Portfolio Viewing:** Displays candidate portfolios in a clean card layout.
*   **Local Portfolio Management:**
    *   Add new candidate portfolios.
    *   Edit existing portfolio details.
    *   Delete portfolios.
*   **Local Data Persistence:** Uses browser `localStorage` to save portfolio data locally between sessions (Note: Data is specific to the browser and not shared).
*   **Modern Tech Stack:** Built with the Next.js App Router and styled with Tailwind CSS.

[![documentation](https://img.shields.io/badge/documentation-clerk-green.svg)](https://clerk.com/docs)
<!-- Add other relevant badges if you like (e.g., license, build status) -->

## Demo
![image](https://github.com/user-attachments/assets/58125fe5-6052-42f7-8a1d-f40a3345140e)
![image](https://github.com/user-attachments/assets/7321c0d2-53f0-4fb7-a6a6-e4c348fac058)

<!-- If you host a demo, add the link here -->
<!-- Example: A hosted demo is available at [your-demo-link.com](https://your-demo-link.com/) -->

## Deployment

This application is deployed using **[Vercel](https://vercel.com/)**, a platform optimized for Next.js applications.

**Steps for Deployment:**

1.  **Push to Git:** Ensure your project code is pushed to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2.  **Connect to Vercel:** Sign up or log in to Vercel and connect your Git repository.
3.  **Configure Project:** Vercel typically auto-detects Next.js settings.
4.  **Environment Variables:** Crucially, you need to configure the Clerk environment variables within the Vercel project settings (under "Environment Variables"):
    *   `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (Set your *Production* Publishable Key from Clerk Dashboard)
    *   `CLERK_SECRET_KEY` (Set your *Production* Secret Key from Clerk Dashboard)
    *   Ensure the necessary Clerk webhook endpoint is configured in your Clerk Dashboard if required for production features.
5.  **Deploy:** Trigger a deployment. Vercel will build and deploy your application. Subsequent pushes to the connected branch (e.g., `main`) will automatically trigger new deployments.

*[Note: If using a different provider like Netlify, AWS Amplify, etc., replace these steps with the relevant instructions for that platform, focusing on connecting the repository and setting environment variables.]*

## Technical Background

This project leverages a modern web development stack:

*   **Framework:** **[Next.js](https://nextjs.org/) (App Router)** - A React framework providing Server Components, Client Components, file-based routing, optimized builds, and a great developer experience. The App Router enables fine-grained control over rendering and data fetching strategies.
*   **Authentication:** **[Clerk](https://clerk.com/)** - Handles all user authentication (sign-up, sign-in, session management) and provides user profile management capabilities. It offers pre-built UI components (`<SignIn>`, `<SignUp>`, `<UserButton>`) and hooks (`useUser`) that significantly simplify security implementation.
*   **Styling:** **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework used for rapidly building custom user interfaces directly in the markup. It promotes consistency and maintainability.
*   **State Management & Interactivity:** Primarily managed using **React Hooks** (`useState`, `useEffect`) within Client Components (`"use client";`). Server Components handle rendering data fetched server-side where possible.
*   **Local Data Storage:** **Browser `localStorage`** - Used *specifically for this demo* to persist the portfolio data (add, edit, delete) without needing a backend database. **Important:** `localStorage` is synchronous, limited in size, stores only strings, and is **local to the user's specific browser**. It's not suitable for production data sharing or persistence across devices.
*   **Language:** **[TypeScript](https://www.typescriptlang.org/)** - Adds static typing to JavaScript, improving code quality, maintainability, and reducing runtime errors during development.

## Getting Started / Running Locally

To run this project locally, you need to:

1.  Ensure you have Node.js (version 18+) and npm/yarn installed.
2.  Clone this repository (if you haven't already):
    ```bash
    git clone <your-repository-url>
    cd <repository-folder-name>
    ```
3.  Sign up for a free Clerk account at [https://clerk.com](https://clerk.com).
4.  Go to your [Clerk Dashboard](https://dashboard.clerk.com) and create a new application. Note your API keys.
5.  Create a `.env.local` file in the root of your project (copy `.env.example` if it exists) and add your Clerk API keys:
    ```dotenv
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
    CLERK_SECRET_KEY=sk_test_YOUR_SECRET_KEY

    # You might need these if Clerk setup asks for JWT Template or Frontend/Backend API URLs
    # NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    # NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    # NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    # NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    ```
6.  Install the required dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```
7.  Run the development server:
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
8.  Open [http://localhost:3000](http://localhost:3000) (or the port specified) in your browser.


<!-- Add your contact information or contribution guidelines here -->
<!-- Example: If you find issues or want to contribute, please open an issue or pull request in the repository. -->
