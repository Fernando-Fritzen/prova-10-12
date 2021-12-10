package com.example.prova.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class TipoProduto implements Serializable {

    @Id
    private Long id;
    private String tipo;

    @JsonIgnore
    @OneToMany(mappedBy = "tipoProduto", cascade = CascadeType.ALL)
    private List<Produto> produtos = new ArrayList<>();

    public TipoProduto() {

    }

    public TipoProduto(Long id, String tipo) {
        this.id = id;
        this.tipo = tipo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }
}
