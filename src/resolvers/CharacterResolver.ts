import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";

interface CharacterInfo {
  count: number;
  pages: number;
}

interface CharactersResponse {
  info: CharacterInfo;
  results: any[]; // Ajusta el tipo según la estructura real de los resultados
}

const API_URL = API_BASE_URL + 'character';

export async function getAllCharacters(page: number, limit: number): Promise<CharactersResponse> {
  try {
    const response: AxiosResponse<CharactersResponse> = await axios.get(
      API_URL,
      {
        params: {
          page: page,
          limit: limit,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching all characters:', error.message);
    throw new Error('Error fetching all characters');
  }
}

export async function getCharacterById(id: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${API_URL}/${id}`
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching character by ID:', error.message);
    throw new Error('Error fetching character by ID');
  }
}

export async function getCharacterBySpecies(species: string, page: number, limit: number,  name: string) {
  try {
    const response: AxiosResponse<CharactersResponse> = await axios.get(
      API_URL,
      {
        params: {
          species: species,
          page: page,
          limit: limit
        },
      }
    );
    
    if (name !== '') response.data.results = await response.data.results.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()));
    return response.data;
  } catch (error: any) {
    console.error('Error fetching characters by species:', error.message);
    throw new Error('Error fetching characters by species');
  }
}
