class MakeAppointment {

    userInDashBoard(){

        cy.get('h2').should("have.text","Make Appointment")
    }

    createAppointment() {


        cy.get('#combo_facility').select("Seoul CURA Healthcare Center");
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').click();
        cy.get('tbody > :nth-child(3) > :nth-child(5)').click();
        cy.get('#txt_comment').click();
        cy.get('#txt_comment').type("I want to make appointment for my health check up");
        cy.get('#btn-book-appointment').click();

    }

    validAssertion(){

        cy.get('h2').should("have.text","Appointment Confirmation")
    }

}
export default MakeAppointment;