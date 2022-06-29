package uniper.poc.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import uniper.poc.model.company.IndustryInfo;
import uniper.poc.model.company.IntraDayHighLow;
import uniper.poc.model.company.PriceInfo;
import uniper.poc.model.company.WeekHighLow;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "company001")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class NSEListedCompanyModel {
    @Id
    //@JsonProperty("symbol")
    private String companyId;
    private String companyName;
    //private String industry;
    private String isin;
    public String status;
    private LocalDate listingDate;
    @Embedded
    private IndustryInfo industryInfo;
    private LocalDate lastUpdateTime;
    private double minOfWeek;
    private LocalDate minWeekDate;
    private double maxOfWeek;
    private LocalDate maxWeekDate;
    //private double value;
    @Embedded
    private IntraDayHighLow intraDayHighLow;
    //private PriceInfo priceInfo;
}
