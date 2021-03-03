'use strict';

const Fuse = require('fuse.js');

const default_tags_fuse_options = {
	keys: ['alias', 'key']
};
const default_intentions_fuse_options = {
	keys: ['tags']
};

class FuzzNavi {
	constructor({
		database,
		tags_fuse_options,
		intentions_fuse_options
	} = {
		tags_fuse_options: default_tags_fuse_options,
		intentions_fuse_options: default_intentions_fuse_options,
	}) {
		this.tags_fuse = null;
		this.intentions_fuse = null;
		this.tags_fuse_options = tags_fuse_options;
		this.intentions_fuse_options = intentions_fuse_options;

		if(database) {
			this.loadDatabase(database);
		}
	}

	loadDatabase(database) {
		this.database = {
			tags: database.tags,
			intentions: database.intentions.map(
				intention => ({
					...intention,
					tags: intention.tags.map(({key}) => key).join(' ')
				})
			)
		};
		// Check tags alias unique
		this._buildFuse();
	}

	_buildFuse() {
		const {
			tags,
			intentions
		} = this.database;

		this.tags_fuse = new Fuse(tags, this.tags_fuse_options);
		this.intentions_fuse = new Fuse(intentions, this.intentions_fuse_options);
	}

	searchTag({query}) {
		console.log(query);
		const results = this.tags_fuse.search(query);
		console.log(results);

		return results.map(({item}) => item);
	}
	processTag({query}) {
		const tag_candidates = this.searchTag({query});
		console.log(tag_candidates);



		return keywords;
	}

	searchIntetion({tags, params} = {}) {
		const query = tags.map(({key}) => key).join(' ');
		console.log(query);
		const results = this.intentions_fuse.search(query);
		console.log(results);

		return results.map(({item}) => item);
	}

}

module.exports = FuzzNavi;