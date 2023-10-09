package vn.duck.be_instagram.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.duck.be_instagram.entities.Story;

import java.util.List;

@Repository
public interface StoryRepository  extends JpaRepository<Story,Long> {
    @Query("select s from Story  s where s.user.id = :userId")
    List<Story> findAllStoryyByUserId(@Param("userId") Long userId);


}
