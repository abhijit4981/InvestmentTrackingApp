package uniper.poc.service;

import uniper.poc.model.Order;
import uniper.poc.model.Orders;

public interface OrderService {
    Order createOrder(Order order);
    Order updateOrder(Order order);
    Orders getAllOrders();
    Orders getAllActiveOrders();
    Order getOrderById(long id);
    void deleteOrder(long id);
}
