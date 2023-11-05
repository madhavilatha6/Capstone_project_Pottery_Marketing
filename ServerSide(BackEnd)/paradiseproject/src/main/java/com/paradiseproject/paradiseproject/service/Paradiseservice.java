// package com.paradiseproject.paradiseproject.service;

// import com.paradiseproject.paradiseproject.model.Product;
// import com.paradiseproject.paradiseproject.repository.ProductRepository;
// import java.util.List;
// import java.util.Optional;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;




// @Service
// public class Paradiseservice {

//     @Autowired
//     private ProductRepository productRepository;

//     public List<Product> getAllProducts() {
//         return productRepository.findAll();
//     }

//     public Product getProductById(Long id) {
//         Optional<Product> product = productRepository.findById(id);
//         return product.orElse(null);
//     }

//     public Product createProduct(Product product) {
//         return productRepository.save(product);
//     }
    

//     public Product updateProduct(Long id, Product updatedProduct) {
//         Optional<Product> existingProduct = productRepository.findById(id);
//         if (existingProduct.isPresent()) {
//             updatedProduct.setProductId(id);
//             return productRepository.save(updatedProduct);
//         } else {
//             return null;
//         }
//     }
   
//     public List<Product> searchProductsByName(String name) {
//         return productRepository.getSearchProducts(name);
//     }

   
    
//     public void deleteProduct(Long id) {
//         productRepository.deleteById(id);
//     }
// }

package com.paradiseproject.paradiseproject.service;

import com.paradiseproject.paradiseproject.model.Product;
import com.paradiseproject.paradiseproject.repository.ProductRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class Paradiseservice {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProductsInAscendingOrder(String sortField) {
        Sort sort = Sort.by(Sort.Order.asc(sortField));
        return productRepository.findAll(sort);
    }

    public List<Product> getAllProductsInDescendingOrder(String sortField) {
        Sort sort = Sort.by(Sort.Order.desc(sortField));
        return productRepository.findAll(sort);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        return productRepository.findById(id)
                .map(existingProduct -> {
                    updatedProduct.setProductId(id);
                    return productRepository.save(updatedProduct);
                })
                .orElse(null);
    }

    public List<Product> searchProductsByName(String name) {
        return productRepository.getSearchProducts(name);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
