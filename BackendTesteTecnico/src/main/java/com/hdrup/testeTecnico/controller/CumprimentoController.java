package com.hdrup.testeTecnico.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200") // Permitindo que a porta utilizada pelo front acesse simultaneamente o backend
@RestController
@RequestMapping("/api")
public class CumprimentoController {

	// Função simples que receberá o nome digitado no Frontend e concatenar para retornar um cumprimento
	@GetMapping("/cumprimento/{nomeEnviado}")
	public String RetornarCumprimento(@PathVariable String nomeEnviado)
	{
		return "Olá " + nomeEnviado + "!";
	}
	
	
}
