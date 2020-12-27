package demo.spring;

public interface LoanProcess {
	
	public Loan applyLoan(Loan loan);
	
	public VerifyAddress getVerifyAddress(); 

	public void setVerifyAddress(VerifyAddress verifyAddress);

	public VerifyCredit getVerifyCredit();

	public void setVerifyCredit(VerifyCredit verifyCredit);

	public LoanAssessment getLoanAssessment();

	public void setLoanAssessment(LoanAssessment loanAssessment);

}
