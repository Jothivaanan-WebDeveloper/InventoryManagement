package com.inventory.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "http://localhost:8080")
@Controller
public class PageController {
    
    @GetMapping("/") 
    public String showLogin() {
        return "Login.html";
    }

    @GetMapping("/AdminDashboard")
    public String showAdminDashboard() {
        return "AdminDashboard.html";
    }

    @GetMapping("/EmployeeDashboard")
    public String showEmployeeDashboard() {
        return "EmployeeDashboard.html";
    }
}
