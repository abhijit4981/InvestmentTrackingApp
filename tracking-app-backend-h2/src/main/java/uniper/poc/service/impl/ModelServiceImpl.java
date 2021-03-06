package uniper.poc.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uniper.poc.exception.ResourceNotFoundException;
import uniper.poc.model.EnrichedModel;
import uniper.poc.model.ModelPojo;
import uniper.poc.model.Models;
import uniper.poc.repository.ModelRepository;
import uniper.poc.service.EnrichedModelService;
import uniper.poc.service.ModelService;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ModelServiceImpl implements ModelService {
    @Autowired
    private ModelRepository modelRepository;
    @Autowired
    private EnrichedModelService enrichedModelService;

    @Override
    public ModelPojo createModel(ModelPojo modelPojo) {
        log.info("Save this record"+modelPojo);
        ModelPojo modelPojoNew = modelRepository.save(modelPojo);
        EnrichedModel enrichedModel = new EnrichedModel();
        enrichedModel.setCompanyId(modelPojoNew.getCompanyId());
        enrichedModel.setLastUpdatedDate(LocalDate.now());
        float downBy = modelPojoNew.getCompanyExpectedHigh()-modelPojoNew.getCompanyCurrentPrice();
        enrichedModel.setDownBy(downBy);
        enrichedModelService.createModel(enrichedModel);
        return modelPojoNew;
    }

    @Override
    public ModelPojo updateModel(ModelPojo modelPojo) {
        log.info("Updated data comming is "+modelPojo);
        return modelRepository.save(modelPojo);
    }

    @Override
    public Models getAllModels() {
        List<ModelPojo> modelPojos = modelRepository.findAll();
        return new Models(modelPojos);
    }

    @Override
    public Models getAllActiveModels() {
        return null;
    }

    @Override
    public ModelPojo getModelById(long modelId) {
        Optional<ModelPojo> modelPojoOptionalDB = modelRepository.findById(modelId);
        if (modelPojoOptionalDB.isPresent()){
            return modelPojoOptionalDB.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : "+modelId);
        }
    }

    @Override
    public void deleteModel(long id) {
        Optional<ModelPojo> modelPojoOptionalDB = modelRepository.findById(id);
        if (modelPojoOptionalDB.isPresent()){
            ModelPojo modelPojo = modelPojoOptionalDB.get();
            modelRepository.delete(modelPojo);
            //modelPojo.setActive(false);
            //modelRepository.save(modelPojo);
        } else {
            throw new ResourceNotFoundException("Record not found with id : "+id);
        }
    }

}
