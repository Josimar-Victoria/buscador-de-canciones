import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import Loader from "../loader/Loader";
import SongDetails from "../songDetails/SongDetails";
import SongForm from "../songform/SongForm";

import "./styles.css";

export default function SongSearch() {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      const { artist, song } = search;
      let artisUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artisUrl),
        helpHttp().get(songUrl),
      ]);
      console.log(artistRes, songRes);
      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data)
    setSearch(data);
  };

  return (
    <div>
      <article className="app">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
}
