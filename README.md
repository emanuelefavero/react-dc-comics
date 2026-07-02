# React DC Comics

Esercizio React su componenti e layout dal mio corso Web Dev.

Il progetto è diviso in più fasi, aggiunte progressivamente durante le lezioni React.

## Fasi

### Fase 1

Introduzione a React, JSX e componenti.  
Obiettivo: strutturare il layout principale del sito partendo dallo screenshot di riferimento, dando priorità alla divisione in componenti.

<img src="./references/phase-1-screenshot.png" alt="Screenshot di riferimento fase 1" width="360" />

### Fase 2

Iterazioni in JSX con `.map()` e `key`.  
Obiettivo: rendere dinamiche navbar, lista fumetti e footer links usando array di dati e iterazioni in JSX.

<img src="./references/phase-2-screenshot.png" alt="Screenshot di riferimento fase 2" width="360" />

Gli screenshot di riferimento si trovano nella cartella [`references`](./references).

## Assets

Gli asset del progetto si trovano in:

```txt
src/assets/
```

In particolare, immagini, loghi, icone e sfondi sono nella cartella:

```txt
src/assets/img/
```

## Sviluppo

- Clona questa repository con `git clone https://github.com/emanuelefavero/react-dc-comics.git`
- Entra nella cartella del progetto con `cd react-dc-comics`
- Installa le dipendenze con `npm install`
- Avvia il progetto con `npm run dev`
- Visualizza il progetto all'indirizzo `http://localhost:5173/`

## Note tecniche

- Ho diviso il layout principale in tre componenti: `Header`, `Main` e `Footer`.
- Dove utile, ho creato componenti più piccoli come `Logo`, `Navbar`, `Content`, `ServicesBar`, `Hero` e `CTA`, per separare meglio le parti della pagina senza creare troppi file.
- Per centrare il contenuto ho usato una classe globale `.container`, mentre header, sezioni e footer restano larghi quanto tutto il viewport.
- Ho usato array di oggetti e `.map()` per generare le parti ripetute, come la navbar, la fascia azzurra dei servizi, i link del footer e i social link.
- La fascia azzurra con le icone è gestita dal componente `ServicesBar`, come richiesto nel bonus.
- Nel footer ho strutturato i link in colonne per rispettare il layout dello screenshot: la prima colonna contiene `DC Comics` e `Shop`, mentre le altre colonne contengono `DC` e `Sites`.
- Le immagini usate come contenuto, come logo e icone, sono importate nei componenti React. Le immagini decorative di sfondo sono invece gestite via CSS con `background-image`.
- Ho aggiunto alcuni accorgimenti di accessibilità: testi alternativi per le immagini significative, `alt=""` per le icone decorative, `aria-label` sulle navigazioni senza titolo visibile e link generati con struttura `nav > ul > li > a`.
- Il CSS è diviso tra stili globali in `index.css` e stili specifici dei componenti nei rispettivi file CSS, usando il nesting per mantenere gli stili più facili da trovare.
