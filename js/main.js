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
                console.log("Han pasado 2 segundos");
                if($('#signature-pad').is(':visible')){
                    console.log('inicializado el signpad');
                    inicializarSignPad();
                }
            
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