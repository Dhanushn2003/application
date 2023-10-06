package com.bookstore.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookstore.entities.Role;
import com.bookstore.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
Optional<User> findByEmail(String email);
User findByRole(Role role);
}
