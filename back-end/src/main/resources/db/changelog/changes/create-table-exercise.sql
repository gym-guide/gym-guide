--liquibase formatted sql
--changeset <litvik>:<create-table-exercise>
CREATE TABLE IF NOT EXISTS exercises
(
    id bigint auto_increment,
    title varchar(255) not null,
    description varchar(255) not null,
    category varchar(255) not null,
    sub-category varchar(255) not null,
    image varchar(255) not null,
    gif varchar(255) not null,
    CONSTRAINT exercises PRIMARY KEY (id),
    );
--rollback DROP TABLE exercise;