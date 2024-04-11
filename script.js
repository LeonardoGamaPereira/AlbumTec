const nomeCapitulo = document.getElementById("faixa");
const audio = document.getElementById("track");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const quantidadeTracks = 17;
let taTocando = false;
let faixa = 1;

function tocarFaixa() {
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
  audio.play();
  taTocando = true;
}

function pausarFaixa() {
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  audio.pause();
  taTocando = false;
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function nomeDaFaixa(numeroDaFaixa) {
    switch (numeroDaFaixa) {
      case 1:
        return "Yves";
      case 2:
        return "HVN ON EARCH(with Kodak Black)";
        case 3:
        return "Gist";
        case 4:
        return "500lbs";
        case 5:
            return "Fell In Love(with Ken Carson)";
            case 6:
                return "TEC";
                case 7:
                    return "Salty";
                    case 8:
                        return "Real Discussions";
                        case 9:
                            return "Dead or Live";
                            case 10:
                                return "Want It Bad";
                                case 11:
                                    return "U Don't Know Tec";
                                    case 12:
                                        return "Used2This";
                                        case 13:
                                            return "Trippin On U";
                                            case 14:
                                                return "Either Way";
                                                case 15:
                                                    return "Need Me";
                                                    case 16:
                                                        return "Monday to Sunday";
                                                        case 17:
                                                         return "Down With Me";
      default:
        return "Nome da Faixa Padrão";
    }
  }

  function faixaAnterior() {
    if (faixa === 1) {
      faixa = quantidadeTracks;
    } else {
      faixa -= 1;
    }
    audio.src = "TEC/Lil-Tecca/" + faixa + ".mp3";
    nomeCapitulo.innerText = nomeDaFaixa(faixa); 
    tocarFaixa();
  }

  function proximaFaixa() {
    if (faixa < quantidadeTracks) {
      faixa += 1;
    } else {
      faixa = 1;
    }
    audio.src = "TEC/Lil-Tecca/" + faixa + ".mp3";
    nomeCapitulo.innerText = nomeDaFaixa(faixa); 
    tocarFaixa();
  }

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", faixaAnterior);
botaoProximoCapitulo.addEventListener("click", proximaFaixa);
audio.addEventListener("ended", proximaFaixa);
