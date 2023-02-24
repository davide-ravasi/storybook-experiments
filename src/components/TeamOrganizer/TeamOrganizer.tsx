import React, { useState } from "react";
import { setTextRange } from "typescript";

import "./TeamOrganizer.css";

interface ITeamOrganizer {
  players: string[]
}

const TeamOrganizer = ({ players }: ITeamOrganizer) => {
  const [team, setTeam] = useState("team1");
  const [playersList, setPlayersList] = useState(players);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  // only five in every team max
  // random?

  const resetValues = () => {
    setTeam1([]);
    setTeam2([]);
    setPlayersList(players);
  }

  const setPlayerOnTeam = (player) => {
    if (team) {
      const newPlayersList = playersList.filter(playerList => playerList !== player);
      setPlayersList(newPlayersList);

      if (team === 'team1') {
        const newTeam1 = [...team1, player];
        setTeam1(newTeam1);
      } else {
        const newTeam2 = [...team2, player];
        setTeam2(newTeam2);
      }

    }
  }

  return (
    <div>
      <PlayerList players={playersList} setPlayer={setPlayerOnTeam} />
      <Buttons setTeam={setTeam} resetValues={resetValues} />
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

const Buttons = ({ setTeam, resetValues }) => {
  return (
    <div className="buttons">
      <button type="button" onClick={() => setTeam('team1')}>Team 1</button>
      <button type="button" onClick={() => setTeam('team2')}>Team 2</button>
      <button type="button" onClick={() => resetValues()}>Reset</button>
    </div>
  )
}



export default TeamOrganizer;