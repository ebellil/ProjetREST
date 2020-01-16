package com.ecommerce.microcommerce.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ecommerce.microcommerce.dao.ClientRepository;
import com.ecommerce.microcommerce.modele.Client;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="api")
@CrossOrigin(origins="http://localhost:4200")
public class ClientController {
	
	@Autowired
	ClientRepository clientRepository ;
	
	@ApiOperation("Afficher la liste de tout les clients")
	@RequestMapping(value="/clients", method = RequestMethod.GET)
	public List<Client> getAllClient(){
			return clientRepository.findAll() ;
		}
	
	@ApiOperation("Enregistrer un client dans la base de données")
	@RequestMapping(value="/clients", method = RequestMethod.POST,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> enregistrerUnClient(@RequestBody Client newClient){
		
		Client client = clientRepository.save(newClient) ;
		
			if(client == null )
				return  ResponseEntity.noContent().build() ;
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(client.getIdClient())
				.toUri() ;
		
		return ResponseEntity.created(location).build() ;
				
	}
	
	@ApiOperation("Supprimer un client à partir de son ID ")
	@RequestMapping(value="/clients/delete/{id}", method = RequestMethod.DELETE,
					produces = MediaType.APPLICATION_JSON_VALUE)
	
	public ResponseEntity<Client> supprimerUnClient(@PathVariable long id){
		Client client = clientRepository.findById(id) ;
		clientRepository.delete(client);
		
		return new ResponseEntity<>(HttpStatus.OK) ;
	}
	
	@ApiOperation("Chercher un client à partir de son identifiant ")
	@RequestMapping(value="/clients/{identifiant}", method = RequestMethod.GET, 
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Client> rechercheParId(@PathVariable long identifiant){
		return Optional.ofNullable(clientRepository.findById(identifiant))
				.map(client -> new ResponseEntity<>(
						client,
						HttpStatus.OK))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)) ;
		
	}
	
	@ApiOperation("Mise a jour d'un client")
	@RequestMapping(value="/clients/update/{id}", method = RequestMethod.PUT,
			      produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Client> update(@RequestBody Client newClient, @PathVariable long id){
		
		Client client = clientRepository.findById(id) ;
		if(client != null) {
			
			client.setNom(newClient.getNom());
			client.setPrenom(newClient.getPrenom());
			client.setAdresse(newClient.getAdresse());
			client.setTelephone(newClient.getTelephone());
			client.setPhoto(newClient.getPhoto());
			clientRepository.save(client);
			return new ResponseEntity<>(HttpStatus.OK) ;
		}
		
		clientRepository.save(newClient) ;
		return new ResponseEntity<>(HttpStatus.CREATED) ;
	}
	
	@ApiOperation("Recherche de clients par mot clé  ")
	@RequestMapping(value="/clients/mc/{recherche}", method = RequestMethod.GET)
	public List<Client> rechercheParMotCle(@PathVariable String recherche){
		return clientRepository.findBynomLike("%"+recherche+"%") ;
	}
	
}
