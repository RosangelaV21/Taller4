const knowus = () => {
    let us = prompt("Type the name of a Umbrella Corporation's member").toLowerCase();
  
    switch (us) {
      case "daniel":
        alert("27-year-old colombian student of the Full Stack Web Development course.");
        break;
  
      case "joan":
        alert("24-year-old colombian student of the Full Stack Web Development course.");
        break;
  
      case "karla":
        alert("22-year-old venezuelan/colombian student of the Full Stack Web Development course.");
        break;
  
      case "mary":
        alert("19-year-old colombian student of the Full Stack Web Development course.");
        break;
  
      case "rosangela":
        alert("18-year-old venezuelan student of the Full Stack Web Development course.");
        break;
  
        case "leonardo":
          alert("N-year-old student of the Full Stack Web Development course.");
          break;
  
      default:
        alert("Please, type a integrants's name of the Umbrella Corporation team");
        break;
    }
  };