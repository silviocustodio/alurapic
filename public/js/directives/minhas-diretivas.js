//Atenção! camelCase no Angular ex: meuPainel
//e na tag é modificado por hífen. ex: <meu-painel>

angular.module('minhasDiretivas', [])

.directive('meuPainel', function(){

  var ddo = {};

  //pode ser usado como Atributo ou Elemento
  ddo.restrict = "AE";

  //esse scope é só da diretiva, é um scope isolado
  //@titulo -> eu preciso passar informarção do mundo externo para ela
  //o Atributo titulo é a minha interface de comunicação com a diretiva
  //é como eu passo dado para dentro do scope da direvita
  //@titulo -> é onde eu capituro o valor passado para o atributo, ou elemento
  //Atenção! no lugar de @titulo, eu posso usar somente '@' para capturar
  // o valor, esse valor é passado como string
  ddo.scope = {
    //titulo:  '@titulo'
    titulo: '@'
  };

  //quero que minha diretiva mantém os filhos dela quando o angular for
  //processar no html
  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/meu-painel.html'

  return ddo;
})
.directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;
    })
.directive('meuBotaoPerigo', function() {

  var ddo = {}
  ddo.restrict = "E";
  ddo.scope = {
    nome: '@',
    acao: '&'
  };
  ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'

return ddo;

})

.directive('meuFocus', function() {

  var ddo = {}

  ddo.restrict = "A";


  ddo.link = function(scope, element) {
    scope.$on('fotoCadastrada', function(){
      element[0].focus();


    });

  }

  return ddo;

})