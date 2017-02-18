$(function(){
  var projects = $("textarea").val();
  projects = JSON.parse(projects);
  console.log(projects);
  var page = 1;
  for(var i = 0; i < projects.length;i++){
    var imageLink;
    if(projects[i].url != "")
      imageLink = projects[i].url;
    else
      imageLink = projects[i]['github'];




    $(".projects").append("<div class='large-6 small-12 columns end'>" +
    "<a href='" + imageLink + "'>" + "<img src='" + projects[i].image +
    "'></img></a><h2>" + projects[i].name + "</h2><p>" + projects[i].description +
    "</p>");



    $(".projects").append("</div>");



  }
});
