package uniper.poc.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class NSEListedCompanyModels {
    private List<NSEListedCompanyModel> nseListedCompanyModelList;
}
