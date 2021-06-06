const graphql = require('graphql');
const GraphQLDate = require('graphql-date');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
	GraphQLDate
} = 
graphql;

const PersoonType = new GraphQLObjectType ({
	name: 'Persoon',
	fields: {
		id: { type: GraphQLString},
		naam: {type: GraphQLString},
		voorNamen: {type: GraphQLList},
		voorVoegsels: {type: GraphQLList},
		geslacht: {type: GraphQLString},
		adelijkeTitel: {type: GraphQLString},
		geboorteData: {type: geboorteData},
		overlijdensDatum: {type: GraphQLDate}
		bsn: {type: GraphQLInt},
		adres: {type: adres},
		correspondentie: {type: adres},
		buitenland: {type: buitenland},
		ouder: {type: ouder},
		kind: {type: kind},
		partner: {type partner}
	}
});

const RootQuery = new GraphQLObjectType ({
	name: RootQuery,
	fields: {
		type: PersoonType,
		args: {id: type: GraphQLString}
	}
})

const happenType = new GraphQLObjectType({
  name: 'Happen',
  description: 'Happen type',
  fields: {
    created: {
      type: GraphQLDate,
      description: 'Date something happend'
    }
  }
});
