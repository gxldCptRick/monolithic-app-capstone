package edu.neumont.authenticationservice.models.factories;

import edu.neumont.authenticationservice.models.entities.Login;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class MessageDigestSecureRandomLoginFactory implements LoginFactory {
    private String algorithm;

    public MessageDigestSecureRandomLoginFactory(String algorithm){
        setAlgorithm(algorithm);
    }

    @Override
    public Login createLogin(String username, String password) {
        return createLogin(username, password, generateSalt());
    }


    @Override
    public Login createLogin(String username, String password, byte[] salt) {
        var login = createDefaultLogin();
        var digest = createDigest();
        login.setSalt(salt);
        digest.update(salt);
        login.setPassword(digest.digest(password.getBytes()));
        login.setUsername(username);
        return login;
    }

    private Login createDefaultLogin(){
        Login login = new Login();
        login.setCypher(getAlgorithm());
        return login;
    }

    private MessageDigest createDigest(){
        return createDigest(getAlgorithm());
    }
    private MessageDigest createDigest(String algorithm){
        try {
            return MessageDigest.getInstance(algorithm);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Could not find algorithm",e);
        }
    }

    private byte[] generateSalt(){
        byte[] salt = new byte[16];
        new SecureRandom().nextBytes(salt);
        return salt;
    }

    public void setAlgorithm(String algorithm) {
        createDigest(algorithm);
        this.algorithm = algorithm;
    }

    public String getAlgorithm() {
        return algorithm;
    }
}
