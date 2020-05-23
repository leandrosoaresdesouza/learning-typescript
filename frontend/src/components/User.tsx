import React from "react";

interface User {
  name: string;
  email?: string;
}

interface Props {
  user: User;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p>
        <strong>Nome: </strong> {user.name}
      </p>
      <p>
        <strong>E-mail: </strong> {user.email || "Doesnt have email"}
      </p>
    </div>
  );
};

export default User;
