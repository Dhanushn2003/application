package com.bookstore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.dto.JwtAuthenticationResponse;
import com.bookstore.dto.RefreshTokenRequest;
import com.bookstore.dto.SigninRequest;
import com.bookstore.dto.SignupRequest;
import com.bookstore.entities.User;
import com.bookstore.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {
private final AuthenticationService authenticationService;

@PostMapping("/signup")
public ResponseEntity<User> signup(@RequestBody SignupRequest signuprequest){
  return ResponseEntity.ok(authenticationService.signup(signuprequest));	
}

@PostMapping("/signin")
public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest signinRequest){
	return ResponseEntity.ok(authenticationService.signin(signinRequest));
}

@PostMapping("/refresh")
public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest){
	return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
}
}
