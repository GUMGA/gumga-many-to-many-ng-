angular.module('app', ['gumga.manytomany'])
  .controller('Ctrl', function ($scope) {
    var ctrl = this
    $scope.searchLeft = function (param) {
      console.info('Filtro:', param)
    }

    $scope.selecionados = [
      { nome: 'Smart TV LED 43" Samsung' }
    ]

    $scope.dados = [
      { nome: 'Notebook Acer Aspire' },
      { nome: 'Motorola Moto X (2a Geração) 32GB' },
      { nome: 'Smart TV LED 43" Samsung' },
      { nome: 'Ar Condicionado Split 7000 BTU/s' }
    ]
  })
