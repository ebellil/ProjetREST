package com.ecommerce.microcommerce.controller;

import java.util.ArrayList;
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

import com.ecommerce.microcommerce.dao.ProduitRepository;
import com.ecommerce.microcommerce.exception.ProduitIntrouvaleException;
import com.ecommerce.microcommerce.modele.Produit;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="api")
public class ProduitController {
	
	@Autowired
	ProduitRepository produitRepository ;
	
	@ApiOperation("Afficher la liste des produits ")
	@RequestMapping(value="/produits", method = RequestMethod.GET)
	public  List<Produit> getAllProduit(){
		return produitRepository.findAll() ;
	}
	
	@ApiOperation("Chercher un produit selon son ID")
	@RequestMapping(value="/produits/{id}", method = RequestMethod.GET,
					produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produit> chercherParId(@PathVariable long id) {
		
		return Optional.ofNullable(produitRepository.findById(id))
				.map(produit -> new ResponseEntity<>(
						produit,
						HttpStatus.OK))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)) ;
	}
	
	@ApiOperation("Enregistrer un produit")
	@RequestMapping(value="/produits", method = RequestMethod.POST,
					produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produit> enregistrerUnProduit(@RequestBody Produit produit){
		produitRepository.save(produit) ;
		return new ResponseEntity<>(HttpStatus.CREATED) ;
	}
	
	@ApiOperation("Mise à jour d'un produit")
	@RequestMapping(value="/produits/{id}", method = RequestMethod.PUT,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produit> update(@RequestBody Produit newProduit, @PathVariable long id){
		
		Produit produit = produitRepository.findById(id) ;
		
		if(produit != null) {
			produit.setDesignation(newProduit.getDesignation());
			produit.setPrix(newProduit.getPrix());
			produit.setQuantite(newProduit.getQuantite());
			produit.setPhoto(newProduit.getPhoto());
			
			produitRepository.save(produit);
			
			return new ResponseEntity<>(HttpStatus.OK) ;
		}
		
		produitRepository.save(newProduit) ;
		return new ResponseEntity<>(HttpStatus.CREATED) ;
	}
    
	@ApiOperation("Suppresion d'un produit selon son ID")
	@RequestMapping(value="/produits/delete/{id}", method = RequestMethod.DELETE,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produit> supprimerUnProduit(@PathVariable long id){
		
		produitRepository.deleteById(id);	
		
		return new ResponseEntity<>(HttpStatus.OK) ;
		
	}
	
	@ApiOperation("Rcehercher un produit par mot clé")
	@RequestMapping(value="/produits/mc/{recherche}", method = RequestMethod.GET)
	public List<Produit> rechercherParMotCle(@PathVariable String recherche) throws ProduitIntrouvaleException{
		List<Produit> produits = new ArrayList<>() ;
		produits = produitRepository.findBydesignationLike("%"+recherche+"%") ;
		
		if(produits == null) throw new ProduitIntrouvaleException(
					"le produit est introuvable "+recherche) ;
		
			return produits ;	
									
	}

	@ApiOperation("Affiche les produits les plus chèr de la limite")
	@RequestMapping(value="/produits/prix/{prixLimite}", method = RequestMethod.GET)
	public List<Produit> getAllPrixSup(@PathVariable double prixLimite){
 
		 return produitRepository.findByPrixGreaterThan(prixLimite) ;
	}
	

	
	
}
