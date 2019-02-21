var app = angular.module("mainApp");
app.component('addEmployee',{
    templateUrl:'app/components/addEmployee/addEmployee.template.html',
    controller:function(){
        var self=this;
       /* this.onSubmit=function(){
            self.onAdd({
                name:self.name,
                salary:self.salary
            });
        }*/
        //life cycle method
        self.$onChanges=function (){
            if(self.selectedEmp){
                self.name=self.selectedEmp.name;
                self.salary=self.selectedEmp.salary;
            }
            
        }
    },
    bindings:{
        onAdd:'&',
        selectedEmp:'<'
    }
});