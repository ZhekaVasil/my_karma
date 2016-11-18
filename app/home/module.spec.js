describe('Home controller', function () {
    var $controller, HomeController;
    beforeEach(angular.mock.module('myApp.home'));
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        HomeController = $controller('homeController', {});
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
    
});