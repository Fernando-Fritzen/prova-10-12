package com.example.prova.backend;

import com.example.prova.backend.model.Produto;
import com.example.prova.backend.repositories.ProdutoRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BackendApplicationTests {

	@LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
	ProdutoRepository produtoRepository;

    @Test
	void list_ReturnsListOfProduto_WhenSuccesful() {
    	Produto produto = new Produto(1L, "Teste", 4, 25.99, 45.99);
    	Produto produtoSaved = produtoRepository.save(produto);
    	String expectedName = produtoSaved.getNome();

		List<Produto> produtos = restTemplate.exchange("/produtos", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Produto>>() {
				}).getBody();
		Assertions.assertThat(produtos).isNotNull();
		Assertions.assertThat(produtos.get(0).getNome()).isEqualTo(expectedName);
	}

	@Test
	void save_ReturnsBadRequest_WhenPrecoVendaIsLessThanPrecoCompra() {

		Produto produto = new Produto("Teste", 3, 38.5, 36.5);
		ResponseEntity<Produto> responseEntity = this.restTemplate
				.postForEntity("http://localhost:" + port + "/produtos", produto, Produto.class);

		Assertions.assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
	}

}
