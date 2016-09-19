/**
* Emoji.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // e.g. ":("
    text: {
      type: 'string'
    },

    // every Emoji record belongs to a particular user.
    owner: {
      type: 'string'
      // model: 'User'
    },
    
      // every Emoji belogs to a particular user
	   //owner: {
		// type:'json',
		//  model: "User",
	 //  via: "owner"
	 //}
    

  }
};

