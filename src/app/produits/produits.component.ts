import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

    produits? : Produit[]; //un tableau de produits

  constructor(private produitService: ProduitService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { 
   //this.produits=[];
     }

  ngOnInit(): void {

    this.produits = this.produitService.listeProduits();
  }
  supprimerProduit(p: Produit) {
  //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf) 
     this.produitService.supprimerProduit(p); 
  }

 

}
