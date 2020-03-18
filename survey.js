document.getElementById('submitButton').style.display="none";
 var image0_path = turkGetParam('image0');
 var image1_path = turkGetParam('image1');
 var image2_path = turkGetParam('image2');
 var image3_path = turkGetParam('image3');
 var image4_path = turkGetParam('image4');


 var thankyou_image="https://www.thebalancecareers.com/thmb/et_XxOpLL8Z3BZaVBx2AKHJwgOo=/3865x2174/smart/filters:no_upscale()/thank-you-185078737-58adfa013df78c345b0837e7.jpg"

 document.getElementById('image').src=image0_path;
 var count = 0;
 var user_response=[];
 function selected_emotion(emotion)
  {
  user_response.push(count+":" + emotion + ";");
  count=count+1;
  }

 
 
 function loadNextImage()
 {
  var ischecked=false;
  var ele = document.getElementsByName("emotion");
  for(var i=0;i<ele.length;i++)
    {
      if(ele[i].checked){
        ischecked=true;
      }
       ele[i].checked = false;
       
    }

    if(!ischecked)
    {
      alert("Please choose atleast one of the rating levels!!");
    }
 else{
   if (count==1)
   {
   document.getElementById('image').src=image1_path;
   }
   else if(count==2)
   {
     document.getElementById('image').src=image2_path;
   }
   else if(count==3)
   {
     document.getElementById('image').src=image3_path;
   }
   else if(count==4)
   {
     document.getElementById('image').src=image4_path;
     document.getElementById('Next').style.display="none";
     document.getElementById('submitButton').style.display="block";
     return;
   }
 

  //  if (count==4)
  //  {
  //   document.getElementById('Next').style.display="none";
    
  //   // document.getElementById('rating_level').style.display="none";

  //  }
  }
 }

 function isSelected()
 {
   var res=user_response.toString();
   document.getElementById('selected_Emotion').value = res;
   console.log(res);
 }

 

 turkSetAssignmentID();
 
 