# Änderungen

Alle Änderungen an SmallTime 2027, die neueste Version zuoberst.
Versionen mit `-beta` sind Vorab-Versionen.

## 0.9.6-beta – 2026-09-18

### Neu

- **Betriebsferientage ganz, halb oder stundenweise frei:** Unter *Stammdaten → Betriebsferientage* wählst du pro Tag den Umfang: ganzer Tag, halber Tag (halbes Soll) oder stundenweise (Soll minus die freien Stunden). Ferien an einem halben Betriebsferientag kosten nur einen halben Ferientag. In der Monatsansicht und im PDF steht z. B. «Heiligabend (½ Tag frei)».
- **Tägliche Datenbankkopie mit automatischem Aufräumen:** Die erste Anmeldung des Tages schreibt eine Kopie nach `data/backups`. Es bleiben alle Kopien der letzten 7 Tage, je eine pro Woche für 4 Wochen, je eine pro Quartal für 12 Monate und je eine pro Jahr. Nach zehn Jahren sind das rund 22 Kopien statt über 500.
- **Absenzen im nächsten Monat erfassen:** Die Monatsansicht lässt sich bis zum nächsten Monat blättern.
- Der Name «SmallTime» in der Fusszeile führt auf [small.li](https://small.li).

### Geändert

- **Monatsansicht:** Datum ohne Jahr (`01.09.`) und eigene Spalte **Tag** (`Di`), wie im PDF.
- **Admin-Menü:** *Inhalte* steht jetzt nach *Auswertungen*.
- **Heller Modus:** Das Hintergrundbild ist oben besser sichtbar.
- **Betriebsferientage:** Die Seite hat das gleiche Karten-Design wie die übrigen Einstellungen. Einträge lassen sich jetzt auch bearbeiten.
- **README:** Mit Bildschirmfotos und einer einfacheren Kurzinstallation (inkl. Befehl für den geheimen Schlüssel).

### Behoben

- **Monatsansicht:** Die Summenzeile «Total» stand eine Spalte zu weit links.

### Bitte beachten beim Update

- Die Datenbank wird beim ersten Start automatisch angepasst (Migration 019). Bestehende Betriebsferientage bleiben «ganzer Tag frei».
- Beim ersten Anmelden nach dem Update räumt SmallTime alte Kopien in `data/backups` nach der neuen Regel auf. Willst du eine alte Kopie behalten, benenne sie vorher um (z. B. `vor-update.sqlite`). Nur Dateien mit dem Namen `DB_JJJJ.MM.TT.sqlite` werden gelöscht.

## 0.9.5-beta – 2026-09-18

- Erste öffentliche Vorab-Version von SmallTime 2027.
