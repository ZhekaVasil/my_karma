describe('Home controller', function () {
    beforeEach(module('myApp.home'));
        var controller, homeController;
    beforeEach(inject(function (_$controller_) {
        controller = _$controller_;
        homeController = controller('homeController', {});
        spyOn(homeController, 'func').and.callThrough();
    }));

    it('should exist', function () {
        expect(homeController.name).toBeDefined();
        expect(homeController.name).toEqual('Zheka');
        expect(homeController.func).toBeDefined();



        expect(homeController.func).not.toHaveBeenCalled();
        homeController.func('Vasil');
        expect(homeController.func).toHaveBeenCalledWith('Vasil');
        expect(homeController.name).toEqual('Vasil');
        homeController.func('Vasil2');
        expect(homeController.name).toEqual('Vasil2');
    })
});