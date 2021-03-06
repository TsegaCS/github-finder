import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "id",
        login: "mojombo",
        avatar_url: "",
        html_url: "",
      },
      {
        id: "id2",
        login: "mojombo2",
        avatar_url: "",
        html_url: "",
      },
      {
        id: "id3",
        login: "mojombo3",
        avatar_url: "",
        html_url: "",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} tsega={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
