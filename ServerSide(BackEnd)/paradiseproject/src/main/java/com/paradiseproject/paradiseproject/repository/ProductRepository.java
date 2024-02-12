package com.paradiseproject.paradiseproject.repository;

import com.paradiseproject.paradiseproject.model.Product;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("select s from Product s where s.name like %?1%")
    List<Product> getSearchProducts(String name);

    @Override
    List<Product> findAll(Sort sort); // Custom query method for dynamic sorting
}

