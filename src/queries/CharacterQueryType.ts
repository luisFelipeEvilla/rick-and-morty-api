import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } from "graphql";
import { CharactersResponseType } from "../types/Character.type";
import { getAllCharacters, getCharacterBySpecies } from "../resolvers/CharacterResolver";

export const CharacterQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        characters: {
            type: CharactersResponseType,
            args: {
                page: { type: GraphQLInt, defaultValue: 1 },
                limit: { type: GraphQLInt, defaultValue: 5 },
            },
            resolve: async (_root, { page, limit }) => {
                try {
                    const x = await getAllCharacters(page, limit);
                    return x
                } catch (error: any) {
                    console.error('Error fetching characters:', error.message);
                    throw new Error('Error fetching characters');
                }
            },
        },
        charactersBySpecies: {
            type: CharactersResponseType,
            args: {
                page: { type: GraphQLInt, defaultValue: 1 },
                limit: { type: GraphQLInt, defaultValue: 5 },
                species: { type: GraphQLString },
            },
            resolve: async (_root, { page, limit, species }) => {
                try {
                    return await getCharacterBySpecies(species, page, limit); 
                } catch (error: any) {
                    console.error('Error fetching characters by species:', error.message);
                    throw new Error('Error fetching characters by species');
                }
            },
        },
    },
});
