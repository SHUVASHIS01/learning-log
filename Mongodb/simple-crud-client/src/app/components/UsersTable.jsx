'use client'
import {AlertDialog, Button} from "@heroui/react";

import { Table, Link } from "@heroui/react";

export default function UsersTable({ users = [], deleteUserAction }) {
  const handleDelete = async (userid) => {
    await deleteUserAction(userid);
  };


  if (!users.length) {
    return <p className="text-gray-500">No users found.</p>;
  }

  return (
    <div className="">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>email</Table.Column>
              <Table.Column>role</Table.Column>
              <Table.Column>actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>

                  <Table.Cell>
                    <Link href={`/users/${user._id}`}>
                      <Button variant="outline">Details</Button>
                    </Link>
                    <Link href={`/users/${user._id}`}>
                      <Button variant="outline">Edit</Button>
                    </Link>

                    <AlertDialog>
                      <Button variant="danger">Delete</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>
                                Delete project permanently?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete{" "}
                                <strong>My Awesome Project</strong> and all of
                                its data. This action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                Cancel
                              </Button>
                              <Button
                                slot="close"
                                variant="danger"
                                onClick={() => handleDelete(user._id)}
                              >
                                Delete Project
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
