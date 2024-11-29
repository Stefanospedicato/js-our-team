Our Team
===
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
**Bonus**
- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
## Svolgimento
- Ho creato innanzitutto un html con i vari elementi per iniziare.
- Sul file js ho iniziato dal principio, quindi dalla creazione di una funzione che mi avrebbe permesso di creare diverse card.
- Ho quindi richiamato le proprietà degli oggetti per essere utilizzati poi nel template literal della const carta che ho creato per essere replicata.
- Questa funzione mi crea la carta pronta.
- Ho creato poi la funzione per concatenare tutte le carte create.
- Sono partito da una let carta vuota da popolare con le singole carte.
- Ho quindi creato un ciclo for of per ciclare tutti gli oggi dell'array e inserire le carte create nella let vuota.
- Ho poi richiamato la mia function sul mio array.
- Per il form ho utilizzato l'addEventListener per bloccare innanzitutto l'evento e in funzione ho richiiamato le nuove costanti che mi estraevano i dati scritti nel form.
- Ho quindi creato una const newMember con al suo interno un nuovo oggetto con i dati richiesti.
- Ho pushato questa carta nell'array e richiamato la funzione per le carte totali.