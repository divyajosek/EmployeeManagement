var app = angular.module("mainApp");
app.component('addEmployee',{
    templateUrl:'app/components/addEmployee/addEmployee.template.html',
    controller:function(){
        var self=this;
        this.onSubmit=function(){
            self.onAdd({
                name:self.name,
                salary:self.salary
            });
        }
    },
    bindings:{
        onAdd:'&'
    }
});