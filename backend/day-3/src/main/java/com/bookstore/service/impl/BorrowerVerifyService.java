package com.bookstore.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.entities.BorrowerVerifyEntity;
import com.bookstore.repo.BorrowerVerifyRepo;
import com.bookstore.service.BorrowerVerifyInt;

@Service
public class BorrowerVerifyService implements BorrowerVerifyInt {
    @Autowired
    private BorrowerVerifyRepo bvr;
	@Override
	public List<BorrowerVerifyEntity> getBorrower() {
		return bvr.findAll();
	}

	@Override
	public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bve) {
		return bvr.save(bve);
	}

	@Override
	public BorrowerVerifyEntity putBorrower(BorrowerVerifyEntity bve) {
		return bvr.save(bve);
	}

	@Override
	public void deleteBorrower(int id) {
		bvr.deleteById(id);
		
	}



}
