# TP UML Imprimante-3D

## Constat

- nouveau, jamais eu de réservation encore (On ne sait trop encore comment le cas est géré)
- Voir avec Thomas
- Fermer à clé dans le FabLab (avoir quelqu'un pour l'ouvrir)
- filament (soit tu utilises et tu en remets, soit tu ramènes tiens).
- L'imprimante ne bouge pas de l'école (comme un écran ou une multiprise)
- il y en a qu'une suele (comme l'appereil photo)
- ça coûte chère.
- Avoir un minimum de connaissance.
- Imprime quand on est pas là ?
- l'imprimante n'est pas "connectable", on enregistre notre model sur une carte SD qu'on insère dans l'imprimante, puis on sélectionne notre model

### Diagrame de séquence de l'état actuelle

```mermaid
sequenceDiagram
    actor Student
    actor Thomas
    participant Peda as Equipe pédagogique

    Student->>+Thomas: est-ce que Thomas est là ?
    activate Thomas
    alt présent
        Thomas-->>-Student: présent
        Student->>+Thomas: l'imprimante disponible mardi ?
        activate Thomas
        alt disponible
            Thomas-->>-Student: Oui
        else non disponible
            Thomas-->>-Student: Non regarde un autre jour
        end
    else absent
        Thomas-->>-Student: absent
        Student->>+Peda: imprimante disponible ?
        activate Peda
        alt disponible
            Peda-->>-Student: Oui
            Student->>+Peda: Ouvrez moi le fabLab stp
            Peda-->>-Student: Oui
        else non disponible
            Peda-->>-Student: Non regarde un autre jour
        end
    end
```