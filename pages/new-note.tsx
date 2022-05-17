import React, { useState } from "react";
import Link from "next/link";
import { addNote, notesState } from "../features/notesSlice";
import { useSelector, useDispatch } from "react-redux";
import { noteProp, notesArray } from "../type";
import { Head } from "next/document";
const newNote = () => {
  const addZero = (n: number) => {
    let s;
    if (n.toString().length === 1) {
      return "0" + n.toString();
    } else {
      return n;
    }
  };
  const createDate = () => {
    const newDate = new Date();

    return {
      date:
        addZero(newDate.getDate()) +
        "/" +
        addZero(newDate.getMonth()) +
        "/" +
        newDate.getFullYear(),
      time: addZero(newDate.getHours()) + ":" + addZero(newDate.getMinutes()),
    };
  };
  const notes: notesArray = useSelector(notesState);
  const [newNote, setNewNote] = useState<noteProp>({
    id: 0,
    createdAt: createDate(),
    heading: "",
    content: "",
  });
  const dispatch = useDispatch();
  console.log(notes);

  return (
    <div>
      <header>
        <Link href="/">
          <span>back</span>
        </Link>
        <span>
          <input
            type="text"
            onChange={(e) =>
              setNewNote({ ...newNote, heading: e.target.value })
            }
          />
        </span>
      </header>
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <Link href="/">
          <button
            onClick={() => {
              //const first = str.split(' ')[0]
              
              dispatch(addNote(newNote));
            }}
          >
            add
          </button>
        </Link>
      </div>
    </div>
  );
};
/*

        <input type="text" name="" id="" />
        <br />
*/
export default newNote;
