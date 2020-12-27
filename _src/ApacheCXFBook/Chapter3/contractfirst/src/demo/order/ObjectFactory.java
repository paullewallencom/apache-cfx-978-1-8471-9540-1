
package demo.order;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the demo.order package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _ProcessOrder_QNAME = new QName("http://order.demo/", "processOrder");
    private final static QName _ProcessOrderResponse_QNAME = new QName("http://order.demo/", "processOrderResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: demo.order
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ProcessOrderResponse }
     * 
     */
    public ProcessOrderResponse createProcessOrderResponse() {
        return new ProcessOrderResponse();
    }

    /**
     * Create an instance of {@link ProcessOrder }
     * 
     */
    public ProcessOrder createProcessOrder() {
        return new ProcessOrder();
    }

    /**
     * Create an instance of {@link Order }
     * 
     */
    public Order createOrder() {
        return new Order();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ProcessOrder }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://order.demo/", name = "processOrder")
    public JAXBElement<ProcessOrder> createProcessOrder(ProcessOrder value) {
        return new JAXBElement<ProcessOrder>(_ProcessOrder_QNAME, ProcessOrder.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ProcessOrderResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://order.demo/", name = "processOrderResponse")
    public JAXBElement<ProcessOrderResponse> createProcessOrderResponse(ProcessOrderResponse value) {
        return new JAXBElement<ProcessOrderResponse>(_ProcessOrderResponse_QNAME, ProcessOrderResponse.class, null, value);
    }

}
