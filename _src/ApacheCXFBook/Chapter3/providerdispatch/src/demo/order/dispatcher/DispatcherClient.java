package demo.order.dispatcher;

import java.net.URL;

import javax.xml.namespace.QName;
import javax.xml.soap.MessageFactory;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPMessage;
import javax.xml.transform.dom.DOMSource;
import javax.xml.ws.Dispatch;
import javax.xml.ws.Service;
import javax.xml.ws.Service.Mode;


public final class DispatcherClient {

	public static final String WSDLFile = "http://localhost:8080/OrderProcessDOMProvider?wsdl";

    public DispatcherClient() {
    }

    public static void main(String args[]) throws Exception {

		URL wsdlURL = new URL(WSDLFile);

        MessageFactory factory = MessageFactory.newInstance();

        QName domProvider = new QName("http://provider.order.demo/", "OrderProcessDOMProviderService");
        QName portName = new QName("http://provider.order.demo/", "OrderProcessDOMProviderPort");

        Service service = Service.create(wsdlURL, domProvider);
        
        SOAPMessage soapRequest = factory.createMessage();
        
        
        QName processOrderQName = new QName("http://order.demo/", "processOrder");
       //create the element - <http://order.demo/:processOrder></http://order.demo/:processOrder>
        SOAPElement processOrderResponse = soapRequest.getSOAPBody().addChildElement(processOrderQName);
        SOAPElement order = processOrderResponse.addChildElement("arg0");
        order.addChildElement("customerID").addTextNode("Naveen");
        order.addChildElement("itemID").addTextNode("I001");
        order.addChildElement("price").addTextNode("200.00");
        order.addChildElement("qty").addTextNode("200");

        DOMSource domRequestMsg = new DOMSource(soapRequest.getSOAPPart());
        Dispatch<DOMSource> domMsg = service.createDispatch(portName, DOMSource.class, Mode.MESSAGE);

        DOMSource domResponseMsg = domMsg.invoke(domRequestMsg);
        
        SOAPMessage soapReq = factory.createMessage();
        soapReq.getSOAPPart().setContent(domRequestMsg);

        System.out.println("Client Request as a DOMSource data in MESSAGE Mode");
        soapReq.writeTo(System.out);
        System.out.println("\n");
        
        System.out.println("Response from server: " + domResponseMsg.getNode().getLastChild().getTextContent());

        }

}
