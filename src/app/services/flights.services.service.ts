import { Injectable } from '@angular/core';
import { SearchFlights } from '../models/SearchFlights';
import { Journey } from '../models/Journey.model';
import { HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

 
  
  constructor(private Http : HttpClient) { }



//  private ApiUrl ='https://pokeapi.co/api/v2/'
// private  prueba = 'https://pokeapi.co/api/v2/pokemon/1/'
 private ApiUrl  = 'https://localhost:7154/'
 
  //  Getall(){
   
  //   var prueba =  this.Http.get<results>(this.ApiUrl + 'pokemon')
  //     console.log("prueba", prueba)
  //     return prueba
  //  }
 

  //  GetallDetails(Url : string ){
   
  //   var response =  this.Http.get<Pokemon>(Url)
 
  //     return response
  //  }
 
 

     GetFlight(data : SearchFlights){
     
       return this.Http.post<Journey[]>(this.ApiUrl+'GetFlights', data)
 
   }
 
 
  //  Edit(data : Product){
  //    return this.Http.put(`${this.ApiUrl}/${data.idProduct}` , data)
  //  }
 
  //  Delete (Id : number){
  //    return this.Http.delete(`${this.ApiUrl}/${Id}`)
  //  }
}
