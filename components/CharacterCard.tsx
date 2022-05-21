import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/CharacterCard.module.scss";
import { characterPropProp, lifeStatus } from "../type";
import Image from "next/image";
import { useState } from "react";

interface bg {
  backgroundColor: string;
}
const CharacterCard: NextPage<characterPropProp> = ({ character }) => {
  const { id, gender, image, location, name, origin, species, status, type } =
    character;
  let style: bg;
  const settingStat = () => {
    switch (status) {
      case lifeStatus.ALIVE:
        style = { backgroundColor: "rgb(30, 214, 23)" };
        break;
      case lifeStatus.DEAD:
        style = { backgroundColor: "rgb(231, 27, 27)" };
        break;
      case lifeStatus.UNKNOWN:
        style = { backgroundColor: "rgb(221, 207, 6)" };
    }
    return style;
  };
  return (
    <Link href="/character/[id]" as={`/character/${id}`}>
      <a>
        <div className={styles.content}>
          <div className={`${styles.imgBox} imgBox `}>
            <Image src={image} alt={`${name}`} layout="fill" />
          </div>
          <div className={styles.texts}>
            <div>
              <h3 className={styles.h3}>{name}</h3>
              <p className={styles.p1}>{species}</p>
            </div>
            <p className={styles.p2}>{status}</p>
          </div>
        </div>
        <div style={settingStat()} className={styles.status}></div>
      </a>
    </Link>
  );
};

export default CharacterCard;
