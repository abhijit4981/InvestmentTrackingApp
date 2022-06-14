package uniper.poc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uniper.poc.model.ModelPojo;
import uniper.poc.model.Order;
import uniper.poc.model.Orders;
import uniper.poc.service.ModelService;
import uniper.poc.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @GetMapping
    public Orders getAllOrders(){
        return orderService.getAllOrders();
    }
}
