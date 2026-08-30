# PROGRESS.md — nauka fundamentów JS

## Aktualny temat
async / await / Promises / event loop — krok 2 (Promise) w toku

## Status tematów (Blok 1)
- [x] sync vs async
- [x] Promise
- [ ] async / await
- [ ] event loop

## Do powtórki (aktywne przypominanie, z pamięci)
- sync vs async — powtórka 07.07 zrobiona bez zacięć, następna: ~10.07

## Zauważone dziury
- Firebase jako usługa — osobny temat, świadomie odłożony
- nie widziałem jeszcze przejścia Promise: pending → fulfilled

## 08.07.2026

- [x] Promise — definicja, 3 stany, .then/.catch, jednokierunkowość
       wytłumaczone z pamięci bez zacięć (08.07)

## Status tematów (Blok 1)
- [x] sync vs async
- [x] Promise — 3 stany, .then/.catch, jednokierunkowość
- [x] async / await — napisana własna funkcja async od zera,
       rozumiem parę async+await, dwa await przy fetch (karton → zawartość)
- [ ] event loop

## Do powtórki
- sync vs async — następna: ~10.07
- Promise — następna: jutro (09.07)
- async/await — następna: jutro (09.07)

## Zauważone dziury / uwagi
- mam tendencję opisywać z głowy zamiast URUCHOMIĆ i zobaczyć — używać konsoli szybciej
- Firebase (snap, q, getDocs) — wciąż osobny temat, świadomie odłożony

## 09.07.2026

- [x] async/await — psucie #2 zrobione (async out → SyntaxError, łapany
       PRZED wykonaniem). Odkryte: JS najpierw CZYTA cały kod, potem wykonuje.
       → to fundament pod hoisting (Blok 2)

- [x] async/await — KLUCZOWE odkrycie (09.07): await zamraża TYLKO swoją
       funkcję, nie cały program. Sterowanie wraca na zewnątrz, reszta kodu
       leci dalej (START,A,END,B,C). To jest CAŁY powód, po co istnieje async.

## Status tematów (Blok 1)
- [x] sync vs async
- [x] Promise
- [x] async / await ← SOLIDNIE. Dwie funkcje napisane od zera (getTodo,
       getUser), await zamraża tylko funkcję nie program, chodzenie po
       zagnieżdżonych obiektach (user.address.city)
- [ ] event loop ← następny temat, na świeżej głowie

## Do powtórki
- sync vs async — ~10.07
- Promise — jutro
- async/await — za 3 dni (~12.07), z pamięci

## 10.07.2026

## Status tematów (Blok 1)
- [x] sync vs async
- [x] Promise
- [x] async / await
- [x] event loop ← DOMKNIĘTY (10.07). Cztery miejsca: biurko (call stack),
       przeglądarka (web apis), poczekalnia (callback queue), portier (event
       loop). Przeglądarka WKŁADA do poczekalni, event loop WYJMUJE na biurko
       gdy puste. Wytłumaczone z pamięci, role rozdzielone poprawnie.

>>> BLOK 1 (async/await/Promise/event loop) — ZAMKNIĘTY <

## Do powtórki
- event loop — jutro (11.07), z pamięci: wędrówka callbacku setTimeout
- async/await — ~12.07
- Promise — ~12.07
- sync vs async — utrwalone, luźna kontrola


## Do powtórki
- Blok 1 (async/await + event loop) — [x] reaktywacja 17.07 po tyg. przerwy,
   odtworzone z pamięci bez zacięć → fundament trwały, nie wykuty

  - [x] zagnieżdżony setTimeout — domknięte 17.07 do 3 poziomów.
       Rozdzielone: STRUKTURA (matrioszka, nawiasy od środka) vs
       CZAS (wykonanie z góry na dół, sekundy się sumują: A=1s, B/C=6s, D=7s).
       Pojęcie: głębokie zagnieżdżanie = "callback hell", async/await to leczy.

## 17.07.2026

## Aktualny temat
Blok 1 — closures i scope (zrozumiane 17.07, jutro ćwiczenia pisemne)

## Status tematów (Blok 1 — Rdzeń JS)
- [x] async / await / Promises / event loop — ZAMKNIĘTE
- [x] closures i scope — zrozumiane 17.07:
       SCOPE: łańcuch "co gdzie co widzi". Zmienna widoczna od miejsca
              stworzenia na zewnątrz/ku górze, nigdy w głąb.
              "funkcja patrzy dookoła siebie i w górę, nigdy w głąb siebie".
       CLOSURE: funkcja + plecak zmiennych, które niesie ze sobą; żyją nawet
              gdy funkcja-rodzic się skończy. Każde wywołanie = nowy prywatny
              plecak. Nazwa: "domknięcie" — funkcja zamknięta wokół swoich
              zmiennych. liczba żyje, bo zwrócona funkcja wciąż jej używa.
- [ ] słowo `this`
- [ ] metody tablic (map, filter, find, reduce, forEach, some, every)

## Do powtórki (aktywne przypominanie, z pamięci)
- closures + scope — JUTRO 18.07: wytłumaczyć oba jako całość + napisać licznik od zera
- event loop — ~18-19.07: wędrówka callbacku setTimeout przez 4 miejsca
- async/await — ~19-20.07: co robi await (2 rzeczy) + zamraża tylko swoją funkcję

## Zauważone dziury / uwagi
- tendencja: opisuję z głowy zamiast URUCHOMIĆ — używać konsoli szybciej
- Firebase jako usługa — osobny temat, świadomie odłożony
- callback z pamięci: "rozumiem, ale nie umiem nazwać" = jeszcze nie wypowiedziane
  na głos. Lekarstwo: tłumaczyć z pamięci własnymi słowami.

## Plan na jutro (18.07)
1. Przeczytać scope + closures razem (MDN, jedno zdanie każde) → pełny obraz
2. Ćwiczyć pisemnie: pisz, psuj, pisz (licznik i wariacje, psucie return/plecaka)
3. Znaleźć closure/scope we własnym kodzie (Astra/Journalist)

## 18.07.2026

- [x] closure — pisanie od zera (18.07): napisałem SAM 3 funkcje zwracające
       funkcję (test/testShow, test2/addTest). Poprawiłem atrapę (sztywne 10+15)
       na prawdziwy closure sięgający do zmiennych rodzica (t+y). return bez
       nawiasów + wywołanie przez zmienną — w rękach, nie tylko w głowie.

- [x] LICZNIK napisany od zera SAM (19.07 noc): closure z pamiętanym stanem,
       1,2,3 działa. Sam wydłubałem 3 błędy z komunikatów konsoli:
       func→func() (wywołaj nie pokaż), =+→+= (dodaj nie ustaw),
       const→let (bo się zmienia). Plecak żyje, stan pamiętany między wywołaniami.
       → closures są w rękach, nie tylko w głowie.

- [x] closures — GŁĘBOKO (19.07): napisane SAM 4 warianty: licznik od zera,
       licznik z wartością startową (argument), licznik dodaj/odejmij (obiekt
       z 2 funkcji). Zrozumiane z pamięci: JEDEN wspólny plecak, wiele funkcji
       sięga do tej samej prywatnej liczby. To jest wzorzec prywatnego stanu.

       ## Aktualny temat
Blok 1 domknięty. Jutro (20.07): powtórka całości + szukanie scope/closure
we własnym kodzie (Astra, Journalist)

## Status tematów (Blok 1 — Rdzeń JS)
- [x] async / await / Promises / event loop
- [x] closures i scope — pełne zrozumienie + praktyka:
       SCOPE: "funkcja patrzy dookoła siebie i w górę, nigdy w głąb".
       CLOSURE: funkcja + plecak; plecak żyje bo zwrócona funkcja go potrzebuje.
       PISANE SAM: licznik od zera, licznik z argumentem startowym,
       licznik dodaj/odejmij. Sedno: JEDEN wspólny plecak, wiele funkcji
       sięga do tej samej prywatnej zmiennej = prywatny stan.
       return bez nawiasów = oddaj funkcję; () = wykonaj.
- [ ] słowo `this`
- [ ] metody tablic (map, filter, find, reduce, forEach, some, every)

## Do powtórki (aktywne przypominanie, z pamięci)
- closures + scope — jutro 20.07, potem ~23.07
- event loop — ~20-21.07
- async/await — ~21.07

## Plan na jutro (20.07) — rano, kilka godzin, bez przerw
1. Powtórka całego Bloku 1 z pamięci (async/await, event loop, scope, closure)
2. Otworzyć Astrę i Journalist → czytać i ROZPOZNAWAĆ: gdzie scope,
   gdzie closure, gdzie await zamraża funkcję. Nie odtwarzać od zera — grzebać w gotowym.

## 20.07.2026

## Aktualny temat
Blok 1 domknięty i odświeżony (powtórka 20.07). Następny nowy temat: `this`.

## Status tematów (Blok 1 — Rdzeń JS)
- [x] async / await / Promises / event loop
- [x] closures i scope
- [ ] słowo `this`  ← następny temat
- [ ] metody tablic (map, filter, find, reduce, forEach, some, every)

## Do powtórki (aktywne przypominanie, z pamięci)
- Blok 1 (async/await, event loop, scope, closure) — [x] powtórka 20.07,
   wszystko z pamięci bez większych zacięć. Następna: ~23.07
- potem odstęp rosnący: ~30.07, ~13.08

## Szlify do zapamiętania (drobne, z 20.07)
- `is not defined` = zmiennej nie ma W ZASIĘGU stąd, nie "nie istnieje w ogóle"
- setTimeout: przeglądarka ODLICZA czas, callback i tak idzie przez poczekalnię
   (JS się timerem nie zajmuje, ale czas nie jest ignorowany)
- closure = FUNKCJA + plecak (para), nie sama pamięć o zmiennych

## Zauważone dziury / uwagi (ogólne)
- regularność > intensywność — zrywy kosztują czas na "odrdzewianie"
- najlepiej uczyć się na świeżej głowie, nie po nocach w pracy
- tendencja: opisywać z głowy zamiast URUCHOMIĆ — używać konsoli szybciej
- Firebase jako usługa — osobny temat, świadomie odłożony

## Plan na następną pełną sesję (świeża głowa)
1. Krótka powtórka Bloku 1 z pamięci (rozgrzewka)
2. Pogrzebać w Astrze/Journalist — rozpoznać scope/closure/await we własnym kodzie
3. Ewentualnie ruszyć nowy temat: `this`


## 21.07.2026

- [x] metody tablic — START (21.07 wieczór): 
       map (przekształca, zwraca NOWĄtablicę, nie mutuje oryginału), filter (wybiera przez true/false).
       Przy okazji liźnięte: template literals `${}`, .includes(), const vs let,
       === vs == (domyślnie ===), niemutowanie (fundament Reacta).
 

 ## Plan na jutro (22.07)
1. Rozgrzewka: map/filter z głowy (5 min)
2. ASTRA — otworzyć, rozpoznać we własnym kodzie: closure, scope, map/filter
   (kotwiczenie teorii w prawdziwym kodzie — "nazywam to, czego używam")
3. Jeśli energia: JEDNA rzecz z Journalist (np. async/await w firebase.js)
NIE: nowa teoria tablic tego samego dnia (find/forEach/reduce) — osobny dzień

# PROGRESS.md — nauka fundamentów JS

## Aktualny temat
Blok 1 prawie domknięty. Zostało: `this` + utrwalenie reduce.

## Status tematów (Blok 1 — Rdzeń JS)
- [x] async / await / Promises / event loop
- [x] closures i scope
- [ ] słowo `this`  ← ostatni nieruszony temat Bloku 1
- [x] metody tablic — OPANOWANE (map, filter, find, forEach, some, every)
       [~] reduce — liźnięty, do utrwalenia osobno (szczególnie na obiektach)

## ===== DZIEŃ 22.07 =====

### Rano — rozgrzewka z pamięci (bez zacięć)
- map/filter wytłumaczone z głowy (niemutujące, zwracają nową tablicę)
- let/const z pamięci: domyślnie const, let gdy wartość ma się zmieniać

### Kotwiczenie teorii w moim kodzie (Journalist) — DUŻY moment
Rozpoznane we własnym kodzie sprzed miesięcy:
- filter → w filterEntries() (dwa filtry warunkowe, nakładane po kolei)
- forEach → w renderEntries() (forEach + appendChild = akcja na DOM)
- find → w startEdit() (z if(!entry) return chroniącym przed undefined.title)
ODKRYTA SAM zasada (fundament Reacta):
- `let filtered = entries` to NIE kopia — ta sama tablica, dwie nazwy
- ale filter niemutujący → tworzy NOWĄ, entries zostaje nietknięte
- entries = STATE (źródło prawdy, nietykalne), filtered = tymczasowy widok
- "nie mutuj stanu, twórz nowe wersje do pokazania" = SERCE REACTA
- scope + niemutowanie + state spotkały się w jednej mojej funkcji

### Wieczór — domknięcie metod tablic (pisane SAM, w konsoli)
- find → pierwszy pasujący element, albo undefined gdy nic nie pasuje
- forEach → wykonuje AKCJĘ na każdym, zwraca undefined ZAWSZE
       (return w środku idzie w próżnię; do console.log/DOM, nie do zbierania)
- some → true jeśli CHOĆ JEDEN pasuje (optymista)
- every → true tylko jeśli WSZYSCY pasują (rygorysta, jeden wyłom = false)
- napisane samodzielnie różne warianty: some, every(true+false), map, find,
  łańcuch map→find, .includes (uwaga: rozróżnia wielkość liter!)
- rozumiem KIEDY której użyć + co zwraca każda

## Do powtórki (aktywne przypominanie, z pamięci)
- metody tablic — jutro: z głowy "co zwraca która" + po jednym przykładzie
- reduce — osobno, spokojnie, kilka podejść (głównie na obiektach)
- Blok 1 całość (async/event loop/scope/closure) — ~25.07

## Zauważone dziury / uwagi
- "liznąłem" ≠ "umiem" — trzeba napisać kilka wariantów SAM zanim odhaczę temat
  (dziś sam tego dopilnowałem — dobra samoświadomość)
- rozdzielać "literówka w tekście" od "błąd w logice" — logikę mam dobrą
- regularność > intensywność; najlepiej na świeżej głowie, nie po nocach w pracy
- Firebase jako usługa — osobny temat, świadomie odłożony

## Plan na następną sesję (świeża głowa, w domu — 2 monitory)
1. Rozgrzewka: metody tablic z głowy (co zwraca która)
2. Dokończyć kotwiczenie w kodzie: find + closure w Astrze i Journalist
3. `this` — ostatni temat Bloku 1
4. (osobno, kiedyś) utrwalić reduce, zwłaszcza na obiektach

## ===== 23.07 (wieczór/noc, na recepcji) =====

### REDUCE — sesja ~3h, opanowany poza jednym wariantem

Napisane SAM, z palca:
- liczby (5): suma, iloczyn (start od 1 — sam wydedukował dlaczego),
  najmniejsza (własna, odwrócona logika warunku), licznik warunkowy
  (kula+1 albo kula), suma tylko parzystych
- teksty (3): sklejanie spacjami, łączna długość słów (kula=liczba,
  elementy=teksty), najdłuższe słowo
- porównywanie (4): najkrótsze słowo, najstarszy user, najdroższy produkt
  — kula jako OBIEKT

Zrozumiane mechanizmy:
- `return` w reduce = "OTO NOWA KULA" (nie wyjście z funkcji, nie wynik końcowy)
- reduce sam nic nie porównuje — cała logika jest w mojej funkcji,
  reduce tylko przekazuje kulę dalej
- wartość startowa: podana → kontroluję start (0 dla sumy, 1 dla iloczynu);
  pominięta → kulą zostaje PIERWSZY element, przechodzenie od drugiego
  (uwaga: bez startowej reduce wywali się na pustej tablicy)
- eksperyment: dwa razy `return word` → kula zamrożona, wynik = pierwszy element

Złapane błędy (na własnym kodzie):
- porównywanie pola z całym obiektem (`user.age > x`) → zawsze false
  → zawsze wygrywa ostatni element. Sięgać po pole PO OBU STRONACH
- niewidzialna spacja w stringu — sprawdzać przez .length albo "["+x+"]",
  nie ufać wzrokowi
- `{}` jako wartość startowa dla obiektów działa "przez przypadek"
  (undefined przegrywa każde porównanie) — czytelniej bez wartości startowej

### Status reduce
- [x] liczby, teksty, porównywanie (w tym obiekty jako kula)
- [ ] kula jako OBIEKT BUDOWANY (liczenie wystąpień, np. głosy) ← jedyne co zostało

## Obserwacja o sobie
Rano po nocce utknąłem na tym samym reduce, wieczorem napisałem 12 wariantów.
Różnica = stan głowy, nie zdolności. Materiał dobierać do kondycji:
świeży → nowe/trudne, zmęczony → powtórka i klepanie w palce.

## Plan na jutro (24.07)
1. Powtórka CAŁOŚCI Bloku 1 (async/await, event loop, scope, closure,
   metody tablic, reduce) — z pamięci
2. Dokończyć reduce: kula jako budowany obiekt (na świeżej głowie)
3. WIECZOREM: grzebanie w kodzie — szukać w Astrze/Journalist wszystkiego:
   metody tablic, async/await, scope, closure

## Zostało w Bloku 1
- `this` — ostatni nieruszony temat

## ===== 24.07 (wieczór) =====

### REDUCE — DOMKNIĘTY w całości (nawet kula-obiekt)
Napisane sam: liczenie wystąpień (głosy, litery), grupowanie po polu obiektu
(kategorie), suma per kategoria (kula[x.kat] = kula[x.kat] + x.kwota).
Wszystkie warianty kuli: liczba, tekst, obiekt gotowy, obiekt budowany.

### Prawdziwa blokada NIE była reduce — było czytanie zagnieżdżonych odwołań
kula[x.kategoria] = kula[x.kategoria] + x.kwota  ← to mnie gubiło.
TECHNIKA (działa): podstawiać konkretne wartości OD ŚRODKA na zewnątrz:
1. x.kategoria → "transport"
2. kula[x.kategoria] → kula["transport"]
3. co tam siedzi? → 20
4. prawa strona: 20 + 15 = 35 → wstaw w lewą
Nie ogarniać całości naraz. Rozbić na trywialne kroki.

### Do dokończenia (drobiazg, nie reduce)
- dokładanie do TABLICY w kuli: push() zamiast + (+ skleja jako tekst, nie tablicę)
  kula[x.kat].push(x.nazwa)  — dokończyć po powrocie

## Status
- [x] metody tablic + reduce — KOMPLET
- [ ] this — ostatni temat Bloku 1
- powtórka całości Bloku 1 — jeszcze nie zrobiona (brakło czasu 24.07)

## Plan
- powtórka całego Bloku 1 z pamięci (zaległa)
- grzebanie w kodzie (Astra/Journalist) — przy 2 monitorach
- this — ostatni temat, potem Blok 1 zamknięty

## ===== 28.07 (przedpołudnie, świeża głowa po 2 dniach przerwy) =====

### Powrót po przerwie + postanowienie
Deklaracja: codziennie coś, wolne raz na parę tygodni świadomie (nie z zamulenia).

### Rozgrzewka
- metody tablic + reduce odtworzone (utarg per zamówienie z palca = 175)
- DO POPRAWKI (wraca 2. raz): forEach NIE zmienia tablicy — robi AKCJĘ
  (console.log, DOM), nic nie zwraca

### THIS — nowy temat, wszedł dobrze + zrozumiane PO CO
SEDNO: this = obiekt PRZED KROPKĄ w momencie WYWOŁANIA.
- osoba.metoda() → this = osoba
- const f = osoba.metoda; f() → nic przed kropką → this = undefined
- this zależy od tego JAK wywołasz, nie GDZIE metoda napisana

PO CO this (moja realna wątpliwość "na chuj to jest" — rozwiązana SAM):
- bez this trzeba przepisywać metodę dla każdego obiektu (user.punkty,
  user2.punkty... = koszmar przy 100 userach)
- z this piszesz metodę RAZ, działa dla wszystkich — this sam wskazuje
  na obiekt, na którym wywołano
- zobaczone na własnym kodzie: post i post2 z IDENTYCZNĄ metodą polub()
  liczą każdy swoje lajki

Napisane SAM od zera 3 obiekty z this: konto (wplac), post+post2 (polub),
koszyk (dodaj z argumentem + this.produkty.push).

### Drobiazgi do pilnowania (wracają)
- const na KAŻDEJ nowej zmiennej (znów zapomniane przy koszyk = {})
- nazwa przy wywołaniu musi = nazwa przy definicji (user3 zdefiniowane,
  user wywołane = nie działa)
- tablica przez + skleja jako tekst z przecinkiem; ładniej .join(", ")

### Zostało w this (na później)
- this w arrow functions (dziedziczy z otoczenia, nie ma własnego)
- bind/call/apply — lekko

## Status Bloku 1
- [x] async/await, event loop, closures, scope, metody tablic, reduce
- [~] this — SEDNO + "po co" opanowane, zostały 2 kawałki (arrow, bind)
→ BLOK 1 prawie zamknięty!

## Plan
- jutro (29.07): grzebanie w kodzie Astra/Journalist — przy 2 monitorach,
  szukać: metody tablic, async/await, scope, closure, this
- powtórka całości Bloku 1 (zaległa)
- dokończyć this (arrow + bind)
- potem: Blok 2 (DOM/eventy, let/const/var/hoisting, mutacja/spread)

## ===== 29.07 (wieczór, ~20:25–22:10) — powtórka Bloku 1 =====

### Powtórka z pamięci — cały Blok 1
- async/await + event loop → z pamięci, pełna wędrówka callbacku,
  role rozdzielone (przeglądarka wkłada do poczekalni, event loop wyjmuje)
- scope → precyzyjnie ("dookoła i w górę, nie w głąb dziecka")
- metody tablic + reduce → z palca, bez potknięć

### CLOSURES — domknięte GŁĘBOKO (przełom)
Prawdziwa bariera zidentyfikowana i rozbita: return dodaj (BEZ nawiasów).
KLIK: return oddaje PRZEPIS (nieuruchomiony), nie wynik. const a = stworzLicznik()
łapie przepis (liczba wciąż 0). Dopiero a() = pierwsze URUCHOMIENIE przepisu.
Analogia: przepis na kartce vs upieczenie ciasta.
- każde wywołanie fabryki = NOWE pudełko liczba w pamięci (liczba-A, liczba-B)
- funkcja pamięta to pudełko, obok którego się urodziła
- rozdzielone: stworzLicznik() = nowy plecak; licznik() = używa istniejącego

Napisane SAM 5 zadań: licznik bazowy, licznik z krokiem (odkrycie: parametr
w ZEWNĘTRZNEJ = zapamiętany raz w plecaku; w WEWNĘTRZNEJ = podawany za każdym
wywołaniem), powitanie (plecak trzyma tekst), SEJF (prywatność — hasło
niewidoczne z zewnątrz), obiekt z 2 funkcjami na wspólnym plecaku.
SENS closure spięty z mechanizmem: prywatny, niezależny, chroniony stan.

### Słaba kość (pilnować przy powtórkach)
- "czy dwa wywołania fabryki dzielą liczbę?" → mylę TAK, poprawna: NIE
  (osobne plecaki). Ale gdy JEDNO wywołanie zwraca 2 funkcje → dzielą plecak.

## Status Bloku 1 — PRZEROBIONY W CAŁOŚCI
- [x] async/await, event loop, closures (głęboko), scope, metody tablic, reduce
- [~] this — sedno + "po co" jest, zostały: arrow functions + bind

## Plan
- JUTRO: szybka powtórka + grzebanie w kodzie (Astra/Journalist), 2 monitory.
  Rozpoznawać: metody tablic, async/await, scope, closure, this. Nic nowego.
- POTEM: this głęboko (arrow + bind) → i z tym wchodzimy w Blok 2
- Blok 2: DOM/eventy, let/const/var + hoisting, mutacja/spread

## ===== 30.07 (u rodziców, warunki polowe) — this pogłębiony =====

### THIS w ARROW FUNCTIONS — domknięte ze zrozumieniem
KLUCZ (nie wkuty, zrozumiany):
- zwykła function → this od tego KTO WYWOŁAŁ (obiekt przed kropką)
- arrow (=>) → NIE ma własnego this, bierze go z OTOCZENIA gdzie napisana
- arrow jako METODA obiektu → this = otoczenie (globalne) → undefined. ŹLE.
- arrow jako funkcja WEWNĄTRZ metody (setTimeout/forEach/.then) → przejmuje
  this z metody → "przekazuje this głębiej" (własne ujęcie). DOBRZE.

REGUŁA:
- metoda obiektu → zwykła function
- funkcja wewnątrz metody → arrow (żeby this wsiąknął głębiej)

### Status this
- [x] sedno (obiekt przed kropką), sens (nie przepisujesz metody),
      arrow (przekazuje this głębiej)
- [ ] bind/call/apply — rzadsze, lekko przy okazji (arrow rozwiązuje większość)

## Status Bloku 1 — kompletny (poza bind, opcjonalnym)
[x] async/await, event loop, closures, scope, metody tablic, reduce, this

## Plan
- powtórka reszty Bloku 1 (jeśli dziś zostanie czas/siła)
- grzebanie w kodzie — gdy będą 2 monitory i spokój (nie u rodziców)
- potem: Blok 2 (DOM/eventy, let/const/var+hoisting, mutacja/spread)


## ===== 01.08 (wieczór, recepcja) — MINI-PROJEKT: system graczy =====

Zbudowany mini-system łączący pół Bloku 1 w jednym działającym kodzie:
- fabryka stworzGracza(imie) — closure, prywatny stan (imie+punkty w plecaku)
- obiekt z 3 metodami: zdobadz (zmienia), pokaz (console.log), wynik (return)
- niezależni gracze — osobne plecaki, nie mieszają punktów (test closures OK)
- suma punktów — reduce po obiektach, x.wynik(), log NA ZEWNĄTRZ
- najlepszy gracz — reduce rekordzista, zwraca OBIEKT (nie .wynik()), bez wart. startowej

Złapane pułapki:
- kod po return = martwy kod (log wyniku poza reduce)
- reduce-rekordzista: porównuj przez .wynik(), ale ZWRACAJ cały obiekt
- bez wartości startowej kulą zostaje pierwszy element (potrzebne dla obiektów z metodami)


## Status Bloku 1 — praktycznie domknięty i UŻYTY w mini-projekcie
[x] closures, this, metody tablic, reduce — spięte w działający system
[~] this: bind/call/apply (opcjonalne, rzadkie)

## Plan
- grzebanie w kodzie (Astra/Journalist) — przy 2 monitorach
- ewentualnie Blok 2: DOM/eventy, let/const/var+hoisting, mutacja/spread

## ===== 02.08 (popołudnie) — grzebanie w kodzie: BLOK 1 domknięty w praktyce =====

Przejrzany kod Astry i Journalist pod kątem CAŁEGO Bloku 1:

- MAP (Astra, startTimer/pauseTimer/resetTimer): niemutowanie state —
  map NIE zmienia activities, dopiero activities = activities.map()
  podstawia nową tablicę. Warunkowe mapowanie: zmień tylko pasujący
  element (if a.id===id), resztę zwróć bez zmian (return a).

- FOREACH + FIND (Astra, updateGridTimers/updateDetailTimer):
  forEach = akcja na DOM (el.textContent), nie zmienia tablicy.
  find + strażnik if(!x)return — rozpoznany w DWÓCH miejscach.
  Kaskada 4 strażników w updateDetailTimer — rozróżnione 2 rodzaje:
  ochrona przed CRASHEM (undefined.cokolwiek) vs ochrona przed
  BŁĘDEM LOGICZNYM (timer rósłby mimo isRunning===false).

- ASYNC/AWAIT: Astra NIE MA (localStorage = sync, bez sieci, JS nie czeka).
  Journalist MA wszędzie (Firebase = serwer, trzeba czekać na odpowiedź).
  Zrozumiane KIEDY async jest w ogóle potrzebny: czekanie na coś
  ZEWNĘTRZNEGO i NIEPRZEWIDYWALNEGO czasowo.

- THIS: NIE WYSTĘPUJE w kodzie (ani Astra, ani Journalist). Zrozumiane
  dlaczego: styl "funkcje + zmienne + addEventListener" używa closures
  zamiast this do tego samego celu (np. deleteBtn zamiast this.dataset.id).

- SCOPE/CLOSURES (Astra, renderActivities): deleteBtn wewnątrz forEach —
  KAŻDA aktywność dostaje WŁASNY, niezależny plecak z deleteBtn (dokładnie
  jak stworzLicznik() wywołane wielokrotnie = osobne plecaki). To dlatego
  kliknięcie w konkretny przycisk usuwa WŁAŚCIWĄ aktywność, nie zawsze
  ostatnią. Rozpoznany SAM mechanizm napisany miesiąc wcześniej,
  zanim znałem nazwę "closure".

## BLOK 1 — DOMKNIĘTY W PEŁNI (teoria + praktyka we własnym kodzie)
[x] async/await, event loop, closures, scope, metody tablic, reduce, this
[x] wszystko rozpoznane i wytłumaczone na prawdziwym, własnym kodzie

## Plan
- Blok 2: DOM/eventy głębiej (bubbling, event.target, delegacja),
  let/const/var + hoisting, mutacja vs niemutowanie + spread/rest
- ewentualnie: this/bind/call/apply pogłębione przy okazji klas w Bloku 3