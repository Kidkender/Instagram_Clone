package vn.duck.be_instagram.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.duck.be_instagram.entities.Post;

import java.util.List;

@Repository
public interface PostReposity extends JpaRepository<Post,Long> {

    @Modifying
    @Query("SELECT p FROM Post p WHERE p.user.id=?1")
    public List<Post> findByUserId(Long userId);

    @Modifying
    @Query("select p from Post p where p.user.id IN :users order by p.createdAt desc")
    public List<Post> findAllPostByUserIds(@Param("users") List<Long> userIds);

//    @Query("select p from Post p where p.user.id IN :users ORDER BY p.createdAt DESC")
//    public List<Post> findAllPostByUserIds(@Param("users") List<Long> userIds);
}
