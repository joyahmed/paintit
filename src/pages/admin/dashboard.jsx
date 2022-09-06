// import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (typeof window === "undefined") return null;

  if (session) {
    console.log(`session from :`, session);
    return (
      <div className="flex w-full flex-grow items-center justify-center">
        <div className="fixed right-0 top-0 h-screen w-[85%] px-4 py-4 pt-20 sm:w-[94%]">
          <div className="flex h-screen w-full items-start justify-center text-xl font-bold text-gray-300">
            Welcome to Paintit
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/");
  }
};

export default Dashboard;

// export async function getServerSideProps(context) {
// 	return {
// 		props: {
// 			session: await unstable_getServerSession(
// 				context.req,
// 				context.res
// 			)
// 		}
// 	};
// }
