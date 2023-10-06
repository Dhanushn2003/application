package com.bookstore.service;

import com.bookstore.dto.JwtAuthenticationResponse;
import com.bookstore.dto.RefreshTokenRequest;
import com.bookstore.dto.SigninRequest;
import com.bookstore.dto.SignupRequest;
import com.bookstore.entities.User;

public interface AuthenticationService {
	User signup(SignupRequest signupRequest);
	JwtAuthenticationResponse signin(SigninRequest signinRequest);
	JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
