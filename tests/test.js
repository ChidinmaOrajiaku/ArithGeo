const assert = require('chai').assert
const myApp = require('../src/main.js');


describe("Determine number progression",function(){
   
   describe("Case of empty array",function(){
      it("should return 0 for an empty array",function(){
          assert.equal(myApp.aritGeo([]),0);
      });
   }); 

   describe("Case of arithmetic progression",function(){

      it("should return Arithmetic for [5,10,15,20]",function(){
         assert.equal(myApp.aritGeo([5,10,15,20]),"Arithmetic");
      });

      it("should return Arithmetic for [3,6,9,12,15,18,21,24]",function(){
         assert.equal(myApp.aritGeo([3,6,9,12,15,18,21,24]),"Arithmetic");
      });

      it("should return Arithmetic for [8,6,4,2,0,-2,-4,-6]",function(){
         assert.equal(myApp.aritGeo([8,6,4,2,0,-2,-4,-6]),"Arithmetic");
      });

   });
   describe("Case of geometric progression",function(){
      
       it("should return Geometric for [2,4,8,16,32,64]",function(){
           assert.equal(myApp.aritGeo([2,4,8,16,32,64]),"Geometric")
       });
       
       it("should return Geometric for [-5,-10,-20,-40,-80,-160]",function(){
           assert.equal(myApp.aritGeo([-5,10,-20,40,-80,160]),"Geometric")
       });

       it("should return Geometric for [0.5,0.25,0.125,0.0625,0.03125]",function(){
           assert.equal(myApp.aritGeo([0.5,0.25,0.125,0.0625,0.03125]),"Geometric")
       });
   });

   describe ("Case of neither arithmetic nor geometric progression",function(){
       
       it("should return -1 for [2,4,16,25,34,98]",function(){
            assert.equal(myApp.aritGeo([2,4,16,25,34,98]),"-1")
       });
       
       it("should return -1 for [-2,-10,-19,4,5,17]",function(){
            assert.equal(myApp.aritGeo([-2,-10,-19,4,5,17]),"-1")
       });

       it("should return -1 for [1,2,3,5,8,13]",function(){
            assert.equal(myApp.aritGeo([1,2,3,5,8,13]),"-1")
       });
   });

});