"""
bootstrap
"""

from yoyo import step

__depends__ = {}

steps = [
    step("""\
    CREATE TABLE accounts (
                id INTEGER NOT NULL,
                institution VARCHAR(64) NOT NULL,
                name VARCHAR(64) NOT NULL,
                type VARCHAR(32) NOT NULL,
                PRIMARY KEY (id)
    );
         """),
    step("""\
    CREATE TABLE categories (
                id INTEGER NOT NULL,
                name VARCHAR(255) NOT NULL,
                parent_id INTEGER,
                type VARCHAR(16) NOT NULL,
                PRIMARY KEY (id),
                FOREIGN KEY(parent_id) REFERENCES categories (id)
    );
         """),
    step("""\
    CREATE TABLE transactions (
                id INTEGER NOT NULL,
                date DATE NOT NULL,
                info VARCHAR(255),
                payee VARCHAR(255),
                memo TEXT,
                amount FLOAT NOT NULL,
                category_id INTEGER NOT NULL,
                transaction_type VARCHAR NOT NULL,
                account_id INTEGER,
                checksum VARCHAR(64) NOT NULL,
                PRIMARY KEY (id),
                FOREIGN KEY(category_id) REFERENCES categories (id),
                FOREIGN KEY(account_id) REFERENCES accounts (id)
    );
         """),
    step("""\
    CREATE TABLE account_balances (
                id INTEGER NOT NULL,
                account_id INTEGER NOT NULL,
                date DATE NOT NULL,
                balance FLOAT NOT NULL,
                PRIMARY KEY (id),
                FOREIGN KEY(account_id) REFERENCES accounts (id)
    );
    """)
]
