package uniper.poc.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uniper.poc.model.ModelPojo;
import uniper.poc.model.Models;
import uniper.poc.model.Order;
import uniper.poc.model.Orders;
import uniper.poc.repository.OrderRepository;
import uniper.poc.service.OrderService;

import java.time.LocalDate;
import java.util.List;

@Service
@Slf4j
public class OrderServiceImpl implements OrderService {
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
        List<Order> orderList = orderRepository.findAll();
        return new Orders(orderList);
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
