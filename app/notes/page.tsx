import Link from "next/link";
import React from "react";
import { db } from "lib/db";

import CreateNote from "./CreateNote";
import styles from "./Notes.module.css";

const getNotes = async () => {
  const data = await db.records.getList("notes");

  return data?.items as any[];
};

const Note = ({ note }: any) => {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
};

const NotesPage = async () => {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <CreateNote />
    </div>
  );
};

export default NotesPage;
