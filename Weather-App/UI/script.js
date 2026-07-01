
// ============================================================
//  SKYCAST — script.js
//  SVG weather icons are inlined as data URIs so no extra
//  files are needed.
// ============================================================

const API_BASE = 'http://localhost:8080/weather/forecast';

// ── Inline SVG icons (data URIs) ──────────────────────────
const ICONS = {
  'partly-cloudy': `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBmaWxsPSJub25lIj4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjQ4IiByPSIyOCIgZmlsbD0iI0ZGRDE2NiIgb3BhY2l0eT0iMC4xNSIvPgogIDxnIHN0cm9rZT0iI0ZGRDE2NiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgPGxpbmUgeDE9IjQyIiB5MT0iMTQiIHgyPSI0MiIgeTI9IjgiLz4KICAgIDxsaW5lIHgxPSI0MiIgeTE9IjgyIiB4Mj0iNDIiIHkyPSI4OCIvPgogICAgPGxpbmUgeDE9IjgiIHkxPSI0OCIgeDI9IjE0IiB5Mj0iNDgiLz4KICAgIDxsaW5lIHgxPSI3NiIgeTE9IjQ4IiB4Mj0iNzAiIHkyPSI0OCIvPgogICAgPGxpbmUgeDE9IjE4IiB5MT0iMjQiIHgyPSIyMiIgeTI9IjI4Ii8+CiAgICA8bGluZSB4MT0iNjYiIHkxPSIyNCIgeDI9IjYyIiB5Mj0iMjgiLz4KICAgIDxsaW5lIHgxPSIxOCIgeTE9IjcyIiB4Mj0iMjIiIHkyPSI2OCIvPgogICAgPGxpbmUgeDE9IjY2IiB5MT0iNzIiIHgyPSI2MiIgeTI9IjY4Ii8+CiAgPC9nPgogIDxjaXJjbGUgY3g9IjQyIiBjeT0iNDgiIHI9IjE4IiBmaWxsPSIjRkZEMTY2Ii8+CiAgPGVsbGlwc2UgY3g9Ijc0IiBjeT0iODUiIHJ4PSIzMiIgcnk9IjYiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMDgiLz4KICA8cmVjdCB4PSIzNCIgeT0iNjgiIHdpZHRoPSI3NiIgaGVpZ2h0PSIzMCIgcng9IjE1IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSIvPgogIDxjaXJjbGUgY3g9IjU0IiBjeT0iNjgiIHI9IjE4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSIvPgogIDxjaXJjbGUgY3g9Ijc2IiBjeT0iNjIiIHI9IjIyIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSIvPgogIDxjaXJjbGUgY3g9Ijk2IiBjeT0iNzAiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSIvPgo8L3N2Zz4=`,

  'sunny': `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBmaWxsPSJub25lIj4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSI0NiIgZmlsbD0iI0ZGRDE2NiIgb3BhY2l0eT0iMC4xMiIvPgogIDxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjM2IiBmaWxsPSIjRkZEMTY2IiBvcGFjaXR5PSIwLjE4Ii8+CiAgPGcgc3Ryb2tlPSIjRkZEMTY2IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgIDxsaW5lIHgxPSI2MCIgeTE9IjEwIiB4Mj0iNjAiIHkyPSIyIi8+CiAgICA8bGluZSB4MT0iNjAiIHkxPSIxMTgiIHgyPSI2MCIgeTI9IjExMCIvPgogICAgPGxpbmUgeDE9IjIiIHkxPSI2MCIgeDI9IjEwIiB5Mj0iNjAiLz4KICAgIDxsaW5lIHgxPSIxMTgiIHkxPSI2MCIgeDI9IjExMCIgeTI9IjYwIi8+CiAgICA8bGluZSB4MT0iMTkiIHkxPSIxOSIgeDI9IjI1IiB5Mj0iMjUiLz4KICAgIDxsaW5lIHgxPSIxMDEiIHkxPSIxOSIgeDI9Ijk1IiB5Mj0iMjUiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9IjEwMSIgeDI9IjI1IiB5Mj0iOTUiLz4KICAgIDxsaW5lIHgxPSIxMDEiIHkxPSIxMDEiIHgyPSI5NSIgeTI9Ijk1Ii8+CiAgPC9nPgogIDxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjI2IiBmaWxsPSIjRkZEMTY2Ii8+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMjAiIGZpbGw9IiNGRkMyMzMiLz4KPC9zdmc+`,

  'rainy': `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBmaWxsPSJub25lIj4KICA8ZWxsaXBzZSBjeD0iNjAiIGN5PSI3MiIgcng9IjM4IiByeT0iNiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4wOCIvPgogIDxyZWN0IHg9IjE4IiB5PSIzOCIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjM2IiByeD0iMTgiIGZpbGw9IiM5QUIzQzgiLz4KICA8Y2lyY2xlIGN4PSIzOCIgY3k9IjM4IiByPSIyMCIgZmlsbD0iIzlBQjNDOCIvPgogIDxjaXJjbGUgY3g9IjYyIiBjeT0iMzAiIHI9IjI2IiBmaWxsPSIjOUFCM0M4Ii8+CiAgPGNpcmNsZSBjeD0iODYiIGN5PSIzOCIgcj0iMjAiIGZpbGw9IiM5QUIzQzgiLz4KICA8ZWxsaXBzZSBjeD0iNTIiIGN5PSIyNiIgcng9IjEwIiByeT0iNSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMjUiIHRyYW5zZm9ybT0icm90YXRlKC0yMCA1MiAyNikiLz4KICA8ZyBzdHJva2U9IiM1QjlCRDUiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAuOSI+CiAgICA8bGluZSB4MT0iMzYiIHkxPSI4MiIgeDI9IjMwIiB5Mj0iMTAwIi8+CiAgICA8bGluZSB4MT0iNTIiIHkxPSI4MiIgeDI9IjQ2IiB5Mj0iMTA1Ii8+CiAgICA8bGluZSB4MT0iNjgiIHkxPSI4MiIgeDI9IjYyIiB5Mj0iMTAwIi8+CiAgICA8bGluZSB4MT0iODQiIHkxPSI4MiIgeDI9Ijc4IiB5Mj0iMTA1Ii8+CiAgPC9nPgo8L3N2Zz4=`,

  'cloudy': `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIyOCIgeT0iNTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiIgcng9IjE2IiBmaWxsPSIjQjhDOUQ4IiBvcGFjaXR5PSIwLjciLz4KICA8Y2lyY2xlIGN4PSI0NCIgY3k9IjUwIiByPSIxNyIgZmlsbD0iI0I4QzlEOCIgb3BhY2l0eT0iMC43Ii8+CiAgPGNpcmNsZSBjeD0iNjQiIGN5PSI0MyIgcj0iMjIiIGZpbGw9IiNCOEM5RDgiIG9wYWNpdHk9IjAuNyIvPgogIDxjaXJjbGUgY3g9Ijg0IiBjeT0iNTAiIHI9IjE3IiBmaWxsPSIjQjhDOUQ4IiBvcGFjaXR5PSIwLjciLz4KICA8cmVjdCB4PSIxNiIgeT0iNjIiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzNCIgcng9IjE3IiBmaWxsPSIjOUFCM0M4Ii8+CiAgPGNpcmNsZSBjeD0iMzQiIGN5PSI2MiIgcj0iMTkiIGZpbGw9IiM5QUIzQzgiLz4KICA8Y2lyY2xlIGN4PSI1NiIgY3k9IjU0IiByPSIyNCIgZmlsbD0iIzlBQjNDOCIvPgogIDxjaXJjbGUgY3g9Ijc4IiBjeT0iNjIiIHI9IjE4IiBmaWxsPSIjOUFCM0M4Ii8+CiAgPGVsbGlwc2UgY3g9IjQ2IiBjeT0iNTAiIHJ4PSIxMiIgcnk9IjYiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjIiIHRyYW5zZm9ybT0icm90YXRlKC0xNSA0NiA1MCkiLz4KPC9zdmc+`,

  'thunderstorm': `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIxNCIgeT0iMzIiIHdpZHRoPSI4OCIgaGVpZ2h0PSIzOCIgcng9IjE5IiBmaWxsPSIjNkI3RTkwIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMjEiIGZpbGw9IiM2QjdFOTAiLz4KICA8Y2lyY2xlIGN4PSI1OCIgY3k9IjIyIiByPSIyOCIgZmlsbD0iIzZCN0U5MCIvPgogIDxjaXJjbGUgY3g9Ijg0IiBjeT0iMzIiIHI9IjIxIiBmaWxsPSIjNkI3RTkwIi8+CiAgPGVsbGlwc2UgY3g9IjQ4IiBjeT0iMTgiIHJ4PSIxNCIgcnk9IjciIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjE1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTAgNDggMTgpIi8+CiAgPHBvbHlnb24gcG9pbnRzPSI2Niw2OCA1NCw5MCA2Myw5MCA1MCwxMTIgNzQsODQgNjQsODQiIGZpbGw9IiNGRkQxNjYiLz4KPC9zdmc+`,

  'foggy': `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI4IiB5PSIzMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiNCMEM0RDgiIG9wYWNpdHk9IjAuNSIvPgogIDxyZWN0IHg9IjE4IiB5PSI1MCIgd2lkdGg9IjkwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI0IwQzREOCIgb3BhY2l0eT0iMC42Ii8+CiAgPHJlY3QgeD0iOCIgeT0iNzAiIHdpZHRoPSIxMDQiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjQjBDNEQ4IiBvcGFjaXR5PSIwLjciLz4KICA8cmVjdCB4PSIyMCIgeT0iOTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiNCMEM0RDgiIG9wYWNpdHk9IjAuNTUiLz4KICA8cmVjdCB4PSI4IiB5PSIzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMTUiLz4KICA8cmVjdCB4PSIxOCIgeT0iNzAiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjE1Ii8+Cjwvc3ZnPg==`
};

// ── Condition string → icon key ───────────────────────────
function getIcon(condition = '') {
  const c = condition.toLowerCase();
  if (c.includes('thunder') || c.includes('storm'))                        return ICONS.thunderstorm;
  if (c.includes('rain') || c.includes('drizzle') || c.includes('shower')) return ICONS.rainy;
  if (c.includes('fog')  || c.includes('mist')   || c.includes('haze'))   return ICONS.foggy;
  if (c.includes('partly') || c.includes('overcast') || c.includes('broken')) return ICONS['partly-cloudy'];
  if (c.includes('cloud'))                                                  return ICONS.cloudy;
  return ICONS.sunny;
}

// ── Date helpers ─────────────────────────────────────────
function dayName(dateStr, idx) {
  if (idx === 0) return 'Today';
  if (idx === 1) return 'Tomorrow';
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' });
}

function shortDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ── Temperature → accent color ───────────────────────────
function tempColor(t) {
  if (t >= 40) return '#FF6B6B';
  if (t >= 32) return '#FFA94D';
  if (t >= 22) return '#FFD166';
  if (t >= 12) return '#74C0FC';
  return '#A5D8FF';
}

// ── DOM refs ─────────────────────────────────────────────
const cityInput      = document.getElementById('cityInput');
const daysInput      = document.getElementById('daysInput');
const fetchBtn       = document.getElementById('fetchBtn');
const errorMsg       = document.getElementById('errorMsg');
const loadingState   = document.getElementById('loadingState');
const resultsSection = document.getElementById('resultsSection');
const currentIcon    = document.getElementById('currentIcon');
const locationLine   = document.getElementById('locationLine');
const cityNameEl     = document.getElementById('cityName');
const conditionEl    = document.getElementById('conditionText');
const currentTemp    = document.getElementById('currentTemp');
const forecastGrid   = document.getElementById('forecastGrid');
const tempChart      = document.getElementById('tempChart');

// ── Fetch ────────────────────────────────────────────────
async function fetchWeather() {
  const city = cityInput.value.trim();
  const days = parseInt(daysInput.value, 10);

  if (!city)                          return showError('Please enter a city name.');
  if (!days || days < 1 || days > 14) return showError('Days must be between 1 and 14.');

  hideError();
  setLoading(true);
  fetchBtn.disabled = true;
  resultsSection.classList.remove('visible');

  try {
    const res = await fetch(`${API_BASE}?city=${encodeURIComponent(city)}&days=${days}`);
    if (!res.ok) throw new Error((await res.text()) || `HTTP ${res.status}`);
    render(await res.json());
  } catch (err) {
    showError(`Could not fetch weather: ${err.message}`);
  } finally {
    setLoading(false);
    fetchBtn.disabled = false;
  }
}

// ── Render ───────────────────────────────────────────────
function render(data) {
  const w    = data.weatherResponse;
  const days = data.dayTemp || [];

  currentIcon.src = getIcon(w.condition);
  currentIcon.alt = w.condition;
  locationLine.textContent = [w.region, w.country].filter(Boolean).join(', ');
  cityNameEl.textContent   = w.city;
  conditionEl.textContent  = w.condition;
  currentTemp.textContent  = w.temperature.toFixed(1);

  forecastGrid.innerHTML = '';
  days.forEach((day, i) => {
    const range  = day.maxTemp - day.minTemp;
    const avgPct = range > 0 ? ((day.avgTemp - day.minTemp) / range * 100).toFixed(1) : 50;

    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-label">${dayName(day.date, i)}</div>
      <div class="day-date">${shortDate(day.date)}</div>
      <div class="day-icon"><img src="${getIcon(w.condition)}" alt="weather"/></div>
      <div class="temp-bar-labels">
        <span class="temp-min">${day.minTemp.toFixed(0)}°</span>
        <span class="temp-max">${day.maxTemp.toFixed(0)}°</span>
      </div>
      <div class="temp-bar-track">
        <div class="temp-bar-fill">
          <span class="avg-dot" style="left:${avgPct}%"></span>
        </div>
      </div>
      <div class="day-avg" style="color:${tempColor(day.avgTemp)}">${day.avgTemp.toFixed(1)}°</div>
      <div class="day-avg-label">avg</div>
    `;
    forecastGrid.appendChild(card);
  });

  drawChart(days);
  resultsSection.classList.add('visible');
}

// ── SVG Line Chart ───────────────────────────────────────
function drawChart(days) {
  if (!days.length) return;

  const W  = tempChart.clientWidth || 700;
  const H  = 180;
  const P  = { top: 20, right: 24, bottom: 36, left: 40 };
  const iW = W - P.left - P.right;
  const iH = H - P.top  - P.bottom;

  const allT = days.flatMap(d => [d.minTemp, d.maxTemp, d.avgTemp]);
  const minT = Math.floor(Math.min(...allT) - 2);
  const maxT = Math.ceil(Math.max(...allT)  + 2);

  const xS = i => P.left + (i / (days.length - 1 || 1)) * iW;
  const yS = t => P.top  + iH - ((t - minT) / (maxT - minT)) * iH;

  const path = key =>
    days.map((d, i) => `${i ? 'L' : 'M'}${xS(i).toFixed(1)} ${yS(d[key]).toFixed(1)}`).join(' ');

  const fill = [
    ...days.map((d, i) => `${i ? 'L' : 'M'}${xS(i).toFixed(1)} ${yS(d.maxTemp).toFixed(1)}`),
    ...days.map((d, i) => { const j = days.length - 1 - i; return `L${xS(j).toFixed(1)} ${yS(days[j].minTemp).toFixed(1)}`; }),
    'Z'
  ].join(' ');

  const grid = Array.from({ length: 5 }, (_, i) => {
    const t = minT + ((maxT - minT) / 4) * i;
    const y = yS(t).toFixed(1);
    return `<line x1="${P.left}" y1="${y}" x2="${W - P.right}" y2="${y}" stroke="rgba(122,156,200,0.12)" stroke-width="1"/>
            <text x="${P.left - 7}" y="${y}" text-anchor="end" dominant-baseline="middle" fill="#4A6B98" font-size="10" font-family="Inter,sans-serif">${Math.round(t)}°</text>`;
  }).join('');

  const xLabels = days.map((d, i) =>
    `<text x="${xS(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" fill="#4A6B98" font-size="10" font-family="Inter,sans-serif">${dayName(d.date, i)}</text>`
  ).join('');

  const dots = (key, color) => days.map((d, i) =>
    `<circle cx="${xS(i).toFixed(1)}" cy="${yS(d[key]).toFixed(1)}" r="4" fill="${color}" stroke="#0B1426" stroke-width="1.5"/>`
  ).join('');

  tempChart.innerHTML = `
    <svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#FF6B6B" stop-opacity="0.14"/>
          <stop offset="100%" stop-color="#74C0FC" stop-opacity="0.04"/>
        </linearGradient>
      </defs>
      ${grid}
      <path d="${fill}" fill="url(#areaGrad)"/>
      <path d="${path('maxTemp')}" fill="none" stroke="#FF6B6B" stroke-width="2"   stroke-linejoin="round" stroke-linecap="round"/>
      <path d="${path('avgTemp')}" fill="none" stroke="#FFD166" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="5 3"/>
      <path d="${path('minTemp')}" fill="none" stroke="#74C0FC" stroke-width="2"   stroke-linejoin="round" stroke-linecap="round"/>
      ${dots('maxTemp', '#FF6B6B')}
      ${dots('avgTemp', '#FFD166')}
      ${dots('minTemp', '#74C0FC')}
      ${xLabels}
    </svg>`;
}

// ── UI helpers ───────────────────────────────────────────
function showError(msg) { errorMsg.textContent = msg; errorMsg.classList.add('visible'); }
function hideError()    { errorMsg.classList.remove('visible'); }
function setLoading(on) { loadingState.classList.toggle('visible', on); }

// ── Events ───────────────────────────────────────────────
fetchBtn.addEventListener('click', fetchWeather);
cityInput.addEventListener('keydown', e => e.key === 'Enter' && fetchWeather());
daysInput.addEventListener('keydown', e => e.key === 'Enter' && fetchWeather());