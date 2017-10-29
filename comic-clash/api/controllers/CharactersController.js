/**
 * CharactersController
 *
 * @description :: Server-side logic for managing characters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {
	


  /**
   * `CharactersController.find()`
   */
  find: function (req, res) {
    return res.json({
      todo: 'find() is not implemented yet!'
    });
  },


  /**
   * `CharactersController.compare()`
   */
  compare: function (req, res) {
    return res.json({
      todo: 'compare() is not implemented yet!'
    });
  },


  /**
   * `CharactersController.list()`
   */
  list: function (req, res) {
    dcWikiService.getAllCharacters({}, 
      function(err){
        sails.log('GOT AN ERROR');
       // if (err) { return res.serverError(err); }
      });
    sails.log('HERE');
    return res.json({
      todo: 'list(CHANGED) is not implemented yet!',
      output: 'test' 
    });
  },


  /**
   * `CharactersController.detail()`
   */
  detail: function (req, res) {
    return res.json({
      todo: 'detail() is not implemented yet!'
    });
  }
};

