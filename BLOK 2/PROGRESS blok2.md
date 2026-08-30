## ===== 02.08 (wieczór) — Blok 2 START: bubbling + delegacja zdarzeń =====

Trudny start (frustrująca sesja w innym wątku, źle poprowadzona — zbyt
szybko, za dużo naraz, this/currentTarget wrzucone bez sensu). Wróciłem
zmęczony, ale nie poddałem się.

BUBBLING — zrozumiany po rozdzieleniu dwóch pomylonych rzeczy:
- fakt fizyczny: klik w dziecko → event leci w górę przez rodziców (bąbelkuje)
- WYKORZYSTANIE: nie "dzieci dostają event z rodzica" — ODWROTNIE:
  "rodzic dostaje info o evencie z dziecka", bo event do niego dobąbelkował

DELEGACJA ZDARZEŃ — złożona SAMODZIELNIE, własnymi słowami, na przykładzie
własnego grida z Astry:
- zamiast listenera na KAŻDYM przycisku (deleteBtn x50) → JEDEN listener
  na rodzicu (grid) — bo rodzic i tak "czuje" dzięki bubblingowi
- event.target mówi rodzicowi W KTÓRY DOKŁADNIE element kliknięto
- ten sam wzorzec myślowy co closures: jeden mechanizm obsługujący wiele
  przypadków, zamiast pisania osobno dla każdego

## Status Bloku 2
[~] bubbling + delegacja — SEDNO opanowane (teoria), zostało zobaczyć na
    żywym kodzie / spróbować napisać samemu
[ ] let/const/var + hoisting
[ ] mutacja vs niemutowanie, spread/rest

## Plan na jutro (03.08) — ZAKTUALIZOWANY

1. DOM + delegacja zdarzeń OD POCZĄTKU, porządnie:
   - czym jest DOM (drzewo elementów, jak przeglądarka je widzi)
   - event.target — co to jest, jak działa, ćwiczenia
   - bubbling — mechanizm + WYKORZYSTANIE (już mam sedno z dziś, ale
     przejść to jeszcze raz od zera, z pełną teorią i ćwiczeniami,
     nie tylko konceptem)
   - delegacja zdarzeń — napisać samemu na małym przykładzie, potem
     spróbować na fragmencie z Astry (np. deleteBtn w renderActivities)

2. Powtórka całego Bloku 1 z pamięci (domknięcie dnia)

## ===== 04.08 (rano, po recepcji) — DOM + bubbling + event.target OD ZERA =====

Trudny start (namieszało się z classList wpakowanym za wcześnie, "event" 
wydawał się bez sensu) — poprosiłem o reset i zrobiliśmy to porządnie,
mały krok po kroku, każdy przećwiczony osobno.

ZBUDOWANE OD ZERA, SAM:
1. DOM — drzewo obiektów, rodzice/dzieci (już miałem, potwierdzone)
2. event — obiekt, który przeglądarka DAJE funkcji, ale trzeba go ZŁAPAĆ
   parametrem (event) => {}, inaczej () => {} go ignoruje mimo że przyszedł
3. bubbling — POTWIERDZONE EKSPERYMENTALNIE (2 zadania):
   - klik w dziecko odpala WSZYSTKIE listenery po drodze w górę (duży+mały)
   - kolejność: od najgłębszego do najwyższego (malutki→maly→duzy)
4. event.target — mówi PRAWDĘ o miejscu kliknięcia, niezależnie KTÓRY
   listener akurat loguje (stąd 2x "maly" przy klik w mały, nie "maly"+"duzy")
5. DELEGACJA — zbudowana samodzielnie: JEDEN listener na rodzicu (stary)
   + event.target.textContent = obsługa 3 różnych przycisków bez
   podpinania osobno na każdym. Zrozumiane PO CO (odpowiedź na "na chuj
   mi event" z frustracji): bez event.target jeden listener na rodzicu
   jest bezużyteczny — nie wiedziałby KTÓRY element kliknięto.

## Status Bloku 2
[x] DOM podstawy, event object, bubbling, event.target, delegacja zdarzeń
    (SEDNO + praktyka, mały krok po kroku, solidnie)
[ ] classList, closest, parentElement, matches — ŚWIADOMIE ODŁOŻONE na
    osobną sesję (to DOM manipulation, nie bubbling — nie mieszać tematów)
[ ] let/const/var + hoisting
[ ] mutacja vs niemutowanie, spread/rest

## Plan na jutro (05.08)

1. POWTÓRKA BLOKU 1 — porządna, z kilkoma zadaniami (nie tylko pytania
   z pamięci). Cały zakres: async/event loop, closures, scope, this+arrow,
   metody tablic, reduce.

2. POWTÓRKA dzisiejszego DOM — bubbling, event object, event.target,
   delegacja zdarzeń. Sprawdzić czy usiadło po nocy.

3. WEJŚCIE GŁĘBIEJ w DOM manipulation — classList, closest, parentElement,
   remove, matches i inne narzędzia do pracy z elementami. Tym razem
   jako OSOBNY, świadomy temat, nie wmieszany w bubbling.


   ## ===== 07.08 (wieczór, cd.) — closures vs this: różnica dopracowana =====

Rozdzielone dwa mechanizmy, wcześniej lekko zlepione w jedno:
- CLOSURE = funkcja pamięta zmienne NA STAŁE, z miejsca narodzin,
  niezależnie jak potem wywołana (zamrożone wiązanie)
- THIS = funkcja NIE pamięta obiektu, sprawdza go NA NOWO przy KAŻDYM
  wywołaniu, patrząc co jest przed kropką (dynamiczne wiązanie)

Przećwiczone: 2 niezależne plecaki (a/b), ta sama funkcja z różnym this
(obiekt1.pokaz vs obiekt2.pokaz — kopiowanie referencji do funkcji),
i na koniec OBA mechanizmy RAZEM w jednej metodzie (stworzKonto:
wlasciciel z closure + this.saldo z obiektu) — napisane samodzielnie,
bezbłędnie.

## Status
Blok 1 (closures + this) solidnie domknięty, różnica jasna.
Bubbling/delegacja z 04.08 potwierdzone, siedzi.

## Plan (bez zmian, zaległy)
1. Porządna powtórka Bloku 1 z zadaniami (zrobiona dziś częściowo)
2. DOM manipulation głębiej — classList, closest, remove — jako
   osobny temat


## Plan na dziś wieczór (15.08, 2-3h)
MEGA-SESJA łącząca CAŁY Blok 1 + to co jest z Bloku 2:
- closures + this (jak gracze/konta)
- metody tablicowe + reduce
- DOM + bubbling + delegacja (żywy przykład, lista z usuwaniem)
- let/const świadomie, z pełnym zrozumieniem różnicy od var
Cel: zobaczyć że wszystko gra RAZEM, w jednym/kilku działających kawałkach kodu.

## Plan na jutro (16.08)
1. Powtórka wszystkiego jeszcze raz
2. Końcówka Bloku 2: mutacja vs niemutowanie + spread/rest

## Plan na jutro (16.08) — "dokurwiony dzień", 2 bloki

### Blok A (pierwsza połowa dnia) — MEGA-POWTÓRKA przez KOD
1. Rozgrzewka z pamięci (szybkie pytania, cały Blok 1 + let/const/var/hoisting/bubbling)
2. Nowy mini-projekt łączący closures+this+metody tablic+reduce (NIE kopiować
   schematu gracze/konta na pamięć — nowy temat, żeby wymusić realne myślenie)
3. Ćwiczenia DOM + bubbling + delegacja (żywy przykład: lista z add/remove)
4. Świadome const/let w praktyce przy pisaniu powyższego

### Blok B (druga połowa dnia) — koniec Bloku 2
- Mutacja vs niemutowanie + spread/rest
- To domyka CAŁY Blok 2

## Notatka z 15.08
var/let/const + hoisting - PRZEROBIONE DOGŁĘBNIE, momentami bardzo ciężko
(zwłaszcza setTimeout w pętli), ale doszedłeś sam, bez podawania gotowca.
Kluczowa umiejętność dnia: mówienie "nie kumam" zamiast udawania że rozumiesz.

## Plan na jutro (17.08) — rano

1. PEŁNA POWTÓRKA: Blok 1 + Blok 2, kilkanaście zadań (nie tylko pytania
   z pamięci — pisanie kodu)
2. WYBÓR PROJEKTU do portfolio (start real practice: środa 20.08)
   — ustalić konkretny temat projektu łączącego Blok 1+2

## Notatka z 16.08
Blok 2 CAŁY przerobiony w jeden dzień (3 noce z rzędu na recepcji,
ale wyspany, dobra forma): bubbling/delegacja (powtórka), let/const/
var+hoisting (nowy, ciężki temat, dogłębnie), mutacja/referencje/
spread/rest (nowy, dogłębnie). Wieczorna powtórka - wszystko trzyma,
jedna drobna korekta: var = zadeklarowana ale PUSTA (nie "niezadeklarowana").

## ===== 17.08 (rano) — złożone zadania łączące Blok 1 =====

Fabryka stworzTodo(tekst) — closure z prywatnym stanem (zrobione),
3 metody (wykonaj/pokaz/stan). Złapany i poprawiony samodzielnie błąd
(literówka text/tekst) po wskazaniu gdzie szukać.

Tablica todo + filter po metodzie obiektu: t.stan().zrobione === false
(nauka: wywołanie metody NA elemencie, nie zmienna z dupy).
Reduce - licznik warunkowy wykonanych todo, poprawnie z palca.

OBSERWACJA: półtorej godziny na złożone, wielowarstwowe zadanie (closure+
+tablica+metody+filter+reduce razem) - to normalne, nie słabość. To jest
jakościowo trudniejsze niż izolowane ćwiczenia - prawdziwe programowanie
= łączenie klocków w system.

DECYZJA: kilka dni robić właśnie takie złożone, powiązane zadania
(most między "znam mechanizmy" a "umiem zbudować z nich system"),
zamiast kolejnych izolowanych ćwiczeń. Przygotowanie pod projekt
portfolio (start 20.08).

## Zostało z dzisiejszego zadania (dokończyć)
Zadanie 3: renderowanie todo w DOM (forEach + createElement + appendChild)
+ delegacja zdarzeń (jeden listener na liście, obsługa przycisku "Wykonaj"
przez data-index) - NIE DOKOŃCZONE, wrócić do tego.

## Plan na wieczór (17.08)
Dalsze ćwiczenia łączące - kontynuacja tego samego kierunku (złożone
zadania, nie izolowane).

## NOWY PLAN (ustalony 21.08)

21.08 - 24.08: ĆWICZENIA ŁĄCZONE, Blok 1 + Blok 2, różne kombinacje,
coraz bardziej złożone (jak fabryka todo + filter + reduce + DOM +
delegacja z 17.08). Cel: swoboda w łączeniu mechanizmów w system,
nie tylko pojedyncze umiejętności.

25.08: START PROJEKTU PORTFOLIO — mały projekt od zera, zawierający
WSZYSTKO z Bloku 1+2, nic ponad to (bez fetch/React/modułów).
Konkretny temat do ustalenia bliżej daty.

## ===== 21.08 (powrót po 4 dniach) — PODSUMOWANIE =====

Rozgrzewka: Blok 1+2 z pamięci - wszystko trzyma po przerwie.

GŁÓWNA CZĘŚĆ: kompletny mikro-system lista+DOM+delegacja, budowany od
zera (nie kontynuacja starego, zagmatwanego kodu z 17.08):
- renderowanie: forEach + createElement + appendChild
- delegacja: JEDEN listener na liście, event.target.tagName do filtrowania
- dataset.index: NAJTRUDNIEJSZY punkt dnia - długa walka, w końcu pełne
  zrozumienie (i z forEach żyje tylko w renderuj(), listener działa
  PÓŹNIEJ gdy i już nie istnieje, dataset to most między momentami w czasie)
- filter: niemutujące usuwanie na podstawie odczytanego indeksu
- Number(): konwersja stringa z dataset z powrotem na liczbę do porównań

Naprawione samodzielnie po wskazaniu: literówki, renderuj() wołające
samo siebie (nieskończona pętla), pomylenie btn/list w addEventListener.

## Status
Kompletny, DZIAŁAJĄCY i ZROZUMIANY mikro-system łączący Blok 1+2.
To jest solidny fundament pod projekt portfolio.

## Plan
21.08-24.08: dalsze złożone ćwiczenia (nowe tematy, nie kopiować schematu)
25.08: start projektu portfolio

## ===== 23.08 — złożony system: nawyki (closures+DOM+delegacja+reduce) =====

Zbudowany kompletny mikro-system na NOWYM temacie (nie kopiowanie
gracza/todo): stworzNawyk(nazwa) - fabryka z prywatnym licznikiem,
metody wykonaj/stan. Tablica obiektów-nawyków + renderowanie (forEach+
DOM) + delegacja (jeden listener, dataset.index) + reduce (suma
liczników, aktualizująca się na żywo po każdym kliknięciu).

Błędy złapane i poprawione SAMODZIELNIE po wskazaniu kierunku:
- tablica przechowująca .stan() zamiast całych obiektów z metodami
- forEach z przypisaniem (nawyki = nawyki.forEach - niszczy tablicę)
- map zamiast forEach w listenerze (niepotrzebne tworzenie nowej tablicy)
- reduce wewnątrz forEach zamiast poza nim (liczone wielokrotnie)

POTWIERDZENIE: dataset.index/scope/delegacja z 21.08 - PRZETRWAŁO
2 dni przerwy, zrozumienie solidne, nie wyuczona formułka.

## Status
Blok 1+2 połączone w kompletny, złożony, działający system - DRUGI
taki projekt (po liście zadań), na nowym temacie. Gotowość pod
projekt portfolio potwierdzona.

## Plan
24.08: ostatni dzień ćwiczeń łączonych (opcjonalnie)
25.08: START PROJEKTU PORTFOLIO

## Plan na 24.08 — FINAŁOWY TRENING przed projektem portfolio

Cel: solidne zamknięcie Bloku 1+2, zbudowanie pewności w pisaniu,
nie nowa wiedza — utrwalenie i płynność.

Struktura dnia (zadania rosnące w trudności):

1. ROZGRZEWKA (bez kodu, 10 min) — pytania z pamięci po każdym temacie
   Bloku 1 i 2, szybkie, żeby "obudzić" wszystkie mechanizmy naraz

2. ZADANIE A — mała fabryka + metody + reduce, ale BEZ podglądania
   poprzednich rozwiązań (np. "koszyk zakupowy" - closures + dodawanie
   produktów + suma przez reduce, bez DOM)

3. ZADANIE B — to samo, ale w DOM: renderowanie + delegacja (bez inputa,
   tylko wyświetlanie i usuwanie/klikanie)

4. ZADANIE C — PEŁNY cykl: fabryka + input/dodawanie + spread +
   DOM + delegacja + reduce - jeden kompletny system, budowany
   OD ZERA, bez kopiowania z wcześniejszych dni

5. (opcjonalnie, jeśli czas/siła) ZADANIE D — wariacja z filter
   zamiast/obok reduce (np. filtrowanie po jakimś warunku)

Zasada: PISZESZ Z PAMIĘCI, bez podglądania poprzednich rozwiązań.
Błędy to nie porażka - to normalna część budowania wprawy. Liczy się
ROZUMIENIE mechanizmu, nie perfekcyjne pisanie za pierwszym razem.

## Notatka o pewności siebie (24.08 przypomnienie)
Błędy z 21-23.08 to były literówki/pomylone nazwy zmiennych, NIE błędy
zrozumienia mechanizmów. Pewność w pisaniu przychodzi z powtórzeń,
nie z jednego olśnienia. Trzeci dzień z rzędu już poszedł płynniej
niż pierwszy - to widoczny progres, nie stagnacja.

## ===== 24.08 — FINAŁOWY TRENING przed projektem portfolio =====

Rozgrzewka: 8 pytań z pamięci, Blok 1+2 CAŁOŚĆ - wszystko trafione,
precyzyjne odpowiedzi.

Zadanie A: koszyk zakupowy (closures z tablicą w plecaku, spread,
filter, reduce) - BEZBŁĘDNIE od zera, bez podglądania.

Zadanie B: ten sam koszyk w DOM (renderowanie + delegacja przez
dataset.nazwa zamiast indeksu) - drobna kosmetyczna poprawka,
reszta poprawna od razu.

Zadanie C: PEŁNY cykl z formularzem (input+walidacja+Number()+
+dodawanie+DOM+delegacja+reduce) - jeden subtelny błąd (brak
konwersji cena.value na liczbę), złapany i poprawiony po wskazaniu.

WNIOSEK: Trzy kompletne systemy w jeden dzień, wszystkie napisane
od zera bez kopiowania. Błędy coraz bardziej subtelne (nie podstawowe
pomyłki), co pokazuje realny wzrost pewności i wprawy.

## STATUS: BLOK 1 + BLOK 2 W PEŁNI ZAMKNIĘTE I POTWIERDZONE
Teoria + praktyka + zdolność budowania złożonych, kompletnych
systemów od zera, samodzielnie.

## NASTĘPNY KROK: PROJEKT PORTFOLIO (25.08)

## ===== 25.08 — PROJEKT PORTFOLIO: moneyMoves, Dzień 1 =====

CEL DNIA (osiągnięty): szkielet + cała logika, wszystko DZIAŁA.

Zbudowane od podstaw:
- HTML: header, sekcja formularza (2 przyciski KP/KW), sekcja historii,
  sekcja podsumowania (saldo)
- Dynamiczne formularze (createElement) generowane po kliknięciu
  KP/KW, z walidacją (puste pole, kwota ujemna/pusta)
- Struktura danych: JEDNA tablica `tranzakcje` z polem `typ` (KP/KW) -
  decyzja podjęta świadomie po dyskusji o alternatywach
- Dodawanie: spread (niemutujące), budowa obiektu {typ, cel, kwota, opis}
- Renderowanie: forEach + rozróżnienie tekstu KP/KW (źródło vs cel)
- Usuwanie: delegacja + dataset.index + filter (Number() konwersja)
- Saldo: reduce z logiką warunkową (+kwota jeśli KP, -kwota jeśli KW)

Błędy złapane i poprawione SAMODZIELNIE po wskazaniu:
- return {...} zamiast dodania do tablicy (nie zrozumienie roli return
  w callbacku listenera vs w reduce)
- literówki (createelement, getELementById itp.)
- brak przypisania wyniku filter (dwa razy - ważny nawracający wzorzec
  błędu do pilnowania)
- brak Number() przy konwersji dataset.index

## Status: DZIEŃ 1 ZAKOŃCZONY SUKCESEM
Cała logika biznesowa działa. Brzydkie, ale w pełni funkcjonalne.

## Plan
26.08 (Dzień 2): CSS, design, dopracowanie UX, może prosty wykres
słupkowy per kategoria/typ
27.08 (Dzień 3, opcjonalnie): dopracowanie + README

## ===== 29-30.08 — PROJEKT PORTFOLIO: moneyMoves, dokończenie funkcji =====

### Sesja nocna 29.08 (recepcja, cała noc)
Dodane trzy nowe funkcje do rdzenia aplikacji:
1. DATA TRANSAKCJI — new Date().toLocaleDateString(), zapisywana przy
   każdej transakcji, wyświetlana na liście
2. FILTROWANIE (KP/KW/Wszystko) — zmienna aktualnyFiltr + filter()
   wewnątrz renderujTranzakcje(), realne zastosowanie filter w projekcie
3. DYNAMICZNE KATEGORIE — zamiast sztywnej listy, input+datalist:
   user wpisuje kategorię, jeśli nowa (kategorie.includes() === false)
   dopisuje się do tablicy kategorie przez spread, dostępna jako
   podpowiedź przy kolejnych transakcjach

DŁUGA WALKA (2+ h): layout dwukolumnowy karty transakcji (lewo: typ+
nazwa+kwota, prawo: data+kategoria). Wielokrotne nieudane próby,
narastająca frustracja po obu stronach, momenty kryzysowe (obraźliwe
słowa, groźba rzucenia programowania, próba zerwania współpracy).
Sesja zamknięta bez rozwiązania problemu CSS - decyzja o przerwaniu
i powrocie na świeżej głowie.

PRZYCZYNA PROBLEMU (zdiagnozowana): konflikt specyficzności CSS -
wielokrotnie nawarstwione, częściowo sprzeczne reguły #lista li
tworzone w kolejnych iteracjach bez czyszczenia poprzednich wersji.

### Sesja poranna 30.08 — NAPRAWIONE i DOKOŃCZONE
Layout dwukolumnowy naprawiony poprzez: dodanie klas .lewa/.prawa
w JS (classList.add) zamiast selektorów pozycyjnych (:first-child),
czyste, jednoznaczne reguły CSS bez konfliktów. Dopracowany wygląd:
subtelny tag typu transakcji (PRZYCHÓD/WYDATEK), stylizowana kategoria,
karty transakcji wizualnie wydzielone (tło, ramka, odstępy).

DOPRACOWANIE (plan z wczoraj, zrealizowany dziś):
- NAPRAWIONA walidacja NaN: isNaN(Number(amount)) || Number(amount) <= 0
  zamiast amount < 0 || amount === "" (łapie litery wpisane jako kwota)
- EMPTY STATE: komunikat "Brak transakcji do wyświetlenia" gdy lista pusta
- RESPONSYWNOŚĆ: przetestowana na symulacji iPhone (430x932) - działa
  BEZ POPRAWEK, dzięki elastycznym flex-layoutom i max-width na main

## STATUS: moneyMoves — FUNKCJONALNIE I WIZUALNIE KOMPLETNY
Cała logika + pełny design + walidacja + empty state + responsywność.
Zostało: decyzja o wykresie/statystykach (opcjonalnie) + README.md.

## WNIOSEK z tej sesji (ważny na przyszłość)
Przy problemach z layoutem CSS, które się nie poddają po 2-3 próbach:
UŻYĆ narzędzi deweloperskich (Inspect Element) do zdiagnozowania
struktury i konfliktów PRZED kolejnymi zgadywanymi poprawkami.
Zmęczenie + frustracja + kontynuowanie w nocy = spirala pogarszająca
jakość pracy i relację - lepiej przerwać i wrócić na świeżo, nawet
gdy chce się "walczyć do końca".

## Plan
- Krótka powtórka Bloku 1+2 (jeśli czas pozwoli, priorytet: HUSTLE/telefony)
- Osobna, dłuższa sesja: finalizacja moneyMoves (ew. wykres, przegląd
  całości, README.md) — gdy będzie kilka wolnych godzin

  ## Plan finalizacji moneyMoves — ZAKTUALIZOWANY

1. **localStorage** (WAŻNE, wcześniej pominięte!) — zapisywanie
   tranzakcje i kategorie do localStorage przy każdej zmianie,
   wczytywanie przy starcie strony. Bez tego dane znikają po odświeżeniu.
2. Ewentualny wykres/statystyki per kategoria (opcjonalnie)
3. Przegląd całości, drobne poprawki
4. README.md

## ===== 30.08 (rano) — moneyMoves: FINALIZACJA I ZAMKNIĘCIE =====

### Dodane funkcje (dokończenie planu)
- LOCALSTORAGE: zapisujDane() (JSON.stringify) + wczytywanie przy starcie
  (JSON.parse) - dane przetrwają odświeżenie strony. Zastosowanie
  mechanizmu znanego z Astry w nowym kontekście.
- WYŚWIETLANIE OPISU transakcji (wcześniej zapisywany, ale niewidoczny)
  + limit 100 znaków (maxLength)
- POPRAWKI UKŁADU: przyciski KP/KW wyśrodkowane i powiększone,
  filtry (Wszystko/Przychody/Wydatki) wyśrodkowane, kolejność pola
  kategorii poprawiona (przed przyciskiem Zapisz, nie po)

### Decyzja o zakresie
Świadoma rezygnacja z: wykresu/statystyk per kategoria (opcja A),
dalszego "dopracowywania smaku wizualnego" (czcionki, mikrointerakcje),
edycji transakkcji (B) i sortowania (C) - PO REFLEKSJI, że cel
edukacyjny projektu (praktyczne zastosowanie Bloku 1+2: closures,
DOM+delegacja, filter/reduce/spread, mutacja/niemutowanie, localStorage)
został w pełni osiągnięty. Dalsze dopracowywanie designu to osobna
umiejętność (produktowa/designerska), nie nauka JS - i moneyMoves
nie musi konkurować wizualnie z już dopieszczonymi Astra/Journalist,
bo jego wartość jest inna: pokazuje świeże, dogłębne opanowanie
konkretnych, nowo poznanych mechanizmów.

### README.md napisany i dodany do projektu
Krótki opis: cel projektu, lista funkcji, technologie (vanilla JS,
HTML5, CSS3, bez frameworków), instrukcja uruchomienia, kontekst
edukacyjny (Blok 1+2).

## STATUS: moneyMoves — PROJEKT ZAMKNIĘTY, GOTOWY DO PORTFOLIO

Pełna funkcjonalność: dodawanie z walidacją (w tym poprawiona walidacja
NaN), dynamiczne formularze, filtrowanie, dynamiczne kategorie,
localStorage, empty state, potwierdzona responsywność, README.

## PODSUMOWANIE CAŁEGO CYKLU PROJEKTU (25.08 - 30.08)
Dzień 1 (25.08): szkielet + cała logika biznesowa
Dzień 2 (29.08): CSS/design podstawowy + trudna noc z layoutem
Dzień 3 (30.08 rano): naprawiony layout + finalizacja (localStorage,
walidacja, empty state, poprawki UX, README)

Projekt przeszedł pełen cykl produkcyjny: od zera, przez frustrujące
momenty (w tym poważny kryzys komunikacyjny w nocy 29/30.08), po
świadome zamknięcie zakresu i finalizację. Realna nauka nie tylko
o JS, ale o zarządzaniu zakresem projektu i rozpoznawaniu momentu
"wystarczająco dobre, koniec".

## CO DALEJ
Blok 3 (ES modules, destrukturyzacja, template literals — częściowo
już znane) + Blok 4 (fetch, API, HTTP). Priorytet najbliższych dni:
HUSTLE/phone calls, nauka w tym wątku gdy będzie czas/energia.