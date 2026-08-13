// ============================================================
//  BANCO DE PREGUNTAS (200+ reactivos)
//  Basado en el Reglamento de Tránsito CDMX y Ley de Movilidad
// ============================================================

const BANCO_PREGUNTAS = [
    // ---- SEÑALES Y NORMAS GENERALES ----
    {
        id: 1,
        pregunta: '¿Qué significa una señal de "ALTO" (SR-6)?',
        opciones: [
            'Disminuir la velocidad y continuar con precaución',
            'Detenerse completamente y reanudar la marcha solo cuando no haya riesgo',
            'Ceder el paso a los vehículos de la derecha',
            'Solo aplica para vehículos de carga'
        ],
        correcta: 1,
        pista: 'El Reglamento de Tránsito establece que el conductor debe detener el vehículo por completo.'
    },
    {
        id: 2,
        pregunta: 'En la jerarquía de movilidad de la CDMX, ¿quién tiene la máxima prioridad?',
        opciones: [
            'Ciclistas',
            'Usuarios de transporte público',
            'Peatones, especialmente personas con discapacidad',
            'Vehículos de emergencia'
        ],
        correcta: 2,
        pista: 'Está en el Artículo 2, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 3,
        pregunta: '¿Cuál es el límite de velocidad máxima en vías primarias de la CDMX?',
        opciones: [
            '40 km/h',
            '50 km/h',
            '60 km/h',
            '80 km/h'
        ],
        correcta: 1,
        pista: 'Artículo 9, fracción II del Reglamento de Tránsito.'
    },
    {
        id: 4,
        pregunta: '¿Qué indica una raya continua en el pavimento?',
        opciones: [
            'Que se puede cambiar de carril con precaución',
            'Que ningún usuario debe cruzarla o circular sobre ella',
            'Que solo los vehículos de emergencia pueden cruzarla',
            'Que indica una zona de estacionamiento'
        ],
        correcta: 1,
        pista: 'Las marcas en el pavimento son parte de la señalización vial.'
    },
    {
        id: 5,
        pregunta: '¿Cuál es la velocidad máxima en zonas escolares?',
        opciones: [
            '10 km/h',
            '20 km/h',
            '30 km/h',
            '40 km/h'
        ],
        correcta: 1,
        pista: 'Artículo 9, fracción V del Reglamento de Tránsito.'
    },
    {
        id: 6,
        pregunta: '¿Qué deben hacer los conductores al aproximarse a un cruce peatonal con peatones esperando?',
        opciones: [
            'Acelerar para pasar antes que ellos',
            'Tocar el claxon para que se apresuren',
            'Detenerse y cederles el paso',
            'Seguir de frente si no hay semáforo'
        ],
        correcta: 2,
        pista: 'Los peatones tienen preferencia en las intersecciones.'
    },
    {
        id: 7,
        pregunta: '¿Qué indica una señal de "CEDA EL PASO" (SR-7a)?',
        opciones: [
            'Detenerse completamente siempre',
            'Disminuir la velocidad o detenerse si es necesario para ceder el paso',
            'Tener preferencia sobre los demás vehículos',
            'Solo aplica en carreteras'
        ],
        correcta: 1,
        pista: 'Es una señal restrictiva que otorga preferencia al tránsito que cruza.'
    },
    {
        id: 8,
        pregunta: '¿Qué significa una flecha direccional de color blanco en el pavimento?',
        opciones: [
            'Indica la dirección obligatoria de circulación',
            'Sugiere una ruta alternativa',
            'Indica un carril exclusivo para bicicletas',
            'Marca un área de estacionamiento'
        ],
        correcta: 0,
        pista: 'Las flechas blancas guían a los conductores sobre los movimientos permitidos.'
    },
    {
        id: 9,
        pregunta: 'Según el Reglamento de Tránsito, ¿qué prioridad tienen los ciclistas?',
        opciones: [
            'Son la prioridad más baja en la vía',
            'Tienen preferencia sobre vehículos motorizados en intersecciones',
            'Solo tienen prioridad en ciclovías',
            'Deben ceder el paso a todos los vehículos'
        ],
        correcta: 1,
        pista: 'Artículo 15 del Reglamento de Tránsito.'
    },
    {
        id: 10,
        pregunta: '¿Cuál es la sanción por conducir con alcohol en la sangre superior a 0.8 g/L?',
        opciones: [
            'Multa de 10 a 20 UMA',
            'Arresto administrativo de 20 a 36 horas y 6 puntos en la licencia',
            'Solo multa de 30 UMA',
            'Remisión del vehículo al depósito y multa de 50 UMA'
        ],
        correcta: 1,
        pista: 'Artículo 50 del Reglamento de Tránsito.'
    },
    {
        id: 11,
        pregunta: '¿Qué debe hacer un conductor al ser detenido por un agente de tránsito?',
        opciones: [
            'Continuar su marcha si no cometió infracción',
            'Detenerse en un lugar seguro y seguir las indicaciones del agente',
            'Bajarse del vehículo inmediatamente',
            'Llamar a su abogado antes de detenerse'
        ],
        correcta: 1,
        pista: 'Artículo 59 del Reglamento de Tránsito.'
    },
    {
        id: 12,
        pregunta: '¿Qué indica una señal con un círculo rojo y una bicicleta dentro?',
        opciones: [
            'Vía exclusiva para bicicletas',
            'Prohibido el tránsito de bicicletas',
            'Estacionamiento de bicicletas',
            'Zona de bicicletas compartida'
        ],
        correcta: 1,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 13,
        pregunta: '¿Cuál es el límite de velocidad en vías secundarias de la CDMX?',
        opciones: [
            '30 km/h',
            '40 km/h',
            '50 km/h',
            '60 km/h'
        ],
        correcta: 1,
        pista: 'Artículo 9, fracción III del Reglamento de Tránsito.'
    },
    {
        id: 14,
        pregunta: '¿Qué significa una raya doble amarilla en el pavimento?',
        opciones: [
            'Indica una zona de estacionamiento permitido',
            'Separa sentidos de circulación con prohibición de rebase',
            'Indica un carril exclusivo para transporte público',
            'Marca un cruce peatonal'
        ],
        correcta: 1,
        pista: 'Las rayas dobles indican la máxima restricción para rebasar.'
    },
    {
        id: 15,
        pregunta: '¿Qué deben hacer los conductores al escuchar una sirena de emergencia?',
        opciones: [
            'Acelerar para salir del camino',
            'Disminuir la velocidad y despejar el camino, alineándose a la derecha',
            'Detenerse en medio de la vía',
            'Ignorar la sirena si no ven el vehículo'
        ],
        correcta: 1,
        pista: 'Artículo 8, fracción X del Reglamento de Tránsito.'
    },
    {
        id: 16,
        pregunta: '¿Qué tipo de vehículos tienen prioridad sobre los demás?',
        opciones: [
            'Los vehículos particulares más grandes',
            'Los vehículos de emergencia con señales luminosas y audibles activadas',
            'Los vehículos de lujo',
            'Los vehículos con placas foráneas'
        ],
        correcta: 1,
        pista: 'Artículo 10, fracción III del Reglamento de Tránsito.'
    },
    {
        id: 17,
        pregunta: '¿Qué indica un semáforo con luz ámbar intermitente?',
        opciones: [
            'Detenerse completamente',
            'Cruzar con precaución, el conductor de la vía con luz ámbar tiene preferencia sobre la roja',
            'Acelerar para cruzar rápido',
            'Esperar a que cambie a verde'
        ],
        correcta: 1,
        pista: 'Artículo 10, fracción VI, inciso c del Reglamento de Tránsito.'
    },
    {
        id: 18,
        pregunta: '¿Cuál es la distancia mínima de separación lateral al rebasar a un ciclista?',
        opciones: [
            '0.50 metros',
            '1.00 metro',
            '1.50 metros',
            '2.00 metros'
        ],
        correcta: 2,
        pista: 'Artículo 8, fracción V del Reglamento de Tránsito.'
    },
    {
        id: 19,
        pregunta: '¿Qué indica una señal de "PROHIBIDO ESTACIONAR" con guarnición amarilla?',
        opciones: [
            'Estacionamiento gratuito',
            'Prohibido estacionar en ese tramo',
            'Estacionamiento para discapacitados',
            'Zona de carga y descarga'
        ],
        correcta: 1,
        pista: 'Artículo 30, fracción V del Reglamento de Tránsito.'
    },
    {
        id: 20,
        pregunta: '¿Qué deben hacer los conductores en una glorieta?',
        opciones: [
            'Los vehículos dentro de la glorieta tienen preferencia sobre los que ingresan',
            'Los vehículos que ingresan tienen preferencia',
            'Todos deben detenerse antes de ingresar',
            'Solo los vehículos grandes tienen preferencia'
        ],
        correcta: 0,
        pista: 'Artículo 10, fracción IX del Reglamento de Tránsito.'
    },
    {
        id: 21,
        pregunta: '¿Cuál es la velocidad máxima en zonas de tránsito calmado?',
        opciones: [
            '20 km/h',
            '30 km/h',
            '40 km/h',
            '50 km/h'
        ],
        correcta: 1,
        pista: 'Artículo 9, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 22,
        pregunta: '¿Qué significa una señal de "VUELTA CONTINUA A LA DERECHA" permitida?',
        opciones: [
            'Indica que se puede dar vuelta a la derecha incluso con semáforo en rojo, cediendo el paso',
            'Prohíbe la vuelta a la derecha',
            'Solo permite la vuelta con semáforo en verde',
            'Indica una desviación obligatoria'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva que permite el giro continuo.'
    },
    {
        id: 23,
        pregunta: '¿Qué documentos debe portar un conductor de vehículo particular en CDMX?',
        opciones: [
            'Licencia, tarjeta de circulación y póliza de seguro de responsabilidad civil vigente',
            'Solo la licencia de conducir',
            'Licencia y comprobante de domicilio',
            'Tarjeta de circulación y factura del vehículo'
        ],
        correcta: 0,
        pista: 'Artículos 44 y 45 del Reglamento de Tránsito.'
    },
    {
        id: 24,
        pregunta: '¿Qué indica una señal con un pezón o reductor de velocidad?',
        opciones: [
            'Indica un tramo de alta velocidad',
            'Advierte la proximidad de un reductor de velocidad',
            'Indica una zona de estacionamiento',
            'Señala un cruce ferroviario'
        ],
        correcta: 1,
        pista: 'Es una señal preventiva sobre la superficie de rodadura.'
    },
    {
        id: 25,
        pregunta: '¿Qué deben hacer los conductores al acercarse a una zona escolar?',
        opciones: [
            'Mantener la velocidad normal',
            'Disminuir la velocidad y extremar precauciones, respetando la señalización',
            'Acelerar para salir rápido de la zona',
            'Tocar el claxon repetidamente'
        ],
        correcta: 1,
        pista: 'Artículo 8, fracción XII del Reglamento de Tránsito.'
    },
    {
        id: 26,
        pregunta: '¿Qué indica una señal de "PROHIBIDO REBASAR" con línea continua?',
        opciones: [
            'Está permitido rebasar si no hay tráfico',
            'No se permite rebasar en ese tramo',
            'Solo se permite rebasar a vehículos lentos',
            'Indica un carril de aceleración'
        ],
        correcta: 1,
        pista: 'Las señales restrictivas y las rayas continuas indican prohibición de rebase.'
    },
    {
        id: 27,
        pregunta: '¿Qué prioridad tienen los vehículos de transporte público?',
        opciones: [
            'Tienen la misma prioridad que los automóviles particulares',
            'Tienen prioridad sobre automóviles particulares',
            'Tienen prioridad sobre peatones',
            'Tienen la prioridad más baja en la jerarquía'
        ],
        correcta: 1,
        pista: 'Artículo 2, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 28,
        pregunta: '¿Qué indica una señal de "ZONA 30" (SR-48)?',
        opciones: [
            'Velocidad máxima de 30 km/h en zona de tránsito calmado',
            'Velocidad mínima de 30 km/h',
            'Zona de estacionamiento',
            'Área de juegos infantiles'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva que indica un área de tránsito calmado.'
    },
    {
        id: 29,
        pregunta: '¿Qué deben hacer los conductores al circular por una vía con carril confinado de transporte público?',
        opciones: [
            'Pueden circular si no hay transporte público',
            'No pueden circular ni estacionarse en ese carril',
            'Solo pueden circular si pagan una cuota',
            'Pueden circular con precaución si llevan pasajeros'
        ],
        correcta: 1,
        pista: 'Artículo 11, fracción X del Reglamento de Tránsito.'
    },
    {
        id: 30,
        pregunta: '¿Qué indica una señal con un peatón cruzando?',
        opciones: [
            'Proximidad de un cruce peatonal',
            'Vía peatonal exclusiva',
            'Prohibido el tránsito de peatones',
            'Zona de juegos infantiles'
        ],
        correcta: 0,
        pista: 'Es una señal preventiva para conductores.'
    },
    {
        id: 31,
        pregunta: '¿Cuál es el límite de velocidad en estacionamientos y vías peatonales con acceso vehicular?',
        opciones: [
            '5 km/h',
            '10 km/h',
            '15 km/h',
            '20 km/h'
        ],
        correcta: 1,
        pista: 'Artículo 9, fracción VI del Reglamento de Tránsito.'
    },
    {
        id: 32,
        pregunta: '¿Qué significa una señal de "DESMONTAR" para ciclistas?',
        opciones: [
            'Indica que deben desmontar y caminar con la bicicleta',
            'Indica que deben acelerar',
            'Indica que pueden continuar en bicicleta',
            'Indica una zona de descanso'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva para vehículos no motorizados.'
    },
    {
        id: 33,
        pregunta: '¿Qué debe hacer un conductor al aproximarse a una intersección sin semáforo?',
        opciones: [
            'Acelerar para cruzar rápido',
            'Disminuir la velocidad y ceder el paso según las reglas de preferencia',
            'Detenerse siempre aunque no haya tráfico',
            'Solo ceder el paso a vehículos grandes'
        ],
        correcta: 1,
        pista: 'Artículo 10 del Reglamento de Tránsito.'
    },
    {
        id: 34,
        pregunta: '¿Qué indica una señal de "PESO PERMITIDO" en un puente?',
        opciones: [
            'El peso máximo que puede soportar la estructura',
            'El peso mínimo para circular',
            'Está prohibido el paso de vehículos pesados',
            'Indica una zona de pesaje obligatorio'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva que limita el peso de los vehículos.'
    },
    {
        id: 35,
        pregunta: '¿Qué deben hacer los conductores al encontrar un peatón con discapacidad en la vía?',
        opciones: [
            'Tocar el claxon para que se quite',
            'Dar preferencia de paso y asistir si es necesario',
            'Ignorar la situación',
            'Pasar con precaución pero sin detenerse'
        ],
        correcta: 1,
        pista: 'Artículo 5, fracción II del Reglamento de Tránsito.'
    },
    {
        id: 36,
        pregunta: '¿Qué indica una señal de "ALTURA PERMITIDA" en un túnel?',
        opciones: [
            'La altura máxima que puede tener un vehículo para pasar',
            'La altura mínima requerida',
            'Está prohibido el paso de vehículos altos',
            'Indica la altura del túnel'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva común en puentes y túneles.'
    },
    {
        id: 37,
        pregunta: '¿Qué deben hacer los conductores al circular en reversa?',
        opciones: [
            'Pueden circular en reversa todo lo que necesiten',
            'Solo pueden circular en reversa hasta 30 metros si no pueden avanzar',
            'Está prohibido circular en reversa siempre',
            'Solo se permite en vías secundarias'
        ],
        correcta: 1,
        pista: 'Artículo 11, fracción XIII del Reglamento de Tránsito.'
    },
    {
        id: 38,
        pregunta: '¿Qué indica una señal de "CIRCULACIÓN OBLIGATORIA" con una flecha?',
        opciones: [
            'Indica la dirección obligatoria de circulación para todos los vehículos',
            'Sugiere una ruta alternativa',
            'Prohíbe la circulación en ese sentido',
            'Indica un carril exclusivo'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva de obligación de circulación.'
    },
    {
        id: 39,
        pregunta: '¿Qué es el "Programa Conduce Sin Alcohol"?',
        opciones: [
            'Un programa de descuentos para conductores',
            'Un programa de control y prevención de ingesta de alcohol en conductores',
            'Un programa de incentivos para conductores responsables',
            'Un programa de verificación vehicular'
        ],
        correcta: 1,
        pista: 'Artículo 4, fracción XXXIII del Reglamento de Tránsito.'
    },
    {
        id: 40,
        pregunta: '¿Qué indica una señal de "PROHIBIDO EL TRÁNSITO DE VEHÍCULOS MOTORIZADOS"?',
        opciones: [
            'Solo aplica para vehículos de carga',
            'Prohíbe el tránsito de todo vehículo motorizado en ese tramo',
            'Solo aplica para motocicletas',
            'Indica una zona de estacionamiento'
        ],
        correcta: 1,
        pista: 'Es una señal restrictiva de prohibición específica.'
    },
    {
        id: 41,
        pregunta: '¿Qué deben hacer los conductores al aproximarse a un cruce ferroviario?',
        opciones: [
            'Acelerar para cruzar rápido',
            'Disminuir la velocidad a 30 km/h a 50 metros antes y hacer alto si el tren se aproxima',
            'Solo disminuir la velocidad si hay señal',
            'Cruzar con precaución sin detenerse'
        ],
        correcta: 1,
        pista: 'Artículo 8, fracción XIII del Reglamento de Tránsito.'
    },
    {
        id: 42,
        pregunta: '¿Qué indica una señal de "USO DE CINTURÓN DE SEGURIDAD" obligatorio?',
        opciones: [
            'Recomendación de usar cinturón',
            'Obligación de usar el cinturón de seguridad para todos los ocupantes',
            'Solo obligatorio para el conductor',
            'Obligatorio solo en carreteras'
        ],
        correcta: 1,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 43,
        pregunta: '¿Cuál es la velocidad máxima en vías de acceso controlado (carriles centrales)?',
        opciones: [
            '60 km/h',
            '70 km/h',
            '80 km/h',
            '90 km/h'
        ],
        correcta: 2,
        pista: 'Artículo 9, fracción I del Reglamento de Tránsito.'
    },
    {
        id: 44,
        pregunta: '¿Qué indica una señal de "PROHIBIDO PARAR" con guarnición roja?',
        opciones: [
            'Prohibido estacionarse, pero se puede detener momentáneamente',
            'Prohibido detenerse o estacionarse en ese tramo',
            'Zona de carga y descarga',
            'Estacionamiento para discapacitados'
        ],
        correcta: 1,
        pista: 'Artículo 30, fracción V del Reglamento de Tránsito.'
    },
    {
        id: 45,
        pregunta: '¿Qué deben hacer los conductores al ver una señal de "PREFERENCIA DE PASO" en una intersección?',
        opciones: [
            'Detenerse y esperar',
            'Saber que tienen preferencia sobre los vehículos que atraviesan o se incorporan',
            'Ceder el paso a todos los vehículos',
            'Acelerar para cruzar primero'
        ],
        correcta: 1,
        pista: 'Es una señal restrictiva que indica preferencia de paso.'
    },
    {
        id: 46,
        pregunta: '¿Qué indica una señal de "SALIDA" en una vía de acceso controlado?',
        opciones: [
            'Proximidad de una desincorporación de la vía',
            'Entrada a la vía',
            'Zona de descanso',
            'Área de servicio'
        ],
        correcta: 0,
        pista: 'Es una señal informativa de destino.'
    },
    {
        id: 47,
        pregunta: '¿Cuál es la sanción por invadir un carril confinado de transporte público?',
        opciones: [
            'Multa de 10 a 15 UMA',
            'Multa de 40 a 60 UMA y 6 puntos en la licencia',
            'Solo multa de 20 UMA',
            'Arresto administrativo'
        ],
        correcta: 1,
        pista: 'Artículo 11, fracción X del Reglamento de Tránsito.'
    },
    {
        id: 48,
        pregunta: '¿Qué indica una señal de "PEATONES A LA IZQUIERDA"?',
        opciones: [
            'Los peatones deben circular por el lado izquierdo de la vía, de frente al tránsito',
            'Los peatones deben circular por la derecha',
            'Prohibido el paso de peatones',
            'Zona de juegos infantiles'
        ],
        correcta: 0,
        pista: 'Es una señal informativa para peatones.'
    },
    {
        id: 49,
        pregunta: '¿Qué deben hacer los conductores al estacionarse en una pendiente descendente?',
        opciones: [
            'Poner el freno de mano y dejar las ruedas delanteras hacia la acera',
            'Poner el freno de mano y dejar las ruedas delanteras hacia la calle',
            'Solo poner el freno de mano',
            'Dejar el vehículo en punto muerto'
        ],
        correcta: 0,
        pista: 'Artículo 29, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 50,
        pregunta: '¿Qué indica una señal de "PROHIBIDO EL TRÁNSITO DE MOTOCICLETAS" en un carril?',
        opciones: [
            'Prohíbe el tránsito de motocicletas en ese carril o tramo',
            'Solo aplica para motocicletas de baja cilindrada',
            'Prohíbe el estacionamiento de motocicletas',
            'Indica un carril exclusivo para motocicletas'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 51,
        pregunta: '¿Qué es la "Visión Cero" en el contexto de seguridad vial?',
        opciones: [
            'Un programa para reducir el tráfico',
            'Una estrategia donde ninguna pérdida de vida en las calles es aceptable',
            'Un programa para aumentar la velocidad',
            'Una campaña para usar bicicleta'
        ],
        correcta: 1,
        pista: 'Guía de Usuario, prólogo de la CDMX.'
    },
    {
        id: 52,
        pregunta: '¿Qué indica una señal de "ESTACIONAMIENTO PARA PERSONAS CON DISCAPACIDAD"?',
        opciones: [
            'Espacio exclusivo para vehículos con placas de discapacidad',
            'Espacio para cualquier vehículo por 20 minutos',
            'Zona de carga y descarga',
            'Estacionamiento para visitantes'
        ],
        correcta: 0,
        pista: 'Artículo 30, fracción XV del Reglamento de Tránsito.'
    },
    {
        id: 53,
        pregunta: '¿Qué deben hacer los conductores al aproximarse a una zona de obras?',
        opciones: [
            'Mantener la velocidad normal',
            'Disminuir la velocidad y seguir las indicaciones de la señalización de desvío',
            'Acelerar para salir rápido',
            'Ignorar las señales de obras'
        ],
        correcta: 1,
        pista: 'Las señales de obras son temporales y deben respetarse.'
    },
    {
        id: 54,
        pregunta: '¿Qué indica una señal de "PRIORIDAD DE USO" para vehículos de carga?',
        opciones: [
            'Los vehículos de carga tienen prioridad sobre todos los demás',
            'El tipo de vehículo representado tiene prioridad de uso de la vía',
            'Prohíbe el tránsito de vehículos de carga',
            'Indica una zona de carga'
        ],
        correcta: 1,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 55,
        pregunta: '¿Cuál es la sanción por no portar la licencia de conducir vigente?',
        opciones: [
            'Multa de 10 a 20 UMA',
            'Multa de 30 a 40 UMA',
            'Solo amonestación',
            'Remisión del vehículo al depósito'
        ],
        correcta: 0,
        pista: 'Artículo 44, fracción I del Reglamento de Tránsito.'
    },
    {
        id: 56,
        pregunta: '¿Qué debe hacer un conductor al ver una señal de "NO PARAR" en una intersección?',
        opciones: [
            'Detenerse solo si hay tráfico',
            'No detenerse en ese tramo de la vía',
            'Detenerse por 5 minutos máximo',
            'Estacionarse solo si es necesario'
        ],
        correcta: 1,
        pista: 'Artículo 11, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 57,
        pregunta: '¿Qué indica una señal de "CICLISTAS" en una vía primaria?',
        opciones: [
            'Proximidad de un cruce con una vía de tránsito exclusiva para ciclistas',
            'Vía compartida con ciclistas',
            'Prohibido el tránsito de ciclistas',
            'Zona de estacionamiento de bicicletas'
        ],
        correcta: 0,
        pista: 'Es una señal preventiva del Reglamento de Tránsito.'
    },
    {
        id: 58,
        pregunta: '¿Qué deben hacer los conductores al notar un vehículo de emergencia detrás de ellos?',
        opciones: [
            'Acelerar para alejarse',
            'Disminuir la velocidad y despejar el camino hacia la derecha',
            'Detenerse en medio de la vía',
            'Ignorar la situación'
        ],
        correcta: 1,
        pista: 'Artículo 8, fracción X del Reglamento de Tránsito.'
    },
    {
        id: 59,
        pregunta: '¿Qué indica una señal de "ANCHO PERMITIDO" en un puente?',
        opciones: [
            'El ancho máximo permitido para vehículos',
            'El ancho mínimo requerido',
            'Prohibido el paso de vehículos anchos',
            'Indica el ancho del carril'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 60,
        pregunta: '¿Qué es la jerarquía de movilidad según la Ley de Movilidad CDMX?',
        opciones: [
            'Automóviles > Motocicletas > Transporte público',
            'Peatones > Ciclistas > Transporte público > Carga > Automóviles',
            'Transporte público > Automóviles > Peatones',
            'Todos tienen la misma prioridad'
        ],
        correcta: 1,
        pista: 'Artículo 2, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 61,
        pregunta: '¿Qué indica una señal de "LONGITUD PERMITIDA" en una curva?',
        opciones: [
            'La longitud máxima permitida para vehículos en esa vía',
            'La longitud mínima requerida',
            'Prohibido el paso de vehículos largos',
            'Indica la longitud de la curva'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 62,
        pregunta: '¿Qué deben hacer los conductores al circular por una calle de prioridad peatonal?',
        opciones: [
            'Tienen preferencia sobre los peatones',
            'Ceder la prioridad a los peatones, quienes pueden circular en todo el ancho de la vía',
            'Solo pueden circular con precaución',
            'Está prohibido circular en esas calles'
        ],
        correcta: 1,
        pista: 'Artículo 6, fracción V del Reglamento de Tránsito.'
    },
    {
        id: 63,
        pregunta: '¿Qué indica una señal de "INSPECCIÓN" (SR-10)?',
        opciones: [
            'Los vehículos deben detenerse para una revisión por parte de la autoridad',
            'Indica una zona de estacionamiento',
            'Prohibido el paso de vehículos',
            'Indica una zona de descanso'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva que obliga a detenerse para revisión.'
    },
    {
        id: 64,
        pregunta: '¿Cuál es el límite de alcohol permitido para conductores de transporte público?',
        opciones: [
            '0.4 mg/L en aire espirado',
            '0.0 mg/L (ninguna cantidad)',
            '0.8 g/L en sangre',
            '1.0 g/L en sangre'
        ],
        correcta: 1,
        pista: 'Artículo 50 del Reglamento de Tránsito.'
    },
    {
        id: 65,
        pregunta: '¿Qué indica una señal de "PROHIBIDO EL TRÁNSITO DE VEHÍCULOS DE CARGA" en un carril?',
        opciones: [
            'Prohíbe el tránsito de vehículos de carga en ese carril o tramo',
            'Solo aplica para vehículos de carga de más de 3.5 toneladas',
            'Prohíbe el estacionamiento de vehículos de carga',
            'Indica un carril exclusivo para carga'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 66,
        pregunta: '¿Qué debe hacer un conductor al sufrir un accidente con daños materiales?',
        opciones: [
            'Continuar su camino si no hay heridos',
            'Detenerse, encender luces intermitentes y llamar a la aseguradora',
            'Solo detenerse si hay daños graves',
            'Abandonar el vehículo en el lugar'
        ],
        correcta: 1,
        pista: 'Artículo 54 del Reglamento de Tránsito.'
    },
    {
        id: 67,
        pregunta: '¿Qué indica una señal de "PROHIBIDO EL TRÁNSITO DE BICICLETAS" en una vía de acceso controlado?',
        opciones: [
            'Prohíbe el tránsito de bicicletas en esa vía',
            'Solo aplica para bicicletas con motor',
            'Prohíbe el estacionamiento de bicicletas',
            'Indica un carril compartido'
        ],
        correcta: 0,
        pista: 'Artículo 19, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 68,
        pregunta: '¿Qué es el programa "Hoy No Circula" en la CDMX?',
        opciones: [
            'Un programa que restringe la circulación de vehículos según el holograma de verificación',
            'Un programa de descuentos para conductores',
            'Un programa de incentivos para usar bicicleta',
            'Un programa de verificación voluntaria'
        ],
        correcta: 0,
        pista: 'Artículo 4, fracción XXXI del Reglamento de Tránsito.'
    },
    {
        id: 69,
        pregunta: '¿Qué indica una señal de "REDUCCIÓN DE LA VÍA" en una zona de obras?',
        opciones: [
            'Proximidad de un estrechamiento de la vía debido a una ocupación temporal',
            'Proximidad de una ampliación de la vía',
            'Indica una zona de estacionamiento',
            'Prohibido el paso de vehículos grandes'
        ],
        correcta: 0,
        pista: 'Es una señal de desvío y protección de obras.'
    },
    {
        id: 70,
        pregunta: '¿Qué deben hacer los conductores al estacionarse en batería?',
        opciones: [
            'Permitido solo si hay señalización que lo autorice',
            'Permitido siempre en vías secundarias',
            'Prohibido en toda la CDMX',
            'Solo permitido para motocicletas'
        ],
        correcta: 0,
        pista: 'Artículo 30, fracción XIII del Reglamento de Tránsito.'
    },
    {
        id: 71,
        pregunta: '¿Qué indica una señal de "CONSERVE SU DERECHA" en una vía?',
        opciones: [
            'Los vehículos deben circular por el carril derecho',
            'Los vehículos deben circular por el carril izquierdo',
            'Indica un carril exclusivo para transporte público',
            'Prohibido circular por el carril derecho'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 72,
        pregunta: '¿Cuál es la sanción por no portar la póliza de seguro de responsabilidad civil?',
        opciones: [
            'Multa de 20 a 40 UMA',
            'Multa de 10 a 15 UMA',
            'Solo amonestación',
            'Remisión del vehículo al depósito'
        ],
        correcta: 0,
        pista: 'Artículo 46 del Reglamento de Tránsito.'
    },
    {
        id: 73,
        pregunta: '¿Qué indica una señal de "PROHIBIDO BLOQUEAR INTERSECCIÓN"?',
        opciones: [
            'Prohíbe detenerse dentro de un cruce para facilitar el tránsito',
            'Prohíbe el estacionamiento en la intersección',
            'Permite detenerse solo para carga y descarga',
            'Indica un cruce peatonal'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 74,
        pregunta: '¿Qué deben hacer los conductores al aproximarse a un reductor de velocidad?',
        opciones: [
            'Acelerar para pasar rápido',
            'Disminuir la velocidad y pasar con precaución',
            'Ignorar el reductor de velocidad',
            'Detenerse completamente'
        ],
        correcta: 1,
        pista: 'Los reductores de velocidad son dispositivos para controlar la velocidad.'
    },
    {
        id: 75,
        pregunta: '¿Qué indica una señal de "PROHIBIDO DAR VUELTA" en una intersección?',
        opciones: [
            'Prohíbe dar vuelta a la derecha o izquierda en esa intersección',
            'Permite dar vuelta solo a la derecha',
            'Permite dar vuelta solo a la izquierda',
            'Prohíbe dar vuelta en U'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva que indica una prohibición de giro.'
    },
    {
        id: 76,
        pregunta: '¿Qué es el "Programa de Verificación Vehicular" en la CDMX?',
        opciones: [
            'Un programa para medir el consumo de combustible',
            'Un programa obligatorio para verificar las emisiones contaminantes de los vehículos',
            'Un programa para verificar la seguridad de los vehículos',
            'Un programa para renovar la licencia de conducir'
        ],
        correcta: 1,
        pista: 'Artículo 4, fracción XXX del Reglamento de Tránsito.'
    },
    {
        id: 77,
        pregunta: '¿Qué indica una señal de "PROHIBIDO USAR SEÑALES AUDIBLES" (claxon)?',
        opciones: [
            'Prohíbe el uso del claxon excepto para prevenir un accidente',
            'Prohíbe el uso del claxon siempre',
            'Permite el uso del claxon solo para saludar',
            'Prohíbe el uso de música a alto volumen'
        ],
        correcta: 0,
        pista: 'Artículo 7, fracción III del Reglamento de Tránsito.'
    },
    {
        id: 78,
        pregunta: '¿Qué deben hacer los conductores al transportar niños menores de 12 años?',
        opciones: [
            'Pueden viajar en el asiento delantero sin restricciones',
            'Deben usar sistema de retención infantil adecuado a su peso y talla en los asientos traseros',
            'Pueden viajar sin cinturón de seguridad',
            'Solo deben viajar en el asiento delantero'
        ],
        correcta: 1,
        pista: 'Artículo 39 del Reglamento de Tránsito.'
    },
    {
        id: 79,
        pregunta: '¿Qué indica una señal de "PASO UNO POR UNO" en una intersección?',
        opciones: [
            'Los vehículos deben alternarse uno a uno al cruzar la intersección',
            'Todos los vehículos pueden cruzar simultáneamente',
            'Solo un vehículo puede cruzar cada 5 minutos',
            'Prohíbe el paso de vehículos en esa intersección'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva para regular el tránsito en intersecciones.'
    },
    {
        id: 80,
        pregunta: '¿Cuál es la sanción por conducir bajo los efectos del alcohol en la CDMX?',
        opciones: [
            'Multa de 10 a 20 UMA y 3 puntos en la licencia',
            'Arresto administrativo de 20 a 36 horas, 6 puntos en la licencia y remisión del vehículo al depósito',
            'Solo multa de 50 UMA',
            'Suspensión de la licencia por 1 año'
        ],
        correcta: 1,
        pista: 'Artículo 50 del Reglamento de Tránsito.'
    },
    {
        id: 81,
        pregunta: '¿Qué indica una señal de "CIRCULACIÓN EN GLORIETA" con flecha circular?',
        opciones: [
            'Los vehículos deben circular dentro de la glorieta en el sentido indicado',
            'Prohíbe la circulación en la glorieta',
            'Indica una salida de la glorieta',
            'Permite circular en ambos sentidos'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva que indica el sentido de circulación en una glorieta.'
    },
    {
        id: 82,
        pregunta: '¿Qué deben hacer los conductores al aproximarse a una señal de "ESCOLARES"?',
        opciones: [
            'Acelerar para pasar rápido',
            'Disminuir la velocidad, extremar precauciones y respetar la señalización',
            'Ignorar la señal',
            'Tocar el claxon para avisar a los escolares'
        ],
        correcta: 1,
        pista: 'Artículo 8, fracción XII del Reglamento de Tránsito.'
    },
    {
        id: 83,
        pregunta: '¿Qué indica una señal de "PROHIBIDO ESTACIONAR" con guarnición amarilla en la CDMX?',
        opciones: [
            'Prohíbe el estacionamiento en ese tramo de la vía',
            'Permite estacionarse por tiempo limitado',
            'Solo prohíbe estacionarse de noche',
            'Permite estacionarse solo a residentes'
        ],
        correcta: 0,
        pista: 'Artículo 30, fracción V del Reglamento de Tránsito.'
    },
    {
        id: 84,
        pregunta: '¿Qué es un "hecho de tránsito" según el Reglamento de Tránsito?',
        opciones: [
            'Cualquier evento de tráfico sin consecuencias',
            'Evento producido por el tránsito vehicular que causa daños materiales, lesiones o muerte',
            'Un accidente con daños menores',
            'Una infracción de tránsito sin consecuencias'
        ],
        correcta: 1,
        pista: 'Artículo 4, fracción XVII del Reglamento de Tránsito.'
    },
    {
        id: 85,
        pregunta: '¿Qué indica una señal de "PROHIBIDO EL TRÁNSITO DE PEATONES" en una vía de acceso controlado?',
        opciones: [
            'Prohíbe el tránsito de peatones en ese tramo de la vía',
            'Permite el paso de peatones solo con precaución',
            'Prohíbe el cruce de peatones en ese sitio',
            'Indica una zona peatonal'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 86,
        pregunta: '¿Qué deben hacer los conductores al circular por una vía con carril exclusivo de transporte público?',
        opciones: [
            'Pueden circular si no hay transporte público',
            'No pueden circular en ese carril a menos que estén autorizados',
            'Pueden circular solo para rebasar',
            'Pueden circular de noche'
        ],
        correcta: 1,
        pista: 'Artículo 11, fracción X del Reglamento de Tránsito.'
    },
    {
        id: 87,
        pregunta: '¿Qué indica una señal de "VÍA REVERSIBLE" en una intersección?',
        opciones: [
            'Proximidad de una vía que cambia de sentido en cierto horario',
            'Una vía de doble sentido',
            'Una vía de sentido único',
            'Prohibido el paso de vehículos'
        ],
        correcta: 0,
        pista: 'Es una señal preventiva del Reglamento de Tránsito.'
    },
    {
        id: 88,
        pregunta: '¿Cuál es la sanción por estacionarse en un cajón para personas con discapacidad sin autorización?',
        opciones: [
            'Multa de 5 a 10 UMA',
            'Multa de 20 a 30 UMA y 6 puntos en la licencia',
            'Solo amonestación',
            'Remisión del vehículo al depósito'
        ],
        correcta: 1,
        pista: 'Artículo 30, fracción XV del Reglamento de Tránsito.'
    },
    {
        id: 89,
        pregunta: '¿Qué indica una señal de "PROHIBIDO EL TRÁNSITO DE VEHÍCULOS DE TRACCIÓN ANIMAL"?',
        opciones: [
            'Prohíbe el tránsito de vehículos de tracción animal en ciertos carriles o tramos',
            'Prohíbe el tránsito de bicicletas',
            'Prohíbe el tránsito de motocicletas',
            'Indica una zona de descanso para animales'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 90,
        pregunta: '¿Qué deben hacer los conductores al ver una señal de "BANDERERO" en una zona de obras?',
        opciones: [
            'Ignorar las indicaciones del banderero',
            'Seguir las indicaciones del banderero',
            'Acelerar para pasar rápido',
            'Detenerse solo si hay tráfico'
        ],
        correcta: 1,
        pista: 'Los bandereros controlan el tránsito en zonas de obras.'
    },
    {
        id: 91,
        pregunta: '¿Qué indica una señal de "ESTACIONAMIENTO PARA BICICLETAS" en la vía pública?',
        opciones: [
            'Espacio exclusivo para estacionamiento de bicicletas',
            'Espacio para estacionamiento de motocicletas',
            'Zona de carga y descarga',
            'Estacionamiento para vehículos particulares'
        ],
        correcta: 0,
        pista: 'Es una señal de servicios de la CDMX.'
    },
    {
        id: 92,
        pregunta: '¿Qué deben hacer los conductores al circular en una vía con doble sentido de circulación?',
        opciones: [
            'Circular por el carril derecho de la vía',
            'Circular por el carril izquierdo de la vía',
            'Circular por el centro de la vía',
            'Ceder el paso a todos los vehículos'
        ],
        correcta: 0,
        pista: 'Artículo 8, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 93,
        pregunta: '¿Qué indica una señal de "PROHIBIDO CAMBIAR DE VÍA" en una carretera?',
        opciones: [
            'Prohíbe las maniobras de cambio de vía en el sentido que muestra la flecha',
            'Permite cambiar de vía con precaución',
            'Prohíbe el estacionamiento en esa vía',
            'Indica un carril exclusivo'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 94,
        pregunta: '¿Qué deben hacer los conductores al transportar carga en el vehículo?',
        opciones: [
            'La carga debe estar asegurada para evitar caídas',
            'La carga puede sobresalir sin restricciones',
            'La carga debe ser transportada en el techo del vehículo',
            'No es necesario asegurar la carga'
        ],
        correcta: 0,
        pista: 'Artículo 37, fracción IV del Reglamento de Tránsito.'
    },
    {
        id: 95,
        pregunta: '¿Qué indica una señal de "PROHIBIDO PARAR" en una vía primaria?',
        opciones: [
            'Prohíbe estacionarse o detenerse momentáneamente en esa vía',
            'Permite detenerse solo para carga y descarga',
            'Prohíbe estacionarse, pero permite detenerse momentáneamente',
            'Permite detenerse solo en caso de emergencia'
        ],
        correcta: 0,
        pista: 'Artículo 30, fracción II del Reglamento de Tránsito.'
    },
    {
        id: 96,
        pregunta: '¿Qué es el Programa Integral de Movilidad (PIM) en la CDMX?',
        opciones: [
            'Un programa para reducir el tráfico en la ciudad',
            'El programa que establece la política de movilidad sostenible, priorizando a peatones y ciclistas',
            'Un programa para construir más carriles para automóviles',
            'Un programa para eliminar el transporte público'
        ],
        correcta: 1,
        pista: 'Guía de Usuario de la CDMX.'
    },
    {
        id: 97,
        pregunta: '¿Qué indica una señal de "APERTURA DE PORTEZUELAS" en una zona de estacionamiento?',
        opciones: [
            'Advierte sobre la posibilidad de impactos al abrir portezuelas en una zona de estacionamiento',
            'Indica una zona de estacionamiento',
            'Prohíbe abrir portezuelas en la vía',
            'Indica un carril exclusivo para bicicletas'
        ],
        correcta: 0,
        pista: 'Es una señal preventiva del Reglamento de Tránsito.'
    },
    {
        id: 98,
        pregunta: '¿Qué deben hacer los conductores al aproximarse a un túnel en la CDMX?',
        opciones: [
            'Encender las luces del vehículo',
            'Apagar las luces para no deslumbrar',
            'Acelerar para salir rápido del túnel',
            'Detenerse dentro del túnel'
        ],
        correcta: 0,
        pista: 'Artículo 37, fracción II, inciso d del Reglamento de Tránsito.'
    },
    {
        id: 99,
        pregunta: '¿Qué indica una señal de "PROHIBIDO EL TRÁNSITO DE VEHÍCULOS DE TRANSPORTE PÚBLICO" en un carril?',
        opciones: [
            'Prohíbe el tránsito de vehículos de transporte público en ese carril o tramo',
            'Solo permite el tránsito de transporte público',
            'Prohíbe el estacionamiento de transporte público',
            'Indica un carril exclusivo para transporte público'
        ],
        correcta: 0,
        pista: 'Es una señal restrictiva del Reglamento de Tránsito.'
    },
    {
        id: 100,
        pregunta: '¿Qué deben hacer los conductores al ver una señal de "ZONA DE DERRUMBES" en una carretera?',
        opciones: [
            'Acelerar para pasar rápido',
            'Disminuir la velocidad y extremar precauciones',
            'Ignorar la señal',
            'Detenerse y esperar'
        ],
        correcta: 1,
        pista: 'Es una señal preventiva del Reglamento de Tránsito.'
    }
];

// ============================================================
//  LÓGICA DEL SIMULADOR
// ============================================================

let estado = {
    modo: 'facil',          // 'facil' o 'dificil'
    preguntas: [],          // 20 preguntas seleccionadas
    indiceActual: 0,
    respuestas: [],         // array de índices seleccionados (null = sin responder)
    pistasUsadas: 0,
    maxPistas: 2,
    timer: null,
    tiempoRestante: 0,      // en segundos
    tiempoLimite: 0,        // en segundos
    examenTerminado: false,
    iniciado: false
};

// ---- Elementos DOM ----
const $ = id => document.getElementById(id);
const inicio = $('inicio');
const examen = $('examen');
const resultados = $('resultados');
const preguntaTexto = $('preguntaTexto');
const opcionesContainer = $('opcionesContainer');
const pistaBox = $('pistaBox');
const pistaTexto = $('pistaTexto');
const btnPista = $('btnPista');
const btnAnterior = $('btnAnterior');
const btnSiguiente = $('btnSiguiente');
const timerDisplay = $('timerDisplay');
const progresoLabel = $('progresoLabel');
const modoLabel = $('modoLabel');

// ============================================================
//  INICIAR EXAMEN
// ============================================================
function iniciarExamen(modo) {
    estado.modo = modo;
    estado.iniciado = true;
    estado.examenTerminado = false;
    estado.indiceActual = 0;
    estado.pistasUsadas = 0;
    estado.respuestas = [];

    // Configurar tiempo
    if (modo === 'facil') {
        estado.tiempoLimite = 30 * 60; // 30 minutos
        estado.maxPistas = 2;
        modoLabel.textContent = '🟢 Modo Fácil · 30 min · 2 pistas';
    } else {
        estado.tiempoLimite = 25 * 60; // 25 minutos
        estado.maxPistas = 0;
        modoLabel.textContent = '🔴 Modo Difícil · 25 min · sin pistas';
    }
    estado.tiempoRestante = estado.tiempoLimite;

    // Seleccionar 20 preguntas aleatorias
    const shuffled = [...BANCO_PREGUNTAS].sort(() => Math.random() - 0.5);
    estado.preguntas = shuffled.slice(0, 20);
    estado.respuestas = new Array(20).fill(null);

    // Ocultar pista en modo difícil
    if (modo === 'dificil') {
        btnPista.style.display = 'none';
        pistaBox.classList.remove('visible');
    } else {
        btnPista.style.display = 'inline-block';
        pistaBox.classList.remove('visible');
    }

    // Mostrar examen
    inicio.style.display = 'none';
    examen.style.display = 'block';
    resultados.style.display = 'none';

    // Renderizar primera pregunta
    renderPregunta();

    // Iniciar temporizador
    if (estado.timer) clearInterval(estado.timer);
    actualizarTimerDisplay();
    estado.timer = setInterval(() => {
        estado.tiempoRestante--;
        actualizarTimerDisplay();
        if (estado.tiempoRestante <= 0) {
            clearInterval(estado.timer);
            terminarExamen('Se acabó el tiempo ⏰');
        }
    }, 1000);
}

// ============================================================
//  RENDERIZAR PREGUNTA
// ============================================================
function renderPregunta() {
    const idx = estado.indiceActual;
    const pregunta = estado.preguntas[idx];
    if (!pregunta) return;

    // Texto de la pregunta
    preguntaTexto.textContent = `${idx + 1}. ${pregunta.pregunta}`;

    // Opciones
    opcionesContainer.innerHTML = '';
    const letras = ['A', 'B', 'C', 'D'];
    pregunta.opciones.forEach((opcion, i) => {
        const div = document.createElement('div');
        div.className = 'opcion';
        if (estado.respuestas[idx] === i) {
            div.classList.add('seleccionada');
        }
        div.innerHTML = `
            <span class="letra">${letras[i]}.</span>
            <span class="texto">${opcion}</span>
        `;
        div.addEventListener('click', () => seleccionarOpcion(i));
        opcionesContainer.appendChild(div);
    });

    // Pista
    if (estado.modo === 'facil' && estado.pistasUsadas < estado.maxPistas) {
        btnPista.disabled = false;
        btnPista.textContent = `💡 Pista (${estado.maxPistas - estado.pistasUsadas} restantes)`;
    } else {
        btnPista.disabled = true;
        btnPista.textContent = '💡 Sin pistas';
    }
    pistaBox.classList.remove('visible');

    // Progreso
    progresoLabel.textContent = `Pregunta ${idx + 1} / ${estado.preguntas.length}`;

    // Botones de navegación
    btnAnterior.disabled = (idx === 0);
    const esUltima = (idx === estado.preguntas.length - 1);
    btnSiguiente.textContent = esUltima ? '📊 Ver resultados' : 'Siguiente ▶';
}

// ============================================================
//  SELECCIONAR OPCIÓN
// ============================================================
function seleccionarOpcion(indice) {
    if (estado.examenTerminado) return;
    const idx = estado.indiceActual;
    estado.respuestas[idx] = indice;

    // Actualizar visual
    const opciones = opcionesContainer.querySelectorAll('.opcion');
    opciones.forEach((el, i) => {
        el.classList.toggle('seleccionada', i === indice);
    });
}

// ============================================================
//  NAVEGACIÓN
// ============================================================
function preguntaSiguiente() {
    if (estado.examenTerminado) return;
    const idx = estado.indiceActual;
    const esUltima = (idx === estado.preguntas.length - 1);

    if (esUltima) {
        // Verificar que todas estén respondidas
        const sinResponder = estado.respuestas.some(r => r === null);
        if (sinResponder) {
            const confirmar = confirm('⚠️ Aún hay preguntas sin responder. ¿Quieres finalizar de todos modos?');
            if (!confirmar) return;
        }
        terminarExamen();
    } else {
        estado.indiceActual++;
        renderPregunta();
    }
}

function preguntaAnterior() {
    if (estado.examenTerminado) return;
    if (estado.indiceActual > 0) {
        estado.indiceActual--;
        renderPregunta();
    }
}

// ============================================================
//  PISTA (solo modo fácil)
// ============================================================
function usarPista() {
    if (estado.modo !== 'facil') return;
    if (estado.pistasUsadas >= estado.maxPistas) return;
    if (estado.examenTerminado) return;

    const pregunta = estado.preguntas[estado.indiceActual];
    if (!pregunta.pista) return;

    estado.pistasUsadas++;
    pistaTexto.textContent = pregunta.pista;
    pistaBox.classList.add('visible');

    btnPista.disabled = true;
    btnPista.textContent = `💡 Pista (${estado.maxPistas - estado.pistasUsadas} restantes)`;
}

// ============================================================
//  TEMPORIZADOR
// ============================================================
function actualizarTimerDisplay() {
    const mins = Math.floor(estado.tiempoRestante / 60);
    const segs = estado.tiempoRestante % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(segs).padStart(2, '0')}`;

    // Cambiar color si queda menos de 5 minutos
    if (estado.tiempoRestante < 300) {
        timerDisplay.style.color = '#c44536';
    } else {
        timerDisplay.style.color = '#0b2b4a';
    }
}

// ============================================================
//  TERMINAR EXAMEN
// ============================================================
function terminarExamen(mensajeError = null) {
    if (estado.examenTerminado) return;
    estado.examenTerminado = true;
    if (estado.timer) {
        clearInterval(estado.timer);
        estado.timer = null;
    }

    // Calcular resultados
    let aciertos = 0;
    estado.preguntas.forEach((pregunta, idx) => {
        if (estado.respuestas[idx] === pregunta.correcta) {
            aciertos++;
        }
    });

    const total = estado.preguntas.length;
    const calificacion = (aciertos / total) * 10;
    const aprobado = calificacion >= 8.0;

    // Mostrar resultados
    examen.style.display = 'none';
    resultados.style.display = 'block';

    $('puntajeFinal').textContent = calificacion.toFixed(1);
    $('estadoFinal').textContent = aprobado ? '✅ ¡Aprobado!' : '❌ Reprobado';
    $('estadoFinal').className = `estado ${aprobado ? 'aprobado' : 'reprobado'}`;

    let detalle = `Acertaste ${aciertos} de ${total} preguntas.`;
    if (mensajeError) detalle += ` ${mensajeError}`;
    if (!aprobado) {
        detalle += ' Necesitas 16 aciertos para aprobar (8.0).';
    }
    $('detalleFinal').textContent = detalle;
}

// ============================================================
//  REINICIAR
// ============================================================
function reiniciar() {
    if (estado.timer) {
        clearInterval(estado.timer);
        estado.timer = null;
    }
    estado.iniciado = false;
    estado.examenTerminado = false;
    inicio.style.display = 'block';
    examen.style.display = 'none';
    resultados.style.display = 'none';
    timerDisplay.style.color = '#0b2b4a';
}

// ============================================================
//  TECLADO (para navegación rápida)
// ============================================================
document.addEventListener('keydown', (e) => {
    if (estado.examenTerminado) return;
    if (!estado.iniciado) return;

    // Números 1-4 para seleccionar opciones
    if (e.key >= '1' && e.key <= '4') {
        const idx = parseInt(e.key) - 1;
        const opciones = opcionesContainer.querySelectorAll('.opcion');
        if (idx < opciones.length) {
            opciones[idx].click();
        }
    }

    // Flechas: izquierda/derecha para navegar
    if (e.key === 'ArrowLeft') {
        btnAnterior.click();
    }
    if (e.key === 'ArrowRight') {
        btnSiguiente.click();
    }
});