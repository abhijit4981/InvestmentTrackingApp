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
import uniper.poc.model.company.CompanyModel;
import uniper.poc.repository.NSEListedCompanyModelRepository;
import uniper.poc.service.NSEDataService;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@Slf4j
public class NSEDataServiceImpl implements NSEDataService {
    private String baseUrl = "https://www.nseindia.com";
    private String nseUrlToGetMetaInfo = baseUrl+"/api/equity-meta-info?symbol=";
    private String nseUrlForQuoteEquity01 = baseUrl + "/api/quote-equity?symbol=";
    @Value("${nse.cookie}")
    private String nseCookie;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private NSEListedCompanyModelRepository nseListedCompanyModelRepository;
    @Override
    public NSEListedCompanyModel createNSEListedCompanyModel(String companyName) {
        /*
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

         */
        /*
        json conversion without pojo class

        JsonObject body = gson.fromJson(json, JsonObject.class);
JsonArray results = body.get("results").getAsJsonArray();
JsonObject firstResult = results.get(0).getAsJsonObject();
JsonElement address = firstResult.get("formatted_address");
System.out.println(address.getAsString());
         */
        log.info("cookie val is : "+nseCookie);
        HttpHeaders headers = new HttpHeaders();
        headers.set("accept-language", "n-US,en;q=0.9");
        headers.set("accept-encoding", "zip,");
        headers.set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36");
        headers.set("cookie", nseCookie);
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        String url = nseUrlForQuoteEquity01+companyName;
        //HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        log.info("Going to call url : "+url);
        ResponseEntity<String> responseForQuoteEquity01 = restTemplate.exchange(url , HttpMethod.GET, entity , String.class);

        ObjectMapper mapper = new ObjectMapper();
        NSEListedCompanyModel nseListedCompanyModel = null;
        CompanyModel companyModel = null;
        try {
            companyModel = mapper.readValue(responseForQuoteEquity01.getBody(), CompanyModel.class);
        } catch (JsonProcessingException e) {
            System.out.println("Some error parsing"+e.getMessage());
            return null;
        }
        nseListedCompanyModel = createNSEListedCompanyModelObject(companyModel);
        log.info("this is the response : "+companyModel);//
        nseListedCompanyModelRepository.save(nseListedCompanyModel);
        log.info("this is the new object : "+nseListedCompanyModel);
        return nseListedCompanyModel;
    }

    private NSEListedCompanyModel createNSEListedCompanyModelObject(CompanyModel companyModel) {
        NSEListedCompanyModel nseListedCompanyModel = new NSEListedCompanyModel();
        nseListedCompanyModel.setCompanyId(companyModel.getInfo().getSymbol());
        //nseListedCompanyModel.setIndustry(companyModel.getInfo().getIndustry());
        nseListedCompanyModel.setIsin(companyModel.getInfo().getIsin());
        nseListedCompanyModel.setStatus(companyModel.getMetadata().getStatus());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
        LocalDate listingDate = LocalDate.parse(companyModel.getMetadata().getListingDate(),formatter);
        nseListedCompanyModel.setListingDate(listingDate);
        nseListedCompanyModel.setIndustryInfo(companyModel.getIndustryInfo());
        DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("dd-MMM-yyyy hh:mm:ss");
        LocalDate lastUpdateTime = LocalDate.parse(companyModel.getPreOpenMarket().getLastUpdateTime(),formatter1);
        nseListedCompanyModel.setLastUpdateTime(lastUpdateTime);
        nseListedCompanyModel.setIntraDayHighLow(companyModel.getPriceInfo().getIntraDayHighLow());
        //nseListedCompanyModel.setWeekHighLow(companyModel.getPriceInfo().getWeekHighLow());
        nseListedCompanyModel.setMinOfWeek(companyModel.getPriceInfo().getWeekHighLow().getMin());
        LocalDate minWeekDate = LocalDate.parse(companyModel.getPriceInfo().getWeekHighLow().getMinDate(),formatter);
        nseListedCompanyModel.setMinWeekDate(minWeekDate);
        nseListedCompanyModel.setMaxOfWeek(companyModel.getPriceInfo().getWeekHighLow().getMax());
        LocalDate maxWeekDate = LocalDate.parse(companyModel.getPriceInfo().getWeekHighLow().getMaxDate(),formatter);
        nseListedCompanyModel.setMaxWeekDate(maxWeekDate);
        return nseListedCompanyModel;
    }

    @Override
    public NSEListedCompanyModel updateNSEListedCompanyModel(NSEListedCompanyModel nseListedCompanyModel) {
        return null;
    }

    @Override
    public NSEListedCompanyModels getAllNSEListedCompanyModels() {
        NSEListedCompanyModels nseListedCompanyModels = new NSEListedCompanyModels();
        List<NSEListedCompanyModel> nseListedCompanyModelList = nseListedCompanyModelRepository.findAll();
        nseListedCompanyModels.setNseListedCompanyModelList(nseListedCompanyModelList);
        return nseListedCompanyModels;
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
