AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaDoEvento <0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Já aconteceu';
    }
}, 1000);