import "./app.css";
import { useState } from "react";
import { Aufgabe1, Aufgabe2, Aufgabe3 } from "./static/ExText";

function App() {
  const [state, setState] = useState("defaultWert"); // Beispiel für einen "useState-Hook".
  console.log(state);
  // Du benötigst für jede Aufgabe einen weiteren "useState-Hook", welchen du am besten hier platzierst. Achte darauf, einen passenden Datentype als "default Wert" anzugeben.

  return (
    <div className="App">
      <div className="App-header "> Übung WID 3 - React State</div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 1----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe1 />
        <div className="WrapperHorizontal">
          <div className="Anzeige"> 0 </div>{" "}
          {/* Ersetze 0 mit einer State-Variablen aus deinem Hook. Achte auf die geschweiften Klammern! */}
          <button
            className="Button"
            onClick={
              () =>
                console.log(
                  "Ich triggere das State update"
                ) /*Diesen Handler willst du anpassen und console.log durch deine setState Funktion aus dem Hook ersetzen. Schreibe in die Klammern den Namen deiner State-Variable und +1, damit der jeweils aktuelle Wert um 1 erhöht wird. */
            }
          >
            Like
          </button>
          {/*
           * Hier fügst du einen weiteren Button hinzu.
           * Setze das Attribut className="Button" um das vordefinierte Styling für den Button zu übernehmen.
           *
           */}
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 2----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}

      <div className="ExerciseContainer">
        <Aufgabe2 />
        <div className="WrapperHorizontal">
          <input
            id="Checkbox"
            type="checkbox"
            onClick={
              (e) =>
                console.log(
                  e.target.checked
                ) /* Hier brauchst du wieder eine setState Funktion. Sie kann e.target.checked als Argument bekommen und dies in State schreiben. */
            }
          />
          <div>
            {/*
             * Im P-Element brauchst du zweimal einen Ternary-Operator (Erinnerung: Bedingung ? Wenn true : Wenn false).
             * Als Bedingung benutzt du deine State-Variable (vom Typ boolean)
             * Schreibe das Element dann so um, dass bei true die eine Farbe, und bei false die andere Farbe benutzt wird.
             * Gleiches machst du für den Text.
             */}
            <p style={{ color: "#007cc3" /*  oder "#ff00ff" */ }}>
              {"JA" /*  oder "NEIN" */}
            </p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 3----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}

      <div className="ExerciseContainer">
        <Aufgabe3 />
        <div className="WrapperHorizontal">
          {/*
           * Öffne als erstes die Browser-Konsole und überprüfe was der Event Handler gerade loggt - d.h. was der Wert ist, wenn du das Dropdown benutzt.
           * Passe den Listener an und nutze eine setState Funktion um "value" in State zu speichern.
           *
           */}
          <select
            className="Dropdown"
            onChange={(event) => {
              console.log(
                "event.target.value ist: ",
                event.target.value,
                " der Datentype ist: ",
                typeof event.target.value
              );
            }}
          >
            <option value="left">Links</option>
            <option value="center">Mittig</option>
            <option value="right">Rechts</option>
          </select>
          {/*
           * Hier implementierst du ein zweites Dropdown, welches die Schriftgrösse ändern soll. Gib Werte (value) für 10, 12, 14, 16 vor.
           * Du brauchst einen weiteren useState-Hook, der das Ergebnis der Auswahl als Zahl speichert.
           * Achtung - der Handler gibt dir die Zahl als Text (String) zurück. Konvertertiere diese mit `parseInt()`zu einer Zahl ("number"). Das kannst du direkt in der setState Funktion tun.
           */}

          <div>
            <p
              id="DynamicText"
              style={
                {
                  textAlign: "center",
                  fontSize: 10,
                } /* Diese statischen Werte möchtest du an "State" binden. Überprüfe ob deine Interaktionen den Text verändert  */
              }
            >
              Text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
