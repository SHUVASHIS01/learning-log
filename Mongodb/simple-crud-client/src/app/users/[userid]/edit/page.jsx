import { Button, Input, Label, TextField } from "@heroui/react";
import { updateUser } from "@/app/lib/actions";
import { getUserByID } from "@/app/lib/data";

export default async function UserEditPage({ params }) {
  const { userid } = await params;
  const user = await getUserByID(userid);
  console.log("editing user", user);

  const updateUserWrapper = async (formData) => {
    "use server";
    return updateUser(userid, formData);
  };

  return (
    <div className="">
      <h2>Editing the user: {user.name}</h2>
      <div className="w-1/2 mx-auto">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            defaultValue={user?.name}
            className="w-full"
            name="name"
            type="text"
            variant="secondary"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            defaultValue={user?.email}
            className="w-full"
            name="email"
            type="email"
            variant="secondary"
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            defaultValue={user?.role}
            className="w-full"
            name="role"
            type="text"
            variant="secondary"
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>
          <div className="flex">
            <Button type="submit" slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
