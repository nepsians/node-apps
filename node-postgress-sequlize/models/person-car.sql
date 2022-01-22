create table person {
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    email VARCHAR(100),
    date_of_birth DATE NOT NULL,
    country_of_birth VARCHAR(50) NOT NULL,
    car_id BIGINT REFERENCES car (id),
    UNIQUE(car_id)
};

create table car {
    id BIGSERIAL NOT NULL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price NUMERIC(19, 2) NOT NULL
};

insert into person (first_name, last_name, gender, email, date_of_birth, country_of_birth) values ('Nihal', 'Shrestha', 'Male', 'nihal.nepsian@gmail.com', '1997-04-19', 'Lalitpur');
insert into person (first_name, last_name, gender, email, date_of_birth, country_of_birth) values ('Ram', 'Shrestha', 'Male', 'ram@gmail.com', '1997-04-19', 'Lalitpur');
insert into person (first_name, last_name, gender, email, date_of_birth, country_of_birth) values ('Sita', 'Shrestha', 'Female', NULL, '1997-04-19', 'Lalitpur');

insert into car (make, model, price) values ('Hyundai', 'P20', '2000000');
insert into car (make, model, price) values ('Land Rover', 'Sterling', '87665.38');