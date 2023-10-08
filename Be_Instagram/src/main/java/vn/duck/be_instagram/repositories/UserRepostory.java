package vn.duck.be_instagram.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.duck.be_instagram.entities.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepostory extends JpaRepository<User,Long> {
    public Optional<User> findByEmail(String email);
    public Optional<User> findByUserName(String username);

    @Modifying
    @Query("SELECT u from User  u WHERE u.id in :t_users")
    public List<User> findAllUsersByIds(@Param("t_users")List<Long> userIds);

    @Modifying
    @Query("SELECT DISTINCT u FROM User u WHERE u.userName LIKE %:query% " +
            "OR " +
            "u.email LIKE %:query%")
    public List<User> findByQuery(@Param("query") String query);
}
