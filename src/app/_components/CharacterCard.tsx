import React from "react";
import { Character } from "../../types/character";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-shadow">
      <img
        src={character.image}
        alt={character.name}
        className="w-24 h-24 rounded-full mb-3"
      />
      <h2 className="text-lg font-bold">{character.name}</h2>
      <p className="text-sm text-gray-500">
        {character.status} - {character.gender}
      </p>
    </div>
  );
}
