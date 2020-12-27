package demo.spring;

public class LoanProcessImpl implements LoanProcess {

	private VerifyAddress verifyAddress;
	private VerifyCredit verifyCredit;
	private LoanAssessment loanAssessment;
	
	public VerifyAddress getVerifyAddress() {
		return verifyAddress;
	}

	public void setVerifyAddress(VerifyAddress verifyAddress) {
		this.verifyAddress = verifyAddress;
	}

	public VerifyCredit getVerifyCredit() {
		return verifyCredit;
	}

	public void setVerifyCredit(VerifyCredit verifyCredit) {
		this.verifyCredit = verifyCredit;
	}

	public LoanAssessment getLoanAssessment() {
		return loanAssessment;
	}

	public void setLoanAssessment(LoanAssessment loanAssessment) {
		this.loanAssessment = loanAssessment;
	}

	public Loan applyLoan(Loan loan) {
		
		//Step one - verify address
		boolean validAddress = getVerifyAddress().verifyAddress(loan.getCustomer().getAdress());
		if(!validAddress){
			throw new RuntimeException("Address for Customer SSN "+ loan.getCustomer().getSSN() + " is not valid");
		}
		//Step two -verify credit
		String status = getVerifyCredit().verifyCredit(loan.getCustomer());
		if(status.equalsIgnoreCase(VerifyCredit.BAD_CREDIT)){
			//If bad credit, disapprove Loan
			loan.setLoanStatus(LoanAssessment.LOAN_REJECTED);
			return loan;
		}else {
			return getLoanAssessment().assessLoan(loan);
		}
		
		
	}

	
}
