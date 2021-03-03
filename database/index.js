'use strict';

// spanner_group
const t_spanner = {
	key: 'spanner',
	name: 'Spanner',
	type: 'service',
	alias: ['sp', 'db'],
};
const spanner_group = {
	tags: [
		t_spanner,
	],
	infers: [

	],
	intentions: [
		{
			action: 'url',
			tags: [
				t_spanner
			]
		}
	]
}

const groups = [
	spanner_group
]

const database = {
	tags: [
		...[].concat(...groups.map(({tags}) => tags)),
		{
			key: 'stackdriver',
			name: 'Stackdriver',
			type: 'service',
			alias: ['logging'],
		},
		{
			key: 'reviews',
			name: 'Reviews',
			type: 'product',
			alias: ['rv'],
		},
	],
	infers: [
		
	],
	intentions: [
		...[].concat(...groups.map(({intentions}) => intentions)),
	]
};

module.exports = database;