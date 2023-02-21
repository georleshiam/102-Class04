let prompt;
 let favSong = prompt("What's your favorite gene of music?");
 switch(favSong) {
   case "R&B":
     text = "Excellent choice! R&B is good for your soul.";
     break;
   case "Rap":
     text = "Rap is my favorite too!";
     break;
   case "Rock":
     text = "Really? Are you sure the Rock is your favorite?";
     break;
   default:
     text = "I have never heard of that one!";
 }
