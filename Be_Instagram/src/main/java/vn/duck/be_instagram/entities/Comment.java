package vn.duck.be_instagram.entities;

import jakarta.persistence.*;
import lombok.*;
import vn.duck.be_instagram.services.dto.UserDto;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "t_comment")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "id", column = @Column(name = "user_id")),
            @AttributeOverride(name = "email", column = @Column(name = "user_email"))
    })
    private UserDto user;

    private String content;
    @Embedded
    @ElementCollection
    @JoinTable(name = "likedByUsers", joinColumns = @JoinColumn(name = "user_id"))
    private Set<UserDto> likedbyUsers = new HashSet<UserDto>();
}
