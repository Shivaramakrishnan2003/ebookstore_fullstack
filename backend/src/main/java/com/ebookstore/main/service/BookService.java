package com.ebookstore.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import com.ebookstore.main.model.Book;
import com.ebookstore.main.model.Customer;
import com.ebookstore.main.repository.BookRepo;
import com.ebookstore.main.repository.CustRepo;

@org.springframework.stereotype.Service
public class BookService {
	@Autowired
	BookRepo b;
	@Autowired
	CustRepo c;
	
	public List<Book> read(){
		return b.findAll();
	}
	
	public List<Customer> readCust(){
		return c.findAll();
	}
	
	public Optional<Book> readid(int id){			
		return b.findById(id);
	}
	
	public String create(Book bk) {
		if(!b.existsById(bk.getBookId())){
			b.save(bk);
			return "Record inserted successfully";
		}
		else
			return "A record is already found with book id "+bk.getBookId()+". Please enter record with a different book id.";
	}
	
	public String createCust(Customer cust) {
		if(!b.existsById(cust.getCustId())){
			c.save(cust);
			return "Record inserted successfully";
		}
		else
			return "A record is already found with customer id "+cust.getCustId()+". Please enter record with a different customer id.";
	}
	
	public String update(Book bk) {
		if(b.existsById(bk.getBookId())){
			b.saveAndFlush(bk);
			return "Record updated successfully";
		}
		else
			return "Record with book id "+bk.getBookId()+" is not found. Please check the book id carefully!";
	}
	
	public String updateid(int id, Book bk) {
		if(b.existsById(id)){
			b.saveAndFlush(bk);
			return "Record updated by id successfully";
		}
		else
			return "Record with book id "+id+" is not found. Please re-check book id!";
	}
	
	public String delete(Book bk) {
		if(!b.existsById(bk.getBookId())) {
			b.delete(bk);
			return "Record deleted successfully";
		}
		else
			return "Record not found";
	}
	
	public String deleteid(int id) {
		if(b.existsById(id)) {
			b.deletebyqueryid(id);
			return "Record deleted by id successfully";
		}
		else
			return "Record not found";
	}
	
	public String deletecustid(int id) {
		if(c.existsById(id)) {
			c.deletebyquerycustid(id);
			return "Record deleted by id successfully";
		}
		else
			return "Record not found";
	}
	
	public List<Book> readSorted(String s){
		return b.findAll(Sort.by(Sort.DEFAULT_DIRECTION, s));
//		return b.findAll(Sort.by(Direction.DESC));
//		return b.findAll(Sort.by(s).descending());
//		return b.findAll(Sort.by(s).ascending());
	}
	
	public List<Book> readPages(int pno){
		Page<Book> p = b.findAll(PageRequest.of(pno, 8));
		System.out.println(b.totalBooks());
		return p.getContent();
	}
	
	public int readtotalpages() {
		return b.totalBooks();
	}
	
	public List<Book> readSortedPages(int pno, int psize, String s){
		Sort sort = Sort.by(s).ascending();
		Page<Book> p = b.findAll(PageRequest.of(pno, psize, sort));
		return p.getContent();
	}
	
	//Queries
	public List<Book> readbyid(int id){
		return b.readbyqueryid(id);
	}
	
	public List<Book> readbyauthor(String author){
		return b.readbyqueryauthor(author);
	}
	
	public int deletebyid(int id){
		return b.deletebyqueryid(id);
	}
	
	public int updatebyid(float price, int id){
		return b.updatebyqueryid(price, id);
	}
}
