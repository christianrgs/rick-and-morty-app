describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a loading screen after submit form', () => {
    cy.get('input[data-testid=input-search-characters]').type('rick');

    cy.get('button[type=submit]').click();

    cy.get(
      'div[data-testid=loading-wrapper] > div > img[data-testid=loading-image]',
    ).should('be.visible');
  });

  it('should be render character list after query', () => {
    cy.get('input[data-testid=input-search-characters]').type('rick');

    cy.get('button[type=submit]').click();

    cy.get('ul[data-testid=characters-list]').should('be.visible');

    cy.get('ul[data-testid=characters-list] > li').should(($lis) => {
      expect($lis).to.have.length(20);
    });
  });

  it('should be able to page the next page by clicking on the next button', () => {
    cy.get('input[data-testid=input-search-characters]').type('rick');

    cy.get('button[type=submit]').click();

    cy.get('button[data-testid=paginate-button-previous]').should(
      'be.disabled',
    );
    cy.get('button[data-testid=paginate-button-1]').should('be.disabled');

    cy.get('ul[data-testid=characters-list] > li')
      .first()
      .then(($firstElementOnPage1) => {
        cy.get('button[data-testid=paginate-button-next]').click();

        cy.get('ul[data-testid=characters-list] > li')
          .first()
          .then(($firstElementOnPage2) => {
            expect($firstElementOnPage2.text()).to.not.equal(
              $firstElementOnPage1.text(),
            );
          });
      });

    cy.get('button[data-testid=paginate-button-1]').should('not.disabled');
  });

  it('should be able to page the previous page by clicking on the previous button', () => {
    cy.get('input[data-testid=input-search-characters]').type('rick');

    cy.get('button[type=submit]').click();

    cy.get('button[data-testid=paginate-button-5]').click();

    cy.get('ul[data-testid=characters-list] > li')
      .first()
      .then(($firstElementOnPage5) => {
        cy.get('button[data-testid=paginate-button-next]').should(
          'be.disabled',
        );

        cy.get('button[data-testid=paginate-button-previous]').click();

        cy.get('ul[data-testid=characters-list] > li')
          .first()
          .then(($firstElementOnPage4) => {
            expect($firstElementOnPage4.text()).to.not.equal(
              $firstElementOnPage5.text(),
            );
          });
      });

    cy.get('button[data-testid=paginate-button-4]').should('be.disabled');
    cy.get('button[data-testid=paginate-button-next]').should('not.disabled');
  });

  it('should be open modal clicking on character', () => {
    cy.get('input[data-testid=input-search-characters]').type('rick');

    cy.get('button[type=submit]').click();

    cy.get('ul[data-testid=characters-list]').should('be.visible');

    cy.get('ul[data-testid=characters-list] > li')
      .first()
      .find('button')
      .click();

    cy.get('div[data-testid^=modal]').should('be.visible');
  });

  it('should be close modal clicking on close button', () => {
    cy.get('input[data-testid=input-search-characters]').type('rick');

    cy.get('button[type=submit]').click();

    cy.get('ul[data-testid=characters-list]').should('be.visible');

    cy.get('ul[data-testid=characters-list] > li > button').first().click();

    cy.get('div[data-testid^=modal]').should('be.visible');

    cy.get('button[data-testid=modal-close-button]').click();

    cy.get('div[data-testid^=modal]').should('not.visible');
  });
});
