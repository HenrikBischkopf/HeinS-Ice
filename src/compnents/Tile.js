import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Tile({ link, name, icon }) {
  return (
    <Link href={link}>
      <div>
        <Image src={icon} width={80} height={80} alt={name}></Image>
        <p>{name}</p>
      </div>
    </Link>
  );
}
