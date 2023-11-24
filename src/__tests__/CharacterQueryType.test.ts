// src/queries/RootQueryType.test.ts
import { graphql } from 'graphql';
import { GraphQLSchema } from 'graphql';
import { CharacterQueryType } from '../queries/CharacterQueryType';

describe('RootQueryType', () => {
  test('should return a list of characters', async () => {
    const schema = new GraphQLSchema({ query: CharacterQueryType });
    const query = `
      query {
        characters {
          info {
            count
            pages
          }
          results {
            id
            name
            species
            status
            gender
            image
            location {
              name
            }
            origin {
              name
            }
          }
        }
      }
    `;

    const result = await graphql({ schema, source: query });

    const data: { characters: { info: { count: number; pages: number }; results: any[] } } = result.data as any;

    expect(result.errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data.characters).toBeDefined();
    expect(data.characters.info).toBeDefined();
    expect(data.characters.results).toBeDefined();
    expect(data.characters.info).not.toBeInstanceOf(Array);
    expect(data.characters.results).toBeInstanceOf(Array);
  });
});


describe('CharacterBySpecieQuery', () => {
  test('should return a list of characters by specie', async () => {
    const schema = new GraphQLSchema({ query: CharacterQueryType });
    const query = `
        query {
            charactersBySpecies(species: "Human") {
              info {
                count
                pages
              }
              results {
                id
                name
                species
                status
                gender
                image
                location {
                  name
                }
                origin {
                  name
                }
              }
            }
        }
        `;

    const result = await graphql({ schema, source: query });

    const data: { charactersBySpecies: { info: { count: number; pages: number }; results: any[] } } = result.data as any;

    expect(result.errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data.charactersBySpecies).toBeDefined();
    expect(data.charactersBySpecies.results).toBeInstanceOf(Array);
    (data.charactersBySpecies.results).forEach((character: any) => {
      expect(character.species).toMatch(/Human|Humanoid/);
    });
  });
});
