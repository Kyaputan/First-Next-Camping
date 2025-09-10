import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type PrivateMeta = { hasProfile?: boolean };

export default async function Home() {
  const user = await currentUser();
  const hasProfile = (user?.privateMetadata as PrivateMeta | undefined)?.hasProfile;
  if (user && hasProfile === false) {redirect("/profile/create");}

  return (
    <>
      <p>Home</p>
    </>
  );
}
