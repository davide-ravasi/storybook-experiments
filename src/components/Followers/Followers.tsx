import React, { useEffect, useState } from "react";

import "./Followers.css";

const Followers = () => {
  const [list, setList] = useState([]);

  const setNewName = (e, name: string) => {
    e.preventDefault();

    const newList = [...list, name];
    setList(newList);
  }

  const addFollower = (e, follower, followed) => {
    e.preventDefault();
    
    console.log(follower + " " + followed);
  }

  return <div>
    <InsertName setNewName={setNewName} />
    <ListNames list={list} />
    <FollowName addFollower={addFollower} />
  </div>;
};

const InsertName = ({ setNewName }) => {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => setNewName(e, name)}>
      <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
    </form>
  )
}

const ListNames = ({ list }) => {
  return (
    <ul>
      {list && list.map((name: string, index: number) => {
        return <li key={'list' + name + index}>{name}</li>
      })}
    </ul>
  )
}

const FollowName = ({ addFollower }) => {
  const [follower, setFollower] = useState("");
  const [followed, setFollowed] = useState("");

  return (
    <form onSubmit={(e) => addFollower(e, follower, followed)}>
      <input type="text" name="follower" id="follower" onChange={(e) => setFollower(e.target.value)} />
      follow
      <input type="text" name="followed" id="followed" onChange={(e) => setFollowed(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Followers;