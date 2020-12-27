package demo.order.server;

import javax.xml.ws.Endpoint;
import demo.order.OrderProcessImpl;

public class Server {

    public Server() throws Exception {
        OrderProcessImpl orderProcessImpl = new OrderProcessImpl();
		Endpoint.publish("local://OrderProcess", orderProcessImpl);
    }

    public static void main(String args[]) throws Exception {
        new Server();
        System.out.println("Server ready...");
    }
}