const express = require('express')
const router = express.Router()
const entidadService = require('../entidad/service')
const service = new entidadService()
const reportService = require('../reports/service')
const serviceReport = new reportService()
const path = require('path')

router.get('/', (req, res) => {
  const reportes = serviceReport.listar()
  res.render('index', {
    title: 'CSV Analyzer',
    reportes
  })
})

router.get('/new-entry', (req, res) => {
  const entidades = service.listar()
  res.render('new-entries', {
    title: 'generar archivo de configuracion',
    entidades
  })
})

router.post('/new-entry', (req, res) => {
  const entidades = service.listar()
  console.log('data de formulario', req.body)
  res.render('new-entries', {
    title: 'Prueba new Entries',
    entidades
  })
})

router.get('/dicci', (req, res) => {
  res.render('diccionario', {
    title: 'Diccionario'
  })
})

router.get(
  '/ejecucion-presupuestal-ingresos',
  (req, res) => {
    res.render('ejecucionIngreso', {
      title: 'Ejecución Presupuestal de Ingresos'
    })
  }
)

router.get('/relacion-ingresos', (req, res) => {
  res.render('relacionIngreso', {
    title: 'Relación de Ingresos'
  })
})

router.get('/ejecucion-presupuestal-gastos', (req, res) => {
  res.render('ejecucionGastos', {
    title: 'Ejecución Presupuestal de Gastos'
  })
})

router.get('/relacion-cdps', (req, res) => {
  res.render('relacionCdps', {
    title: 'Relación de CDPs'
  })
})

router.get('/relacion-compromisos', (req, res) => {
  res.render('relacionCompromisos', {
    title: 'Relación de Compromisos'
  })
})

router.get('/relacion-obligaciones', (req, res) => {
  res.render('relacionObligaciones', {
    title: 'Relación de Obligaciones'
  })
})

router.get('/relacion-pagos', (req, res) => {
  res.render('relacionPagos', {
    title: 'Relación de Pagos'
  })
})

router.get('/auxiliar-saldos', (req, res) => {
  res.render('auxiliarConSaldos', {
    title: 'Auxiliar con Saldos'
  })
})

router.get('/libro-mayor-balance', (req, res) => {
  res.render('libroMayorBalance', {
    title: 'Libro Mayor y Balance '
  })
})

router.get('/estado-situacion-financiera', (req, res) => {
  res.render('estadoFinanciero', {
    title: 'Estado Situación Financiera'
  })
})

router.get('/programa-proyecto', (req, res) => {
  res.render('programasyproyectos', {
    title: 'Programas y Proyectos'
  })
})

router.get('/contratacion', (req, res) => {
  res.render('contratacion', {
    title: 'Contratación'
  })
})

router.get('/obras', (req, res) => {
  res.render('obras', {
    title: 'Obras de Infraestructura'
  })
})

router.get('/anexacoordenadas', (req, res) => {
  res.render('anexacoordenadas', {
    title: 'Obras de Infraestructura'
  })
})

router.get('/anexahitos', (req, res) => {
  res.render('anexahitos', {
    title: 'Obras de Infraestructura'
  })
})

router.get(
  '/ejecucion-presupuestal-ingresos-ejemplo',
  (req, res) => {
    const file = path.resolve(
      __dirname,
      '../../../public/EJECUCION_PRESUPUESTAL_INGRESOS_AAAAMMDD.csv'
    )
    res.download(file)
  }
)

router.get('/relacion-ingresos-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/RELACION_INGRESOS_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/relacion-gastos-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/EJECUCION_PRESUPUESTAL_GASTOS_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/relacion-cdps-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/RELACION_CDPS_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/relacion-compromisos-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/RELACION_COMPROMISOS_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/relacion-obligaciones-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/RELACION_OBLIGACIONES_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/relacion-pagos-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/RELACION_PAGOS_AAAAMMDD.csv'
  )
  res.download(file)
})

/*** */

router.get('/auxiliar-saldos-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/AUXILIAR_SALDOS_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/libro-mayor-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/LIBRO_MAYOR_BALANCE_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/estado-financiero-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/ESTADO_SITUACION_FINANCIERA_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/programas-proyecto-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/PROGRAMAS_PROYECTOS_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/contratacion-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/CONTRATACION_AAAAMMDD.csv'
  )
  res.download(file)
})

router.get('/obras-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/MATRIZ_SEGUIMIENTO_OBRAS_AAAAMMDD.csv'
  )
  res.download(file)
})
module.exports = router

router.get('/coordenadas-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/MATRIZ_ANEXA_COORDENADAS_ADICIONALES_AAAAMMDD.csv'
  )
  res.download(file)
})
module.exports = router

router.get('/hitos-ejemplo', (req, res) => {
  const file = path.resolve(
    __dirname,
    '../../../public/MATRIZ_HITOS_AAAAMMDD.csv'
  )
  res.download(file)
})
module.exports = router