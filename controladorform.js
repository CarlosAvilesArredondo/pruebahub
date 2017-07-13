angular
.module("mymodulo",[]) //nombre del modulo 
.controller("formularioCtrl",["$scope",formularioCtrl]);

function formularioCtrl($scope){
$scope.guardar = function(){
alert("Guardando")
}
$scope.editar=function(){
    alert("Editando...");
}
}