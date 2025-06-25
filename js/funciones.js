const criterios=[
       {'criterio':'Vehículo Completamente descargado.'},
       {'criterio':'Llanta de repuesto sin protector y que permita el acceso.'},
       {'criterio':'Sin dejar dinero, radio, u otros elementos extraíbles.'},
       {'criterio':'Filtro de aire desatornillado'},
       {'criterio':'Alarma desactivada'},
       {'criterio':'Batería asequible (sin cubre batería).'},
       {'criterio':'En buen estado de limpieza'},
       {'criterio':'Sin cadena o candado en cabinas basculantes cuando aplique'},
       {'criterio':'Sin tapacubos o copas plásticas'},
       {'criterio':'Cinturones de seguridad libres y visibles.'},
       {'criterio':'Enciende alguna luz del vehículo.'},
       {'criterio':'Deposito del líquido de frenos visible'},
       {'criterio':'Combustible suficiente'}
    ]
function uiConceptos(){
    const contenedor = document.getElementById("criterio")
    
    criterios.forEach(function(item, index) {
    contenedor.innerHTML+='<label for="gnv" class="special-label-1">'+item.criterio+'</label>'+
										'<select name="gnv" id="gnv" class="form-control">'+
											'<option value="true">SI</option>'+
											'<option value="false">NO</option>'+
											'<option value="" selected>N/A</option>'+
										'</select>'+
										'<span class="select-btn">'+
										'	<i class="zmdi zmdi-chevron-down"></i>'+
										'</span>';
    })
}
uiConceptos();