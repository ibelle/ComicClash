/** 
DC API Consumer

URI: http://docs.apiaryapib2.apiary.io/#reference

End Points and Entities:

*/

//Seed Data
var char_ids = {}
var team_ids = {}
var comic_ids = {}

var restler = require('restler');

var DCClient = restler.service(
	function(key){
		//Initialize some stuff in this.defaults
		this.defaults.key = key;
	},
	{
		baseURL: 'http://dcdatabase.me',
		all_characters: 'characters.json',
		characters: '/characters/',
		all_teams: 'teams.json',
		teams: '/teams/',
		all_comics: 'comics.json',
		comics: '/comics/',
		all_movies: 'movies.json',
		movies: '/movies/',
		all_shows: 'shows.json',
		shows: '/shows/'
	},
	{
		getItem: function(search_term, search_type, err){
			if (search_term) {
				search_term += '.json'
			}
			var url = this.defaults[search_type] + search_term;
			var results = this.get(url).on('complete', 
				function(data){ 
					console.log(data)
					return data;
			}).on('fail', err).on('timeout', err); 
		}
	}
);

//Initialize DC Client
var client = new DCClient('TestKey');

// api/services/dcService.js
module.exports = {

getCharacterByName: function(options, done){
	client.getItem(options.term, 'characters', done);
},

getAllCharacters: function(options, done){
	client.getItem('', 'all_characters', done);
}

};