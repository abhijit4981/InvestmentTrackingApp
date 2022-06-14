package uniper.poc.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uniper.poc.model.Order;
import uniper.poc.model.Orders;
import uniper.poc.repository.OrderRepository;

import java.time.LocalDate;

@Service
@Slf4j
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepository orderRepository;
    @Override
    public Order createOrder(Order order) {
        LocalDate orderDate = LocalDate.now();
        order.setOrderActive(true);
        order.setOrderDate(orderDate);
        log.info("Ten new object is "+order);
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Order order) {
        return null;
    }

    @Override
    public Orders getAllOrders() {
        return null;
    }

    @Override
    public Orders getAllActiveOrders() {
        return null;
    }

    @Override
    public Order getOrderById(long id) {
        return null;
    }

    @Override
    public void deleteOrder(long id) {

    }
}
