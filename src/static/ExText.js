export const Aufgabe1 = () => (
  <div className="Exercise">
    <h2>Aufgabe 1: Counter</h2>
    <p>
      1.1) Passe den Code so an, dass mit jedem weiteren Klick auf den Button
      der Counter um einen ganzzahligen Schritt nach oben zählt. Dazu benötigst
      du einen <span className="Emphasis">useState-Hook</span>, mit initialem
      Wert von 0 (Datentyp number).
    </p>
    <p>
      1.2) Füge einen zweiten Button hinzu. Dieser soll den Wert des Counters
      zurück auf 0 setzen. Nutze den gleichen{" "}
      <span className="Emphasis">useState-Hook</span> wie in 1.1. und übergebe
      die Zahl 0.
    </p>
  </div>
);
export const Aufgabe2 = () => (
  <div className="Exercise">
    <h2>Aufgabe 2: Checkbox</h2>
    <div>
      <p>
        2.1) Passe den Code so an, dass ein Klick auf die Checkbox ein
        State-Update erzeugt (Datentyp: boolean) welches den Zustand der
        Checkbox (aktiv, nicht aktiv) reflektiert.
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
    <h2>Aufgabe 3: Dropdown</h2>
    <p>
      3.1) Öffne die Browser-Konsole zu dieser Webseite ("STRG+SHIFT+7" oder
      rechtsklick auf die Seite und "Inspect" (o.ä)). Wähle jetzt im Dropdown
      verschiedene Werte, wie "links", "mitte", "rechts" aus. Aktuell wird das
      Event in der Konsole geloggt. Passe die onChange-Funktion so an, dass
      statt eines <span className="Emphasis">console.log()</span> die Auswahl in
      den State geschrieben wird (nutze einen neuen useState-Hook).
    </p>
    <p>
      3.2) Etwas unterhalb findest du ein p-Element (id="DynamicText") mit
      statischen Inline-Stilen ("textAlign" und "fontSize"). Ersetzte den String
      von textAlign durch die State-Variable des{" "}
      <span className="Emphasis">useState-Hooks</span> aus 3.1., so dass die
      Auswahl eines Dropdown-Elements in der Zentrierung des Text reflektiert
      wird.
    </p>
    <p>
      3.3) Füge ein weiteres Dropdown (und useState-Hook) hinzu, welches die
      Schriftgrösse des gleichen Text-Elements steuern soll. Implementiere die
      Auswahlschritte 10, 12, 14 und 16. Beachte, dass das Event einen String
      und keine Zahl zurückgibt. Nutze die Funktion{" "}
      <span className="Emphasis">parseInt() </span>
      um Strings zu Zahlen zu konvertieren.
    </p>
  </div>
);
