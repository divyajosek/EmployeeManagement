var app = angular.module("mainApp");
app.component('employeeList',{
    templateUrl:'app/components/employeeList/employeeList.template.html',
    controller:function(){
        var self=this;
        /* this.deleteEmp=function(){
            self.onDelete({
                emp:self.emp
            });
        }; */
        /*this.selectEmp=function(){
            self.onSelect({
                emp:self.emp
            });
        };*/
    }, 
    bindings:{
        list:'<',
        onDelete:'&',
        onSelect:'&'
    }
});