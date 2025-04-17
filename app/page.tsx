import Image from "next/image";
import Link from "next/link";
// Assuming components.svg is relevant or a suitable placeholder
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
            HR Portfolio Viewer
          </h1>
          <p className="mt-2 text-lg">
            A simple and powerful Next.js application to view Candidate portfolios.
            Add, Edit, and Update Portfolios Easily!
          </p>
          <div className="flex gap-2 mt-8">
            {/* Link to dashboard - will trigger sign-in if not authenticated */}
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Sign In / View Demo
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 lg:p-0">
           {/* You might want to replace componentsImg with a more relevant image */}
          <Image
             src={componentsImg}
             alt="Portfolio management illustration"
             className="rounded-lg shadow-lg max-w-full h-auto"
             />
        </div>
      </article>

      {/* Features Section - Kept Clerk info as it's relevant to the template's auth */}
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold">Core Features & Technology</h2>
        <p className="mt-2">
          Built with Next.js and secured by Clerk Authentication. Easily manage candidate portfolios locally.
          Powered by modern web technologies.
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          {/* Feature 1: Local Portfolio Management */}
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Local Portfolio CRUD</h3>
            <p className="text-gray-700">
              Add, view, edit, and delete candidate portfolios directly in your browser using local storage. No database needed for this demo!
            </p>
            <div className="grow"></div>
             {/* Can add a link here if relevant, e.g., back to top or sign-in */}
            <span className="text-gray-500">Simple & Fast</span>
          </div>
          {/* Feature 2: Secure Authentication */}
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Secure User Authentication</h3>
            <p className="text-gray-700">
              Leverages Clerk for robust sign-in, sign-up, and user session management, keeping access secure.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
              rel="noopener noreferrer" // Added for security/SEO best practice
            >
              Clerk Docs <span className="arrow"></span>
            </a>
          </div>
          {/* Feature 3: Responsive Design */}
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Modern Responsive UI</h3>
            <p className="text-gray-700">
              Built with Next.js App Router and Tailwind CSS for a clean, fast, and responsive user interface that works on all devices.
            </p>
            <div className="grow"></div>
            <span className="text-gray-500">Built with Tailwind CSS</span>
          </div>
        </div>
      </article>
    </main>
  );
}