function status(request, response) {
  response.status(200).json({chave: "Apenas um teste de acentuação" })
}

export default status