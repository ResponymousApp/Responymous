'use strict';

angular.module('responymous')
 .controller('StudentCtrl', function(Auth, Firebase, $timeout, $firebase) {

  var self = this;
  var userID, classID;

  Auth.onAuth(function(user){
    userID = user.$id;
    classID = user.current_class;
  });

  this.isDisabled = false;

  this.addVote=function(selection){

    this.isDisabled = true;

    //Get current date
    var currDate = (new Date()).toISOString().slice(0,10).replace(/-/g,"");

    var vote = $firebase(Firebase
      .child('votes')
    ).$asArray();

    vote.$add({
      class_id: classID,
      date: currDate,
      score: selection,
      student_id: userID
    });

    var classUser = $firebase(Firebase
      .child('classUsers').child(classID).child(userID)
    ).$asObject();

    classUser.$loaded().then(function(){
      classUser.current_vote = selection;
      classUser.$save();
    });

    $timeout(function(){
      self.isDisabled=false;
    }, 3000);

  };
})
;
