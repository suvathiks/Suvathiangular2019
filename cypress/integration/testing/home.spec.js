/// <reference types="Cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/home')
  })

  //home page
  it('Home page open', () => {
    cy.get('.active').should('contain','Home');
  })
})

context('About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/about')
  })

  //home page
  it('About page open', () => {

    cy.get('.active').should('contain','About');

  })
})

context('Todo Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/todo')
  })

  //home page
  it('Todo page open', () => {

    cy.get('.active').should('contain','Todo');

  })
})

context('Api Todo Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/apitodo')
  })

  //home page
  it('Api Todo page open', () => {

    cy.get('.active').should('contain','Api Todo');

  })
})

context('Stopwatch Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/stopwatch')
  })

  //home page
  it('Stopwatch page open', () => {

    cy.get('.active').should('contain','Stopwatch');

  })
})
