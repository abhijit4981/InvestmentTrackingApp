package uniper.poc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uniper.poc.model.NSEListedCompanyModel;

public interface NSEListedCompanyModelRepository extends JpaRepository<NSEListedCompanyModel,String> {
}
