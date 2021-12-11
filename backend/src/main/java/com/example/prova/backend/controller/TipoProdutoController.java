package com.example.prova.backend.controller;

import com.example.prova.backend.model.Fornecedor;
import com.example.prova.backend.model.TipoProduto;
import com.example.prova.backend.services.TipoProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/tipoproduto")
public class TipoProdutoController {

    @Autowired
    private TipoProdutoService service;

    @GetMapping
    public ResponseEntity<List<TipoProduto>> findAll() {
        List<TipoProduto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TipoProduto> findById(@PathVariable Long id) {
        TipoProduto obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<TipoProduto> insert(@RequestBody TipoProduto tipoProduto) {
        tipoProduto = service.insert(tipoProduto);
        return ResponseEntity.ok().body(tipoProduto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<TipoProduto> update(@PathVariable Long id, @RequestBody TipoProduto tipoProduto) {
        tipoProduto = service.update(id, tipoProduto);
        return ResponseEntity.ok().body(tipoProduto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
