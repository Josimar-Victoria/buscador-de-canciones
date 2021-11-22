import React, { useState } from "react";
import "./styles.css";

const initialForm = {
  artist: "",
  song: "",
};
export default function SongForm({ handleSearch }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      return;
    }
    handleSearch(form);
    setForm(initialForm);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          name="artist"
          placeholder="Nombre del Interprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          className="input-text"
          type="text"
          name="song"
          placeholder="Nombre de la Cancion"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Buscar" className="input-buttom" />
      </form>
    </div>
  );
}
