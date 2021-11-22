import React from "react";
import Message from "../message/Message";
import SongArtist from "../songArtist/SongArtist";
import SongLyric from "../songLyric/SongLyric";

export default function SongDetails({ search, lyric, bio }) {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error la cancion '<em>${search.song}</em>' no fue encontrada`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error el interprete <em>'${search.artist}'</em> no fue encontrado `}
          bgColor="#dc3545"
        />
      )}
    </>
  );
}
