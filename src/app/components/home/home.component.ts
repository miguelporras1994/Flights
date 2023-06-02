import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, NgForm, Validators} from '@angular/forms';
import { Journey } from 'src/app/models/Journey.model';
import { SearchFlights } from 'src/app/models/SearchFlights';
import { FlightsService } from 'src/app/services/flights.services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Search : SearchFlights  = new SearchFlights()
  disableSelect = new FormControl(false);
   Form! : FormGroup ;
   ListJourney : Journey[] =  []

 
 
  constructor(private flightsService : FlightsService , private  formBuilder: FormBuilder){

  }

  ngOnInit(){
   
    this.Form = this.formBuilder.group({
      origin : new FormControl('', 
                [Validators.required,
                 Validators.minLength(3),
                 Validators.maxLength(3), 
                ]),
     destination: new FormControl('', 
                 [ Validators.required, 
                   Validators.minLength(3),
                   Validators.maxLength(3),
                     ]),
       
     
     });
  
  }

  eventFrom(){
    console.log("llegue")
    console.log(this.Search)
    this.GetFlight(this.Search)
  }

  GetFlight(searchFlights: SearchFlights  ){
    
    
  
    this.flightsService.GetFlight(searchFlights).subscribe( Data => {
        
      
    
      console.log("data" , Data)
      this.ListJourney  = Data
 
     
    })
  }

  

  get destination() { return this.Form.get('destination') as FormControl }
   get origin() { return this.Form.get('origin') as FormControl}

}
