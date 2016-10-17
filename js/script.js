$(function(){
$(document).foundation();

    var imageObj = {};
    var divContainer = document.getElementById('canvasdiv'),
    canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    imgHeight = 500,
    imgWidth = 500,
    imageLoader = document.getElementById('imageLoader'),
    img = new Image(),
    xPos = 0,
    yPos = 0,
    imageData,
    data,
    originalData;

    canvas.width = 500;
    canvas.height = 500;
    divContainer.appendChild(canvas);

    var draw = function(){
        ogimageData = ctx.getImageData(xPos,yPos,imgWidth,imgHeight);
        ctx.drawImage(img,xPos,yPos,imgWidth,imgHeight);
        ogdata = ogimageData.data;
        }

    var clearCanvas = function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }


    imageLoader.addEventListener('change',function(e){
        var reader = new FileReader();
        reader.onload = function(event){
            img.onload = function(){
                draw();
            }
            img.src = event.target.result;
            }   
            reader.readAsDataURL(e.target.files[0]); 
        });
    

    var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();


var setOriginalData = function(){
    for(var i = 0; i < data.length; i+= 4){
        originalData[i] = data[i];
        originalData[i+1] = data[i+1];
        originalData[i+2] = data[i+2];
    }
}



    /* 
    panel 1
    */

    $("#widthControl").on('change',function(){
        imgWidth = $(this).val();
        clearCanvas();
        draw();
    });

    $("#heightControl").on('change',function(){
        imgHeight = $(this).val();
        clearCanvas();
        draw();
    });

    $("#xPos").on('change',function(){
        xPos = $(this).val();
        clearCanvas();
        draw();
    });

     $("#yPos").on('change',function(){
        yPos = $(this).val();
        clearCanvas();
        draw();
    });

     $("#reset-panel1").click(function(){
        $("#yPos").val(0);
        $("#xPos").val(0);
        $("#widthControl").val(500);
        $("#heightControl").val(500);
        clearCanvas();
        draw();
        console.log("reset");
     });

    /* panel1 end */


    $("#brigthnessControl").on('change',function(){
        imageData = ctx.getImageData(xPos,yPos,imgWidth,imgHeight);
        ctx.putImageData(ogimageData,xPos,yPos);
        var amount = $(this).val();
        for(var i = 0; i < ogdata.length;i+=4){
            alteredData[i] += Number(amount);
            alteredData[i+1] += Number(amount);
            alteredData[i+2] += Number(amount);
        }
        ctx.putImageData(alteredImageData,xPos,yPos);
    });
        
});