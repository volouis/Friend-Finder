var friendList = require("../data/friend.js");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friendList);
    });

    app.post("/api/friends", function(req, res){
        
        var index = 0;
        var total = 40;
        for(i in friendList){
            var diff = 0;
            for(var j = 0; j < 10; j++){
                diff += Math.abs( parseInt(friendList[i].scores[j]) - parseInt(req.body.scores[j]))
            }

            if(diff < total){
                index = i;
                total = diff;
            }
        }
        friendList.push(req.body);
        res.json(friendList[index])
    })
  
};