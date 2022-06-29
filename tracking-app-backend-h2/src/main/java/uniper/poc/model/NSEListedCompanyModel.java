package uniper.poc.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "company001")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class NSEListedCompanyModel {
    @Id
    @JsonProperty("symbol")
    private String companyId;
    @JsonProperty("companyName")
    private String companyName;
    @JsonProperty("industry")
    private String industry;
    @JsonProperty("isin")
    private String isin;
}
