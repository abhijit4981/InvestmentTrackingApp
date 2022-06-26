package uniper.poc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import uniper.poc.model.EnrichedModel;

public interface EnrichedModelRepository extends MongoRepository<EnrichedModel,Long> {
}
