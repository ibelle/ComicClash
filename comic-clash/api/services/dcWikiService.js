/** 
DC Fan Wiki API Consumer

URI: http://dc.wikia.com/api/v1


End Points and Entities:

*/


//Seed Data
var char_ids = {}
var team_ids = {}
var comic_ids = {}

var restler = require('restler');

var DCWikiClient = restler.service(
	function(key){
		//Initialize some stuff in this.defaults
		this.defaults.key = key;
	},
	{
		baseURL: 'http://dc.wikia.com/api/v1',
		all_characters: '/Articles/List?category=Characters',
		characters: '/Articles/AsSimpleJson?id=',
		all_teams: '/Articles/List?category=Teams',
		teams: '/Articles/AsSimpleJson?id=',
		all_comics: '/Articles/List?category=Comics',
		comics: '/Articles/AsSimpleJson?id=',
		all_movies: '/Articles/List?category=Movies',
		movies: '/Articles/AsSimpleJson?id=',
		all_events: '/Articles/List?category=Events',
		shows: '/Articles/AsSimpleJson?id='
	},
	{
		getItem: function(search_term, search_type, err){

			var url = this.defaults[search_type] + search_term + '&limit=25';
			sails.log(url);
			this.get(url).on('complete', 
				function(data){
					sails.log('GOT DATA')
					//sails.log(data);
			}).on('fail', err).on('timeout', err); 
		}
	}
);

//Initialize DC Client
var client = new DCWikiClient('TestKey');

// api/services/dcService.js
module.exports = {

getCharacterByName: function(options, done){
	client.getItem(options.term, 'characters', done);
},

getAllCharacters: function(options, done){
	client.getItem('', 'all_characters', done);
}

};