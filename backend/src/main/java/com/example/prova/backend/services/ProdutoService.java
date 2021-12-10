package com.example.prova.backend.services;

import com.example.prova.backend.model.Produto;
import com.example.prova.backend.repositories.ProdutoRepository;
import com.example.prova.backend.services.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    public List<Produto> findAll() {
        List<Produto> produtos = repository.findAll();
        return produtos;
    }

    public Produto findById(Long id) {
        Optional<Produto> obj = repository.findById(id);
        return obj.orElseThrow(
                () -> new EntityNotFoundException("Id not found " + id)
        );
    }

    public Produto insert(Produto produto) {
        return repository.save(produto);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Produto update(Long id, Produto obj) {
        Produto entity = repository.findById(id).get();
        updateData(entity, obj);
        return repository.save(entity);
    }

    private void updateData(Produto entity, Produto obj) {
        entity.setNome(obj.getNome());
        entity.setQuantidade(obj.getQuantidade());
        entity.setPrecoCompra(obj.getPrecoCompra());
        entity.setPrecoVenda(obj.getPrecoVenda());
        entity.setTipoProduto(obj.getTipoProduto());
        entity.setFornecedor(obj.getFornecedor());
    }
}
