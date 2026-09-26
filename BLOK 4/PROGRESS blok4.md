## ===== 26.09 — BLOK 4 START: pierwszy fetch + API =====

### Kontekst
23-25.09 przerwa od kodu (n8n, planowanie, spotkanie ze wspólnikiem Jakubem).
26.09 powrót, nowy temat na świeżo.

### Fetch od zera (jeden gotowiec ode mnie, reszta samodzielnie)
- async function + await fetch(url) + await odpowiedz.json() + console.log
- DWA await = "karton → zawartość": fetch daje KOPERTĘ (odpowiedź: status
  + dane w środku, zapieczętowane), .json() OTWIERA kopertę i wyjmuje dane.
  (poprawiony błąd rozumienia: do "odpowiedz" NIE trafiają jeszcze dane)
- po co async przy fetch: dane lecą przez sieć, mogą trwać; bez async cała
  strona zamarza. await zamraża TYLKO funkcję, reszta strony żyje (Blok 1)
- fetch = wbudowana funkcja przeglądarki "idź pod adres i przynieś dane";
  (...) = argument = adres URL jako tekst

### Rozróżnienie kluczowe
- users/1 → jeden OBIEKT (sięgasz po pola, destrukturyzacja)
- users → TABLICA obiektów (iterujesz: map/filter/reduce)
API zwraca zagnieżdżone obiekty (user.address.city) — wróci destr. zagnieżdżona.

### Ćwiczenia (JSONPlaceholder, na prawdziwych danych)
- fetch jednego / listy, dane.title, destrukturyzacja {title, body} z odpowiedzi
- fetch + map (imiona userów), fetch + filter (posty userId===1),
  łańcuch filter().map() (tytuły postów userId 1)

### Szlify (wracają, do wypalenia — NIE dziury, precyzja)
- return w callbacku z klamrami {} (łapie coraz szybciej, dziś od razu)
- NAZWY PÓL Z API muszą pasować do tego co serwer zwraca (name vs title,
  imie vs name). Nawyk: console.log(data) najpierw, sprawdź pola, nie zgaduj.

### Lekcja o tempie (ważna)
Kilka nowych rzeczy naraz (fetch+map+return+druga funkcja) = blokada.
Rozbite na małe kroki (map na zwykłej tablicy → potem na dane z fetcha) = wchodzi.
Trzymać MAŁE KROKI. Odłożone świadomie na później: return danych z funkcji
+ await w drugiej funkcji + Promise (za dużo naraz dziś).

### PLAN JUTRO (27.09)
Powtórka poprzednich bloków (fundamenty świeże) → dalej fetch, dokładać
mechanizmy, bawić się danymi z API.

### Status Bloku 4
- [x] fetch podstawy (async/await, .json(), obiekt vs tablica, map/filter na API)
- [ ] return danych z funkcji + Promise (odłożone, następne)
- [ ] try/catch, status codes, HTTP  [ ] render na stronę