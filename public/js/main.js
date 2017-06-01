angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'meusServicos'])//criar módulo principal colocar []
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);//tira o # e trabalha com módulo html5, mas back-end tem que estar preparado para isso!

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
			
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
			
		});

		$routeProvider.otherwise({ redirectTo: '/fotos'});//redirecionar pagina automaticamente
			
});
