
//ADD YOUR FIREBASE LINKS

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

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
 { room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
 localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"; }

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
