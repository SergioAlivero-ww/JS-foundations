# PROGRESS.md — nauka fundamentów JS, BLOK 3

## Aktualny temat
Start Bloku 3. Pierwszy temat: DESTRUKTURYZACJA (jeszcze nie zaczęta).

## Decyzja o kierunku (świadoma)
Rozważany był skok do Bloku 4 (fetch/API/HTTP) z pominięciem Bloku 3.
Decyzja: NIE. Najpierw Blok 3, bo destrukturyzacja jest fundamentem pod
pracę z odpowiedziami z API (rozpakowywanie pól z JSON) — wejdzie w Blok 4
znacznie łatwiej, gdy destrukturyzacja już siedzi.

## Kolejność Bloku 3 (ustalona, zatwierdzona)
1. Destrukturyzacja  ← jedyna realnie NOWA rzecz w bloku, START tutaj
2. Spread / rest — formalne domknięcie i nazwanie (już umiem z Bloku 1/2)
3. Template literals — formalne domknięcie i nazwanie (już umiem)
4. ES modules (import/export) — temat organizacyjny, na koniec

## Status tematów (Blok 3 — Nowoczesna składnia i organizacja)
- [ ] destrukturyzacja  ← następny temat
- [ ] spread / rest (formalizacja)
- [ ] template literals (formalizacja)
- [ ] ES modules (import / export)

## Plan na następną sesję (świeża głowa)
1. Destrukturyzacja — sedno "po co" (rozpakowywanie pól obiektu/tablicy)
   przez pryzmat mojego kodu: transakcja.typ/kwota/cel w moneyMoves,
   entry.title/date w Journalist
2. MDN — jedno zdanie sedna
3. Mały plik od zera, pisany przeze mnie
4. Celowe psucie / naprawianie
5. Znaleźć wzorzec we własnym kodzie (moneyMoves / Journalist)

## Po Bloku 3
Blok 4 (fetch, prawdziwe API, Response/.json(), try/catch, podstawy HTTP).

## ===== 06.09 — DESTRUKTURYZACJA (nowy temat, START Bloku 3) =====

### PO CO (domknięte)
Wyjęcie potrzebnych pól z obiektu RAZ, żeby nie sięgać do niego w kółko
(x.typ, x.kwota, x.cel... → const {typ, kwota, cel} = x). Mniej powtarzania
ścieżki do "szafki", czytelniej. Bezpośrednio przydatne w Bloku 4 przy
rozpakowywaniu odpowiedzi z API.

### OBIEKTY — przerobione, pisane SAM od zera
- podstawowe wyjęcie: const { pole1, pole2 } = obiekt (nazwy MUSZĄ pasować
  do pól w obiekcie)
- wartości domyślne: const { rabat = 0 } = obiekt — fallback wskakuje TYLKO
  gdy pola nie ma (undefined). Pole z wartością 0/""/false NIE uruchamia
  domyślnej (0 to prawdziwa wartość, nie brak) — potwierdzone na cena:0
- rename (dwukropek): const { user_name: imie } = obiekt — bierze POLE
  user_name, robi ZMIENNĄ imie. Po tym zmienna user_name NIE istnieje
  (ReferenceError), ale POLE w obiekcie żyje dalej (dane.user_name działa)

### TABLICE — przerobione (po POZYCJI, nie po nazwie)
- nawiasy kwadratowe [ ] zamiast klamer { }
- nazwy wymyślam sam (nie ma pól do dopasowania), liczy się kolejność:
  const [pierwszy, drugi] = tablica
- pomijanie pustym przecinkiem: const [a, , c] = tablica (przeskocz drugi)
- wartości domyślne działają jak w obiekcie (gdy tablica krótsza)
- NIE dokończone (na jutro, drobiazg): jedno zadanie łączące pomijanie
  + wartość domyślną — dane=["Serhii","Gdańsk"], wyjąć imie, pominąć drugi,
  wiek z domyślną 18

### KLUCZOWE ODKRYCIE DNIA — 3 stany zmiennej (spięte z Blokiem 2)
Na własnych błędach, w konsoli, rozdzielone trzy różne komunikaty:
1. ReferenceError "can't find variable" = zmiennej NIE MA w ogóle
   (sięgam po nazwę, której nigdzie nie zadeklarowałem)
2. "Cannot access before initialization" = TDZ, sięgam po zmienną PRZED
   linijką const, która ją tworzy (console.log był NAD const)
3. undefined = zmienna powstała poprawnie (const przed odczytem), ale pole
   którego szukałem nie istnieje w obiekcie → destrukturyzacja wpisała pustkę
DESTRUKTURYZACJA nigdy nie wywala błędu za "brakujące pole" — daje undefined.
Wywala tylko za rzeczy nieznalezione w ogóle albo za wcześnie (TDZ).

### Szlify do pilnowania
- czytać zadanie do KOŃCA (parę razy wyjąłem złe pole / za mało pól)
- redeklaracja const w jednym pliku globalnym zaczyna przeszkadzać
  (const marka / const cena dwa razy = błąd) → naturalny most do ES modules
  (każdy plik = własny zasięg, problem znika)
- niektóre nazwy są ZAJĘTE przez przeglądarkę (name = window.name) —
  edytor przekreśla, unikać: name, length, top, event

### Status Bloku 3
- [~] destrukturyzacja — obiekty KOMPLET, tablice prawie (1 zadanie na jutro)
- [ ] spread / rest (formalizacja)
- [ ] template literals (formalizacja)
- [ ] ES modules

### Do powtórki (aktywne przypominanie, z pamięci)
- destrukturyzacja — jutro 07.09: z głowy 3 stany zmiennej + rename +
  domyślne (kiedy wchodzą, kiedy nie), potem ~10.09, ~14.09

### Plan na jutro
1. Rozgrzewka: dokończyć zadanie tablicowe (pomijanie + domyślna)
2. Krótka powtórka destrukturyzacji z pamięci
3. Jeśli energia: spread/rest — formalne nazwanie (już umiem z Bloku 1/2)

## ===== 07.09 — destrukturyzacja: powtórka + rename z domyślną =====

### Powtórka z pamięci (przetrwała noc, bez notatek)
- 3 stany zmiennej rozdzielone własnymi słowami (can't find variable /
  before initialization TDZ / undefined) — zrozumienie, nie formułka
- rename (lewa=pole, prawa=zmienna, user_name jako zmienna nie istnieje)
- obiekt po nazwie vs tablica po pozycji

### Dokończone wczorajsze zadanie tablicowe
[imie, , wiek = 18] z pamięci, bezbłędnie. Pomijanie przecinkiem +
domyślna na pominiętej pozycji.

### NOWE / doprecyzowane dziś
- RENAME + DOMYŚLNA NARAZ (najtrudniejsza składnia dnia):
  const { szerokosc: w, wysokosc: h = 600 } = config
  kolejność: POLE : nowaNazwa = domyślna
  (najpierw pomyliłem z const {w=800,h=600} — to ignoruje obiekt i wpisuje
  domyślne ręcznie, nie czyta z obiektu. Test: zmień wartość w obiekcie,
  jak wynik się nie zmienia = źle)
- DOPRECYZOWANIE reguły domyślnej: wskakuje na KAŻDY undefined — czy to
  brak pozycji, CZY jawnie wpisany undefined w tablicy.
  [10, undefined, 30] z [x=1, y=2, z=3, q=4] → y=2 (nie undefined!),
  bo undefined na pozycji = sygnał "użyj domyślnej".
  Dalej NIE reaguje na 0, "", false (prawdziwe wartości).

### Szlif
- notatka z BŁĘDNĄ predykcją jest gorsza niż brak notatki — poprawiać
  komentarze w pliku po sprawdzeniu w konsoli
- pola z API nie mają polskich znaków — nawyk: szerokosc bez ogonków

### Status Bloku 3
- [x] destrukturyzacja — obiekty i tablice KOMPLET (rename, domyślne,
      pomijanie, rename+domyślna naraz, undefined vs 0/""/false)
- [ ] destrukturyzacja ZAGNIEŻDŻONA — świadomie odłożona (obiekt w obiekcie,
      przyjdzie przy API — wrócić)
- [ ] spread / rest (formalizacja)
- [ ] template literals (formalizacja)
- [ ] ES modules

### Do powtórki
- destrukturyzacja — ~10.09, potem ~14.09 (z pamięci)

### Plan na następną sesję
1. Rozgrzewka: destrukturyzacja z pamięci
2. spread / rest — formalne nazwanie (już z Bloku 1/2)
3. lub template literals

## ===== 11.09 — reaktywacja destrukturyzacji po 4-dniowej przerwie =====

### Kontekst
Niechciana przerwa 07→11.09 (praca, nocki). Powtórka destrukturyzacji
i tak wypadała ~10.09, więc realnie 1 dzień poślizgu, nie tydzień ciszy.

### Co przetrwało / co odzyskane
- destrukturyzacja obiektów i tablic: 5 zadań od zera, SAMODZIELNIE,
  bezbłędnie (podstawy, tablica po pozycji, domyślna, rename,
  rename+domyślna naraz price:koszt=0 — to był dziś zator, odzyskany)
- reguła domyślnej trzyma: wskakuje tylko na undefined, nie na 0/""/false
- reduce z palca: suma przez (kula, x) => kula + x, wartość startowa 0 — czysto

### Zdiagnozowany PRAWDZIWY problem (ważne)
Nie brak zrozumienia — ucieka SKŁADNIA/zapis po przerwie.
Rozumienie mechanizmów całe (potrafię wypełnić luki w gotowym szkielecie
closure bez problemu, wytłumaczyć "return dodaj = przepis"), ale
OD ZERA, z pustego pliku, nie potrafię napisać closure. To nie dziura
w wiedzy — to zardzewiały nawyk pisania. Ten sam wzorzec dziś 3x:
destrukturyzacja, rename, closure — wszystko rozumiem, zapis wyparował.

### Do poprawy (drobne, złapane dziś)
- this: oderwana metoda f = user.przywitaj; f() → this=undefined
  (nie powtórzyłem że dwa wywołania dają różne wyniki) — do odświeżenia
- filter: callback MUSI złapać element w argument; .cena na ELEMENCIE,
  nie na całej tablicy (produkty.cena = błąd) — do odświeżenia

### PLAN NA JUTRO (12.09) — świeża głowa, "lecimy mocno"
Priorytet: CLOSURE i REDUCE od zera, z pustego pliku, wielokrotnie.
Cel nie "zrozumieć" (już rozumiem) tylko "ręka sama pisze" — mięsień
składni przez powtórzenie, nie przez czytanie.
1. reduce od zera: kilka wariantów (suma, licznik warunkowy, obiekt)
2. closure od zera: licznik, licznik z argumentem, fabryka z metodami
3. dopiero potem ewentualnie dalej Blok 3

### Status Bloku 3
- [x] destrukturyzacja (obiekty+tablice, komplet)
- [ ] destrukturyzacja zagnieżdżona (odłożona, przy API)
- [ ] spread/rest, template literals, ES modules

## ===== 12.09 — PRZEŁOM: nawiasy/callback + closure i reduce od zera =====

### Rano (świeża głowa)
- FUNDAMENT (wczorajsza dziura): co siedzi w nawiasach. parametr = pusta
  szufladka przy definicji, argument = to co wkładasz przy wywołaniu.
- CALLBACK = funkcja włożona jako argument. forEach/map/filter/reduce to
  callbacki — robiłem je od miesięcy nie wiedząc że to one.
- CLOSURE od zera (wczoraj "nie potrafię"): fabryka licznika, 2 warianty,
  z palca. a i b = osobne wywołania = niezależne plecaki (1,2,1 z głowy).
  a vs a() = przepis vs wykonanie.
- REDUCE 4 warianty od zera: suma, licznik warunkowy (if→kula+1/kula),
  obiekt-grupowanie (kula[x.kat]=(kula[x.kat]||0)+x.kwota), maksimum.

### Noc (recepcja, utrwalenie)
- nazwy się rozmyły (parametr/argument/callback — do odświeżenia na świeżo),
  ale palce i mechanizm trzymają: 2 reduce z głowy bez podglądania.
- rozbity zator kula[x]: x = nazwa klucza (półka), kula[x] = wartość na niej.
  nawias [] bo x się zmienia. adres ≠ zawartość.

### Wniosek
Wczorajsze "nic nie rozumiem" = brak fundamentu (nawiasy), nie brak
zdolności. Metoda na zator: rozbić na najmniejsze klocki, każdy osobno.

### Do powtórki (rosnące odstępy)
- nazwy parametr/argument/callback — na świeżo (uciekają po nocy)
- closure + reduce (4 warianty) — ~14.09, potem ~18.09

### Status Bloku 3
- [x] destrukturyzacja  [ ] zagnieżdżona (odłożona)
- [ ] spread/rest, template literals, ES modules

## ===== 13.09 — closure i reduce od zera, transfer na niestandardowe =====

### Closure (5 wariantów, od zera)
- licznik, licznik ze startem, fabryka z krokiem
- konto z wplac/wyplac/stan (3 metody, wspólny plecak)
- konto z walidacją (if, return "brak srodkow" zamiast akcji bez returnu)
- lista w plecaku (spread), fabryka mnożników, flaga jednorazowa

### Reduce (6 wariantów, od zera)
- suma warunkowa, liczenie wystąpień, grupowanie z sumą pól (x.produkt/x.ilosc)
- NIESTANDARDOWE bez wzoru: najdłuższe słowo (kula=rekordzista tekstowy,
  porównanie przez .length, start "") — transfer mechanizmu, nie odtworzenie

### Przełom w rozumieniu
- rozbrojone (kula[x] || 0) + coś: prawa strona = "ile już nazbierałem
  pod kluczem", nie nazwa. Technika: podstawiać konkretne liczby od środka.
- nazwy odświeżone na świeżo: parametr/argument/callback (uciekły po nocy)
- callback = funkcja WKŁADANA (argument), closure = funkcja ZWRACANA (plecak)

### Samoświadomość
"Palce szybciej niż głowa" — trafna diagnoza, w ciągu dnia głowa dogoniła.
Zdał samodzielnie test niestandardowy, który sam sobie postawił jako "posypie się".

### Plan 14.09
spread/rest od podstaw → głębiej → spread/rest w reduce i closure →
połączenia tematów.

### Status Bloku 3
- [x] destrukturyzacja  [ ] zagnieżdżona (odłożona)
- [ ] spread/rest ← jutro  [ ] template literals  [ ] ES modules

## ===== 14.09 — spread i rest od zera + połączenia z reduce/closure =====

### Start: zero energii, weszło przez łagodną rozgrzewkę (reduce sumy)

### SPREAD (... rozsypuje, prawa strona)
- tablice [...stara, nowy], obiekty {...stary, pole}
- niemutowanie (oryginał nietknięty), nadpisywanie (późniejsze wygrywa)

### REST (... zbiera, lewa strona)
- parametr funkcji f(...args) → argumenty w tablicę
- destrukturyzacja [pierwszy, ...reszta] → reszta w TABLICĘ
- destrukturyzacja {imie, ...dane} → reszta w OBIEKT
- rozróżnienie: ... po prawej rozsypuje (spread), po lewej zbiera (rest)

### Połączenia (od zera, samodzielnie)
- closure + spread: koszyk niemutujący [...koszyk, prod]
- reduce + spread: spłaszczanie [...kula, ...x], start []

### DO DOBICIA (sam wskazał — priorytet powtórek)
Zapis kula[x.klucz] = [...(kula[x.klucz] || []), x.pole] — grupowanie
do tablic per kategoria. Zrobione, ale ściągnięte. Potrzeba więcej
przykładów z kula[x]... aż usiądzie w głowie, nie tylko w palcach.

### Do powtórki (rosnące odstępy)
- closure + reduce — ~16.09 (z pamięci)
- spread/rest + zapisy kula[x] — ~16.09, więcej przykładów

### Status Bloku 3
- [x] destrukturyzacja, spread/rest  [ ] zagnieżdżona (odłożona)
- [ ] template literals  [ ] ES modules


## ===== 15.09 — spread/rest + złożone systemy (closure+reduce+filter+map) =====

### Rano: spread/rest od zera (patrz osobny wpis 14.09 jeśli scalony)

### Główna część: 4 systemy łączące mechanizmy, każdy trudniejszy
1. MAGAZYN (closure+spread+reduce): dodaj niemutująco, lacznaIlosc (suma pola)
2. LISTA ZADAŃ (closure+spread+filter+find): dodaj/usun(filter !==)/znajdz(find ===)
3. SKLEP (closure+spread+filter+reduce×2): wartoscMagazynu, zKategorii(filter ===),
   najdrozszy(reduce-rekordzista zwraca CAŁY obiekt, bez wart. startowej)
4. GRA (closure+spread+MAP+reduce): dodajPunkty przez map + {...g, punkty: g.punkty+ile}
   = niemutująca AKTUALIZACJA elementu w tablicy (wzorzec Reacta!)

### Dwie lekcje systemowe (wracały, do zapamiętania)
- CZYTASZ → return wynik. ZMIENIASZ STAN → stan = ... . Metody liczące
  NIE nadpisują prywatnego stanu (błąd w sklepie: produkty = produkty.reduce
  nadpisał tablicę liczbą → wszystko dalej się sypało)
- BRAK WART. STARTOWEJ → undefined → undefined+liczba = NaN
  (gra: dodaj przyjmował punkty jako argument którego nikt nie podał;
  lek: punkty:0 na sztywno w środku, nie jako parametr)

### Nawracające szlify
- return w callbacku filter/reduce/map OBOWIĄZKOWY (znów zgubiony w filter)
- reduce-rekordzista: porównuj przez pole (kula.cena < x.cena), zwracaj x (obiekt)

### Ocena
Świeża głowa wykorzystana zgodnie z planem "obciążyć głowę". Systemy nie
zawsze za pierwszym strzałem, ale KAŻDĄ poprawkę samodzielnie po wskazaniu
kierunku. Najtrudniejszy wzorzec dnia (map+spread aktualizacja) napisany sam.

### Do powtórki (rosnące odstępy)
- złożone systemy (closure+reduce+filter+map) — ~18.09
- zapis kula[x.klucz] = [...(kula[x.klucz] || []), x.pole] — wciąż do dobicia
- map + {...g, pole} niemutująca aktualizacja — ~17.09

### Status Bloku 3
- [x] destrukturyzacja, spread/rest  [ ] zagnieżdżona (odłożona)
- [ ] template literals (formalizacja)  [ ] ES modules
Zostało w Bloku 3 niewiele — template literals (już umiem) + moduły.


## ===== 17.09 (przedpołudnie) — obiektowe reduce: PRZEŁOM w rozumieniu =====

### Rozbrojony największy węzeł: kula[x.klucz] (adres vs zawartość)
Pół godziny walki, ale KLIKNĘŁO na poziomie zrozumienia, nie kucia:
- x.produkt = NAZWA/klucz ("chleb") — napis na szufladzie
- kula[x.produkt] = WARTOŚĆ pod tą nazwą (liczba/tablica) — co W szufladzie
- adres ≠ zawartość. To była cała blokada.
- kropka i nawias OBA dają wartość; różnica: kropka = nazwa wpisana wprost,
  nawias = nazwa ze zmiennej (dlatego w reduce zawsze [], bo klucz się zmienia)

### Cała rodzina obiektowego reduce (3 warianty, z głowy)
- liczenie:    kula[x]       = (kula[x] || 0) + 1
- sumowanie:   kula[x.klucz] = (kula[x.klucz] || 0) + x.pole
- grupowanie:  kula[x.klucz] = [...(kula[x.klucz] || []), x.pole]
Schemat wspólny: "weź co już jest pod kluczem (albo start), dołóż, zapisz".
Grupowanie (wcześniej ŚCIĄGANE) — teraz napisane samodzielnie.

### System łączący (closure + spread + reduce grupujący)
Biblioteka: dodaj/pokaz/wgGatunku. Dwa błędy z listy słabych punktów,
poprawione SAM po wskazaniu:
- const w metodzie (tworzy lokalną zamiast pisać do plecaka fabryki)
- || 0 zamiast || [] przy grupowaniu do tablic ([...0] się wywala)

### DO POWTÓRKI JUTRO (sam poprosił, przed nowym materiałem)
- obiektowe reduce, struktura podobna (liczenie/suma/grupowanie)
- słabe punkty: const-w-metodzie, || [] vs || 0, return w callbacku

### Status Bloku 3
- [x] destrukturyzacja, spread/rest  [ ] zagnieżdżona (odłożona)
- [ ] template literals  [ ] ES modules
Kontekst: wczoraj pierwsza automatyzacja w n8n zrobiona.

## ===== 19.09 — ES modules + powtórka słowna całości (Blok 3 ZAMKNIĘTY) =====

### Template literals (18.09) + ES modules (19.09) — Blok 3 domknięty
- template literals: backticki, ${wyrażenie} (może być działanie/funkcja),
  wielolinijkowość. Realny sens: budowa HTML w JS (innerHTML czytelnie)
- ES modules: named export/import — export udostępnia, import { nazwa }
  from "./plik.js" bierze. Klamry, nazwa pasuje, .js obowiązkowe,
  type="module" w HTML, Live Server (nie file://)
- default: świadomie odłożony na React (named wystarcza, default mylił
  "dowolna nazwa/jeden na plik" — wróci naturalnie przy komponentach)
- PO CO moduły (własnymi słowami): porządek, wielokrotne użycie (piszesz
  raz importujesz gdzie trzeba), własny zasięg pliku (koniec kolizji const),
  współpraca — sam dodał

### Powtórka słowna CAŁOŚCI (Blok 1-3, z pamięci) — wszystko trzyma
Dziewięć tematów, wszystkie własnymi słowami = zrozumienie nie formułki.
Najtrudniejsze węzły z pamięci bez zająknięcia:
- kula[x.klucz] = WARTOŚĆ pod kluczem (tydzień temu 30 min walki — trzyma!)
- 3 stany zmiennej (undefined/is not defined/TDZ)
- domyślna tylko na undefined (nie na ""/0/false)

### Szlify do dopilnowania (drobne, nie luki)
- await zamraża TYLKO swoją funkcję, nie cały program (sedno async)
- closure: "nosi/pamięta" zmienne rodzica, NIE "dziedziczy"
- reduce działa na tablicy; bez wart. startowej pada na pustej

### STATUS: BLOK 3 ZAMKNIĘTY
[x] destrukturyzacja, spread/rest, template literals, ES modules
[ ] destrukturyzacja zagnieżdżona — świadomie na Blok 4 (przy API)

### PLAN JUTRO (20.09)
Powtórka CAŁOŚCI Bloku 1-3 — już PISZĄC KOD (nie słownie), parę godzin.
Sprawdzić czy materiał trzyma w palcach, nie tylko w głowie.
Potem: Blok 4 (fetch, API, HTTP) — tam wraca async/await + destrukturyzacja.

## ===== 22.09 (rano) — powtórka: system playlista, reduce vs map =====

### System 5-mechanizmowy (closure+spread+reduce+filter+map)
Playlista: dodaj / lacznyCzas(reduce) / dluzsze(sekundy)(filter) /
tytuly(map). Przeszedł po 2 poprawkach, obie SAM po wskazaniu.

### Główna lekcja dnia: REDUCE vs MAP (realna dziura, zamknięta)
Mylił map z reduce — próbował budować tablicę tytułów RĘCZNIE w map
(t = [...p, p.tytul]), jak w reduce. Sedno:
- reduce = budujesz jeden wynik ręcznie, niesiesz kulę (return kula)
- map = zwracasz co ma zastąpić element; map SAM składa nową tablicę
  (playlista.map(p => p.tytul) — nic ręcznie, map zbiera za ciebie)

### Drugi szlif (wraca): metoda ma brać PARAMETR, nie sztywną liczbę
dluzsze() miało 250 wbite na stałe zamiast dluzsze(sekundy). Ten sam
błąd co powyzej(kwota) wczoraj. Metoda działa na tym co podasz.

### Nawyk return — dziś pilnowany świadomie, lacznyCzas od razu z return
Poprawa względem wczoraj (celował w ten nawyk i trafił)

### Status: Blok 1-3 potwierdzone (słownie 19.09, w kodzie 20+22.09)
Gotowość do Bloku 4 (fetch, API, HTTP) — tam wraca async/await + destrukturyzacja.
Kontekst: równolegle n8n (automatyzacja).

## ===== 22.09 — destrukturyzacja powtórka + plan drogi do Reacta =====

### Powtórka destrukturyzacji (po tygodniu przerwy — trzyma)
Z palca bezbłędnie: obiekt (rename + domyślna naraz), tablica
(pominięcie + domyślna), rest [glowna, ...pozostale].
NOWE dziś:
- destrukturyzacja w parametrze funkcji: function opisz({imie, wiek})
  zamiast (user) + const {...} w środku. Po co: mniej pisania obiekt.
  przy każdym polu; standard w React (props). Zrozumiane "po co".
- zagnieżdżona {imie, adres:{miasto}} — zaczęta, NIEDOKOŃCZONA
  (obiekt w obiekcie, wraca przy API). Do dobicia.

### PLAN DROGI DO REACTA (ustalony)
1. Blok 4 — fetch/API małymi krokami: fetch+.then → async/await →
   Response/.json() → destrukturyzacja odpowiedzi → try/catch →
   HTTP (status, request/response, JSON) → render na stronę.
   API: JSONPlaceholder na start, potem prawdziwe (PokeAPI/pogoda).
2. Projekt(y) spinające fundamenty + API (przeglądarka API / pogoda /
   wyszukiwarka z filtrowaniem)
3. Portfolio (Astra/Journalist/moneyMoves + nowy) → LinkedIn
4. React (wejdzie łatwo — komponenty=funkcje z destr. propsów,
   stan=niemutowanie, .map listy, export default — już to mam)
Zasada: codziennie coś, powtórki fundamentów wplecione co ~tydzień
(żeby nie zardzewiały w trakcie Bloku 4 i Reacta).

### PLAN JUTRO (23.09): pierwszy fetch, świeża głowa
Kontekst: dziś odpoczynek od kodu, przyciskanie n8n.