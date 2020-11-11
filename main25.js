

function createCar(mk,hp,torc,options,price,review){
  var likes=0;
  var dislikes=0;
  var car={}; 
    car.mk=mk;
    car.hp=hp;
    car.torc=torc;
    car.options=options;
    car.price=price;
    car.review=review;
    car.likes=likes;
    car.dislikes=dislikes;
    car.like=like;
    car.dislike=dislike
  return car;
} 
function display (obj){
var res=""; 
res+=obj.mk+ " has "+obj.hp + " horsepower "+ obj.torc +" Newton meter "+reduce(obj.options,function(a,el){return a+=el},"The car is options are ")
return res;
}
 function reduce(coll, f, acc) { 
        if (!Array.isArray(coll)){
          var arr = Object.keys(coll);
          var acc=coll[arr[0]]
        }
        else{
          var arr = coll;
        }
       if (acc === undefined) { 
             acc = coll[0]; 
             arr = arr.slice(1); 
       } 
       each(coll, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }
 function each(coll,f){
  if(Array.isArray(coll)) {
  for(var i=0 ;  i<coll.length ; i++ ){
    f(coll[i],i);
  }
  }
  
  else  {for( var i in coll){
    f(coll[i],i);
  }
  }
}
function like (){
  this.likes+=1;
}
function dislike(){
  this.dislikes+=1;
}
var cars=[];
function update(car){
 cars.push(car);
}
var alfa=createCar("Alfa Romeo Giullia",280,415,["sequential gear box ","abs","esp"],"90,450 USD")
var audi=createCar("Audi RS4",450,600,["dsg","abs","esp"],"80,590 USD")
var bmw=createCar("BMW M3",460,560,["vanos","abs","esp","M spec"],"70,590 USD")
var mersedes_benz=createCar("c63",500,580,["7+tronic gearbox","abs","esp","AMG spec"],"75,890 USD") 
var vw=createCar("golf R",320,420,["dsg","abs","esp","R spec"],"50,890 USD")
var porsche=createCar("golf R",600,620,["esp","R spec"],"900,000 USD")
update(alfa);
update(audi);
update(bmw);
update(mersedes_benz)
update(vw);
update(porsche);
function display1 (obj){
var res=""; 
     res+=obj.mk+ " has "+obj.hp + " horsepower "+ obj.torc +" Newton meter "+reduce(obj.options,function(a,el){return a=a+" " +el},"The car's options are ")
return res;
}