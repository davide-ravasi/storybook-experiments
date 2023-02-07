import React, { useState } from "react";

import "./TeamOrganizer.css";

interface ITeamOrganizer {
  players: string[]
}

const TeamOrganizer = ({ players }: ITeamOrganizer) => {
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");


  return (
    <div>
      <PlayerList players={players} setPlayer={setPlayer} />
    </div>
  )
}

const PlayerList = ({ players, setPlayer }) => {
  const selectPlayer = (player) => {
    console.log(player);
    setPlayer(player)
  };
  return (
    <form>
      {players && players.map(player => {
        return (
          <li onClick={() => selectPlayer(player)}>{player}</li>
        )
      })}
    </form>
  )
}



export default TeamOrganizer;