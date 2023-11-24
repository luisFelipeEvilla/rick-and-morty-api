import { GraphQLObjectType, GraphQLString } from "graphql";

export const LocationType = new GraphQLObjectType({
    name: 'location',
    fields: {
        name: { type: GraphQLString },
    },
});