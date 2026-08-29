"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";

const NewUsersPage = () => {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newUser = Object.fromEntries(formData.entries());

    const req = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const res = await req.json();

    if (res.success) {
      alert("user create hoise");
      router.push("/users");
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Create a new user</h2>

      <form className="w-full max-w-md space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Name</label>
          <Input placeholder="John Doe" name="name" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Email</label>
          <Input type="email" placeholder="john@example.com" name="email" />
        </div>

        <div className="flex gap-3">
          <Button type="submit" className="flex items-center gap-2">
            <FloppyDisk />
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewUsersPage;
