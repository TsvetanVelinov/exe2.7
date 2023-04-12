function deliveryFood (input){

   let chickenMenu = Number(input[0]);
   let fishMenu = Number(input[1]);
   let veganMenu = Number(input[2]);

   let totalChickenMenu = chickenMenu * 10.35;
   let totalFishMenu = fishMenu * 12.40;
   let totalVeganMenu = veganMenu * 8.15;
   let totalMenuPrice = totalVeganMenu+totalFishMenu+totalChickenMenu;

   let dessert = totalMenuPrice * 0.2;

   let deliveryPrice = 2.5 ;

   let finalSum = totalMenuPrice+dessert+deliveryPrice;

   console.log(finalSum);

}

deliveryFood(["2","4","3"])