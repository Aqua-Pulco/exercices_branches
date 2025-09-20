
CREATE TABLE plates (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    plate_name TEXT,
    description TEXT,
    img TEXT,
    price DECIMAL(10,2)
);

CREATE TABLE plate_options (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    option TEXT
);

CREATE TABLE clients (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    client_name TEXT,
    adress TEXT,
    phone_number TEXT
);


CREATE TABLE order_status (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    status TEXT
);

CREATE TABLE supplements (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    plate_id BIGINT REFERENCES plates(id),
    supplement TEXT,
    supplement_price DECIMAL(10, 2)
);

CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    client_id BIGINT REFERENCES clients(id) NOT NULL,
    status_id BIGINT REFERENCES status(id) NOT NULL,
    total_ht DECIMAL(10, 2),
    total_ttc DECIMAL(10, 2),
    paid_at TIMESTAMP
);

CREATE TABLE order_lines (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES clients(id) NOT NULL,
    plate_id BIGINT REFERENCES status(id) NOT NULL,
    quantity INT NOT NULL,
    supplement_id BIGINT REFERENCES supplements(id),
    option_id BIGINT REFERENCES option(id),
    line_total DECIMAL(10, 2)
);