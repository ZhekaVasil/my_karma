describe('Home controller', function () {
    var $controller, HomeController, scope;
    beforeEach(angular.mock.module('myApp.home'));
    beforeEach(inject(function(_$controller_, $rootScope) {
        scope = $rootScope.$new();
        $controller = _$controller_;
        HomeController = $controller('homeController', {$scope: scope});

    }));

    it('should be 4', function () {
        expect(2+2).toEqual(4)
    });

    it('should be defined', function () {
        expect(HomeController).toBeDefined()
    });
    it('controller name should be Zheka ', function () {
        expect(HomeController.name).toEqual('Zheka');
    });

    it('should call function', function () {
        var names = 'Max';
        spyOn(HomeController, 'func').and.callThrough();
        expect(HomeController.func).toBeDefined();
        expect(HomeController.func).not.toHaveBeenCalled();
        expect(HomeController.name).toEqual('Zheka');
        HomeController.func(names);
        expect(HomeController.func).toHaveBeenCalledWith(names);
        expect(HomeController.name).toBe(names);

    })
});