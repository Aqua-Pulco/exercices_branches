## créer une table
CREATE TABLE nomdelatable (
    id SERIAL PRIMARY KEY,
    nomdecolumn1 DATATYPE,
    nomdecolumn2 DATATYPE,
    nomdecolumn3 DATATYPE,
    nomdedecimal_column DECIMAL(10,2)
);

dans cet exemple, l’auto-increment est déjà là.
Où est-il “caché” ?

En PostgreSQL, SERIAL crée une séquence et met sur id un DEFAULT du type nextval('example_table_id_seq').

Donc quand tu fais INSERT INTO example_table (column1) VALUES ('x');, Postgres remplit id tout seul avec le prochain numéro.

Tu peux le voir avec \d example_table (dans psql) : la colonne id aura un default nextval(...).


## declarer une foreign key

CREATE TABLE supplements (
    id BIGSERIAL PRIMARY KEY,
    plate_id BIGINT REFERENCES plates(id),
    supplement TEXT,
    supplement_price DECIMAL(10, 2)
);


## NOT NULL

    Concrètement, NOT NULL ça fait quoi ?

Interdit les trous : tu ne peux pas insérer/mettre à jour une ligne sans valeur pour cette colonne.


Pourquoi c’est utile ?

Ça protège tes données : pas de “commande sans client”, pas de “ligne sans quantité”, etc.

Moins de “if NULL” partout dans tes requêtes/applications.

Pourquoi ça peut freiner au début ?

Si tu n’as pas encore toutes les valeurs quand tu insères, NOT NULL bloque.

----------------------

Petits repères utiles

'' (chaîne vide) ≠ NULL : NOT NULL autorise '' (si tu veux l’interdire, il faudra une contrainte CHECK).

FK NOT NULL ou pas ?

Si l’enfant doit toujours avoir un parent (ex. order_lines.order_id) → NOT NULL.

Si le lien est facultatif (ex. supplement_id) → laisse nullable.

Valeurs par défaut : rassurant avec NOT NULL (ex. quantity DEFAULT 1).

Tu peux enlever NOT NULL plus tard (ALTER COLUMN DROP NOT NULL), mais l’intérêt c’est de protéger, donc décide calmement avant.

Règles simples à appliquer maintenant

Mets NOT NULL sur :

plates.plate, plates.price

orders.client_id

order_lines.order_id, order_lines.plate_id, order_lines.quantity, order_lines.unit_price, order_lines.line_total

Laisse sans NOT NULL (pour l’instant) :

plates.description, plates.img

order_lines.supplement_id, order_lines.option_id

orders.paid_at, orders.delivered_at (se remplissent plus tard)

tout ce dont tu n’es pas sûre