package demo.spring;

public class VerifyAddressImpl implements VerifyAddress {

	public boolean verifyAddress(Address address) {
		System.out.println("verifyAddress called");
		if(address.getCity() == null){
			return false;
		}
		return true;

	}

}
