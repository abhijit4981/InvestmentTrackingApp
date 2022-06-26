package uniper.poc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uniper.poc.model.EnrichedModel;
import uniper.poc.model.EnrichedModels;
import uniper.poc.repository.EnrichedModelRepository;
import uniper.poc.service.EnrichedModelService;
@Service
public class EnrichedModelServiceImpl implements EnrichedModelService {
    @Autowired
    private EnrichedModelRepository enrichedModelRepository;
    @Override
    public EnrichedModel createModel(EnrichedModel enrichedModel) {
        return enrichedModelRepository.save(enrichedModel);
    }

    @Override
    public EnrichedModel updateModel(EnrichedModel enrichedModel) {
        return null;
    }

    @Override
    public EnrichedModels getAllEnrichedModels() {
        return null;
    }

    @Override
    public EnrichedModels getAllActiveEnrichedModels() {
        return null;
    }

    @Override
    public EnrichedModel getEnrichedModelById(long modelId) {
        //return repository.findById(id).orElse(new SuperHero());
        return null;
    }

    @Override
    public void deleteEnrichedModel(long id) {
        //repository.findById(id).ifPresent(superHero -> repository.delete(superHero));
    }
}
