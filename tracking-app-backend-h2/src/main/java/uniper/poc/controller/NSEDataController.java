package uniper.poc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uniper.poc.service.impl.ReadNSEDataImpl;

@RestController
@RequestMapping("/nse")
public class NSEDataController {
    @Autowired
    private ReadNSEDataImpl readNSEData;
    @GetMapping
    public String helloWorld(){
        return "Hello World from NSE";
    }
    @GetMapping("/read01/{companyName}")
    public String getBasicInfo(@PathVariable String companyName){
        return readNSEData.getBasicInfo(companyName);
    }
    @GetMapping("/read02/{companyName}")
    public String getForQuoteEquity01(@PathVariable String companyName){
        return readNSEData.getForQuoteEquity01(companyName);
    }
    @GetMapping("/read03/{companyName}")
    public String getForQuoteEquity02(@PathVariable String companyName){
        return readNSEData.getForQuoteEquity02(companyName);
    }
    @GetMapping("/read04/{companyName}")
    public String getForChartByIndex(@PathVariable String companyName){
        return readNSEData.getForChartByIndex(companyName);
    }
}
