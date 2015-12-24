'use strict';

// Children controller
angular.module('children').controller('ChildrenController', ['$scope', '$stateParams', '$location', 'Authentication', 'Children',
  function ($scope, $stateParams, $location, Authentication, Children) {
    $scope.authentication = Authentication;

    $scope.today = function () {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.maxDate = new Date();
    var year = $scope.maxDate.getFullYear();
    var month = $scope.maxDate.getMonth();
    var day = $scope.maxDate.getDate();
    $scope.minStartDate = new Date(year-5,month,day);


    // Create new Child
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'childForm');

        return false;
      }

      $scope.birthDay = this.dt.getDate();
      $scope.birthYear = this.dt.getFullYear();
      $scope.birthMonth = this.dt.getMonth();

      var yearIn = $scope.dt.getFullYear();
      var monthIn = $scope.dt.getMonth();
      var dateIn = $scope.dt.getDate();
      var child = new Children({
        firstName: this.firstName,
        lastName: this.lastName,
        weight: this.weight,
        height: this.height,
        birthYear: this.birthDay,
        birthMonth: this.birthMonth,
        birthDay: this.birthYear,
        content: this.comment,
        father: this.father,
        mother: this.mother,
        branch: this.branch
      });

      child.$save(function (response) {
        $location.path('children/' + response._id);
        $scope.weight = '';
        $scope.height = '';
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.content = '';
        $scope.birthYear = '';
        $scope.birthMonth = '';
        $scope.birthDay = '';
        $scope.father = '';
        $scope.mother = '';
        $scope.branch = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Child
    $scope.remove = function (child) {
      if (child) {
        child.$remove();

        for (var i in $scope.children) {
          if ($scope.children[i] === child) {
            $scope.children.splice(i, 1);
          }
        }
      } else {
        $scope.child.$remove(function () {
          $location.path('children');
        });
      }
    };

    // Update existing Child
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'childForm');

        return false;
      }

      var child = $scope.child;

      child.$update(function () {
        $location.path('children/' + child._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Children
    $scope.find = function () {
      $scope.children = Children.query();
    };

    // Find existing Child
    $scope.findOne = function () {
      $scope.child = Children.get({
        childId: $stateParams.childId
      });
    };
  }
]);
