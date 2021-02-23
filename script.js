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