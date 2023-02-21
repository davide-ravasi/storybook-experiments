import React, { useState } from "react";

import "./TeamOrganizer.css";

interface ITeamOrganizer {
  players: string[]
}

const TeamOrganizer = ({ players }: ITeamOrganizer) => {
  const [team, setTeam] = useState("team1");
  const [playersList, setPlayersList] = useState(players);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  // set team
  // resset the teams
  // only five in every team max
  // random?
  // 

  const setPlayerOnTeam = (player) => {
    if (team) {
      const newPlayersList = playersList.filter(playerList => playerList !== player);
      setPlayersList(newPlayersList);

      if (team === 'team1') {
        const newTeam1 = [...team1, player];
        setTeam1(newTeam1);
      }

      const newTeam2 = [...team2, player];
      setTeam2(newTeam2);
    }
  }

  return (
    <div>
      <PlayerList players={playersList} setPlayer={setPlayerOnTeam} />
      <TeamList title="Team 1" team={team1} />
      <TeamList title="Team 2" team={team2} />
    </div>
  )
}

const PlayerList = ({ players, setPlayer }) => {
  const selectPlayer = (player) => {
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

const TeamList = ({ title, team }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {team && team.map((player) => {
          return <li>{player}</li>
        })}
      </ul>
    </>
  );
}



export default TeamOrganizer;