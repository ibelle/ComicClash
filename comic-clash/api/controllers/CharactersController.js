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
    dcWikiService.getAllCharacters({}, function(result){
      return res.json({
            todo: 'ALL Characters',
            results: result
          });
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

