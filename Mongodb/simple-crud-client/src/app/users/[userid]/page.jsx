import { getUserByID } from "@/app/lib/data";

export default async function UserDetailPage({params}) {
    const {userid} = await params;
    const user = await getUserByID(userid);
    console.log(user);
  return (
    <div className="">
       <h2>User Details</h2>
    </div>
  );
}