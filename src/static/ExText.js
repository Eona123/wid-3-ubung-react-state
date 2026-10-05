export const Aufgabe1 = () => (
  <div className="Exercise">
    <h2>Aufgabe 1: Button</h2>
    <p>
      1.1) Füge einen Button hinzu, welcher den Zähler nicht um +1 sondern um +5
      erhöht. Der useState-Hook für Aufgabe 1 wurde bereits angelegt. Du kannst
      also die gleiche setState-Funktion verwenden, die im Code bereits für den
      +1 Button verwendet wird.
    </p>
    <p>
      1.2) Füge einen zweiten Button hinzu. Dieser soll den Wert des Counters
      zurück auf 0 setzen. Auch dafür brauchst du keinen neuen Hook.
    </p>
  </div>
);
export const Aufgabe2 = () => (
  <div className="Exercise">
    <h2>Aufgabe 2: Checkbox</h2>
    <div>
      <p>
        2.1) Hier brauchst du einen neuen useState-Hook. Setze den default Wert
        im Hook auf `true`. Passe dann den Code so an, dass ein Klick auf die
        Checkbox ein State-Update erzeugt welches den Zustand der Checkbox
        (aktiv, nicht aktiv) reflektiert. Du kannst den `!`-Operator nutzen, um
        in der setStateFunktion die State-Variable zu invertieren (aus true wird
        false und aus false wird true).
      </p>
      <p>
        2.2) Passe den Text (p-Element) neben der Checkbox an, dass er "Ja"
        anzeigt, wenn die Box aktiv ist, und "Nein" wenn sie nicht aktiv ist.
        Ersetze den statischen Text "JA oder NEIN" durch eine Kondition (nutze
        den <span className="Emphasis">ternary operator</span>), welche "JA" für
        eine aktive Checkbox zurückgibt und "Nein" für eine inaktive Checkbox.
      </p>
      <p>
        2.3) Passe den Inline-Stil ("style"-Attribut) des p-Elements so an, dass
        ein "JA" grün und ein "NEIN" rot dargestellt wird.
      </p>
    </div>
  </div>
);
export const Aufgabe3 = () => (
  <div className="Exercise">
    <h2>Aufgabe 3: Eingabefeld</h2>
    <p>
      3.1) In Aufgabe 2 hast du das Event-Objekt genutzt, um `e.target.checked`
      auszulesen. Für Eingabefelder benötigt man hingegen `e.target.value` -
      d.h. den "String"-Wert, der nach Nutzereingabe in dem Feld steht. Lege
      zunächst einen weiteren Hook an, dessen Default-Wert ein leerer String
      ist.
    </p>
    <p>
      3.2) Nun legst du im Input-Element ein zusätzliches Attribut `value` an
      und weist diesem deine State-Variable zu. Achte auf die geschweiften
      Klammern, da es sich um eine JavaScript-Variable und nicht um einen fixen
      String (wie bei id oder type handelt). Schreibe die Variable, ebenfalls in
      geschweiften Klammern in das darunterstehenede p-Element. So wird sie auf
      der Webseite angezeigt.
    </p>
    3.3) Zuletzt benötigst du eine setState-Funktion im onChange-Handler des
    Input-Elements, um auf die Nutzereingabe zu reagieren. Diese soll
    e.target.value in den State schreiben. Teste ob alles funktioniert, auch
    wenn du den Input wieder löschst.
  </div>
);
export const Aufgabe4 = () => (
  <div className="Exercise">
    <h2>Aufgabe 4: Dropdown</h2>
    <p>
      4.1) Öffne die Browser-Konsole zu dieser Webseite ("STRG+SHIFT+7" oder
      rechtsklick auf die Seite und "Inspect" (o.ä)). Wähle jetzt im Dropdown
      verschiedene Werte, wie "links", "mitte", "rechts" aus. Aktuell wird das
      Event in der Konsole geloggt. Passe die onChange-Funktion so an, dass
      statt eines <span className="Emphasis">console.log()</span> die Auswahl in
      den State geschrieben wird (nutze einen neuen useState-Hook).
    </p>
    <p>
      4.2) Etwas unterhalb findest du ein p-Element (id="DynamicText") mit
      statischen Inline-Stilen ("textAlign" und "fontSize"). Ersetzte den String
      von textAlign durch die State-Variable des{" "}
      <span className="Emphasis">useState-Hooks</span> aus 4.1., so dass die
      Auswahl eines Dropdown-Elements in der Zentrierung des Text reflektiert
      wird.
    </p>
    <p>
      4.3) Füge ein weiteres Dropdown (und useState-Hook) hinzu, welches die
      Schriftgrösse des gleichen Text-Elements steuern soll. Implementiere die
      Auswahlschritte 10, 12, 14 und 16. Beachte, dass das Event einen String
      und keine Zahl zurückgibt. Nutze die Funktion{" "}
      <span className="Emphasis">parseInt() </span>
      um Strings zu Zahlen zu konvertieren.
    </p>
  </div>
);
