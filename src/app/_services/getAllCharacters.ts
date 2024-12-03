type Character = {
    id: number;
    name: string;
    status: string;
    gender: string;
    image: string;
  };
  
  export async function getAllCharacters(
    status?: string,
    gender?: string
  ): Promise<Character[]> {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (gender) params.append("gender", gender);
  
    const res = await fetch(`https://rickandmortyapi.com/api/character/?${params}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch characters: ${res.statusText}`);
    }
  
    const data = await res.json();
    return data.results as Character[];
  }