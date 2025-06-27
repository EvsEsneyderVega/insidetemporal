// objeto de datos
const data = {
    encabezado: {
                 nombrecda:'cda el chiringuito s.a.s', 
                 telcda:'321321321321',
                 nitcda:'900123123-1',
                 dircda:'calle 1 No 123-123',
                 ciudadcda: 'Bogotá',
                 deptocda:'Cundinamarca',
                 logocda: ''
                 
    },
    formato:{fecha:'2025-06-22',
             version:'2',
             codigo:'GT-F-01',
             numero: 12345,
             vez:'1'
    },
    vehiculo: { 
                fecha:'2025-06-22 07:05:02',
                placa: 'ABC123',
                pais: 'COLOMBIA',
                servicio: 'PARTICULAR',
                clase: 'AUTOMOVIL',
                marca:'RENAULT',
                linea:'SANDERO',
                modelo:'2002',
                nolicencia:'100011001',
                fechamatricula:'2001-04-03',
                color:'NEGRO',
                combustible:'GASOLINA',
                vin:'123456',
                nomotor:'123456',
                tpmotor:'OTTO',
                cilindraje:'1300',
                kms:'25000',
                nopasajeros:'4',
                blindado:'SI',
                ense:'SI',
                potencia:'***',
                carroceria:'SEDAN',
                fechasoat:'2026-08-03',
                conversiongnv:'',
                fechagnv:'2025-12-03',
                gnv:'SI',
                presiones:{
                            eje1I:'128.1',
                            eje1D:'133.2',
                            eje2I1:'133.3',
                            eje2I2:'134.4',
                            eje2D1:'135.5',
                            eje2D2:'136.6',
                            eje3I1:'133.3',
                            eje3I2:'134.4',
                            eje3D1:'135.5',
                            eje3D2:'136.6',
                            eje4I1:'133.3',
                            eje4I2:'134.4',
                            eje4D1:'135.5',
                            eje4D2:'136.6',
                            eje5I1:'133.3',
                            eje5I2:'134.4',
                            eje5D1:'135.5',
                            eje5D2:'136.6',
                            repI:'133.3',
                            repD:'134.4',
                },
    observaciones:[],
    autorizacion:false,
    recepcionista:'pepito perez',
    firmarecepcionista:'',
    },
    propietario: {nombre: 'Juan Perez',
                  documento:'123456789',
                  direccion:'CALLE 1 #22 33',
                  telefono: '3000000000',
                  pais:'',
                  departamento:'',
                  ciudad:'BOGOTÁ',
                  depto: 'CUNDINAMARCA',
                  tp_doc:'NIT',
                  correo: 'ALGO@TEST.COM.CO',
                  firma:''
                  
    },
    criterios:[
       {'criterio':'Vehículo Completamente descargado.   ','concepto':'C' },
       {'criterio':'Llanta de repuesto sin protector y que permita el acceso. ','concepto':'C' },
       {'criterio':'Sin dejar dinero, radio, u otros elementos extraíbles.  ','concepto':'C' },
       {'criterio':'Filtro de aire desatornillado ','concepto':'C' },
       {'criterio':'Alarma desactivada  ','concepto':'C' },
       {'criterio':'Batería asequible (sin cubre batería). ','concepto':'C' },
       {'criterio':'En buen estado de limpieza  ','concepto':'C' },
       {'criterio':'Sin cadena o candado en cabinas basculantes cuando aplique ','concepto':'N/A' },
       {'criterio':'Sin tapacubos o copas plásticas  ','concepto':'C' },
       {'criterio':'Cinturones de seguridad libres y visibles. ','concepto':'C' },
       {'criterio':'Enciende alguna luz del vehículo. ','concepto':'C' },
       {'criterio':'Deposito del líquido de frenos visible ','concepto':'C' },
       {'criterio':'Combustible suficiente','concepto':'C'}
    ],
    contrato:[
    'El servicio de revisión técnico - mecánica y de emisiones contaminantes que se presta en el Centro de Diagnóstico Automotor (CDA PUENTE ARANDA 12-44 S.A.S.), es el contemplado en los artículos 28, 50 y 51 de la ley 769 de 2002 y sus modificaciones, reglamentada por la Resolución 3768 de 2013, y resolución 20203040011355:2020.',
    'El tiempo estimado de prueba, el cual es de 50 minutos, puede variar teniendo en cuenta el flujo vehicular, lo que ocasionará un tiempo adicional. Recuerde que es obligatoria la presencia física del vehículo en el CDA, la documentación y vigencia de la misma.',
    'Se realizará a su vehículo las siguientes pruebas e inspecciones: para automóviles: emisiones contaminantes, frenos, luces, inspección sensorial, alineación, suspensión, presión sonora y si el vehículo es taxi se le aplicara la prueba de taxímetro; El certificado se le expedirá únicamente a los vehículos que cumplan con los requisitos establecidos por la resolución 3768 de 2013, la NTC 5375 y las demás que disponga la ley.',
    'Al realizar la revisión Técnico-Mecánica y de emisiones contaminantes, su vehículo será sometido a pruebas con el grado de exigencia estipulado por el Ministerio de Transporte y el Ministerio de Ambiente, por lo tanto, el CDA, no se hace responsable por daños ocasionados en dicho proceso.',
    'El cliente no debe ingresar a las áreas de inspección: para su espera está dispuesta una sala que permite de forma directa evidenciar su vehículo en la línea de revisión. El CDA no permite la interacción directa con el personal de la línea de revisión. Le solicitamos abstenerse de cualquier conversación con los inspectores, si es necesario comuníquese con el Director Técnico (Ingeniero).',
    'Apreciado Usuario; El pago de la Revisión Técnico-Mecánica y de emisiones contaminantes no está sujeto a la entrega del CERTIFICADO “Si al verificar el resultado total de las pruebas, en las revisiones técnico-mecánica y de emisiones contaminantes, el vehículo automotor es reprobado de acuerdo con los criterios señalados para el efecto, el Centro de Diagnóstico Automotor o línea móvil, deberá entregar copia del Formato Uniforme de Resultados de las revisiones técnico-mecánica y de emisiones contaminantes al propietario, poseedor o tenedor del vehículo automotor, quien deberá efectuar las reparaciones pertinentes y subsanar los aspectos defectuosos dentro de los quince (15) días calendario contados a partir de la fecha en que fue reprobado. Una vez efectuadas las reparaciones el propietario, poseedor o tenedor del vehículo automotor podrá volver por una sola vez sin costo al mismo Centro de Diagnóstico Automotor o línea móvil, para someter el vehículo a la revisión de los aspectos r probados en la visita inicial. En la segunda visita al Centro de Diagnóstico Automotor CDA PUENTE ARANDA 12-44 S.A.S., el vehículo, en todos los casos, será objeto de una revisión sensorial completa para verificar que las condiciones generales del vehículo se mantienen, y se procederá a hacer una revisión gratuita de los aspectos reprobados en la visita inicial mediante revisión visual o revisión mecanizada, según corresponda Cuando de la revisión visual se compruebe que el vehículo pudo haber sufrido alguna alteración, este será sometido a una revisión total como si acudiera por primera vez y esta generará el respectivo cobro.”. Art 28 de la resolución 3768 de 2013, Nota: tenga en cuenta que los horarios del CDA se encuentran definidos de la siguiente manera: lunes a sábado hay apertura de lunes a viernes de 6:30 am a 6:00 pm, sábados de 7:00 am a 4:00 pm, domingos y festivos de 7:00 am a 12:00 pm.',
    'El vehículo debe venir preparado para la revisión: como mínimo debe estar sin copas (tapacubos) en los rines, los dispositivos de seguridad desactivados y la correcta presión del aire de las llantas, de lo contrario se le informara al cliente para que ajuste el vehículo a las condiciones exigidas.',
    'Una vez realizada la revisión técnico-mecánica y de emisiones contaminantes a su vehículo, el CDA NO REALIZARÁ DEVOLUCIONES DE DINERO.',
    'Por favor, absténgase de dar propinas, obsequios o cualquier tipo de remuneración por la certificación de su vehículo; el hacerlo pone en riesgo la estabilidad laboral del empleado, ya que el proceso de inspección debe ser imparcial.',
    'Los resultados de la inspección son confidenciales y están protegidos.',
    'El personal que realiza que participa en las actividades de inspección cuenta con el conocimiento y la competencia de acuerdo a los requisitos legales exigidos',
    'El CDA no responderá por objetos dejados en los vehículos, que no sean reportados en el control de entrada.',
    'Se solicita revisar dentro del CDA su vehículo, una vez le sea entregado, así como sus documentos. Después de retirado, el CDA no atenderá ninguna apelación',
    'Si su vehículo no cumple con la profundidad de labrado de las llantas este será rechazado por este ítem y se realiza la prueba de eficacia de frenado, sin embargo, cuando ingrese por segunda vez se realizará nuevamente la prueba de eficacia de frenado y si esta no aprueba usted será rechazado nuevamente y tendrá que pagar nuevamente la revisión técnico mecánica total.',
    'El CDA cuenta con una póliza civil profesional la cual ampara la responsabilidad civil profesional resultante de la prestación deficiente del servicio por parte del CDA',
    'Recuerde que el CDA cuenta con un procedimiento de seguridad de la información que respalda la información resultante',
    'El CDA PUENTE ARANDA 12-44 S.A.S., contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 21-CDA-097 bajo la norma ISO/IEC 17020:2012, para vehículos livianos, otorgada el 2022-07-05, con vencimiento el 2025-07-04 Este puede ser confirmado en la página de ONAC www.onac.org.co.',
    'Si por ley o compromisos contractuales se deba divulgar su información confidencial, usted será notificado salvo que lo prohíba la ley. La información obtenida por fuentes distintas al cliente será tratada de manera confidencial.',
    'En el aviso de privacidad se da a conocer con antelación la información que el CDA tiene intensión hacer pública.',
    'El Certificado de RTM EYC es vigente por un (1) año, y ahora es de manera digital usted podrá consultarlo por la página de RUNT ciudadanos.',
    'Señor usuario recuerde que las revisiones preventivas ni la venta de SOAT favorecen, ni desfavorecen el resultado de la revisión técnico-mecánica',
    'Señor usuario recuerde que las tarifas del CDA se encuentran reguladas por la resolución 3318:2015 y 20213040063835 de 2021, la cual se modifica el artículo 1o de la Resolución 3318 de 2015'
    ],
    aviso:['El CDA actuando en calidad de responsable del tratamiento de sus datos personales, informa que los datos personales suministrados por Usted con ocasión de su acceso a los servicios ofrecidos serán incluidos en distintas bases de datos y serán utilizados para las siguientes finalidades: a) Transferencia al RUNT de los resultados de la revisión, sea esta aprobada o rechazada. b) Transferencia a la Autoridad ambiental de la región – SECRETARÍA DE AMBIENTE, de la información de los propietarios, poseedor o tenedor del vehículo, información del vehículo y de los valores del análisis de emisiones contaminantes. c) Transferencia al organismo de transito del municipio, de las inconsistencia encontradas entre la información documental y la presencia física del vehículo, d) Transferencia a la Superintendencia de puertos y transporte, de la información de los propietarios, poseedor o tenedor del vehículo, información del vehículo y de todos los resultados de la inspección, e) Sistema de control y vigilancia (Sicov) en nuestro caso CI2 recuerde que todas las actividades de inspección realizadas incluyendo resultados son monitoreados (filmados) y usted se encuentra filmado por esta entidad y son enviados a esta entidad, f) entrega de los resultados de las pruebas al Organismo Nacional de Acreditación de Colombia ONAC cuando este lo solicite. Para cualquier información sobre este aviso de privacidad, de la ley aplicable o para el ejercicio de cualquiera de los derechos derivados de la protección de sus datos personales, incluyendo sin limitación sus derechos de acceso, rectificación, y supresión (siempre que no exista un mandato legal o contractual que faculte al CDA para continuar con el tratamiento directamente), usted se podrá contactar en Soacha a los teléfonos 3132005852'],
    privacidad:['De conformidad con lo previsto en la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013, el que firma autoriza a (CDA PUENTE ARANDA 12-44 S.A.S.) a dar tratamiento de los datos personales que sean pertinentes y adecuados para la realización y el registro de la RTMyEC de acuerdo con la normatividad vigente a los CDA: a) Envío de avisos, propaganda o publicidad sobre nuestros servicios. b) Notificación de vencimiento de la RTMyEC. c) al uso de la información personal recolectada para finalidades iguales, análogas o compatibles con aquellas para las cuales se recogieron los datos personales inicialmente. d) Desarrollo de propuestas comerciales de servicios ofrecidos por CDA a sus clientes. e) servicio al cliente y realizar estudios de mercadeo. Autorizo que el Centro de Diagnóstico Automotor, utilice la información consignada en el presente documento con fines comerciales, cumpliendo con lo establecido en la ley 1581 de 2012 y el Decreto Reglamentario 1377 de 2013 SI______NO______'],
    fotoEvidencia:[]
    
};



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
                if($('#firmasection').if(':visible')){
                    alert("algo");
                    detenerCamara();
                }
            
            }, 2000);
            
            return true;
        },
        onFinished: function (event, currentIndex) {
            detenerCamara();
            //propietario
            data.propietario.tp_doc=document.getElementById("tpdocumento").value;
            data.propietario.documento=document.getElementById("documento").value;
            data.propietario.nombre=document.getElementById("nombre").value;
            data.propietario.telefono = document.getElementById("telefono").value;
            data.propietario.pais = document.getElementById("paispersona").value;
            data.propietario.departamento = document.getElementById("deptoPropietario").value;
            data.propietario.ciudad = document.getElementById("ciudadProp").value;
            data.propietario.direccion =  document.getElementById("direccion").value;
            data.propietario.correo = document.getElementById("correo").value;
            //vehiculo
            data.vehiculo.placa = document.getElementById("placa").value;
            data.vehiculo.vin  = document.getElementById("vin").value;
            data.vehiculo.pais = document.getElementById("paisvehicl").value;
            data.vehiculo.servicio = document.getElementById("servicioveh").value;
            data.vehiculo.marca = document.getElementById("marca").value;
            data.vehiculo.linea = document.getElementById("linea").value;
            data.vehiculo.modelo = document.getElementById("modelo").value;
            data.vehiculo.nolicencia = document.getElementById("nolicencia");
            data.vehiculo.color = document.getElementById("color").value;
            data.vehiculo.combustible = document.getElementById("combustible").value;
            data.vehiculo.nomotor = document.getElementById("nomotor").value; 
            data.vehiculo.tpmotor  = document.getElementById("tpmotor").value;
            data.vehiculo.cilindraje  = document.getElementById("cilindraje").value;
            data.vehiculo.kms  = document.getElementById("kms").value;
            data.vehiculo.nopasajeros  = document.getElementById("nopasajeros").value;
            data.vehiculo.blindado = document.getElementById("blindado").checked?"SI":"NO";
            data.vehiculo.ense = document.getElementById("ense").checked?"SI":"NO";


            

            // Si quieres enviar el formulario automáticamente:
            $("#form-total").submit();
            
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
let streamActual = null;
//alert(fotos.length);

function initCam(){
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const fotoFinal = document.getElementById('fotoFinal');

const selectorCamara = document.getElementById('optselectorCamara');
const btnIniciar = document.getElementById('btniniciar');
const btnCapturar = document.getElementById('btncapturar');



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

function detenerCamara() {
    if (streamActual) {
        streamActual.getTracks().forEach(track => track.stop());
        streamActual = null;
    }
}


