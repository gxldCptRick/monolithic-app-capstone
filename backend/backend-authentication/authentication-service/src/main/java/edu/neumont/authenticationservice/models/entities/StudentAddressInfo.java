package edu.neumont.authenticationservice.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="student_address_info")
public class StudentAddressInfo {
    @Id
    private String username;
    @Column(name="first_street_address")
    private String firstStreetAddress;
    @Column(name="second_street_address")
    private String secondStreetAddress;
    private String city;
    private String state;
    @Column(name="zip_code")
    private String zipCode;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getFirstStreetAddress() {
        return firstStreetAddress;
    }

    public void setFirstStreetAddress(String firstStreetAddress) {
        this.firstStreetAddress = firstStreetAddress;
    }

    public String getSecondStreetAddress() {
        return secondStreetAddress;
    }

    public void setSecondStreetAddress(String secondStreetAddress) {
        this.secondStreetAddress = secondStreetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
