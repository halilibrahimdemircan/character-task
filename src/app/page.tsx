import React from "react";
import CharacterClient from "./_components/CharacterClient";
import { getAllCharacters } from "./_services/getAllCharacters";

export default async function CharactersPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  console.log('resolvedSearchParams :>> ', resolvedSearchParams);
  const status = resolvedSearchParams?.status ?? undefined;
  const gender = resolvedSearchParams?.gender ?? undefined;

  const characters = await getAllCharacters(status, gender);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <CharacterClient initialCharacters={characters} />
    </main>
  );
}