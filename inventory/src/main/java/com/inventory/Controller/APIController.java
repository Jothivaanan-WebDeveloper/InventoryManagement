package com.inventory.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.Entity.InventoryDetails;
import com.inventory.Repository.InventoryRepository;
import com.inventory.Repository.LoginUserRepository;


@RestController
public class APIController {
    
    @Autowired
    private InventoryRepository repository;

    @Autowired
    private LoginUserRepository loginRepository;

    @GetMapping("login")
    private int LoginUser (@RequestParam ("username") String loginUsername, @RequestParam ("password") String loginPassword) {
        return loginRepository.checkUser(loginUsername, loginPassword);
    }

    @CrossOrigin(origins="http://localhost:9090")
   @RequestMapping(value = "data", method = RequestMethod.GET)
    private List<InventoryDetails> getAll() {
        return repository.findAll();
    }

//    @CrossOrigin(origins = "http://localhost:8080")
//     @GetMapping("id")
//     private Optional<InventoryDetails> getById (@RequestParam ("id") int id) {
//         return repository.findById(id);
//     }
 
//    @CrossOrigin(origins = "http://localhost:8080")
//     @PostMapping("data")
//     private InventoryDetails saveById (@RequestBody InventoryDetails details) {
//         return repository.save(details);
//     }

//    @CrossOrigin(origins = "http://localhost:8080")
//     @PutMapping("data")
//     private InventoryDetails updateById (@RequestBody InventoryDetails details) {
//         return repository.save(details);
//     }

//    @CrossOrigin(origins = "http://localhost:8080")
//     @DeleteMapping("data")
//     private void removeById (@RequestParam ("id") int id) {
//          repository.deleteById(id);
//     }

}
