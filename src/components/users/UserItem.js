import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ tsega: { login, avatar_url, html_url } }) => {
  // DESTRUCTURED!!!
  //   const { login, avatar_url, html_url } = props.tsega;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ backgroundColor: "red" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
