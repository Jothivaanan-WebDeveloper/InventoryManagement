package com.inventory.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "user_details")
public class UserDetails {
    
    @Id
    @GeneratedValue
    @Column(name = "employee_table_id")
    public int id;

    @Column(name = "company_email")
    public String companyEmail;

    @Column(name = "mobile_no")
    public String mobileNo;

    @Column(name = "employee_name")
    public String employeeName;

    // @ManyToOne
    // @JoinColumn(name="id")
    // public InventoryDetails inventoryDetails;

    // @ManyToOne(fetch = FetchType.LAZY)
	// @JoinColumn(name = "id")
	// @Fetch(FetchMode.JOIN)
    // public InventoryDetails inventoryDetailsId;

    @Column(name = "employee_code")
    public String employeeCode;

    @Override
    public String toString() {
        return "UserDetails [companyEmail=" + companyEmail + ", employeeCode=" + employeeCode + ", employeeName="
                + employeeName + ", id=" + id + ", mobileNo=" + mobileNo + "]";
    }

     
  
}
