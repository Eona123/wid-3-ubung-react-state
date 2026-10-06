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
        Hier wurde bereits eine Checkbox definiert. Der Event-Handler ist
        onChange (onClick würde auch funktionieren). Dieser liest das Event
        Objekt (hier "e" genannt) und schreibt den Wert von "e.target.checked"
        in die Konsole. Dieser Wert enhält die Information, ob die Checkbox
        aktiv oder inaktiv ist. Wenn du die Checkbox an- oder abwählst, siehst
        du, das HTML bereits für beide Zustände ein passendes Symbol anzeigt.
        Meist wollen wir aber auf den Zustand der Checkbox reagieren (z.B. etwas
        Einblenden). Dazu müssen wir den Zustand an React binden.
      </p>
      <p>
        2.1) Lege einen neuen useState-Hook an, ähnlich zu dem, der "counter"
        und "setCounter" enthält. Benenne die State-Variable und
        setState-Funktion passend. Setze den Default-Wert auf true (keine
        Anführungszeichen, es ist ein boolscher Wert).
      </p>
      <p>
        2.2) Ersetze das{" "}
        <span className="Emphasis">console.log(e.target.checked)</span> durch
        deine setStateFunktion, also z.B. setCheckbox(e.target.checked). Damit
        erzeugt eine Interaktion mit der Checkbox eine Änderung von State.
      </p>
      <p>
        2.3) Füge dem Input-Element ein Attribut{" "}
        <span className="Emphasis">checked={}</span> hinzu. In die
        {}-Klammern schreibst du deine State-Variable. Damit machst du aus einem
        "unkontrollierten" HTML-Element ein, von React State, "kontrolliertes"
        Element. Die Checkbox reflektiert jetzt immer den boolschen Zustand von
        State (checked=true oder checked=false). Teste, ob das soweit
        funktioniert.
      </p>
      <p>
        2.4) Etwas unterhalb siehst du ein p-Element mit einem Inline-Stil für
        die Farbe, sowie einem Text. Beide sollen auf den Zustand der Checkbox
        reagieren und die Farbe, bzw. den Text, ändern. Hierfür eignet sich der{" "}
        ternäre Operator. Syntax-Erinnerung:{" "}
        <span className="Emphasis">Bedingung ? wennWahr : wennFalsch;</span>.
        Deine Bedingung ist hier die State-Variable (mit Wert true oder false).
        Schreibe anstatt des Textes "JA" den Operator mit "JA" (für wennWahr)
        bzw. "NEIN" (für wennFalsch). Teste, ob ein Klick auf die Checkbox zu
        einer Änderung des Textes führt.
      </p>
      <p>
        2.5) Passe nun den Inline-Stil ("style"-Attribut) des p-Elements so an,
        dass auch die Textfarbe auf die Checkbox reagiert.
      </p>
    </div>
  </div>
);
export const Aufgabe3 = () => (
  <div className="Exercise">
    <h2>Aufgabe 3: Eingabefeld</h2>
    <p>
      3.1) In Aufgabe 2 hast du das Event-Objekt genutzt, um{" "}
      <span className="Emphasis">e.target.checked </span> auszulesen. Für
      Eingabefelder benötigt man hingegen{" "}
      <span className="Emphasis">e.target.value</span> - d.h. den "String"-Wert,
      der nach Nutzereingabe in dem Feld steht. Lege zunächst einen weiteren
      Hook an, dessen Default-Wert ein leerer String ("") ist.
    </p>
    <p>
      3.2) Nun legst du im Input-Element ein zusätzliches Attribut{" "}
      <span className="Emphasis">value</span> an und weist diesem deine
      State-Variable zu. Achte auf die geschweiften Klammern, da es sich um eine
      JavaScript-Variable und nicht um einen fixen String (wie bei id oder type
      handelt). Schreibe die State-Variable, auch in geschweiften Klammern in
      das darunterstehenede p-Element. So wird sie auf der Webseite angezeigt.
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
      den State geschrieben wird (nutze einen neuen useState-Hook). Denke auch
      daran, wieder ein value-Attribut zu vergeben.
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
      um Strings zu Zahlen zu konvertieren. Syntax Beispiel: parseInt("2")
      konvertiert zur Zahl 2.
    </p>
  </div>
);
