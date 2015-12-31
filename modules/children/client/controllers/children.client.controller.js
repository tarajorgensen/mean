'use strict';

// Children controller
angular.module('children').controller('ChildrenController', ['$scope', '$stateParams', '$location', 'Authentication', 'Children',
    function ($scope, $stateParams, $location, Authentication, Children) {
        $scope.authentication = Authentication;
        $scope.firstNameIsValid = true;
        $scope.lastNameIsValid = true;
        $scope.genderIsValid = true;
        $scope.heightIsValid = true;
        $scope.weightIsValid = true;
        $scope.motherIsValid = true;
        $scope.fatherIsValid = true;

        $scope.checkAllFieldsValid = function () {
            $scope.checkFirstNameIsValid();
            $scope.checkLastNameIsValid();
            $scope.checkGenderIsValid();
            //       $scope.checkHeightIsValid();
            //      $scope.checkWeightIsValid();
            $scope.checkMotherIsValid();
            $scope.checkFatherIsValid();


            if ($scope.firstNameIsValid === true && $scope.lastNameIsValid === true && $scope.genderIsValid === true) {
                $scope.allFieldsValid = true;
            }
            else {
                $scope.allFieldsValid = false;
            }
        };


        $scope.checkFirstNameIsValid = function () {
            if ($scope.firstName) {
                if ($scope.firstName.length < 1 || $scope.firstName.length > 25) {
                    $scope.firstNameIsValid = false;
                }
                else {
                    $scope.firstNameIsValid = true;
                }
            }
            else {
                $scope.firstNameIsValid = false;
            }
        };
        $scope.checkLastNameIsValid = function () {
            if ($scope.lastName) {
                if ($scope.lastName.length < 1 || $scope.lastName.length > 25) {
                    $scope.lastNameIsValid = false;
                }
                else {
                    $scope.lastNameIsValid = true;
                }
            }
            else {
                $scope.lastNameIsValid = false;
            }
        };
        $scope.checkGenderIsValid = function () {
            if ($scope.gender) {
                $scope.genderIsValid = true;
            }
            else {
                $scope.genderIsValid = false;
            }
        };
        $scope.checkMotherIsValid = function () {
            if ($scope.mother) {
                if ($scope.mother.length < 1 || $scope.mother.length > 25) {
                    $scope.motherIsValid = false;
                }
                else {
                    $scope.motherIsValid = true;
                }
            }
            else {
                $scope.motherIsValid = false;
            }
        };
        $scope.checkFatherIsValid = function () {
            if ($scope.father) {
                if ($scope.father.length < 1 || $scope.father.length > 25) {
                    $scope.fatherIsValid = false;
                }
                else {
                    $scope.fatherIsValid = true;
                }
            }
            else {
                $scope.fatherIsValid = false;
            }
        };

        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.maxDate = new Date();
        var year = $scope.maxDate.getFullYear();
        var month = $scope.maxDate.getMonth();
        var day = $scope.maxDate.getDate();
        $scope.minStartDate = new Date(year - 5, month, day);

        $scope.childInfoString = function (child) {
            return child.firstName + ' ' + child.lastName +
                ' Birth Date: ' + child.birthMonth + '/' + child.birthDay + '/' + child.birthYear;
        };

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

            var child = new Children({
                firstName: this.firstName,
                lastName: this.lastName,
                weight: this.weight,
                height: this.height,
                birthYear: this.birthDay,
                birthMonth: this.birthMonth,
                birthDay: this.birthYear,
                comments: this.comments,
                father: this.father,
                mother: this.mother
                //       branch: this.branch
            });

            child.$save(function (response) {
                $location.path('children/' + response._id);
                $scope.weight = '';
                $scope.height = '';
                $scope.firstName = '';
                $scope.lastName = '';
                $scope.comments = '';
                $scope.birthYear = '';
                $scope.birthMonth = '';
                $scope.birthDay = '';
                $scope.father = '';
                $scope.mother = '';
                //     $scope.branch = '';
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
