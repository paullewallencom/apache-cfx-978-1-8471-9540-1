package demo.order.client;

import org.apache.cxf.frontend.ClientProxy;
import org.apache.cxf.transport.http.gzip.GZIPInInterceptor;
import org.apache.cxf.transport.http.gzip.GZIPOutInterceptor;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import demo.order.Order;
import demo.order.OrderProcess;

public final class Client {

    public Client() {
    }

    public static void main(String args[]) throws Exception {
        ClassPathXmlApplicationContext context 
            = new ClassPathXmlApplicationContext(new String[] {"demo/order/client/client-bean.xml"});

        OrderProcess client = (OrderProcess) context.getBean("orderClient");
		Order order = new Order();
		order.setCustomerID("C001");
		order.setItemID("I001");
		order.setPrice(100.00);
		order.setQty(20);
		
		String result = client.processOrder(order);

        System.out.println("The Order ID is : " + result);
        System.exit(0);
    }
}
