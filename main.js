function StartClassification()
{
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zX55xRlEu/model.json', modelReady);
}

function modelReady()
{
  classifier.classify(gotResults);
}

function gotResults(error, results)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    random_number_r = Math.floor(Math.random()*255) + 1;
    random_number_g = Math.floor(Math.random()*255) + 1;
    random_number_b = Math.floor(Math.random()*255) + 1;
    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label; 
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+ random_number_r +","+ random_number_g +","+random_number_r+")"; 
    document.getElementById("result_confidence").style.color = "rgb("+ random_number_r +","+ random_number_g +","+random_number_r+")";
    img = document.getElementById('car_1');
    img1 = document.getElementById('car_2');
    img2 = document.getElementById('car_3');
    img3 = document.getElementById('car_4');

    if(results[0].label == "Clap")
    {
      img.src = 'car1.gif';
      img1.src = 'car2.png';
      img2.src = 'car3.png';
      img3.src = 'car4.png';
    }
    else if(results[0].label == "Whistle")
    {
      img.src = 'car1.png';
      img1.src = 'car2.gif';
      img2.src = 'car3.png';
      img3.src = 'car4.png';
    }
    else if(results[0].label == "Meowing")
    {
      img.src = 'car1.png';
      img1.src = 'car2.png';
      img2.src = 'car3.gif';
      img3.src = 'car4.png';
    }
    else
    {
      img.src = 'car1.png';
      img1.src = 'car2.png';
      img2.src = 'car3.png';
      img3.src = 'car4.gif';
    }
  }
}