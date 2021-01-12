package com.farouk.bengharssallah.react.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.farouk.bengharssallah.react.backend.domain.User;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
	
	User findByUsername(String username);
	
}