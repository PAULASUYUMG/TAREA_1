
const nombres = ["Ana", "Carlos", "María", "Pedro", "Lucía", "Javier", "Marta", "Juan", "Sofía", "Luis"];
const comentarios = [
    "¡Qué lugar tan hermoso!",
    "Me encanta la cultura de San Pedro La Laguna.",
    "Las vistas son impresionantes.",
    "Un destino que vale la pena visitar.",
    "El lago es simplemente espectacular.",
    "Las actividades al aire libre son geniales.",
    "Un lugar perfecto para relajarse.",
    "La gente es muy amigable.",
    "Quiero volver cada año.",
    "¡Qué paz se siente aquí!"
];


function mostrarComentarios() {
    const comentariosSeleccionados = [];
    const nombresSeleccionados = [];

    while (comentariosSeleccionados.length < 3) {
        let comentario = comentarios[Math.floor(Math.random() * comentarios.length)];
        let nombre = nombres[Math.floor(Math.random() * nombres.length)];

        if (!comentariosSeleccionados.includes(comentario) && !nombresSeleccionados.includes(nombre)) {
            comentariosSeleccionados.push(comentario);
            nombresSeleccionados.push(nombre);
        }
    }

    const comentariosLista = document.getElementById('comentarios-lista');
    comentariosSeleccionados.forEach((comentario, index) => {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario', 'mb-3', 'p-3', 'border', 'rounded', 'bg-light');
        comentarioDiv.innerHTML = `<strong>${nombresSeleccionados[index]}:</strong> ${comentario}`;
        comentariosLista.appendChild(comentarioDiv);
    });
}

mostrarComentarios();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;


    if (nombre && fechaNacimiento && correo && mensaje) {
        console.log('Nombre:', nombre);
        console.log('Fecha de Nacimiento:', fechaNacimiento);
        console.log('Correo Electrónico:', correo);
        console.log('Mensaje:', mensaje);

        
        $('#confirmModal').modal('show');

    
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
