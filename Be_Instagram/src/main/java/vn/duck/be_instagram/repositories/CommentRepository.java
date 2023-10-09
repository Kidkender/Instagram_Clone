package vn.duck.be_instagram.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.duck.be_instagram.entities.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Long> {
}
