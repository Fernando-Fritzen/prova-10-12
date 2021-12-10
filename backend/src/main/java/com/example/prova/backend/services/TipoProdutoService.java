package com.example.prova.backend.services;

import com.example.prova.backend.model.Fornecedor;
import com.example.prova.backend.model.TipoProduto;
import com.example.prova.backend.repositories.TipoProdutoRepository;
import com.example.prova.backend.services.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TipoProdutoService {

    @Autowired
    private TipoProdutoRepository repository;

    public List<TipoProduto> findAll() {
        List<TipoProduto> list = repository.findAll();
        return list;
    }

    public TipoProduto findById(Long id) {
        Optional<TipoProduto> obj = repository.findById(id);
        return obj.orElseThrow(
                () -> new EntityNotFoundException("Id not found " + id)
        );
    }

    public TipoProduto insert(TipoProduto tipoProduto) {
        return repository.save(tipoProduto);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public TipoProduto update(Long id, TipoProduto obj) {
        TipoProduto entity = repository.findById(id).get();
        updateData(entity, obj);
        return repository.save(entity);
    }

    private void updateData(TipoProduto entity, TipoProduto obj) {
        entity.setTipo(obj.getTipo());
    }
}
