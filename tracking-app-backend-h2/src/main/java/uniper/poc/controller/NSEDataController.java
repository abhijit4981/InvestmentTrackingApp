package uniper.poc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uniper.poc.model.NSEListedCompanyModel;
import uniper.poc.model.NSEListedCompanyModels;
import uniper.poc.service.NSEDataService;
import uniper.poc.service.impl.ReadNSEDataImpl;

@RestController
@RequestMapping("/nse")
public class NSEDataController {
    @Autowired
    private ReadNSEDataImpl readNSEData;
    @Autowired
    private NSEDataService nseDataService;

    @GetMapping("/savebasicinfo/{companyName}")
    public NSEListedCompanyModel saveBasicInfo(@PathVariable String companyName){
        return nseDataService.createNSEListedCompanyModel(companyName);
    }
    @GetMapping
    public NSEListedCompanyModels getAllModels() {
        return nseDataService.getAllNSEListedCompanyModels();
    }
}
