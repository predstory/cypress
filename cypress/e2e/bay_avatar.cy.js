describe('Проверка покупки аватара', function () {                 
    it('Тест на покупку нового аватара', function () {   
         cy.visit('https://pokemonbattle.ru/');                          
         cy.get('input[id="k_email"]').type('LOGIN');                  
         cy.get('input[id="k_password"]').type('PASSWORD');             
         cy.get('button[type="submit"]').click();               
         cy.wait(1000);
         cy.get('.header_card_trainer').click();           
         cy.wait(1000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); 
         cy.get('.available > button').first().click();   
         cy.get('.card_number').type('4620869113632996');                     
         cy.get('.card_csv').type('125');                             
         cy.get('.card_date').type('1226');                           
         cy.get('.card_name').type('NAME');                           
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     
         cy.get('.threeds_number').type('56456');                           
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  
         cy.contains('Покупка прошла успешно').should('be.visible'); 
         cy.get('.style_1_base_link_blue').click();
     });
 });