package com.paradiseproject.paradiseproject.controller;

import com.paradiseproject.paradiseproject.model.Product;
import com.paradiseproject.paradiseproject.service.Paradiseservice;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/products")
public class Paradisecontrol {
    @Autowired
    private Paradiseservice paradiseService;

    @GetMapping
    public List<Product> getAllProducts() {
        return paradiseService.getAllProducts();
    }

    @GetMapping("/sort=asc")
    public List<Product> getAllProductsInAscendingOrder() {
        return paradiseService.getAllProductsInAscendingOrder("productPrice");
    }
    
    @GetMapping("/sort=desc")
    public List<Product> getAllProductsInDescendingOrder() {
        return paradiseService.getAllProductsInDescendingOrder("productPrice");
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return paradiseService.getProductById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return paradiseService.createProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        return paradiseService.updateProduct(id, updatedProduct);
    }

    @GetMapping("/searchByName/{name}")
     public List<Product> searchProductsByName(@PathVariable("name") String name) {
       return paradiseService.searchProductsByName(name);
     }

    // @DeleteMapping("/{id}")
    // public void deleteProduct(@PathVariable Long id) {
    //     paradiseService.deleteProduct(id);
    // }
}
