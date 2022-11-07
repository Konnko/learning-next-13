import React from "react";
import { db } from "lib/db";
import styles from "../Notes.module.css";

const getNote = async (noteID: string) => {
  const data = await db.records.getOne("notes", noteID);

  return data as any;
};

const NotePage = async ({ params }: any) => {
  const { id, title, content, created } = await getNote(params.id);

  return (
    <div>
      <h1>notes/{id}</h1>
      <div className={styles.note}>
        <h3>{title}</h3>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </div>
  );
};

export default NotePage;
