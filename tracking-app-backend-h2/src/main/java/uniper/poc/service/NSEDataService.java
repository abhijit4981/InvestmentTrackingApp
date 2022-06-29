package uniper.poc.service;

import uniper.poc.model.ModelPojo;
import uniper.poc.model.Models;
import uniper.poc.model.NSEListedCompanyModel;
import uniper.poc.model.NSEListedCompanyModels;

public interface NSEDataService {
    NSEListedCompanyModel createNSEListedCompanyModel(String companyName);

    NSEListedCompanyModel updateNSEListedCompanyModel(NSEListedCompanyModel nseListedCompanyModel);

    NSEListedCompanyModels getAllNSEListedCompanyModels();
    NSEListedCompanyModels getAllActiveNSEListedCompanyModels();

    NSEListedCompanyModel getNSEListedCompanyModelById(String companyName);

    void deleteNSEListedCompanyModel(String companyName);
}
