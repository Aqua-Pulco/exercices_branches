# Plan de travail 

L’“ordre logique” n’est pas une superstition : il correspond à **la façon dont une base garantit les liens** entre tes tables.

## L’idée en une image

Une **clé étrangère (FK)**, c’est une **promesse** : “la valeur que je stocke ici **existe** là-bas (dans la clé primaire du parent)”.
Si tu crées l’enfant **avant** le parent, tu demandes à la base de vérifier une promesse… **vers quelque chose qui n’existe pas encore**. Elle ne peut pas. D’où l’ordre.

## Dit autrement (maison, dictionnaire, Excel)

* **Maison** : on coule les **fondations** avant de monter les **murs** qui s’appuient dessus. Le parent = fondation, l’enfant = mur.
* **Dictionnaire** : tu ne peux pas mettre une **référence** (“voir page 42”) si la **page 42** n’existe pas encore.
* **Excel** : l’onglet *Order\_lines* a une colonne `order_id` qui “pointe” *Orders*. Pour vérifier que `order_id=101` existe, il faut que la ligne *Orders(101)* soit déjà là.

## Ce que la base fait réellement

* Lorsqu’une FK est définie, la base **vérifie** :

  1. qu’au moment de **créer la contrainte**, la table parent **existe** et possède bien la **PK** référencée ;
  2. qu’à **chaque insertion/modification** chez l’enfant, la valeur existe **déjà** dans le parent.
* Donc, si tu crées d’abord les **parents**, puis les **enfants**, tu permets à la base de **tenir sa promesse** d’intégrité (*référentielle*).

## Pourquoi finir par les tables de jonction (N\:N) ?

Une table de jonction porte **deux** FKs (vers A et vers B).
Elle ne peut exister **proprement** que lorsque **A et B existent déjà**. C’est l’étape “murs intérieurs” après les murs porteurs.

## Et pour les données (inserts) ?

Même logique :

* Tu **inserts** d’abord dans les **parents**, puis dans les **enfants** qui pointent ces parents ; sinon, la base refuse (“référence introuvable”).
* Si tu supprimes, c’est l’inverse : **d’abord** les enfants (ou `ON DELETE CASCADE` si tu l’as décidé), **ensuite** les parents.

## Cas particuliers (pour ne pas paniquer)

* **Auto-référence** (une table qui pointe elle-même, ex. `employees.manager_id`) : tu crées la table **sans** la contrainte FK, puis tu **ajoutes** la contrainte après, ou tu laisses `manager_id` **NULL** au début et tu complètes ensuite.
* **Cycles** rares (A ↔ B) : on crée A et B **sans** FKs, puis on **ajoute** les FKs après création des deux.

## La règle retenue

> **Crée d’abord ce qui est référencé (parents), puis ce qui référence (enfants).**
> **La table qui porte la FK vient après.**
> Les tables de jonction (N\:N) viennent **en dernier** car elles portent **deux** FKs.

Si tu veux t’entraîner, formule pour ton schéma :

* “Qui **référence** qui ?” → l’**enfant** vient **après**.
* “Qui est **référencé** par plusieurs autres ?” → c’est un **parent** → il vient **avant**.



## Étape 1 — Créer les tables dans un ordre logique (du parent vers l’enfant)

### Définitions rapides

* **Table indépendante** : n’a **aucune** clé étrangère (FK) vers d’autres tables.
* **Parent** (côté 1) : table **référencée** par une FK ailleurs.
* **Enfant** (côté N) : table qui **porte** une FK vers un parent.
  *Boussole : qui a la FK = **enfant**.*

### Règle d’ordre

1. Crée **d’abord** toutes les **indépendantes**.
2. Puis les **parents** qui ne dépendent plus de rien.
3. Puis les **enfants** qui portent des FKs vers ce qui existe déjà.
4. Termine par les **tables de jonction** (N\:N) qui portent **deux FKs**.

### Questions à te poser (et à remplir pour TON schéma)

* **Q1.1** Quelles tables sont **indépendantes** ?
* **Q1.2** Parmi elles, lesquelles seront aussi des **parents** (référencées plus tard) ?
* **Q1.3** En suivant Q1.1 → Q1.2, **dans quel ordre** vas-tu créer **toutes** les tables ?
* **Q1.4** Quelles tables sont **enfants** et **de qui** (qui portent quelles FKs) ?

> Mantra que tu aimes :
> **Dans un 1\:N, c’est toujours le côté N qui porte la clé étrangère. Le côté 1 ne liste rien. Il n’y a pas de “colonne tableau” dans le parent. L’accumulation est implicite : plusieurs lignes dans la table enfant portent la même FK.**

---

## Pendant la création de chaque table (checklist par table)

**Règles :**

* Définis la **clé primaire (PK)** (souvent `id`).
* Pour **chaque FK**, choisis le **même type** que la **PK** visée (ex. BIGINT ↔ BIGINT).
* Pose la **contrainte FK** (référence explicite).
* Marque en **`NOT NULL`** ce qui est **obligatoire** métier (ex. une FK qui ne peut jamais être vide).
* (Optionnel utile) Ajoute une **contrainte d’unicité** si ta règle métier l’exige (ex. empêcher des doublons réels).
* (Optionnel utile) Prévois des **valeurs par défaut** sensées (ex. timestamps à la création).

**Questions à te poser pour CHAQUE table :**

* **Q2.1** Quelle est la **PK** ?
* **Q2.2** Y a-t-il des **FK** ? Si oui, vers quelles tables et de **même type** ?
* **Q2.3** Quelles colonnes sont **`NOT NULL`** (obligatoires) ? Lesquelles peuvent rester **NULL** (facultatives) ?
* **Q2.4** Y a-t-il une **contrainte d’unicité** à poser (métier) ?
* **Q2.5** Faut-il une **valeur par défaut** (ex. `created_at`) ?
* **Q2.6** Le **nommage** est-il cohérent (`snake_case`, noms de FK clairs comme `client_id`) ?
* **Q2.7** Les **types** sont-ils adaptés (prix en `decimal(10,2)`, texte en `text`, timestamps en `datetime`) ?

---


