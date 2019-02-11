CREATE TABLE public.accounts (
  id bigserial NOT NULL,
  email varchar(30) NOT NULL,
  password varchar(30) NOT NULL,
  role varchar(20) NOT NULL,
  full_name varchar(50),
  phone_number varchar(11),
  address varchar(100),
  avatar varchar(100),
  active bool DEFAULT true,
  temporary bool DEFAULT true,
  expire_at timestamp,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT accounts_pk PRIMARY KEY (id)
);

CREATE TABLE public.products (
  id bigserial NOT NULL,
  name varchar(128) NOT NULL,
  description varchar(500),
  image varchar(100),
  price bigint,
  quantity bigint,
  manufacturer varchar(100),
  category varchar(100),
  active bool DEFAULT true,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT products_pk PRIMARY KEY (id)
);