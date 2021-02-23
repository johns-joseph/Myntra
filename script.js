var cardrow = document.getElementById("cardt2");
cardrow.innerHTML= "<div class=\"slider-container\"> </div>" ;

var i =0 ;



function brand12()
{
    var brands = document.getElementById("12brands") ;
    var arr =["Kurta Sets" ,"Jewellery" ,"Sport Shoes" , "Handbags" , "Mens Jackets" ,"Dresses" , "Mens Flip Flops" , "Sarees", "Womens Jackets","Tops","","",] 
    j=0;
    brands.innerHTML = "<h2 class=\"mt-4 ps-3 text-secondary myn-atom-h2\">CATEGORIES TO BAG</h2>";
    for(j=1;j<4;j++)
     {
         for(i=1;i<4;i++)
         brands.innerHTML +=  "<div class=\"col-4 d-inline-block\"><div class=\"card myn-molc-cardt1 text-center\"><img src=\"images/brand (" + i*j +").PNG\" class=\"card-img-top img-fluid\" alt=\"12 Brands\">"+
                               "<h2 class=\"card-title myn-atom-h2\">"+ arr[i*j -1]+"</h2></div></div>" ;        
     }
  

    brands = document.getElementById("12brandsipad");
    brands.innerHTML = "<h4 class=\"mt-4 ps-md-3 text-secondary myn-atom-h4\">CATEGORIES TO BAG</h4>";
    
    arr = ["Shirts0" , "Shirts1" , "Jewellery" ,"Shirts3" ,"Handbags" ,"Shirts5" ,"T-shirts" ,"Dresses" ,"Sarees" ,"Casual Shoes" ,"Shorts & Trousers " ,"Shorts" , "Flats & Heels"];
    
    j= 0 ;i =0 ;
      for(i=1;i<7;i++)
      {

        brands.innerHTML += "<div class=\"col-md-2 text-center d-md-inline-flex\">"+
                           "<div class=\"card myn-molc-cardt2  myn-molc-cardt2--grey \">"+
                           "<img src=\"images/brand (" + ++j +").PNG\" class=\"card-img-top img-fluid myn-cardt2__img\" alt=\"12 Brands\">"+
                           "<h2 class=\"card-title myn-atom-h2  myn-cardt2__h2 \">"+ arr[j]+"</h2>"+
                           "<img src=\"images/brand (" + ++j +").PNG\" class=\"card-img-top img-fluid\" alt=\"12 Brands\">"+
                           "<h2 class=\"card-title myn-atom-h2 myn-cardt2__h2\">"+ arr[j]+"</h2>"+
                           "</div></div>" ;
      }


}

    brand12();

   

















//     RESEARCH AND DEVELOPMENT 


// "<div class=\"col-4 px-auto\"><div class=\"card\"> </div></div>";

 
//   <div class=\"col-4 d-inline-block\">
//  <div class=\"card\">
//  <img src=\"images/brand`${i+1}`.PNG\" class=\"card-img-top img-fluid\" alt=\"12 Brands\">
//  <h2 class=\"card-title myn-atom-h2\">arr[i]</h2>
//  </div>
//  </div> 


// brands.innerHTML += "</div>";

 //i= 1;
   //  brands.innerHTML = "<img src= \"images/brand ("  +i + ").PNG\"  class=\"img-fluid\">";

// //<img src=\"images/brand`${i+1}`.PNG\" class=\"card-img-top img-fluid\" alt=\"12 Brands\"><h2 class=\"card-title myn-atom-h2\">arr[i]</h2>

// RESEARCH AND DEVELOPMENT 