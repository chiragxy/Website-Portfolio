import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { OrgDetails, SessionDetails, UserDetails } from "./details";
import Link from "next/link"; // Make sure Link is imported

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      {user && (
        <>
          <div className="flex justify-between items-start mb-8">
             <h1 className="text-3xl font-semibold text-black">
                👋 Hi, {user.firstName || `Stranger`}
             </h1>
             {/* Add the button/link here */}
             <Link
                href="/portfolios"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium"
              >
                View Portfolios
              </Link>
          </div>

          <div className="grid gap-4 mt-8 lg:grid-cols-3">
            <UserDetails />
            <SessionDetails />
            <OrgDetails />
          </div>
          <h2 className="mt-16 mb-4 text-3xl font-semibold text-black">
            What's next?
          </h2>
          Read the{" "}
          <Link
            className="font-medium text-primary-600 hover:underline"
            href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
            target="_blank"
          >
            Clerk Docs
          </Link>
        </>
      )}
    </div>
  );
}