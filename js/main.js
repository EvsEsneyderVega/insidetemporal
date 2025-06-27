

$(function () {
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        // enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
            previous: 'ANTERIOR',
            next: 'SIGUIENTE',
            finish: 'ENVIAR',
            current: ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            setTimeout(() => {
                //console.log("Han pasado 2 segundos");
                if($('#signature-pad').is(':visible')){
                    // console.log('inicializado el signpad');
                    inicializarSignPad();
                }
                if($('#video').is(':visible')){
                    initCam();
                }
                console.log($('#video').is(':visible'));
            
            }, 2000);
            
            return true;
        },
        onFinished: function (event, currentIndex) {
            // Aquí detectas el final
            alert('¡Formulario finalizado!');

            // Si quieres enviar el formulario automáticamente:
            // $("#form-total").submit();
        }
    });
    $("#day").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText: '<i class="zmdi zmdi-chevron-down"></i>',
    });
});

function inicializarSignPad() {
    const canvas = document.getElementById('signature-pad');
    signaturePad = new SignaturePad(canvas);

    console.log("SignaturePad inicializado");

    // Ajustar tamaño del canvas
    function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        signaturePad.clear();
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Botón limpiar
    document.getElementById('clear').addEventListener('click', () => {
        signaturePad.clear();
    });

    // Botón guardar
    document.getElementById('save').addEventListener('click', () => {
        if (signaturePad.isEmpty()) {
            alert("Por favor, firma antes de guardar.");
        } else {
            const dataURL = signaturePad.toDataURL();
            console.log("Imagen Base64:", dataURL);
            window.open(dataURL);
        }
    });
}

const fotos=[];
//alert(fotos.length);

function initCam(){
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const fotoFinal = document.getElementById('fotoFinal');

const selectorCamara = document.getElementById('optselectorCamara');
const btnIniciar = document.getElementById('btniniciar');
const btnCapturar = document.getElementById('btncapturar');

let streamActual = null;

btnIniciar.addEventListener('click', () => {
    if (streamActual) {
        streamActual.getTracks().forEach(track => track.stop());
    }
    const modo = selectorCamara.value;
    navigator.mediaDevices.getUserMedia({ video: { facingMode: modo } })
        .then(stream => {
            video.srcObject = stream;
            streamActual = stream;
        })
        .catch(err => {
            console.error(err);
            alert('No se pudo acceder a la cámara.');
        });
});

btnCapturar.addEventListener('click', () => {

    const placaInput = document.getElementById('placa');

    canvas.width = 945;
    canvas.height = 825;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const ahora = new Date();
    const fecha = `${ahora.getFullYear()}-${String(ahora.getMonth()+1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2, '0')}`;
    const hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
    const placa = placaInput.value || "SIN PLACA";
    const numerofoto = parseInt(fotos.length)+1
    const textoSuperior = "Fotografía "+ numerofoto;
    const textoInferior = `Fecha: ${fecha}, PLACA: ${placa} HORA: ${hora} `;

    ctx.font = "30px Arial";
    const margen = 10;
    const padding = 5;

    // Medidas del texto
    const anchoTextoSup = ctx.measureText(textoSuperior).width;
    const altoTexto = 35;

    // Rectángulo blanco para el texto superior
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fillRect(margen - padding, margen - padding, anchoTextoSup + padding*2, altoTexto + padding*2);

    // Dibujar el texto superior
    ctx.fillStyle = "black";
    ctx.fillText(textoSuperior, margen, margen + altoTexto);

    // Medidas del texto inferior
    const anchoTextoInf = ctx.measureText(textoInferior).width;

    // Rectángulo blanco para el texto inferior
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fillRect(margen - padding, canvas.height - altoTexto - margen - padding, anchoTextoInf + padding*2, altoTexto + padding*2);

    // Dibujar el texto inferior
    ctx.fillStyle = "black";
    ctx.fillText(textoInferior, margen, canvas.height - margen);

    // Blanco y negro opcional
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    /*for (let i = 0; i < data.length; i += 4) {
        const gris = (data[i] + data[i+1] + data[i+2]) / 3;
        data[i] = gris;
        data[i+1] = gris;
        data[i+2] = gris;
    }*/
    ctx.putImageData(imageData, 0, 0);

    // Exportar
    const dataURL = canvas.toDataURL('image/jpeg', 0.9);
    fotos.push(dataURL);
    fotoFinal.innerHTML="";
    for(let i=0;i<fotos.length;i++){
        fotoFinal.innerHTML += `<img id="" alt="Imagen técnica capturada" src="${fotos[i]}" ></img>`;
    }
    //fotoFinal.src = dataURL;
});
}