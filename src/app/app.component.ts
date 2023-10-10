import { Component  , OnInit} from '@angular/core';
import{ ProductDataService} from './Services/product-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SalePoint';
  data:any[]=[];  
  constructor(private productDataService: ProductDataService) {}
  ngOnInit(): void {   
    this.productDataService.getCetegory().subscribe(response => {
      this.data=response.data;
    });
  }
}
