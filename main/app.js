function removeOrderItem(orderInfo, position){
  Objs=orderInfo;

  //isArray verifica daca e array
  if(!Array.isArray(Objs.items)){
    throw "Items should be an array";
  }
  
  //hasOwnProperty verifica existenta la price si quantity
  for(var i=0; i<Objs.items.length; i++ ){
    if(!(Objs.items[i].hasOwnProperty("price") && Objs.items[i].hasOwnProperty("quantity") && Object.keys(Objs.items[i]).length==2)){
        throw "Malformed item";
    }
  }

  if(Objs.items.length<position){
    throw "Invalid position";
  }

  //slice elimina
   Objs.items.splice(position,1);
 
   var sum=0;
   for(var i=0;i<Objs.items.length;i++){
       sum=sum+(Objs.items[i].price*Objs.items[i].quantity);
   }

   Objs.total=sum;
   return Objs;

}

const app = {
    removeOrderItem
};

module.exports = app;