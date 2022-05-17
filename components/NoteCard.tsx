import React from "react";
import { NextPage } from "next";
import styles from "../styles/NoteCard.module.scss";
import { notePropProp } from "../type";

const NoteCard: NextPage<notePropProp> = ({ note }) => {
  const { id, createdAt, heading, content } = note;
  console.log();

  return (
    <> 
      <h3 className={styles.h3}>{heading}</h3>
      <p className={styles.p1}>{content}</p>
      <p className={styles.p2}>
        <span>{createdAt.date}</span>
        <span>{createdAt.time}</span>
      </p>
    </>
  );
};

export default NoteCard;
