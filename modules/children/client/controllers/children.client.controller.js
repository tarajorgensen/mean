'use strict';

// Children controller
angular.module('children').controller('ChildrenController', ['$scope', '$stateParams', '$location', 'Authentication', 'Children', 'ZScores',
    function ($scope, $stateParams, $location, Authentication, Children, ZScores) {
        $scope.authentication = Authentication;
        $scope.ageIsValid = false;
        //$scope.childHeightIsValid = false;
        //$scope.childWeightIsValid = false;
        $scope.firstNameIsValid = true;
        $scope.lastNameIsValid = true;
        $scope.genderIsValid = true;
        $scope.heightIsValid = true;
        $scope.weightIsValid = true;
        $scope.motherIsValid = true;
        $scope.fatherIsValid = true;
        $scope.streetAddressIsValid = true;
        $scope.cityIsValid = true;
        $scope.stakeIsValid = true;
        $scope.wardIsValid = true;

        $scope.checkAllFieldsValid = function () {
            $scope.checkFirstNameIsValid();
            $scope.checkLastNameIsValid();
            $scope.checkGenderIsValid();
            $scope.checkHeightIsValid();
            $scope.checkWeightIsValid();
            $scope.checkMotherIsValid();
            $scope.checkFatherIsValid();
            $scope.checkStreetAddressIsValid();
            $scope.checkCityIsValid();
            $scope.checkStakeIsValid();
            $scope.checkWardIsValid();


            if ($scope.firstNameIsValid === true && $scope.lastNameIsValid === true && $scope.genderIsValid === true) {
                $scope.allFieldsValid = true;
            }
            else {
                $scope.allFieldsValid = false;
            }
        };
        $scope.calculateZScore = function (child) {
            $scope.zScore = new ZScores(child);
        };

        $scope.zScoreGetter = ZScores.getMethod;

        $scope.setMonthCount = function () {
            var months;
            var birthDay = $scope.birthDate.getDate();
            var birthYear = $scope.birthDate.getFullYear();
            var birthMonth = $scope.birthDate.getMonth();
            var rightNow = new Date();
            var y1 = ((rightNow.getFullYear() - 2001) * 365) + (rightNow.getMonth() * 30.5) + rightNow.getDay();
            var y2 = (birthYear - 2001) * 365 + ((birthMonth - 1) * 30.5) + birthDay;
            $scope.monthAge = (y1 - y2) / 30.5;
            if ($scope.monthAge > 60) {
                $scope.ageIsValid = false;
            }
            else {
                $scope.ageIsValid = true;
                if ($scope.heightIsValid && $scope.weightIsValid) {
                    $scope.zScore = $scope.zScoreGetter($scope.gender, $scope.monthAge, $scope.height, $scope.weight);
                }
            }
        };

        $scope.checkHeightIsValid = function () {
            if ($scope.height) {
                if ($scope.height > 110 || $scope.height < 45) {
                    $scope.heightIsValid = false;
                }
                else {
                    $scope.heightIsValid = true;
                    if ($scope.ageIsValid && $scope.weightIsValid) {
                        $scope.zScore = $scope.zScoreGetter($scope.gender, $scope.monthAge, $scope.height, $scope.weight);
                    }
                }
            }
            else {
                $scope.heightIsValid = false;
            }
        };

        $scope.checkWeightIsValid = function () {
            if ($scope.weight) {
                if ($scope.weight > 18 || $scope.weight < 3) {
                    $scope.weightIsValid = false;
                }
                else {
                    $scope.weightIsValid = true;
                    if ($scope.ageIsValid && $scope.heightIsValid) {
                        $scope.zScore = $scope.zScoreGetter($scope.gender, $scope.monthAge, $scope.height, $scope.weight);
                    }
                }
            }
            else {
                $scope.weightIsValid = false;
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

        $scope.checkStreetAddressIsValid = function () {
            if ($scope.streetAddress) {
                if ($scope.streetAddress.length < 1 || $scope.streetAddress.length > 25) {
                    $scope.streetAddressIsValid = false;
                }
                else {
                    $scope.streetAddressIsValid = true;
                }
            }
            else {
                $scope.streetAddressIsValid = false;
            }
        };
        $scope.checkCityIsValid = function () {
            if ($scope.city) {
                if ($scope.city.length < 1 || $scope.city.length > 25) {
                    $scope.cityIsValid = false;
                }
                else {
                    $scope.cityIsValid = true;
                }
            }
            else {
                $scope.cityIsValid = false;
            }
        };
        $scope.checkStakeIsValid = function () {
            if ($scope.stake) {
                if ($scope.stake.length < 1 || $scope.stake.length > 25) {
                    $scope.stakeIsValid = false;
                }
                else {
                    $scope.stakeIsValid = true;
                }
            }
            else {
                $scope.stakeIsValid = false;
            }
        };
        $scope.checkWardIsValid = function () {
            if ($scope.ward) {
                if ($scope.ward.length < 1 || $scope.ward.length > 25) {
                    $scope.wardIsValid = false;
                }
                else {
                    $scope.wardIsValid = true;
                }
            }
            else {
                $scope.wardIsValid = false;
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
            return child.firstName + ' ' + child.lastName + ' Birth Date: ' + child.birthDate;
        };

        // Create new Child
        $scope.create = function (isValid) {
            $scope.error = null;

            if (!isValid) {
                $scope.$broadcast('show-errors-check-validity', 'childForm');

                return false;
            }
            var birthDay = this.birthDate.getDate();
            var birthYear = this.birthDate.getFullYear();
            var birthMonth = this.birthDate.getMonth();

            var rightNow = new Date();
            var y1 = ((rightNow.getFullYear() - 2001) * 365) + (rightNow.getMonth() * 30.5) + rightNow.getDay();
            var y2 = (birthYear - 2001) * 365 + ((birthMonth - 1) * 30.5) + birthDay;
            var ageInMonths = (y1 - y2) / 30.5;
            $scope.zScore = $scope.zScoreGetter(this.gender, ageInMonths, this.height, this.weight);

            var child = new Children({
                monthAge: ageInMonths,
                birthDate: this.birthDate,
                firstName: this.firstName,
                lastName: this.lastName,
                weight: this.weight,
                height: this.height,
                comments: this.comments,
                father: this.father,
                mother: this.mother
                //       branch: this.branch
            });

            //     PouchDB.createNewDB('SomeNewDB');
            child.$save(function (response) {
                $location.path('children/' + response._id);
                //       $scope.birthDate = Date.now;
                $scope.monthAge = 0;
                $scope.weight = '';
                $scope.height = '';
                $scope.firstName = '';
                $scope.lastName = '';
                $scope.comments = '';
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
