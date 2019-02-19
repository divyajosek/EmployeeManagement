var app = angular.module("mainApp");
app.component('myBtn',{
    templateUrl:'app/components/myButton/myButton.template.html',
    bindings: {
        txt: '@',
        onDoneClick: '&'
    },
    controller: function(){
        var self = this;
        self.count = 0;
        self.onBtnClick = function(){
            self.count++;
        };
    }
});