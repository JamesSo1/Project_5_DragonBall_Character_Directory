import React from "react";
import "../App.css";

function List({ characterArr }) {
  function getColorForRace(race) {
    switch (race) {
      case "Human":
        return "#ADD8E6";
      case "Android":
        return "red";
      case "Namekian":
        return "green";
      case "Saiyan":
        return "orange";
      case "Frieza Race":
        return "purple";
    }
  }

  return (
    <table className="list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Power Level</th>
          <th>Race</th>
        </tr>
      </thead>
      <tbody>
        {characterArr.map((character) => (
          <tr key={character.id}>
            <td>{character.name}</td>
            <td>{character.ki}</td>
            <td style={{ color: getColorForRace(character.race) }}>
              {character.race}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
