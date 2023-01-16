import React, { useEffect, useState } from "react";

import "./Followers.css";

const inputCss = "shadow appearance-none border rounded w-full my-1 py-2 px-3";

const buttonCss = "inline-block my-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full";

/*
  - add types
  - data type to include followers
    ex: 
  - add follow function

{
  {
    name: paolo,
    followers: []
  },
  {
    name: andrea,
    followers: []
  }
}
*/

type User = {
  name: string,
  followers: string[]
}

const Followers = () => {
  const [list, setList] = useState([]);
  const setNewName = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    e.preventDefault();
    console.log(list);
    if (!list.find(user => user.name === name)) { // name present in list
      setList([...list, { name: name, followers: [] }]);
    }
  }

  const addFollower = (e: React.FormEvent<HTMLFormElement>, follower: string, followed: string) => {
    e.preventDefault();
    const newList = [...list];
    const followedData = newList.find(user => user.name === followed);
    followedData.followers.push(follower);
    setList(newList);
  }

  return <div>
    <InsertName setNewName={setNewName} />
    <ListNames list={list} />
    <FollowName addFollower={addFollower} list={list} />
  </div>;
};

const InsertName = ({ setNewName }) => {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => setNewName(e, name)}>
      <input type="text" id="name" className={inputCss} name="name" onChange={(e) => setName(e.target.value)} />
    </form>
  )
}

const ListNames = ({ list }) => {
  return (
    <ul>
      {list && Object.values(list).map((user: User, index: number) => {
        return <li key={'list' + user.name + index}>{user.name}</li>
      })}
    </ul>
  )
}

const FollowName = ({ addFollower, list }) => {
  const [follower, setFollower] = useState("");
  const [followed, setFollowed] = useState("");

  return (
    <form className="mt-5" onSubmit={(e) => addFollower(e, follower, followed)}>
      <select name="follower" id="follower" className={inputCss + ' w-2/5'} onChange={(e) => { console.log(e.target.value); setFollower(e.target.value) }}>
        <option value="">Choose the name</option>
        {list && Object.values(list).map((user: User) => {
          return <option value={user.name}>{user.name}</option>
        })}
      </select>
      <span className="inline-block w-1/5 text-center">follow</span>
      <select name="followed" id="followed" className={inputCss + ' w-2/5'} onChange={(e) => setFollowed(e.target.value)}>
        <option value="">Choose the name</option>
        {
          list && Object.values(list).filter((user: User) => user.name !== follower).map((user: User) => <option value={user.name}>{user.name}</option>)
        }
      </select>
      <button className={buttonCss + ' mt-5'} type="submit">Submit</button>
    </form>
  )
}

export default Followers;