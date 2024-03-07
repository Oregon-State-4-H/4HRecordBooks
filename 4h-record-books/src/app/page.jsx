import Navbar from './components/Navbar'
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";


export default async function Home({ query }) {
  const session = await getSession();
  // Check if it's the first login based on a query parameter
  const isFirstLogin = query?.firstLogin === "true";

  if (session?.user && isFirstLogin) {
    redirect("/dashboard");
  }


  return (
    <>
      <Navbar isBasic={true}/>
      <main>
        <h1>Pubic Start Site</h1>
      </main>
    </>
  )
}