var app = angular.module("mainApp",[])    ;
app.controller("mainController",function ($scope){
    $scope.emplist=[];
    $scope.id=0;
    $scope.AddData = function (name,salary){
        var emp ={
            id:$scope.emplist.length + 1,
            name:name,
            salary:salary

        };
        $scope.emplist.push(emp);
        $scope.id=emp.id;
        ClearModel();
    };

    $scope.deleteData = function (emp){
        var index=$scope.emplist.indexOf(emp);
        $scope.emplist.splice(index,1);
    }

    $scope.selectData = function (emp){
        $scope.id=emp.id;
        //$scope.name=emp.name;
        //$scope.salary=emp.salary;
        name=emp.name,
        salary=emp.salary
    }

    $scope.EditData = function (emp){
        if(emp.id == $scope.id){
            emp.name=$scope.name;
            emp.salary=$scope.salary;
        }
       
    }

    function ClearModel(){
       // $scope.id=0;
        $scope.name='';
        $scope.salary='';
    }
})