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