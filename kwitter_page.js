//YOUR FIREBASE LINKS

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyCf5Vmdcu5M8IXLMej2N6fdxhsH5MlG10Q",
      authDomain: "kashvi-s-kwitter.firebaseapp.com",
      databaseURL: "https://kashvi-s-kwitter-default-rtdb.firebaseio.com",
      projectId: "kashvi-s-kwitter",
      storageBucket: "kashvi-s-kwitter.appspot.com",
      messagingSenderId: "837172389689",
      appId: "1:837172389689:web:fc49852a308f2180c1eae8",
      measurementId: "G-DW6YM5E2KV"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  user_name=localStorage.getItem("user_name");
  
  room_name=localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData()
 { firebase.database().ref("/"+room_name).on('value',function(snapshot) { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ name + "<img class='user_tick' src = 'tick.png'></h4>";
       message_with_tag  = "<h4 class ='message_h4'>" + message + "</h4>";
       like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='uupdateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function uupdateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id=message_id;
      like = document.getElementById(button_id).value;
      updated_like = Number(like) + 1;
      console.log(updated_like);

      firebase.database().ref(room_name).child(message_id).update({
       like : updated_like     
      });

}


