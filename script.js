// Datos extraídos de las fuentes [1-4]
const dataPabellon3 = [
    { n: 1, nombre: "AMEZA Miguel Angel", causa: "CAUSA", sit: "PLAZO", ingreso: "18/10/2023" },
    { n: 2, nombre: "BAGGINI Leandro Javier", causa: "CAUSA", sit: "PLAZO", ingreso: "07/05/2024" },
    { n: 3, nombre: "BUSTOS Emilio Daniel", causa: "CAUSA", sit: "PLAZO", ingreso: "15/05/2024" },
    { n: 4, nombre: "CORDOBA Lucas Maximo", causa: "CAUSA", sit: "PLAZO", ingreso: "05/06/2024" },
    { n: 5, nombre: "CORREA Cristian Carlos", causa: "CAUSA", sit: "PLAZO", ingreso: "15/05/2025" },
    { n: 6, nombre: "DIAZ Victor Rolando", causa: "CAUSA", sit: "PLAZO", ingreso: "24/11/2022" },
    { n: 7, nombre: "ESPINOSA Daniel Alberto", causa: "CAUSA", sit: "PLAZO", ingreso: "05/10/2023" },
    { n: 8, nombre: "LEDESMA Jonatan Daniel", causa: "CAUSA", sit: "PLAZO", ingreso: "29/07/2024" },
    { n: 9, nombre: "LESCANO Cristian Esteban", causa: "CAUSA", sit: "PLAZO", ingreso: "18/06/2024" },
    { n: 10, nombre: "MERINO COVEÑAS Teofilo Alberto", causa: "CAUSA", sit: "PLAZO", ingreso: "22/03/2025" },
    { n: 11, nombre: "REY German", causa: "CAUSA", sit: "PLAZO", ingreso: "26/03/2025" },
    { n: 12, nombre: "ROLON Mario Roman", causa: "CAUSA", sit: "PLAZO", ingreso: "06/02/2025" },
    { n: 13, nombre: "SILVA Jorge Gustavo", causa: "CAUSA", sit: "PLAZO", ingreso: "17/08/2025" },
    { n: 14, nombre: "VERA Yoel Jesus", causa: "CAUSA", sit: "PLAZO", ingreso: "05/12/2024" }
];

const dataPabellon4 = [
    { n: 1, nombre: "BIANCHOTTI Adrian Gabriel", causa: "CAUSA", sit: "PLAZO", ingreso: "02/09/2025" },
    { n: 2, nombre: "JUAREZ PERLO Hector Ruben", causa: "CAUSA", sit: "PLAZO", ingreso: "23/07/2025" },
    { n: 3, nombre: "KENER Javier Horacio", causa: "CAUSA", sit: "PLAZO", ingreso: "16/10/2025" },
    { n: 4, nombre: "LEIVA Brian", causa: "CAUSA", sit: "PLAZO", ingreso: "12/01/2026" },
    { n: 5, nombre: "MIGUEL Jose Luis", causa: "CAUSA", sit: "PLAZO", ingreso: "24/01/2026" },
    { n: 6, nombre: "ORELLANO Jorge Ramon", causa: "CAUSA", sit: "PLAZO", ingreso: "16/06/2023" },
    { n: 7, nombre: "ROLDAN Brian Ezequiel", causa: "CAUSA", sit: "PLAZO", ingreso: "26/06/2025" },
    { n: 8, nombre: "SALAS Luis Andres", causa: "CAUSA", sit: "PLAZO", ingreso: "12/11/2025" },
    { n: 9, nombre: "SOLIS Juan Jose", causa: "CAUSA", sit: "PLAZO", ingreso: "12/10/2025" }
];

function generateTable(data, containerId) {
    let html = `<table>
        <thead>
            <tr>
                <th>N°</th>
                <th>APELLIDO Y NOMBRE</th>
                <th>CAUSA</th>
                <th>SIT. PROCESAL</th>
                <th>INGRESO</th>
            </tr>
        </thead>
        <tbody>`;
    
    data.forEach(item => {
        html += `<tr>
            <td>${item.n}</td>
            <td>${item.nombre}</td>
            <td>${item.causa}</td>
            <td>${item.sit}</td>
            <td>${item.ingreso}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    document.getElementById(containerId).innerHTML = html;
}

// Carga inicial de datos
window.onload = () => {
    generateTable(dataPabellon3, 'pabellon-3-table');
    generateTable(dataPabellon4, 'pabellon-4-table');
    // Aquí podrías agregar más funciones para cargar las celdas del Pabellón 2 [5].
};
