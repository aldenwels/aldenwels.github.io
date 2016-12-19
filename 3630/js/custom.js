$(function(){

    var parentOneAlleleA, parentOneAlleleB, parentTwoAlleleA, parentTwoAlleleB;
    var dominantTraits = ["Brown Eyes","Brown Hair","No Cleft","Dimples"];
    var recessiveTraits = ["Blue Eyes","Blonde hair","Cleft Chin","No Dimples"];
    var dominantImg = ["img/brown-eyed.jpg","img/brownhairemoji.png","img/chin1.jpg","img/dimples.jpg"];
    var recessiveImg = ["img/blue-eye.jpg","img/light-brown-person-with-blond-hair.png","img/cleft.jpg","img/no_dimples.jpg"];
    var traitIndex = 0;


    initAlleles();
    initChildren();
    setDominantSelectors();
    setRecessiveSelectors();

    function initAlleles(){
      parentOneAlleleA = $('#parent1a option:selected').val();
      parentOneAlleleB = $("#parent1b option:selected").val();
      parentTwoAlleleA = $("#parent2a option:selected").val();
      parentTwoAlleleB = $("#parent2b option:selected").val();
    }
    //initialize children
    function initChildren(){
      if(parentOneAlleleA == dominantTraits[traitIndex] || parentTwoAlleleA == dominantTraits[traitIndex])
          $("#posChild1 > img").attr("src",dominantImg[traitIndex]);
      else
          $("#posChild1 > img").attr("src",recessiveImg[traitIndex]);
      
      if(parentOneAlleleB == dominantTraits[traitIndex] || parentTwoAlleleA == dominantTraits[traitIndex])
          $("#posChild2 > img").attr("src",dominantImg[traitIndex]);
      else
          $("#posChild2 > img").attr("src",recessiveImg[traitIndex]);
      
      if(parentOneAlleleA == dominantTraits[traitIndex] || parentTwoAlleleB == dominantTraits[traitIndex])
          $("#posChild3 > img").attr("src",dominantImg[traitIndex]);
      else
          $("#posChild3 > img").attr("src",recessiveImg[traitIndex]);
      
      if(parentOneAlleleB == dominantTraits[traitIndex] || parentTwoAlleleB == dominantTraits[traitIndex])
        $("#posChild4 > img").attr("src",dominantImg[traitIndex]);
      else
        $("#posChild4 > img").attr("src",recessiveImg[traitIndex]);
    }

  $('#parent1a').change(function() {
      parentOneAlleleA = $('#parent1a option:selected').val();
      initChildren();
  });
  $('#parent1b').change(function() {
      parentOneAlleleB = $('#parent1b option:selected').val();
      initChildren();
  });
   $('#parent2a').change(function() {
      parentTwoAlleleA = $('#parent2a option:selected').val();
      initChildren();
  });
   $('#parent2b').change(function() {
      parentTwoAlleleB = $('#parent2b option:selected').val();
      initChildren();
  });

  $('.traitSelector').change(function() {
      traitIndex = $('.traitSelector option:selected').val();
      setDominantSelectors();
      setRecessiveSelectors();
  });   

   function setDominantSelectors(){
    console.log(traitIndex);
      $(".dominant").each(function(){
        $(this).val(dominantTraits[traitIndex]);
        $(this).text(dominantTraits[traitIndex]);
      });
      initAlleles();
      initChildren();
   }

    function setRecessiveSelectors(){
      $(".recessive").each(function(){
        $(this).val(recessiveTraits[traitIndex]);
        $(this).text(recessiveTraits[traitIndex]);
      });
      initAlleles();
      initChildren(); 
   }

});
