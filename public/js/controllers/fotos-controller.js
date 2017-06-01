angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){

	$scope.fotos = [];
	$scope.filtro= '';
	$scope.mensagem = '';


	recursoFoto.query(function(fotos) {
	$scope.fotos = fotos;
},  function(erro) {
	console.log(erro);
	});

	// $http.get('v1/fotos') // precisso da promisse pois http vai tentar pegar as fotos do servidor, 
 //    .success(function(fotos) {
 //    	$scope.fotos=fotos;
	// })
	// .error(function(erro){
	// 	console.log(erro);
	// });

	$scope.remover = function(foto) {


		//remove a foto
		recursoFoto.delete({fotoId :foto._id}, function() {

			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';


		}, function(erro) {

			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;

		});

	};

	/*
	var promise = $http.get('v1/fotos'); // precisso da promisse pois http vai tentar pegar as fotos do servidor, 
    promise.then(function(retorno) { //se conseguir ele cria uma função retorno
		$scope.fotos = retorno.data;// e retorna os dados
	}).catch(function(error) {
		console.log(error);
	});
	*/
	
}); 

//
//não uso o [] porque não quero criar um novo módulo, apenas usar um existente, e do alurapic existente criar um controller!
// controller ('1º o nome do controller, por convenção a primeira letra em maiúscula seguindo a segunda também', function (2º a função que define esse controller))

//TODA A VARIAVEL DECLARADA DENTRO DE UMA FUNÇÃO É PRIVADA!!!!, SENDO ASSIM ELA NÃO É VISÍVEL FORA DO ESCOPO DENTRO DESSA FUNÇÃO
//POR ISSO DENTRO DE function(eu passo --> $scope), e troco var por $scope para anexar essa foto dento do escopo body no nosso exemplo
