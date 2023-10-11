package vn.duck.be_instagram.services.dto;


import lombok.Data;

@Data
public class UserDto {


    private Long id;

    private String username;

    private String email;

    private String name;


    private String userImage;


    public UserDto(Long id, String username, String email, String name,
                   String userImage) {
        super();
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.userImage = userImage;
    }


    public UserDto() {
        // TODO Auto-generated constructor stub
    }


//    public Long getId() {
//        return id;
//    }
//
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//
//    public String getUsername() {
//        return username;
//    }
//
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//
//    public String getEmail() {
//        return email;
//    }
//
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//
//    public String getName() {
//        return name;
//    }
//
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//
//    public String getUserImage() {
//        return userImage;
//    }
//
//
//    public void setUserImage(String userImage) {
//        this.userImage = userImage;
//    }


}
