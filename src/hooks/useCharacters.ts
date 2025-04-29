import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {
  fetchCharactersPage,
  fetchCharacterById,
  Character,
} from '../api/character';
import type {CharactersResponse} from '../api/character';

export const useCharacters = (
  name?: string,
  status?: string,
  species?: string,
  networkOnly = false,
) =>
  useInfiniteQuery<CharactersResponse, Error>({
    queryKey: ['characters', {name, status, species}],
    queryFn: async ({pageParam}) => {
      return fetchCharactersPage(pageParam as number, name, status, species);
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const url = lastPage.info.next;
      const nextPage = url ? new URL(url).searchParams.get('page') : undefined;
      return nextPage ? Number(nextPage) : undefined;
    },
    placeholderData: keepPreviousPages => keepPreviousPages,
    networkMode: networkOnly ? 'online' : 'always',
    gcTime: networkOnly ? 0 : 5 * 60 * 1000,
    staleTime: networkOnly ? 0 : 30 * 1000,
    refetchOnReconnect: networkOnly ? 'always' : false,
    refetchOnWindowFocus: networkOnly ? 'always' : false,
    retry: 2,
  });

export const useCharacter = (id: number | undefined, networkOnly = false) =>
  useQuery<Character>({
    queryKey: ['character', id],
    queryFn: async () => {
      if (id == null) {
        throw new Error('No character id provided');
      }
      return fetchCharacterById(id);
    },
    networkMode: 'online',
  });
