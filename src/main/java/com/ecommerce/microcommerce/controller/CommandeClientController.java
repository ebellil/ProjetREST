package com.ecommerce.microcommerce.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ecommerce.microcommerce.dao.CommandeClientRepository;
import com.ecommerce.microcommerce.modele.CommandeClient;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(description="Commande Client Controlleur")
@RequestMapping(value="api")
public class CommandeClientController {
	
	@Autowired
	CommandeClientRepository commandeClientRepository ;
	@ApiOperation(value="Afficher la liste des commandes clients")
	@RequestMapping(value="/commandes", method = RequestMethod.GET)
	public List<CommandeClient> getAll(){
		return commandeClientRepository.findAll() ;
	}
	
	@ApiOperation("Chercher une commande selon son ID")
	@RequestMapping(value="/commandes/{identifiant}", method = RequestMethod.GET,
					produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CommandeClient> rechercheParId(@PathVariable long identifiant){
		
		return Optional.ofNullable(commandeClientRepository.findById(identifiant))
				.map(commande -> new ResponseEntity<>(
						commande, 
						HttpStatus.OK))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)) ;
	}
	
	@ApiOperation("Enregistrer une commande ")
	@RequestMapping(value="/commandes", method = RequestMethod.POST,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> enregistrer(@RequestBody CommandeClient newCommande) {
		CommandeClient commande = commandeClientRepository.save(newCommande);
		
		if(commande == null ) 
			return ResponseEntity.noContent().build() ;
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(commande.getIdCommande())
				.toUri();
		
		return ResponseEntity.created(location).build() ;				
		
	}
	
	@ApiOperation("Supprimer une commande client")
	@RequestMapping(value="/commandes/delete/{identifiant}", method = RequestMethod.DELETE,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> supprimerUneCommande(@PathVariable long identifiant){
		commandeClientRepository.deleteById(identifiant);
		return new ResponseEntity<>(HttpStatus.OK) ;
	}
	
	@ApiOperation("Mise à jour de commandes clients ")
	@RequestMapping(value="/commandes/update/{id}", method = RequestMethod.PUT,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CommandeClient> update(@RequestBody CommandeClient newCommande, @PathVariable long id ){
		//CommandeClient commande = commandeClientRepository.findById(id) ;
		
		if(getCommandeByID(id) != null ) {
			getCommandeByID(id).setIdCommande(newCommande.getIdCommande());
			getCommandeByID(id).setCodeCommande(newCommande.getCodeCommande());
			getCommandeByID(id).setDateCommande(newCommande.getDateCommande());
			getCommandeByID(id).setClient(newCommande.getClient());
			getCommandeByID(id).setProduits(newCommande.getProduits());
			
			commandeClientRepository.save(getCommandeByID(id)) ;
			
			return new ResponseEntity<>(HttpStatus.OK) ;
		}
		commandeClientRepository.save(newCommande) ;
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(newCommande.getIdCommande())
				.toUri();
		
		return ResponseEntity.created(location).build();
	}

	@ApiOperation("Prix total de la commande")
	@RequestMapping(value="/commandes/{id}/prixTotal", method = RequestMethod.GET,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public Double prixTotal(@PathVariable long id ){

		double prix = 0;
		for(int j = 0; j < getCommandeByID(id).getProduits().size(); j ++){
			prix = prix + getCommandeByID(id).getProduits().get(j).getPrix();
		}
		return prix;
	}

	private CommandeClient getCommandeByID(long id){
		return commandeClientRepository.findById(id);
	}
	
 
}
