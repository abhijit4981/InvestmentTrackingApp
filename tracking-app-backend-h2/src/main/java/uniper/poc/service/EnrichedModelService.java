package uniper.poc.service;

import uniper.poc.model.EnrichedModel;
import uniper.poc.model.EnrichedModels;
import uniper.poc.model.ModelPojo;
import uniper.poc.model.Models;

public interface EnrichedModelService {
    EnrichedModel createModel(EnrichedModel enrichedModel);

    EnrichedModel updateModel(EnrichedModel enrichedModel);

    EnrichedModels getAllEnrichedModels();
    EnrichedModels getAllActiveEnrichedModels();

    EnrichedModel getEnrichedModelById(long modelId);

    void deleteEnrichedModel(long id);
}
