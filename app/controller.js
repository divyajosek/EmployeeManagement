var app = angular.module("mainApp",[])    ;
app.controller("mainController",function ($scope,AppService){
    //$scope.emplist=[];
    //$scope.emplist=AppService.getUsers();
    function getUsers(){
        var promise = AppService.getUsers();
        promise.then(function(res){
            $scope.emplist = res;
        })
    }
    getUsers();
    $scope.id=0;
    $scope.flag=false;
    $scope.firstBtnText = 'button1';
    $scope.secondBtnText = 'my another button2';
    $scope.happyText = 'I am happy';
    $scope.onFirstBtnCompDone = function(str, title1){
        $scope.happyText = str;
        alert(title1);
    };

    $scope.AddData = function (name,salary){
        var self=this;
        if(!$scope.flag){
            var emp ={
                id:$scope.emplist.length + 1,
                name:name,
                salary:salary
            };
           // $scope.emplist.push(emp);
           var promise1 = AppService.postUsers(emp);
           promise1.then(function(res){
            getUsers();
           })
        }else{
            $scope.emplist.forEach(function(e){
                if(e.id === $scope.id){
                    e.name=name;
                    e.salary=salary;
                    
                    var promise3 = AppService.updateUsers(e);
                    promise3.then(function(res){
                     $scope.msg = "Update Data Successfully!";
                     getUsers();
                    })  
                }
            })
        }
       
        ClearModel();
    };

    $scope.deleteData = function (emp){
     
       // var index=$scope.emplist.indexOf(emp);
       // $scope.emplist.splice(index,1);
 
       var promise2 = AppService.deleteUsers(emp.id);
       promise2.then(function(res){
        getUsers();

       })
    }

    $scope.selectData = function (emp){
        $scope.selectedEmp=emp;
        $scope.id=emp.id;
        $scope.flag=true;
      
    }

   
    function ClearModel(){
        $scope.flag=false;
        $scope.id="";
       $scope.selectedEmp={name:"",salary:""}
    } 
})