package demo.spring;

public class VerifyCreditImpl implements VerifyCredit {

	public String verifyCredit(Customer customer) {
		System.out.println("verifyCredit called with SSN " + customer.getSSN());
		if(customer.getSSN().startsWith("A")){
			return GOOD_CREDIT;
		}else{
			return BAD_CREDIT;
		}
		
	}

}
