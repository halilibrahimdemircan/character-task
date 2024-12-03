"use client";

import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import CharacterGrid from "./CharacterGrid";
import { Character } from "../../types/character";

type CharacterClientProps = {
  initialCharacters: Character[];
};

export default function CharacterClient({ initialCharacters }: CharacterClientProps) {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [status, setStatus] = useState<string | undefined>();
  const [gender, setGender] = useState<string | undefined>();

  const fetchFilteredCharacters = async () => {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (gender) params.append("gender", gender);

    const res = await fetch(`/api/characters?${params}`);
    const data = await res.json();
    setCharacters(data);
  };

  useEffect(() => {
    fetchFilteredCharacters();
  }, [status, gender]);

  return (
    <div>
      <Filters setStatus={setStatus} setGender={setGender} />
      <CharacterGrid characters={characters} />
    </div>
  );
}