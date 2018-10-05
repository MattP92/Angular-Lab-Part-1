"use strict";
{
    angular.module('app')
        .controller('familyMembers', function(){
            let $ctrl = this;
            $ctrl.familyMembers =[
                {
            name:"Joe",
            relation: "brother",
            age: 23
                },
                
                {
            name:"Bertha",
            relation: "mother",
            age: 50
                },

                {
            name:"Fred",
            relation: "dad",
            age: 50
                }];
});
};