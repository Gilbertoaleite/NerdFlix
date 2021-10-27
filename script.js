var listaFilmes = [
  " https://m.media-amazon.com/images/I/51mTtUGvUCL._AC_.jpg ",
  " https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg ",
  " https://br.web.img3.acsta.net/medias/nmedia/18/91/24/93/20136460.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/b9/Hangoverposter09.jpg",
  "https://br.web.img3.acsta.net/pictures/20/11/23/14/35/4981975.jpg",
  " https://img.elo7.com.br/product/original/24B46D2/poster-papel-de-parede-harry-potter-250-cm-x-400-cm-posteres.jpg",
  " https://images-na.ssl-images-amazon.com/images/I/81G5DqNT2SL.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/29/80/20109874.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/d/dd/The_Hangover_Part_II.jpg",
  "https://br.jetss.com/wp-content/uploads/2018/06/Captura-de-Tela-2018-06-06-a%CC%80s-10.19.06.png",
  "https://lumiere-a.akamaihd.net/v1/images/image_46443ba4.jpeg",
  "https://a-static.mlcdn.com.br/618x463/dvd-a-maldicao-da-casa-do-lago-filme-terror-canal-3/alojadediscos/239158/6cc1eb55693cec5bdb02f39906db6b56.jpg",
  " https://cinearaujo.com.br/filmes/filme3050_cp.jpg",
  "https://cdn.cinema10.com.br/unsafe/215x314/smart/cinema10.com.br/upload/filmes/filmes_15400_EN-US_HAT_Main_Vertical_27x40_RGB_PRE-691x1024.jpg",
  "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/7580/filme_7580.jpg",
  "https://cinemacineplus.com.br/site/wp-content/uploads/2021/07/free_guy_assumindo_o_controle_poster_filme_b_1.jpg"
];

var covers = document.getElementById("covers");

for (var i = 0; i < listaFilmes.length; i++) {
  covers.innerHTML += "<img class='cover' src=" + listaFilmes[i] + ">";
}

function Enviar() {
  var inserirUrl = document.getElementById("url").value;
  if (listaFilmes.includes(inserirUrl)) {
    document.getElementById("erro").innerHTML = "Este filme já foi adicionado";
    document.getElementById("url").value = "";
  } else {
    listaFilmes.push(inserirUrl);
    covers.innerHTML +=
      "<img class='cover' src=" + listaFilmes[listaFilmes.length - 1] + ">";
    document.getElementById("url").value = "";
    document.getElementById("erro").innerHTML = "";
  }
}