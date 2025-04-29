export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {name: string; url: string};
  location: {name: string; url: string};
  image: string;
  episode: string[];
  created: string;
};

export type CharactersResponse = {
  info: {next: string | null; pages: number; count: number};
  results: Character[];
};

export const fetchCharactersPage = async (
  pageParam: string | number = 1,
  name?: string,
  status?: string,
  species?: string,
): Promise<CharactersResponse> => {
  const params = new URLSearchParams({page: String(pageParam)});
  if (name) params.append('name', name);
  if (status) params.append('status', status);
  if (species) params.append('species', species);

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?${params}`,
  );
  if (!res.ok) throw new Error('Error fetching characters');
  return res.json();
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error(`Character with id ${id} not found`);
  return res.json();
};
