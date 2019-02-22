var app = angular.module("mainApp");

app.service('AppService',function($http){
 /*var users=[{
     id:1000,
     name:"Divya",
     salary:4000
 }]*/
 this.getUsers = function(){
   var promise1= $http.get('http://5c6ed1a64fa1c90014242432.mockapi.io/api/users');

  var promise2 = promise1.then(function(res){
       return res.data;
    })
    return promise2;

 };

 this.postUsers = function(data){
    return $http.post('http://5c6ed1a64fa1c90014242432.mockapi.io/api/users',data)
 };

 this.updateUsers = function(data){
    return $http.put('http://5c6ed1a64fa1c90014242432.mockapi.io/api/users/'+data.id,data)
 };
 
 this.deleteUsers = function(data){
    return $http.delete('http://5c6ed1a64fa1c90014242432.mockapi.io/api/users/'+data)
 }
 
 
});