package uniper.poc.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "model001")
public class EnrichedModel {
    private Long companyId;
    private LocalDate lastUpdatedDate;
    private Float downBy;
}
