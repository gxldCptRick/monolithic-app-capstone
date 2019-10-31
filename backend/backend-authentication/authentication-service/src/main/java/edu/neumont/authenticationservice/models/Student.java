package edu.neumont.authenticationservice.models;

public class Student {
    private String username;
    private String password;
    private Name name;
    private ContactInfo contactInfo;
    private USAddressInfo addressInfo;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public ContactInfo getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(ContactInfo contactInfo) {
        this.contactInfo = contactInfo;
    }

    public USAddressInfo getAddressInfo() {
        return addressInfo;
    }

    public void setAddressInfo(USAddressInfo addressInfo) {
        this.addressInfo = addressInfo;
    }
}
