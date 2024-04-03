import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 path:string = '../assets/jpg_3.avif';

 path1:string = '../assets/jpg_4.avif';

 cname:string = 'special pecial';

 vcol:string = 'blue';

 mystyle: object = {
   color: 'white',
   background: 'gray',
   border: '5px solid blue'
 };
 counter:number =  0;

 incremenet(){
  this.counter+=1
 };
 decremenet(){
  this.counter-=1
 };
 name = 'xyz';

 changeName(e:any){
  this.name = e.target.value
 };

 hasError:boolean = false;

 time:string = new Date().toLocaleTimeString();

 date:string = new Date().toLocaleDateString();

 timeid = setInterval(()=>{
  this.time = new Date().toLocaleTimeString()
 },1000);

 city = 'Hydrabad'

cityUpdate(){
this.city = 'Bengalore'
}

showHeading = 'true'

data= ['hydrabad','pune','chennai','vijayavada'];
num = ['m','o','s','z','l','d']

persion = {
  "name":'kubs',
  "age":'28',
  "cell":'54544888',

}
dob = new Date();
num1 = 0.98;
company = 'microsoft'
}

