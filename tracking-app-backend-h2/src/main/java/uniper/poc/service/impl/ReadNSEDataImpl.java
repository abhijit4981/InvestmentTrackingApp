package uniper.poc.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class ReadNSEDataImpl {
    private String baseUrl = "https://www.nseindia.com";

    private String nseUrlToGetMetaInfo = baseUrl+"/api/equity-meta-info?symbol=";
    private String nseUrlForQuoteEquity01 = baseUrl + "/api/quote-equity?symbol=";
    private String nseUrlForQuoteEquity02 = "&section=trade_info";
    private String nseUrlForChartByIndex01 = baseUrl+"/api/chart-databyindex?index=";
    private String nseUrlForChartByIndex02 = "QN";
    @Value("${nse.cookie}")
    private String nseCookie;
    @Autowired
    private RestTemplate restTemplate;
    public String getBasicInfo(String companyName){
        HttpHeaders headers = new HttpHeaders();
        headers.set("accept-language", "n-US,en;q=0.9");
        headers.set("accept-encoding", "zip,");
        headers.set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36");
        headers.set("cookie", nseCookie);

        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        //HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> responseGetMetaInfo = restTemplate.exchange(nseUrlToGetMetaInfo+companyName, HttpMethod.GET, entity, String.class);
        log.info("01:::::::::::::"+responseGetMetaInfo.getBody());
        return responseGetMetaInfo.getBody();
    }
    public String getForQuoteEquity01(String companyName){
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

        log.info("02:::::::::::::"+responseForQuoteEquity01.getBody());
        return responseForQuoteEquity01.getBody();
    }
    public String getForQuoteEquity02(String companyName){
        log.info("cookie val is : "+nseCookie);
        HttpHeaders headers = new HttpHeaders();
        headers.set("accept-language", "n-US,en;q=0.9");
        headers.set("accept-encoding", "zip,");
        headers.set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36");
        headers.set("cookie", nseCookie);
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        String url = nseUrlForQuoteEquity01+companyName+nseUrlForQuoteEquity02;
        //HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        log.info("Going to call url : "+url);
        ResponseEntity<String> responseForQuoteEquity02 = restTemplate.exchange(url , HttpMethod.GET, entity , String.class);

        log.info("03:::::::::::::"+responseForQuoteEquity02.getBody());
        return responseForQuoteEquity02.getBody();
    }
    public String getForChartByIndex(String companyName){
        log.info("cookie val is : "+nseCookie);
        HttpHeaders headers = new HttpHeaders();
        headers.set("accept-language", "n-US,en;q=0.9");
        headers.set("accept-encoding", "zip,");
        headers.set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36");
        headers.set("cookie", nseCookie);
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        String url = nseUrlForChartByIndex01+companyName+nseUrlForChartByIndex02;
        //HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        log.info("Going to call url : "+url);
        ResponseEntity<String> responseForChartByIndex= restTemplate.exchange(url, HttpMethod.GET, entity , String.class);

        log.info("04:::::::::::::"+responseForChartByIndex.getBody());
        return responseForChartByIndex.getBody();
    }
}
