function fmt(n) {
  return n.toLocaleString('es-ES');
}

function calcular() {
  const tickets        = parseFloat(document.getElementById('tickets').value) || 0;
  const cons_ticket    = parseFloat(document.getElementById('consultas_ticket').value) || 0;
  const tok_entrada    = parseFloat(document.getElementById('tokens_entrada').value) || 0;
  const tok_salida     = parseFloat(document.getElementById('tokens_salida').value) || 0;
  const t_actual       = parseFloat(document.getElementById('tiempo_actual').value) || 0;
  const t_ia           = parseFloat(document.getElementById('tiempo_ia').value) || 0;
  const coste_hora     = parseFloat(document.getElementById('coste_hora').value) || 0;

  const consultas      = tickets * cons_ticket;
  const tokens_e       = consultas * tok_entrada;
  const tokens_s       = consultas * tok_salida;
  const ahorro_ticket  = t_actual - t_ia;
  const minutos        = tickets * ahorro_ticket;
  const horas          = minutos / 60;
  const ahorro_bruto   = horas * coste_hora;

  document.getElementById('r_consultas').textContent      = fmt(consultas) + ' consultas/mes';
  document.getElementById('r_tokens_entrada').textContent = fmt(tokens_e) + ' tokens/mes';
  document.getElementById('r_tokens_salida').textContent  = fmt(tokens_s) + ' tokens/mes';
  document.getElementById('r_ahorro_ticket').textContent  = fmt(ahorro_ticket) + ' min/ticket';
  document.getElementById('r_minutos').textContent        = fmt(minutos) + ' min/mes';
  document.getElementById('r_horas').textContent          = fmt(horas) + ' horas/mes';
  document.getElementById('r_ahorro_bruto').textContent   = fmt(ahorro_bruto) + ' €/mes';
}

// Calcular automáticamente al cargar
window.addEventListener('DOMContentLoaded', calcular);
