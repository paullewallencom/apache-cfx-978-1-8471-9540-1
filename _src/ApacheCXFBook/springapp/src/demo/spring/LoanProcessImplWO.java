package demo.spring;

public class LoanProcessImplWO {

	public Loan applyLoan(Loan loan) {

		VerifyAddress verifyAddress = new VerifyAddressImpl();
		VerifyCredit verifyCredit = new VerifyCreditImpl();
		LoanAssessment loanAssessment = new LoanAssessmentImpl();
		
		//Step one - verify address
		boolean validAddress = verifyAddress.verifyAddress(loan.getCustomer().getAdress());
		if(!validAddress){
			throw new RuntimeException("Address for Customer SSN "+ loan.getCustomer().getSSN() + " is not valid");
		}
		//Step two -verify credit
		String status = verifyCredit.verifyCredit(loan.getCustomer());
		if(status.equalsIgnoreCase(VerifyCredit.BAD_CREDIT)){
			//If bad credit, disapprove Loan
			loan.setLoanStatus(LoanAssessment.LOAN_REJECTED);
			return loan;
		}else {
			return loanAssessment.assessLoan(loan);
		}
		
		
	}

	
}
