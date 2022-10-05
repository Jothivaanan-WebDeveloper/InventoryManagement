package com.inventory.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.inventory.Entity.UserDetails;

public interface UserDetailsRepository extends JpaRepository <UserDetails, Integer> {
    
    @Query(value = "select role_id from user_details where company_email = :loginUsername and mobile_no = :loginPassword",
    nativeQuery = true)
    public int checkUser(String loginUsername, String loginPassword);

}
