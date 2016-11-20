describe('Protractor Demo App', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('https://vk.com/login?u=2&to=YXVkaW9zNzcyNDMwNDA-');
    });


    it('shold play music', function () {
        element(by.id('email')).sendKeys('zheka_1408@mail.ru');
        element(by.id('pass')).sendKeys('136661408FackYou2');
        element(by.id('login_button')).click();
        /*element(by.id('play_77243040_456239048')).click()*/


        browser.wait(function() {
            return browser.isElementPresent(by.id('play_77243040_456239048'));
        });

        for(var i =0; i<5; i++){
            element(by.id('l_pr')).click();
            browser.wait(function() {
                return browser.isElementPresent(by.id('post_field'));
            });
            element(by.id('post_field')).sendKeys('Hello from robot');
            element(by.id('send_post')).click();

        }

        browser.wait(function() {
            return false;
        });

    })



});