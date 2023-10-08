package vn.duck.be_instagram.entities;


import jakarta.persistence.*;
import lombok.*;
import vn.duck.be_instagram.services.dto.UserDto;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "t_comments")
@Getter @Setter @ToString
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "id", column = @Column(name = "user_id")),
            @AttributeOverride(name = "email", column = @Column(name = "user_email"))
    })
    private UserDto user;
    @Column(name = "content")
    private String content;


    @Embedded
    @ElementCollection
    private Set<UserDto> likedByUsers = new HashSet<UserDto>();
    @Column(name = "createAt")
    private LocalDateTime createdAt;


}