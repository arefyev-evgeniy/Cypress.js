describe('Сайт staya', function () {
	it('открытие сайта', function (){
		cy.visit('https://staya.dog')
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('fantomcheg777@gmail.com');
		cy.get('.auth-form > form > [type="password"]').type('Jon******');
		cy.get('.auth-form__submit').click();
		cy.contains('Мои заказы');

	})
})
