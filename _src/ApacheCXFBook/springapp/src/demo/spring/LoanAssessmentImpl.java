package demo.spring;

import java.util.Date;

public class LoanAssessmentImpl implements LoanAssessment {

	public Loan assessLoan(Loan loan) {
		//Assign a unique id.
		loan.setLoanApplicationId(loan.getCustomer().getSSN() + System.currentTimeMillis());
		System.out.println("assessLoan loan id generated is "+ loan.getLoanApplicationId());
		//Dummy implementation
		if(loan.getCustomer().getSSN().startsWith("A")){
			loan.setLoanStatus(LOAN_APPROVED);
		}else{
			loan.setLoanStatus(LOAN_REJECTED);
		}

		return loan;
	}

}
