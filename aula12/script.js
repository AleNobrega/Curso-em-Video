function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "./assets/fotomanha.jpg";
    document.body.style.background = '#F0E68C';
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src = "./assets/fototarde.jpg";
    document.body.style.background = '#FFDEAD';
  } else {
    // BOA NOITE
    img.src = "./assets/fotonoite.jpg";
    document.body.style.background = '	#191970';
  }
}
