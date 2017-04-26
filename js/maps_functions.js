function initMap() {

  var infowindow = new google.maps.InfoWindow();
  var lat = localStorage.getItem("latitudine");
  var lon = localStorage.getItem("longitudine");
  var centerMap = new google.maps.LatLng(lat, lon);
  var zoom = 17;
  if (localStorage.getItem("range")!=null)
  {
    var distanza = localStorage.getItem("range");
    switch (true) {
      case (distanza < 200):
        zoom=18;
        break;
      case (distanza > 200 && distanza < 500):
        zoom=17;
        break;
      case (distanza > 500 && distanza < 800):
        zoom=16;
        break;
      case (distanza > 800 && distanza < 1500):
        zoom=15;
        break;
      case (distanza > 1500 && distanza <= 2200):
        zoom=14;
        break;
      case (distanza > 2200 && distanza <= 3000):
        zoom=13;
        break;
      default:
        zoom=12;
        break;
    }
  }
  if (localStorage.getItem("metri")!=null)
  {
    var metri = localStorage.getItem("metri");
    switch (true) {
      case (metri < 200):
        zoom=18;
        break;
      case (metri > 200 && metri < 500):
        zoom=17;
        break;
      case (metri > 500 && metri < 800):
        zoom=16;
        break;
      case (metri > 800 && metri < 1500):
        zoom=15;
        break;
      case (metri > 1500 && metri <= 2200):
        zoom=14;
        break;
      case (metri > 2200 && metri <= 3000):
        zoom=13;
        break;
      case (metri > 3000 && metri <= 5000):
        zoom=12;
        break;
      case (metri > 5000 && metri <= 8000):
        zoom=12;
        break;
      default:
        zoom=10;
        break;
    }
  }
  console.log("distanza: " + distanza + " - zoom: "+zoom);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: centerMap
  });

  function content(poiType, poiName, address,  lat, lon, distance, url1, url2, url3){
    //var poi_images = ["", "ppu.png", "apparato.png", "bts.png", "armadio.png", "terra.png", "aps.png", "sede.png", "distributore.png", "sito.png", "palo.png"]; 
    var poi_images = ["", "", "", "", "", "", "", "", "", "", "q_posti.png", "", "", "", "", "", "", "", "", "", "d_posti.png", "elettrico.png", "berlina.png"];
    var image="";
      if (url1.length<3)
        image = '<img src="./pics/nia.png" border=0 width=50% />';
      else
        image = '<img src="'+url1+'" border=0 width=50% />';
/*******************
        var content = '<p style="color: #000;" >'+
                      '<input type="hidden" name="targa" id="targa" value="'+arr[id].url2+'" />'+
                      '<input type="hidden" name="vehicle_code" id="vehicle_code" value="'+arr[id].url3+'" />'+
                      '<input type="hidden" name="depot_id" id="depot_id" value="'+arr[id].address+'" />'+
                      '<input type="hidden" name="vehicle_type" id="vehicle_type" value="'+arr[id].poiType+'" />'+
                      '<br><img src="pics/'+poi_images[arr[id].poiType]+'" />&nbsp;&nbsp;&nbsp;' +
                      'Targa: <b>' + arr[id].url2 + '</b><br><br>' +
                      'latitudine: ' + arr[id].latitude + ' - longitudine: ' + arr[id].longitude + '<br>distanza: ' + km + '<br>' +
                      '<label for="motivoUtilizzo" >Motivo utilizzo </label>'+
                      '<select id="motivoUtilizzo" name="motivoUtilizzo" class="form-control">'+
                      '<option value="1" SELECTED >Servizio</option>'+
                      '<option value="2">Riunione</option>'+
                      '<option value="3">Progettazione/Esercizio Impianti</option>'+
                      '<option value="4">Docenza</option>'+
                      '<option value="5">Visita Clienti</option>'+
                      '<option value="6">Convegno</option>'+
                      '<option value="7">Formazione</option>'+
                      '<option value="8">Altro</option>'+
                      '</select>'+
                      '<label for="tipoPercorso" >Tipo percorso </label>'+
                      '<select id="tipoPercorso" name="tipoPercorso" class="form-control">'+
                      '<option value="1">Autostrada</option>'+
                      '<option value="2" SELECTED >Urbano</option>'+
                      '<option value="4">Extra urbano</option>'+
                      '<option value="5">Misto</option>'+
                      '</select>'+
                      '<label for="pathlen">Chilometri previsti </label>'+
                      '<input id="pathlen" name="pathlen" type="text" class="form-control" value="0" />'+
                      '</p>';
*/
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">' + poiName + '</h4>'+
      '<input type="hidden" name="targa" id="targa" value="'+url2+'" />'+
      '<input type="hidden" name="vehicle_code" id="vehicle_code" value="'+url3+'" />'+
      '<input type="hidden" name="depot_id" id="depot_id" value="'+address+'" />'+
      '<input type="hidden" name="vehicle_type" id="vehicle_type" value="'+poiType+'" />'+
      '<div id="bodyContent">'+
      '<p style="color: #000;" >'+
      //'<img src="pics/'+poi_images[poiType]+'" /> - ' +
      '<img src="pics/q_posti.png" /> - ' +
      'TARGA: ' + url2 + '<br>' +
      'latitudine: ' + lat + ' - longitudine: ' + lon + ' - distanza: ' + distance + '<br><br>' +
                      '<label for="motivoUtilizzo" >Motivo utilizzo </label>'+
                      '<select id="motivoUtilizzo" name="motivoUtilizzo" class="form-control">'+
                      '<option value="1" SELECTED >Servizio</option>'+
                      '<option value="2">Riunione</option>'+
                      '<option value="3">Progettazione/Esercizio Impianti</option>'+
                      '<option value="4">Docenza</option>'+
                      '<option value="5">Visita Clienti</option>'+
                      '<option value="6">Convegno</option>'+
                      '<option value="7">Formazione</option>'+
                      '<option value="8">Altro</option>'+
                      '</select>'+
                      '<label for="tipoPercorso" >Tipo percorso </label>'+
                      '<select id="tipoPercorso" name="tipoPercorso" class="form-control">'+
                      '<option value="1">Autostrada</option>'+
                      '<option value="2" SELECTED >Urbano</option>'+
                      '<option value="4">Extra urbano</option>'+
                      '<option value="5">Misto</option>'+
                      '</select>'+
                      '<label for="pathlen">Chilometri previsti </label>'+
                      '<input id="pathlen" name="pathlen" type="text" class="form-control" value="0" />'+
      '</p>'+
      '<button class="btn btn-success btn-lg bottone" onclick="prenotazioneDiretta()" >'+
      '<span class="glyphicon glyphicon-check pull-left" aria-hidden="true"></span>Prenota</button><br><br>'+
        '    <button onclick="NavigaVerso('+lat+', '+lon+')" class="btn btn-default btn-lg bottone" >'+
        '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
        '    &nbsp;&nbsp;Naviga Verso'+
        '    </button>'+
      '</div>'+
      '</div>';
      return(contentString);
  }

  function marker(icon, title, point, content){
    var marker = new google.maps.Marker({
      position: point,
      map: map,
      icon: 'pics/' + icon,
      title: title
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(content);
      infowindow.open(map, this);
    });
  }

//ciclo  su lista per visualizzare tutti i punti sulla mappa con i relativi contenuti...
  //VISUALIZZA LA LISTA PRECEDENTEMENTE SALVATA dalle pagine: ric_elemento e ric_indirizzo
  var lista = localStorage.getItem("lista");
  var arr = JSON.parse(lista);
  var i;
  //var poi_images = ["", "ppu.png", "apparato.png", "bts.png", "armadio.png", "terra.png", "aps.png", "sede.png", "distributore.png", "sito.png", "palo.png"]; 
  var poi_images = ["", "", "", "", "", "", "", "", "", "", "q_posti.png", "", "", "", "", "", "", "", "", "", "d_posti.png", "elettrico.png", "berlina.png"];
  for(i = 0; i < arr.length; i++) {
    console.log(i + "" + arr[i].poiName);
    // tolta la vitgola ai metri...
    var metri = arr[i].distance.split(".")[0]+" mt";
    //var contenuto = content(arr[i].poiType, arr[i].poiName, arr[i].address, arr[i].latitude, arr[i].longitude, arr[i].distance, arr[i].url1, arr[i].url2, arr[i].url3)
    var contenuto = content(arr[i].poiType, arr[i].poiName, arr[i].address, arr[i].latitude, arr[i].longitude, metri, arr[i].url1, arr[i].url2, arr[i].url3);
    var LatLng = new google.maps.LatLng(arr[i].latitude, arr[i].longitude);
    marker(poi_images[arr[i].poiType], arr[i].poiName, LatLng, contenuto);
  }

}
