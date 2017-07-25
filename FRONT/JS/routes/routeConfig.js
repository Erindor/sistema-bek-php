/* global app */
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "FRONT/VIEW/listClientes.html"
    })
    .otherwise({
        template:"<h1> Não encontrou nada </h1>"
    });
});