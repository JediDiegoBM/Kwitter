var firebaseConfig = {
      apiKey: "AIzaSyC2XjMZNE37QtnDkQukQ_f6Z32RbN5KTtI",
      authDomain: "practica-clase-94.firebaseapp.com",
      databaseURL: "https://practica-clase-94-default-rtdb.firebaseio.com",
      projectId: "practica-clase-94",
      storageBucket: "practica-clase-94.appspot.com",
      messagingSenderId: "680068356539",
      appId: "1:680068356539:web:a7cc7534319c4145698c9e",
};

firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bienvenido " + user_name;

function addRoom() {
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({ purpose: "Agregar nombre de sala" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
