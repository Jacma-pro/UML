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

### Diagrame de séquence de l'organisation

```mermaid
sequenceDiagram
    actor Student as Élève
    participant Calendar as Calendrier de disponibilité 
    actor User as Utilisateurs de l'imprimante
    actor Peda as Equipe pédagogique

    Student->>+Calendar: Dispo ce jour ?
    activate Calendar
    alt libre
        Calendar-->>-Student: Oui
    else occupé
        Calendar-->>-Student: Non, regarde un autre jour
    end

    Student->>+Calendar: Utilisateurs de l'imprimante présent ?
    activate Calendar
    alt Utilisateurs présent
        Calendar-->>-Student: Oui, contacte le
    else occupé
        Calendar-->>-Student: Non, regarde un autre jour
    end

    Student->>+Peda: Quelqu'un peut ouvrir le FabLab svp ?
    Peda-->>-Student: FabLab ouvert 🔓

    Student->>+User: Je voudrais imprimmer ça 🦤 possible ?
    activate User
    alt possible
        User-->>-Student: Oui parfait, let's go !
    else Pas possible
        User-->>-Student: Non, corrige ça à ton model
    end

    User->>+Student: Imprimme 🦤
    Student->>+Peda: Fin, possible de fermer le FabLab svp
    Peda-->>-Student: FabLab fermer
```


### Simplification avec un ajout de badge pour le club imprimante

```mermaid
sequenceDiagram
    actor student as Élève
    actor club as Club imprimante
    actor Peda as Équipe Peda

    student->>+club: je peux rejoindre le club ?
    club->>-student: es-tu formé à l'imprimante ?
    activate club
    alt l'élève est formé
        student->>+club: Oui, tenez la preuve que je suis formé
        club-->>-student: Bienvnue au club !
    else l'élève n'est pas formé
        student->>+club: Non, désolé 😔
        club-->>-student: frome toi alors ! 😡
        student->>+student: se forme
    end
    club->>+Peda: Hello, on veut un badge pour le nouvel élève du club svp
    Peda-->>-student: donne un nouveau badge attitré
```


### Une fois que l'élève à un badge

```mermaid
sequenceDiagram
    actor student as Élève
    participant calendar as Calendrier de diponibilité
    participant FabLab
    participant server

    student->>+calendar: imprimante dispo ce jour ?
    activate calendar
    alt disponible
        calendar-->>-student: Oui, c'est libre
        student->>+calendar: Je réserve
    else Pas disponible
        calendar-->>-student: Non, regarde un autre jour
        student->>+student: réserve un jour disponible
    end

    student->>+FabLab: ouvre le FabLab avec son badge
    FabLab->>+server: est-ce que Élève à le droit d'ouvrir
    activate server
    activate FabLab
    alt autorisé
        server-->>-FabLab: il est autorisé
        FabLab-->>-student: Ouvre la porte
    else non autorisé
        server-->>-FabLab: il n'a pas le droit
        FabLab-->>-student: Accès refusé
    end
    FabLab->>+FabLab: Bloqué dès que fermer
```
