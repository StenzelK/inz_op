## Opis Projektu

Celem tego projektu jest stworzenie interaktywnego narzędzia do wizualizacji i modyfikacji trójwymiarowych figur geometrycznych. Narzędzie to będzie wyposażone w intuicyjny interfejs użytkownika, który pozwoli użytkownikom na tworzenie i manipulowanie podstawowymi bryłami, takimi jak sześciany, sfery, cylindry i stożki.

Funkcjonalności projektu obejmują:

- **Tworzenie Figur**: Użytkownik może wybrać typ figury, którą chce stworzyć, z dostępnych opcji.
- **Regulacja Wymiarami**: Dla każdej figury dostępne są suwaki, które pozwalają na zmianę jej rozmiarów, takich jak szerokość, wysokość, głębokość, promień górny, promień dolny itp.
- **Wizualizacja 3D**: Po dokonaniu zmian w wymiarach, figura jest natychmiastowo wizualizowana w przestrzeni trójwymiarowej.

## Opis Serwera

Projekt wykorzystuje serwer oparty na FastAPI, nowoczesnym i szybkim frameworku do tworzenia API z Pythona. FastAPI jest znany ze swojej wydajności, łatwości w użyciu oraz automatycznej walidacji danych. Serwer odpowiada za przetwarzanie żądań od klienta, zarządzanie danymi oraz generowanie odpowiedzi.

### Główne cechy serwera:

- **Asynchroniczność**: Dzięki asynchronicznemu przetwarzaniu żądań, serwer jest w stanie obsłużyć dużą liczbę jednoczesnych połączeń bez utraty wydajności.
- **Walidacja i Serializacja**: Użycie pydantic do walidacji danych wejściowych i serializacji danych wyjściowych zapewnia bezpieczeństwo i integralność przesyłanych informacji.
- **Autodokumentacja**: Wykorzystanie standardów OpenAPI i JSON Schema umożliwia automatyczne generowanie interaktywnej dokumentacji API, co ułatwia testowanie i integrację z serwerem.
- **Bezpieczeństwo**: Implementacja systemu autentykacji i autoryzacji użytkowników, w tym tokenów JWT, zabezpiecza dostęp do funkcji serwera.
- **Modułowość**: Struktura projektu oparta na modułach i zależnościach ułatwia rozwój, testowanie oraz utrzymanie kodu.

Serwer jest zaprojektowany do pracy z różnymi typami klientów, w tym aplikacjami przeglądarkowymi, mobilnymi oraz narzędziami desktopowymi. Dzięki responsywnemu API, klient może łatwo komunikować się z serwerem, wysyłając żądania w celu tworzenia, aktualizacji, odczytu i usuwania danych dotyczących figur geometrycznych.

### Funkcje serwera:

- **Odbieranie Zapytań**: Serwer obsługuje żądania HTTP GET, POST, PUT, DELETE, umożliwiając CRUD operacje na obiektach.
- **Przetwarzanie Danych**: Po otrzymaniu danych, serwer przetwarza je, wykonuje obliczenia i generuje odpowiednie modele 3D.
- **Zarządzanie Sesją**: Serwer utrzymuje sesje użytkowników, zapewniając ochronę i prywatność danych.
- **Wysyłanie Odpowiedzi**: Odpowiedzi są formatowane w JSON i wysyłane z powrotem do klienta, włączając w to zarówno dane, jak i ewentualne komunikaty o błędach.

Serwer FastAPI stanowi solidne i elastyczne rozwiązanie backendowe dla naszego projektu, zapewniając niezbędną funkcjonalność i wydajność.

Sure, here's an explanation of the JavaScript code you provided, broken down by function, and explained in Polish, formatted in Markdown:

---

# app.js

Kod JavaScript jest używany do tworzenia i manipulowania trójwymiarowymi obiektami z użyciem biblioteki Three.js w przeglądarce internetowej. Poniżej znajduje się wyjaśnienie każdej funkcji zawartej w kodzie:

## Zdarzenie Załadowania Dokumentu

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // ...
    init();
});
```

Kiedy cały dokument HTML zostanie załadowany, inicjowana jest funkcja `init`, która startuje konfigurację sceny 3D.

## Funkcja `init`

```javascript
function init() {
    // ...
}
```

`init` przygotowuje główne elementy potrzebne do wyświetlania sceny 3D:

- Tworzy scenę za pomocą `THREE.Scene`.
- Ustawia kamerę perspektywiczną.
- Konfiguruje renderowanie z wykorzystaniem `THREE.WebGLRenderer`.
- Dodaje światło otoczenia (`AmbientLight`) oraz kierunkowe (`DirectionalLight`).
- Inicjuje selektor figury i wybór koloru.
- Rozpoczyna pętlę animacji za pomocą funkcji `animate`.

## Funkcja `initFigureSelector`

```javascript
function initFigureSelector() {
    // ...
}
```

Inicjuje interfejs użytkownika do wyboru figury 3D, nasłuchuje zmiany wartości i wywołuje `changeFigure` przy zmianie opcji.

## Funkcja `createSlider`

```javascript
function createSlider(id, min, max, step, defaultValue, labelText) {
    // ...
}
```

Tworzy suwak (slider) pozwalający na regulację właściwości figury, takich jak wymiary i inne charakterystyki.

## Funkcja `initSliders`

```javascript
function initSliders(figureType) {
    // ...
}
```

Inicjuje suwaki odpowiednie dla wybranej figury 3D, na przykład:
- Dla sześcianu (`cube`) tworzy suwaki do regulacji szerokości, wysokości i głębokości.
- Dla innych typów figur jak sfera (`sphere`), walec (`cylinder`), czy stożek (`cone`), tworzy odpowiednie suwaki do regulacji ich wymiarów.

## Funkcja `changeFigure`

```javascript
function changeFigure(event) {
    // ...
}
```

Zmienia bieżącą figurę na scenie w zależności od wybranego rodzaju figury. Usuwa poprzednią figurę i tworzy nową z nowymi wymiarami i kolorem.

## Funkcja `updateFigureDimensions`

```javascript
function updateFigureDimensions() {
    // ...
}
```

Aktualizuje wymiary wybranej figury 3D na podstawie wartości suwaków.

## Funkcja `initColorPicker`

```javascript
function initColorPicker() {
    // ...
}
```

Inicjuje narzędzie do wyboru koloru figury, dodając nasłuchiwanie na zmianę wartości.

## Funkcja `updateFigureColor`

```javascript
function updateFigureColor(event) {
    // ...
}
```

Aktualizuje kolor figury na podstawie wybranego koloru z narzędzia do wyboru koloru.

## Funkcja `animate`

```javascript
function animate() {
    // ...
}
```

Tworzy pętlę animacji, która obraca figurę 3D i renderuje scenę na nowo przy każdej klatce.

---

Po wywołaniu funkcji `init`, cały proces konfiguracji sceny 3D zostaje uruchomiony i użytkownik jest w stanie interaktywnie zmieniać figury, ich wymiary oraz kolory.

# Three.js

Three.js to wysokopoziomowa biblioteka i API w JavaScript zaprojektowana do tworzenia i wyświetlania animowanych i interaktywnych grafik 3D w przeglądarkach internetowych. Wykorzystuje `WebGL` jako podstawę do renderowania scen bez potrzeby korzystania z dodatkowych wtyczek. Poniżej znajduje się przewodnik po kluczowych aspektach Three.js, który może być przydatny przy tworzeniu dokumentacji lub instrukcji.

## Podstawowe Komponenty

### Scena (`THREE.Scene`)

Scena to kontener, w którym umieszcza się obiekty, światła i kamery. Jest to wirtualna przestrzeń, gdzie twój świat 3D zostanie zbudowany.

```javascript
const scene = new THREE.Scene();
```

### Kamera (`THREE.PerspectiveCamera`)

Kamera definiuje, z jakiej perspektywy użytkownik będzie widział scenę. Kamera perspektywiczna imituje sposób widzenia ludzkiego oka, oferując efekt głębi.

```javascript
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
```

- `fov` — Field of View (pole widzenia) wyrażone w stopniach.
- `aspect` — Stosunek szerokości do wysokości renderowanego obrazu.
- `near`, `far` — Ograniczenia przestrzeni widocznej dla kamery (wszystko poza tym zakresem nie będzie renderowane).

### Renderer (`THREE.WebGLRenderer`)

Renderer przetwarza scenę i kamerę na wizualną grafikę, którą użytkownik może zobaczyć. Renderer wykorzystuje WebGL do rysowania sceny w elemencie `<canvas>` HTML.

```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

- `antialias` — Gdy ustawione na `true`, wygładza krawędzie obiektów na scenie.

### Obiekty (`THREE.Mesh`)

Obiekty 3D, takie jak sześciany, sfery, walczyki itp., są tworzone przez połączenie geometrii z materiałem.

```javascript
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### Światła (`THREE.Light`)

Światła są niezbędne do wyświetlania cieni i odcieni materiałów. Three.js oferuje różne typy świateł, takie jak `AmbientLight`, `PointLight`, `DirectionalLight`, `SpotLight` itp.

```javascript
const light = new THREE.DirectionalLight(color, intensity);
scene.add(light);
```

## Animacja

Do tworzenia animacji używa się funkcji `requestAnimationFrame`, która wywołuje funkcję `render` w każdej klatce animacji.

```javascript
function animate() {
    requestAnimationFrame(animate);
    // Zmiany w scenie lub obiektach
    renderer.render(scene, camera);
}
animate();
```