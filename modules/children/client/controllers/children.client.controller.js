'use strict';

angular.module('children').controller('ChildrenController', ['$scope', '$stateParams', '$location', 'Authentication', 'Children',
    function ($scope, $stateParams, $location, Authentication, Children) {
      $scope.authentication = Authentication;
      $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };
//		$scope.gender;
      $scope.items = [
        'Boy',
        'Girl'
      ];

      $scope.checkFirstNameIsValid = function(){
        if($scope.firstName.length < 1 || $scope.firstName.length > 25){
          $scope.firstNameIsValid = false;
        }
        else{
          $scope.firstNameIsValid = true;
        }
      };

      $scope.today = function () {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function () {
        $scope.dt = null;
      };

        // Disable weekend selection
      $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
      };

        //$scope.toggleMin = function() {
        //	$scope.minDate = $scope.minDate ? null : new Date();
        //};
        //$scope.toggleMin();

      var current = new Date();
      $scope.maxDate = current;

      $scope.minDate = new Date(current.getYear() - 5, current.getMonth(), current.getDay());

      $scope.open = function ($event) {
        $scope.status.opened = true;
      };

      $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[1];

      $scope.status = {
        opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 2);
      $scope.events =
      [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];

      $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }

        return '';
      };
      $scope.create = function () {
        var child = new Children({
          firstName: this.firstName,
          lastName: this.lastName,
          weight: this.weight,
          height: this.height,
          birthYear: this.birthYear,
          birthMonth: this.birthMonth,
          birthDay: this.birthDay,
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

      $scope.update = function () {
        var child = $scope.child;

        child.$update(function () {
          $location.path('children/' + child._id);
        }, function (errorResponse) {
          $scope.error = errorResponse.data.message;
        });
      };

      $scope.find = function () {
        $scope.children = Children.query();
      };

      $scope.findOne = function () {
        $scope.child = Children.get({
          childId: $stateParams.childId
        });
      };
    }
]);
