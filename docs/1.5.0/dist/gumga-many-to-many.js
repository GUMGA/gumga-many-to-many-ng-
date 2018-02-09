/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
ManyToMany.$inject = ['$q', '$compile', '$timeout', '$uibModal'];

function ManyToMany($q, $compile, $timeout, $uibModal) {

  var template = '\n  <div class="row">\n    <div class="col-md-6 col-xs-6">\n      <div class="navbar">\n        <label ng-hide="ctrl.leftListAux.length > 0">{{ctrl.textLeftEmpty}}</label>\n        <label ng-show="ctrl.leftListAux.length > 0" id="textinfoleft"></label>\n        <div ng-class="leftsearch && ctrl.leftListAux.length == 0 && ctrl.authorizeAdd ? \'input-group\' : \'\'">\n          <input class="form-control gmd input-sm" placeholder="{{ctrl.textLeftPlaceholder}}" ng-change="ctrl.filterLeft(leftsearch)" ng-model="leftsearch"/>\n          <span class="bar"></span>\n          <div ng-click="ctrl.addNew(leftsearch)" ng-show="leftsearch && ctrl.leftListAux.length == 0 && ctrl.authorizeAdd" class="input-group-addon hover">\n            <i class="glyphicon glyphicon-plus"></i>\n          </div>\n        </div>\n      </div>\n      <div class="panel gmd">\n        <div class="panel-heading ">{{ctrl.textHeadingLeft}}</div>\n        <ul class="list-group" style="height: {{ctrl.boxHeight}};max-height:{{ctrl.boxHeight}};overflow: auto;">\n          <li class="list-group-item hover" ng-repeat="$value in ctrl.leftListAux track by $index" ng-click="ctrl.removeOrAdd(ctrl.leftListAux, ctrl.rightList, $value, $index, $event)">\n            <span name="fieldleft"></span>\n          </li>\n        </ul>\n        <div class="panel-footer hover" style="text-align: center;" ng-click="ctrl.moveAllItems(ctrl.leftListAux, ctrl.rightList, \'right\')" ng-disabled="ctrl.leftListAux.length == 0">\n          {{ctrl.textMoveallLeft}}\n          <span class="glyphicon glyphicon-arrow-right"></span>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-6 col-xs-6">\n      <div class="navbar">\n        <label ng-hide="ctrl.rightList.length > 0">{{ctrl.textRightEmpty}}</label>\n        <label ng-show="ctrl.rightList.length > 0" id="textinforight"></label>\n        <input class="form-control input-sm gmd" ng-disabled="!ctrl.rightSearchField" placeholder="{{ctrl.textRightPlaceholder}}" ng-change="ctrl.filterRight(rightsearch)" ng-model="rightsearch"/>\n        <span class="bar"></span>\n      </div>\n      <div class="panel gmd">\n        <div class="panel-heading ">{{ctrl.textHeadingRight}}</div>\n        <ul class="list-group" ng-cloak style="height: {{ctrl.boxHeight}};max-height:{{ctrl.boxHeight}};overflow: auto;">\n          <li class="list-group-item hover" ng-repeat="$value in ctrl.rightAux track by $index" ng-click="ctrl.removeOrAdd(ctrl.rightList, ctrl.leftListAux, $value, $index)">\n            <span name="fieldright">{{$value}}</span>\n          </li>\n        </ul>\n        <div class="panel-footer hover" style="text-align: center;" ng-click="ctrl.moveAllItems(ctrl.rightList, ctrl.leftListAux, \'left\')" ng-disabled="ctrl.rightAux.length == 0">\n          <span class="glyphicon glyphicon-arrow-left"></span> {{ctrl.textMoveallRight}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-xs-12" ng-show="ctrl.hasInvalid">\n      <p class="alert alert-danger">{{ ctrl.validateMessage }}</p>\n    </div>\n  </div>';
  controller.$inject = ['$scope', '$element', '$attrs', '$transclude'];

  function controller($scope, $element, $attrs, $transclude) {
    var ctrl = this;
    ctrl.fields = {};
    if (!$attrs.authorizeAdd) ctrl.authorizeAdd = true;
    ctrl.modalFields = $attrs.modalFields || '';
    ctrl.boxHeight = $attrs.boxHeight || '298px';
    ctrl.textHeadingLeft = $attrs.textHeadingLeft || 'Available';
    ctrl.textHeadingRight = $attrs.textHeadingRight || 'Selected';
    ctrl.textMoveallLeft = $attrs.textMoveallLeft || 'Move all items';
    ctrl.textMoveallRight = $attrs.textMoveallRight || 'Move all items';
    ctrl.textLeftEmpty = $attrs.textLeftEmpty || 'Empty List';
    ctrl.textRightEmpty = $attrs.textRightEmpty || 'Empty List';
    ctrl.textLeftPlaceholder = $attrs.textLeftPlaceholder || 'Filter';
    ctrl.textRightPlaceholder = $attrs.textRightPlaceholder || 'Filter';
    ctrl.validateMessage = $attrs.validateMessage || 'Invalid item';
    ctrl.hasInvalid = false;
    ctrl.textLeft = $attrs.textLeft || 'Showing {{$value}} {{$value > 1 ? \'items\': \'item\'}}';
    ctrl.textRight = $attrs.textRight || 'Showing {{$value}} {{$value > 1 ? \'items\': \'item\'}}';
    ctrl.rightList = ctrl.rightList || [];
    ctrl.rightAux = angular.copy(ctrl.rightList);
    ctrl.leftList = ctrl.leftList || [];
    ctrl.rightSearchField = $attrs.rightSearchField || null;
    var eventHandler = {
      listChange: $attrs.onListChange ? ctrl.onListChange : angular.noop,
      validateItem: $attrs.validateItem ? ctrl.validateItem : function () {
        return true;
      },
      newValueAdded: $attrs.onNewValueAdded ? ctrl.onNewValueAdded : angular.noop,
      valueVisualizationOpened: $attrs.onValueVisualizationOpened ? ctrl.onValueVisualizationOpened : angular.noop,
      valueVisualizationClosed: $attrs.onValueVisualizationClosed ? ctrl.onValueVisualizationClosed : angular.noop
    };

    ctrl.filterLeft = function (q) {
      ctrl.leftSearch({ param: q });
    };

    $scope.$watch('ctrl.leftList', function (data) {
      replaceLabels();
      ctrl.removeDuplicates();
    });

    $scope.$watch('ctrl.rightList', function (data) {
      ctrl.rightAux = angular.copy(ctrl.rightList);
      replaceLabels();
    }, true);

    ctrl.filterRight = function (param) {
      if (ctrl.rightSearchField) ctrl.rightAux = ctrl.rightList.filter(function (obj) {
        return obj[ctrl.rightSearchField].toLowerCase().indexOf(param.toLowerCase()) > -1;
      });
      ctrl.removeDuplicates();
      replaceLabels();
    };

    ctrl.moveAllItems = function (fromList, toList, position) {
      var validList = fromList.filter(function (value) {
        return eventHandler.validateItem({ value: value });
      });
      if (fromList.length > validList.length) ctrl.hasInvalid = true;
      if (position == "left") ctrl.leftList = toList.concat(validList);
      if (position == "right") ctrl.rightList = toList.concat(validList);
      fromList.splice(0, fromList.length);
      ctrl.rightAux = angular.copy(ctrl.rightList);
      if (position == "right") ctrl.filterLeft('');
      ctrl.removeDuplicates();
      replaceLabels();
      $scope.rightsearch = '';
      $scope.leftsearch = '';
    };

    function replaceLabels() {
      var replaceLeft = '<span name="fieldleft"><span >'.concat(ctrl.fields.left).concat('</span><i ng-click="ctrl.openModal($event, $value)" class="pull-right glyphicon glyphicon-exclamation-sign hover-icon-blue"></i></span>');
      var replaceRight = '<span name="fieldright"><span>'.concat(ctrl.fields.right).concat('</span><i ng-click="ctrl.openModal($event, $value)" class="pull-right glyphicon glyphicon-exclamation-sign hover-icon-blue"></i></span>');
      $timeout(function () {
        [].slice.call(document.getElementsByName('fieldleft')).forEach(function (label, index) {
          angular.element(label).replaceWith($compile(replaceLeft)(angular.element(label).scope()));
        });
        [].slice.call(document.getElementsByName('fieldright')).forEach(function (div, index) {
          angular.element(div).replaceWith($compile(replaceRight)(angular.element(div).scope()));
        });
      });
    }

    function hasKeyInModalFields(key) {
      return ctrl.modalFields.replace(/\s/g, '').split(',').filter(function (obj) {
        return obj == key;
      }).length > 0;
    }

    ctrl.openModal = function (event, obj) {
      event.stopImmediatePropagation();
      ctrl.template = '<div class="modal-body">\n';
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && key != '$$hashKey' && key != 'oi' && key != 'version') {
          if (hasKeyInModalFields(key) || !ctrl.modalFields) {
            ctrl.template += '  <div class="form-group">\n';
            ctrl.template += '    <label><small>' + key + '</small></label>\n';
            ctrl.template += '    <input type="text" ng-model="$value.' + key + '" disabled class="form-control"/>\n';
            ctrl.template += '  </div>\n';
          }
        }
      }ctrl.template += '   <div class="modal-footer">\n';
      ctrl.template += '       <button type="button" class="btn btn-warning" ng-click="back()">Back</button>\n';
      ctrl.template += '   </div>\n';
      ctrl.template += '</div>\n';

      eventHandler.valueVisualizationOpened();
      var mi = $uibModal.open({
        template: ctrl.template,
        size: 'sm',
        controller: ['$scope', '$value', '$uibModalInstance', function ($scope, $value, $uibModalInstance) {
          $scope.$value = $value;
          $scope.back = function () {
            $uibModalInstance.close();
          };
        }],
        resolve: {
          $value: function $value() {
            return obj;
          }
        }
      });

      mi.result.then(function () {
        eventHandler.valueVisualizationClosed();
      });
    };
    ctrl.removeOrAdd = function (removeFrom, addTo, value, index, event) {
      if (eventHandler.validateItem({ value: value })) {
        removeFrom.splice(index, 1);
        addTo.push(value);
        replaceLabels();
        ctrl.removeDuplicates();
        ctrl.rightAux = angular.copy(ctrl.rightList);
        $scope.rightsearch = '';
        eventHandler.listChange({ value: value });
      } else {
        event.target.classList.toggle('invalid');
        setTimeout(function () {
          event.target.classList.toggle('invalid');
        }, 1000);
        ctrl.hasInvalid = true;
      }
    };

    ctrl.addNew = function (value) {
      $scope.leftsearch = '';
      ctrl.postMethod({ value: value });
      ctrl.filterLeft('');
      eventHandler.newValueAdded();
    };

    function checkErrors() {
      var errorTexts = [];
      if (!ctrl.fields.left || !ctrl.fields.right) {
        errorTexts.push('You have\'nt provided the content to GumgaManyToMany directive.');
      }
      if (!$attrs.leftSearch) errorTexts.push('You need to enter the parameter left-search.');
      if (!$attrs.rightList) errorTexts.push('You need to enter the parameter right-list.');
      errorTexts.forEach(function (txt) {
        console.error(txt);
      });
    }

    var hasObjectInRight = function hasObjectInRight(obj) {
      return ctrl.rightList.filter(function (rightObject) {
        return ctrl.equals ? ctrl.equals({ left: obj, right: rightObject }) : angular.equals(obj, rightObject);
      }).length > 0;
    };

    ctrl.removeDuplicates = function () {
      ctrl.leftListAux = ctrl.leftList.filter(function (obj) {
        return !hasObjectInRight(obj);
      });
    };

    $transclude($scope, function (cloneEl) {
      angular.forEach(cloneEl, function (cl) {
        var element = angular.element(cl)[0];
        switch (element.nodeName) {
          case 'LEFT-FIELD':
            ctrl.fields.left = element.innerHTML;
            break;
          case 'RIGHT-FIELD':
            ctrl.fields.right = element.innerHTML;
            break;
        }
      });
    });

    function escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    function replaceAll(str, find, replace) {
      return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }

    $timeout(function () {
      var elementLeft = angular.element(document.getElementById('textinfoleft'));
      elementLeft.replaceWith($compile('<label ng-show="ctrl.leftListAux.length > 0">' + replaceAll(ctrl.textLeft, '$value', 'ctrl.leftListAux.length') + '</label>')(elementLeft.scope()));
      var elementRight = angular.element(document.getElementById('textinforight'));
      elementRight.replaceWith($compile('<label ng-show="ctrl.rightList.length > 0">' + replaceAll(ctrl.textRight, '$value', 'ctrl.rightAux.length') + '</label>')(elementRight.scope()));
    });

    checkErrors();
    replaceLabels();
    ctrl.filterLeft('');
  }

  return {
    restrict: 'E',
    scope: {
      rightList: '=rightList',
      leftList: '=leftList',
      leftSearch: '&leftSearch',
      rightSearch: '&rightSearch',
      postMethod: '&',
      validateItem: '&?',
      onListChange: '&?',
      onNewValueAdded: '&?',
      onValueVisualizationOpened: '&?',
      onValueVisualizationClosed: '&?',
      authorizeAdd: '=?',
      equals: '&?'
    },
    bindToController: true,
    transclude: true,
    controllerAs: 'ctrl',
    controller: controller,
    template: template
  };
}

var _module = angular.module('gumga.manytomany', ['ui.bootstrap']).directive('gumgaManyToMany', ManyToMany);

exports.default = _module.name;

/***/ })
/******/ ]);