package demo.spring;

public interface LoanAssessment {
	
	public String LOAN_APPROVED ="APPROVED";
	public String LOAN_REJECTED ="REJECTED";
	
	public Loan assessLoan(Loan loan);

}
