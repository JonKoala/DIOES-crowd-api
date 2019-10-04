
tiposIoes = ['Aviso de Licitação', 'Contrato', 'Aditivo', 'Ata Registro de Preço', 'Inexigibilidade de Licitação', 'Dispensa de Licitação', 'Portaria', 'Edital', 'Convocação']
tiposAmunes = ['Ata de registro de preços', 'Atas', 'Concursos', 'Contratos', 'Convênios', 'Decretos', 'Editais de Notificação', 'Leis', 'Licitações', 'Outras publicações', 'Portarias', 'Resoluções']

module.exports = {
  tipos: tiposIoes.concat(tiposAmunes),
  classes: ['SAÚDE E ASSISTÊNCIA SOCIAL', 'EDUCAÇÃO E SEGURANÇA PÚBLICA', 'ENGENHARIA E MEIO AMBIENTE', 'TECNOLOGIA DA INFORMAÇÃO', 'GERAL', 'PREVIDÊNCIA E PESSOAL']
}
