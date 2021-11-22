import React from "react";
import "./styles.css";
export default function SongArtist({ artist }) {
  return (
    <section className="song_artist">
      <div className="song_artist-content">
        <h3 className="song_artist-name">Nombre: {artist.strArtist}</h3>
        <img
          className="song_artist-img"
          src={artist.strArtistThumb}
          alt={artist.strArtist}
        />
        <div className="song_artist-info">
          <p>
            {artist.intFormedYear} - {artist.intDiedYear || "presente"}
          </p>
          <p>
            {artist.strCountry} - {artist.strCountryCode}{" "}
          </p>
          <p>
            {" "}
            {artist.strGenre} - {artist.strStyle}
          </p>
          <a
            href={`http://${artist.strWebsite}`}
            target="_blank"
            rel="noreferrer"
          >
            Sitio Web Oficial
          </a>
        </div>
        <p className='song_artist-biography'>{artist.strBiographyEN}</p>
      </div>
    </section>
  );
}
