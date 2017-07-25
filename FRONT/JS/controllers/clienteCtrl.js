/* global app*/

app.controller("ClienteController", function($scope, clienteService){
    $scope.clientes = [{"name":"John", "age":31, "city":"New York"}, {"name":"fefe", "age":4, "city":"New fefe"},
        {"name" : clienteService.teste}];
    
    
});