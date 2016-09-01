// angular.module('userProfiles').service('mainService', function($http, $q) {
//
//   this.getUsers = function() {
//     var deferred = $q.defer();
//     return $http({
//         method: 'GET',
//         url: 'http://reqres.in/api/users?page=1'
//     })
//     .then(function(response) {
//       var parsedResponse = response.data.data;
//       deferred.resolve(parsedResponse);
//     })
//     return deferred.promise;
//   }
//
// });

//Changing every user's name to Ralf
angular.module('userProfiles').service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }) //function returns a promise
    .then(function(response) {
      var parsedResponse = response.data.data //response is what we are receiving back from the getUsers function, two layers of data
      for(var i = 0; i < parsedResponse.length; i++) { //turns data into an array and takes the length of it. loops through
        parsedResponse[i].first_name = 'Ralf' //takes each object's first name and changes it to Ralf
      }
      deferred.resolve(parsedResponse) //resolves the promise with the variable parsedResponse
    })
    return deferred.promise; //returns the promise
  }
});
