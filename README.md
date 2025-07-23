# codium
Beispiele für gute und schlechte Barrierefreiheit

# Setup
1. Installiere Git, dadurch wird unter anderem Git Bash installiert: <https://git-scm.com/downloads>
2. Installiere Node.JS via MSI installer von hier: <https://nodejs.org/en/download>
    - Stelle sicher, dass du die Checkbox "zusätzliche Tools (z.B. Chocolatery) auch anwählst.
3. Öffne Git Bash Terminal (z.B. im Visualstudio, neues Terminal öffnen), der Pfad sollte dabei nach <code>.../Codium/</code> zeigen.
4. Installiere alle notwendigen Abhängigkeiten via Terminal mit: <code>npm install</code>
5. Mit <code>npx @11ty/eleventy --serve</code> werden die Seiten gerendert und ein lokaler Server unter <http://localhost:8080/> gestartet

# Verwendung
- Möchtest du neue Beispiele zu einer Seite hinzufügen?
    - öffne das HTML Dokument mit dem entsprechenden Namen
    - Bearbeite den Inhalt innerhalb des Main oder Header Elements
- Möchtest du eine neue Seite mit Beispielen erstellen?
    - erstelle ein neues HTML Dokument direkt im Verzeichnis <code>/Codium/View/</code>
    - füge den Nunjuk Header ein (siehe bestehende Dokumente). Der Header wird mittels <code>---</code> eingeschlossen.
    - Füge ein <code><header></code> Element für eine Einleitung deiner Seite hinzu
    - Füge ein <code><main></code> Element für deinen Inhalt hinzu



