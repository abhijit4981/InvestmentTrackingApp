package uniper.poc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uniper.poc.model.ModelPojo;
import uniper.poc.model.Models;
import uniper.poc.service.ModelService;

@RestController
@RequestMapping("/models")
public class ModelController {

    @Autowired
    private ModelService modelService;

    @GetMapping
    public Models getAllModels() {
        return modelService.getAllModels();
    }

    @GetMapping("/{id}")
    public ModelPojo getModelById(@PathVariable long id) {
        return modelService.getModelById(id);
    }

    @PostMapping
    public ModelPojo createModel(@RequestBody ModelPojo modelPojo) {
        modelPojo.setActive(true);
        return modelService.createModel(modelPojo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ModelPojo> updateModel(@PathVariable long id, @RequestBody ModelPojo modelPojo) {
        modelPojo.setCompanyId(id);
        return ResponseEntity.ok().body(modelService.updateModel(modelPojo));
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteModel(@PathVariable long id) {
        modelService.deleteModel(id);
        return HttpStatus.OK;
    }
}
