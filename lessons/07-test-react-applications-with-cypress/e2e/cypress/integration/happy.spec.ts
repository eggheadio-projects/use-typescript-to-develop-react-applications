/// <reference types="cypress"/>

import { id, onText, offText } from '../../../src/constants';

describe('happy path', () => {
    it('should work', () => {
      cy.visit('http://localhost:8080')
      cy.get('#' + id)
  .should('have.text', offText)
  .click()
  .should('have.text', onText)
    })
  })