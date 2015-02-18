var entries = [
 {"id" : 1, "title": "Hello worls" , "body" : "This is the body.", "published" : "6/2/2013"},
 {"id":2, "title":"Eggs for Breakfast", "body":"Today I had eggs for breakfast. Sooo exciting.", "published":"6/3/2013"},
 {"id":3, "title":"Beer is Good", "body":"News Flash! Beer is awesome!", "published":"6/4/2013"},
 {"id":4, "title":"Mean People Suck", "body":"People who are mean aren't nice or fun to hang around.", "published":"6/5/2013"},
 {"id":5, "title":"Help My Kickstarter", "body":"I want a new XBox One. Please fund my Kickstarter.", "published":"6/12/2013"}];


exports.getBlogEntries = function() {
	return entries;
}

exports.getBlogEntry = function(id) {
	for(var i=0; i < entries.length; i++) {
		if(entries[i].id == id) return entries[i];
	}
}
