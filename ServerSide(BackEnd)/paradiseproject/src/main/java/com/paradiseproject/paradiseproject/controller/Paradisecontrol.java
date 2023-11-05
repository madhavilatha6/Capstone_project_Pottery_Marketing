package com.paradiseproject.paradiseproject.controller;

import com.paradiseproject.paradiseproject.model.Product;
import com.paradiseproject.paradiseproject.service.Paradiseservice;
import java.util.List;


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

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        paradiseService.deleteProduct(id);
    }
}
