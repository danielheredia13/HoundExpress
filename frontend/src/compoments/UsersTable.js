import React from "react";
import { Container, ListGroup } from "react-bootstrap";
const UsersTable = ({ users, handleUseUser }) => {
  return (
    <Container>
      <h5 className="mt-3">Usuarios</h5>
      <ListGroup className="users-table">
        {users &&
          users.map((user) => {
            return (
              <ListGroup.Item
                key={user.id}
                className="user-row"
                onClick={() => handleUseUser(user.id)}
              >
                {user.name}
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Container>
  );
};

export default UsersTable;
