package uniper.poc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uniper.poc.model.Order;
@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
}
