import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { LocationType } from "./Location.type";
import { OriginType } from "./Origin.type";

export const CharacterInfoType = new GraphQLObjectType({
    name: 'CharacterInfo',
    fields: {
        count: { type: GraphQLInt },
        pages: { type: GraphQLInt },
    },
});

export const CharacterType = new GraphQLObjectType({
    name: 'Character',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        species: { type: GraphQLString },
        status: { type: GraphQLString },
        gender: { type: GraphQLString },
        image: { type: GraphQLString },
        location: { type: LocationType },
        origin: { type: OriginType },
    },
});

export const CharactersResponseType = new GraphQLObjectType({
    name: 'CharactersResponse',
    fields: {
        info: { type: CharacterInfoType },
        results: { type: new GraphQLList(CharacterType) },
    },
});
