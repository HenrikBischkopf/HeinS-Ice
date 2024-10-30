import styled from "styled-components";
import Tile from "./Tile";

export default function Tiles({ landingData }) {
  return (
    <div>
      {landingData.map((data) => (
        <Tile
          key={data.id}
          icon={data.icon}
          name={data.name}
          link={data.link}
        ></Tile>
      ))}
    </div>
  );
}
