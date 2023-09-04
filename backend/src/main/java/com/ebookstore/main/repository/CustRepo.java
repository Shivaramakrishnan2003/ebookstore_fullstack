package com.ebookstore.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ebookstore.main.model.Customer;

import jakarta.transaction.Transactional;

@Repository
public interface CustRepo extends JpaRepository<Customer, Integer>{
	@Modifying
	@Transactional
	@Query(value = "delete from customer where cust_id=:a", nativeQuery = true)
	public int deletebyquerycustid(@Param("a") int id);
}
