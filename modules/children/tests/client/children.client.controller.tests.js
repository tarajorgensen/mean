'use strict';

(function () {
  // Children Controller Spec
  describe('Children Controller Tests', function () {
    // Initialize global variables
    var ChildrenController,
      scope,
      $httpBackend,
      $stateParams,
      $location,
      Authentication,
      Children,
      mockChild;

    // The $resource service augments the response object with methods for updating and deleting the resource.
    // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
    // the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
    // When the toEqualData matcher compares two objects, it takes only object properties into
    // account and ignores methods.
    beforeEach(function () {
      jasmine.addMatchers({
        toEqualData: function (util, customEqualityTesters) {
          return {
            compare: function (actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
    });

    // Then we can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_, _Authentication_, _Children_) {
      // Set a new global scope
      scope = $rootScope.$new();

      // Point global variables to injected services
      $stateParams = _$stateParams_;
      $httpBackend = _$httpBackend_;
      $location = _$location_;
      Authentication = _Authentication_;
      Children = _Children_;

      // create mock child
      mockChild = new Children({
        _id: '525a8422f6d0f87f0e407a33',
        title: 'An Child about MEAN',
        content: 'MEAN rocks!'
      });

      // Mock logged in user
      Authentication.user = {
        roles: ['user']
      };

      // Initialize the Children controller.
      ChildrenController = $controller('ChildrenController', {
        $scope: scope
      });
    }));

    it('$scope.find() should create an array with at least one child object fetched from XHR', inject(function (Children) {
      // Create a sample children array that includes the new child
      var sampleChildren = [mockChild];

      // Set GET response
      $httpBackend.expectGET('api/children').respond(sampleChildren);

      // Run controller functionality
      scope.find();
      $httpBackend.flush();

      // Test scope value
      expect(scope.children).toEqualData(sampleChildren);
    }));

    it('$scope.findOne() should create an array with one child object fetched from XHR using a childId URL parameter', inject(function (Children) {
      // Set the URL parameter
      $stateParams.childId = mockChild._id;

      // Set GET response
      $httpBackend.expectGET(/api\/children\/([0-9a-fA-F]{24})$/).respond(mockChild);

      // Run controller functionality
      scope.findOne();
      $httpBackend.flush();

      // Test scope value
      expect(scope.child).toEqualData(mockChild);
    }));

    describe('$scope.create()', function () {
      var sampleChildPostData;

      beforeEach(function () {
        // Create a sample child object
        sampleChildPostData = new Children({
          title: 'An Child about MEAN',
          content: 'MEAN rocks!'
        });

        // Fixture mock form input values
        scope.title = 'An Child about MEAN';
        scope.content = 'MEAN rocks!';

        spyOn($location, 'path');
      });

      it('should send a POST request with the form input values and then locate to new object URL', inject(function (Children) {
        // Set POST response
        $httpBackend.expectPOST('api/children', sampleChildPostData).respond(mockChild);

        // Run controller functionality
        scope.create(true);
        $httpBackend.flush();

        // Test form inputs are reset
        expect(scope.title).toEqual('');
        expect(scope.content).toEqual('');

        // Test URL redirection after the child was created
        expect($location.path.calls.mostRecent().args[0]).toBe('children/' + mockChild._id);
      }));

      it('should set scope.error if save error', function () {
        var errorMessage = 'this is an error message';
        $httpBackend.expectPOST('api/children', sampleChildPostData).respond(400, {
          message: errorMessage
        });

        scope.create(true);
        $httpBackend.flush();

        expect(scope.error).toBe(errorMessage);
      });
    });

    describe('$scope.update()', function () {
      beforeEach(function () {
        // Mock child in scope
        scope.child = mockChild;
      });

      it('should update a valid child', inject(function (Children) {
        // Set PUT response
        $httpBackend.expectPUT(/api\/children\/([0-9a-fA-F]{24})$/).respond();

        // Run controller functionality
        scope.update(true);
        $httpBackend.flush();

        // Test URL location to new object
        expect($location.path()).toBe('/children/' + mockChild._id);
      }));

      it('should set scope.error to error response message', inject(function (Children) {
        var errorMessage = 'error';
        $httpBackend.expectPUT(/api\/children\/([0-9a-fA-F]{24})$/).respond(400, {
          message: errorMessage
        });

        scope.update(true);
        $httpBackend.flush();

        expect(scope.error).toBe(errorMessage);
      }));
    });

    describe('$scope.remove(child)', function () {
      beforeEach(function () {
        // Create new children array and include the child
        scope.children = [mockChild, {}];

        // Set expected DELETE response
        $httpBackend.expectDELETE(/api\/children\/([0-9a-fA-F]{24})$/).respond(204);

        // Run controller functionality
        scope.remove(mockChild);
      });

      it('should send a DELETE request with a valid childId and remove the child from the scope', inject(function (Children) {
        expect(scope.children.length).toBe(1);
      }));
    });

    describe('scope.remove()', function () {
      beforeEach(function () {
        spyOn($location, 'path');
        scope.child = mockChild;

        $httpBackend.expectDELETE(/api\/children\/([0-9a-fA-F]{24})$/).respond(204);

        scope.remove();
        $httpBackend.flush();
      });

      it('should redirect to children', function () {
        expect($location.path).toHaveBeenCalledWith('children');
      });
    });
  });
}());
