(function() {
    'use strict';
    
   angular.module('NameCalculator',[])
   .controller('NameCalculatorController',function ($scope){
       $scope.name="";
       $scope.totalValue = 0;
       $scope.displayNumeric= function(){
           var totalNameValue = calculateNumericForString($scope.name); 
           $scope.totalValue= totalNameValue;
        };
        
        

       function calculateNumericForString(string){
           if (string=="umar"||string=="Umar"||string=="Umar Saeed"||string=="umar saeed"||string=="Umar saeed"||string=="umar Saeed") {
               $scope.trollUmar= "Tauba tauba saara mood kharab krdia, kuch aur type karo";
               
           } else {
            $scope.trollUmar= "";
            var totalStringValue = 0;
            for(var i=0; i<string.length; i++)
            {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
               
           }
          
       }
       
       
       
   });

})();
