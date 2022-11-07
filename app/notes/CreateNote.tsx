"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "lib/db";

export default function CreateNote() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async () => {
    await db.records.create("notes", {
      title,
      content,
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <>
      <h3>Create a new Note</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={create}>Create note</button>
    </>
  );
}
