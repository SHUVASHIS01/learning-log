import { Table, Button, Link } from "@heroui/react";

export default function UsersTable({ users = [] }) {
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
                    <Link href={`/users/${user._id}`}>
                      <Button variant="danger">Delete</Button>
                    </Link>
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
