import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

}