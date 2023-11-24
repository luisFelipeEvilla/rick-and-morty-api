import { GraphQLObjectType, GraphQLString } from "graphql";

export const OriginType = new GraphQLObjectType({
    name: 'origin',
    fields: {
        name: { type: GraphQLString },
    },
});