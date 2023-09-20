import axios from "axios";

let id, price;

class Bookservice{
    getBooks(){
        return axios.get("http://localhost:8080/getBook");
    }
    postBooks(bookData){
        return axios.post("http://localhost:8080/addBook", bookData);
    }
    updateBooks(bid, bprice){
        id = bid;
        price = bprice;
        return axios.put(`http://localhost:8080/queries/update/price/for${id}to${price}`);
    }
    deleteBook(dbid){
        return axios.delete(`http://localhost:8080/deleteBookId/${dbid}`);
    }
    postCustomer(customerData){
        return axios.post("http://localhost:8080/addCustomer", customerData);
    }
    getCustomers(){
        return axios.get("http://localhost:8080/getCust");
    }
    getBooksPage(page){
        return axios.get(`http://localhost:8080/getPages/pgno${page}`);
    }
    getTotalPages(){
        return axios.get("http://localhost:8080/getTotalPages");
    }
    getBestSellers(){
        return axios.get("http://localhost:8080/queries/get/bestSellers")
    }
}

export default new Bookservice();