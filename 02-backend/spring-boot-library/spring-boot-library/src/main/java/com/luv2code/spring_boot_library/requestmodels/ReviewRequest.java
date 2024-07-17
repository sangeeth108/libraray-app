package com.luv2code.spring_boot_library.requestmodels;


import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
public class ReviewRequest {

    private double rating;

    private Long bookId;

    private Optional<String> reviewDescription;

}
