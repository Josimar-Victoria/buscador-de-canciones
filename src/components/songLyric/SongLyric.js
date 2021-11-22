import React from "react";
import "./styles.css";

export default function SongLyric({ title, lyrics }) {
  return (
    <section className="lyrics">
      <div className="lyrics_content">
        <h3 className="title_lyrics">Titulo: {title}</h3>
        <blockquote className="text_lyrics" style={{ whiteSpace: "pre-wrap" }}>
          {lyrics}
        </blockquote>
      </div>
    </section>
  );
}
