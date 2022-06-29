package uniper.poc.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import uniper.poc.model.NSEListedCompanyModel;
import uniper.poc.model.NSEListedCompanyModels;
import uniper.poc.repository.NSEListedCompanyModelRepository;
import uniper.poc.service.NSEDataService;
@Service
@Slf4j
public class NSEDataServiceImpl implements NSEDataService {
    private String baseUrl = "https://www.nseindia.com";
    private String nseUrlToGetMetaInfo = baseUrl+"/api/equity-meta-info?symbol=";
    @Value("${nse.cookie}")
    private String nseCookie;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private NSEListedCompanyModelRepository nseListedCompanyModelRepository;
    @Override
    public NSEListedCompanyModel createNSEListedCompanyModel(String companyName) {
        log.info("01:::::::::::::"+nseCookie);
        HttpHeaders headers = new HttpHeaders();
        headers.set("accept-language", "n-US,en;q=0.9");
        headers.set("accept-encoding", "zip,");
        headers.set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36");
        headers.set("cookie", nseCookie);

        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        //HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> responseGetMetaInfo = restTemplate.exchange(nseUrlToGetMetaInfo+companyName, HttpMethod.GET, entity, String.class);
        log.info("01:::::::::::::"+responseGetMetaInfo.getBody());
        ObjectMapper mapper = new ObjectMapper();
        NSEListedCompanyModel nseListedCompanyModel = null;
        try {
            nseListedCompanyModel = mapper.readValue(responseGetMetaInfo.getBody(), NSEListedCompanyModel.class);
            return nseListedCompanyModelRepository.save(nseListedCompanyModel);
        } catch (JsonProcessingException e) {
            System.out.println("Some error parsing"+e.getMessage());
            return null;
        }
    }

    @Override
    public NSEListedCompanyModel updateNSEListedCompanyModel(NSEListedCompanyModel nseListedCompanyModel) {
        return null;
    }

    @Override
    public NSEListedCompanyModels getAllNSEListedCompanyModels() {
        return null;
    }

    @Override
    public NSEListedCompanyModels getAllActiveNSEListedCompanyModels() {
        return null;
    }

    @Override
    public NSEListedCompanyModel getNSEListedCompanyModelById(String companyName) {
        return null;
    }

    @Override
    public void deleteNSEListedCompanyModel(String companyName) {

    }
}
