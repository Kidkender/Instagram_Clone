package vn.duck.be_instagram.services;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.UserException;

import java.util.List;

public interface UserService {
    public User registerUser(User user) throws UserException;

    public User findUserById(Long userId) throws UserException;

    public User findUserProfile(String token) throws UserException;

    public User findUserByUsername(String username) throws UserException;

    public String followUser(Long reqUserId , Long followUserId) throws UserException;

    public String unFollowUser(Long reqUserId ,Long followUserId) throws UserException;

    public List<User> findUserByIds(List<Long> userIds) throws UserException;

    public List<User> searchUser(String query) throws UserException;

    public User updateUserDetails(User updateUser , User existingUser) throws UserException;



}
