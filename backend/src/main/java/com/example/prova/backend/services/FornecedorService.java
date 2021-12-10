package com.example.prova.backend.services;

import com.example.prova.backend.model.Fornecedor;
import com.example.prova.backend.model.Produto;
import com.example.prova.backend.repositories.FornecedorRepository;
import com.example.prova.backend.services.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FornecedorService {

    @Autowired
    private FornecedorRepository repository;

    public List<Fornecedor> findAll() {
        List<Fornecedor> list = repository.findAll();
        return list;
    }

    public Fornecedor findById(Long id) {
        Optional<Fornecedor> obj = repository.findById(id);
        return obj.orElseThrow(
                () -> new EntityNotFoundException("Id not found " + id)
        );
    }

    public Fornecedor insert(Fornecedor fornecedor) {
        return repository.save(fornecedor);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Fornecedor update(Long id, Fornecedor obj) {
        Fornecedor entity = repository.findById(id).get();
        updateData(entity, obj);
        return repository.save(entity);
    }

    private void updateData(Fornecedor entity, Fornecedor obj) {
        entity.setNome(obj.getNome());
        entity.setTelefone(obj.getTelefone());
        entity.setCnpj(obj.getCnpj());
    }
}
