'use strict';

const FuzzNavi = require('./src/core');
const database = require('./database');

const nav = new FuzzNavi();

nav.loadDatabase(database);

const input = 'spann rv tabel=prodcut-ratings';

const keywords = input.split(' ').map(query => {
	const result = nav.processTag({query});
	console.log(result);
	return result;
}).filter(Boolean);

const tags = keywords.filter(keyword => {
	console.log("keyword");
	console.log(keyword);

	return true;
});

const intention_candidates = nav.searchIntetion({
	tags: tags,
	params: []
});

console.log(intention_candidates[0]);