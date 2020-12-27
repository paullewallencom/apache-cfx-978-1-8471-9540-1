package demo.spring.client;

import java.util.Date;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import demo.spring.Address;
import demo.spring.Customer;
import demo.spring.Loan;
import demo.spring.LoanProcess;

public class LoanProcessClient {
	
	public static void main(String[] args){
		try
		 {
		System.out.println("LoanProcessClient started");
	   
	    
	    ClassPathXmlApplicationContext appContext = new ClassPathXmlApplicationContext(new String[] {
	        "/demo/spring/loanprocess.xml"
	    });
	    
		System.out.println("Spring configuration file loaded");
		
		Customer customer = new Customer();
		customer.setFirstname("Naveen");
		customer.setLastname("Balani");
		customer.setSSN("A0989999999");
		
		//Address
		Address address = new Address();
		address.setAddressLine1("Stree one");
		address.setCity("Mumbai");
		address.setCountry("India");
		
		customer.setAdress(address);
		
		Loan loan = new Loan();
		loan.setCustomer(customer);
		loan.setLoanApplyDate(new Date());
		
		
		LoanProcess loanProcess = (LoanProcess)
		appContext.getBean("loanProcess");
		
		Loan loanResponse =loanProcess.applyLoan(loan);
		
		System.out.println("Loan status for customer with SSN " + loan.getCustomer().getSSN() + " is " + loanResponse.getLoanStatus());
		
		 }
		catch(Exception e){
			e.printStackTrace();
		}
		}


}
