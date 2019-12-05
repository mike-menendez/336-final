CREATE TABLE items (
    item_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    p_name TEXT,
    cat TEXT,
    price FLOAT,
    img TEXT
);

CREATE TABLE users(
    user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    uname VARCHAR(50) UNIQUE,
    pass TEXT
);

CREATE TABLE order_hist(
    item_id INTEGER REFERENCES items(item_id),
    quantity INTEGER
);

INSERT INTO items (p_name, cat, price, img) VALUES ("item1", "cat1", "1.00", "img/1.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item2", "cat2", "2.00", "img/2.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item3", "cat2", "2.00", "img/3.jpg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item4", "cat1", "1.00", "img/4.jpeg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item5", "cat2", "2.00", "img/5.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item6", "cat2", "2.00", "img/6.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item7", "cat1", "1.00", "img/7.jpg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item8", "cat2", "2.00", "img/8.jpg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item9", "cat2", "2.00", "img/9.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item10", "cat1", "1.00", "img/10.jpeg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item11", "cat2", "2.00", "img/11.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item12", "cat2", "2.00", "img/12.jpeg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item13", "cat2", "2.00", "img/13.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item14", "cat1", "1.00", "img/14.jpeg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item15", "cat2", "2.00", "img/15.jpeg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item16", "cat1", "1.00", "img/16.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item17", "cat2", "2.00", "img/17.png");

INSERT INTO items (p_name, cat, price, img) VALUES ("item18", "cat2", "2.00", "img/18.jpg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item19", "cat1", "1.00", "img/19.jpeg");

INSERT INTO items (p_name, cat, price, img) VALUES ("item20", "cat2", "2.00", "img/20.png");

INSERT INTO users (uname, pass) VALUES ("admin", "admin");

INSERT INTO order_hist (item_id, quantity) VALUES ("2", "10");

INSERT INTO order_hist (item_id, quantity) VALUES ("6", "9");

INSERT INTO order_hist (item_id, quantity) VALUES ("4", "20");