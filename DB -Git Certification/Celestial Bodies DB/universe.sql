--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: favourite_planets; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.favourite_planets (
    favourite_planets_id integer NOT NULL,
    name character varying NOT NULL,
    grade integer NOT NULL,
    description text
);


ALTER TABLE public.favourite_planets OWNER TO freecodecamp;

--
-- Name: favourite_planets_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.favourite_planets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favourite_planets_id_seq OWNER TO freecodecamp;

--
-- Name: favourite_planets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.favourite_planets_id_seq OWNED BY public.favourite_planets.favourite_planets_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying NOT NULL,
    description character varying(30) NOT NULL,
    size integer,
    shape character varying(30)
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying NOT NULL,
    haswater boolean NOT NULL,
    isfromearth boolean,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying NOT NULL,
    description character varying(30) NOT NULL,
    size numeric(8,2),
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying NOT NULL,
    description character varying(30) NOT NULL,
    size integer,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: favourite_planets favourite_planets_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.favourite_planets ALTER COLUMN favourite_planets_id SET DEFAULT nextval('public.favourite_planets_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: favourite_planets; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.favourite_planets VALUES (1, 'Tiearra', 10, 'no me puedo mudar');
INSERT INTO public.favourite_planets VALUES (2, 'Marte', 8, 'con suerte me mudo');
INSERT INTO public.favourite_planets VALUES (3, 'Urano', 9, 'obvous reasons');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 'nuestra via lactea', 99999, 'Warped');
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 'AKA Messier', 890098, 'Spiral');
INSERT INTO public.galaxy VALUES (3, 'MD60-ud1', 'una de las mas pequeñas', 15000, '?');
INSERT INTO public.galaxy VALUES (4, 'AM-250', 'el que pega con la rodilla', 99999, 'Warped');
INSERT INTO public.galaxy VALUES (5, 'as-24', 'asdasdasd', 890098, 'Spiral');
INSERT INTO public.galaxy VALUES (6, 'MD25-ud1', 'otras', 15000, '?');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', false, true, 3);
INSERT INTO public.moon VALUES (2, 'Deimos', false, false, 4);
INSERT INTO public.moon VALUES (3, 'Phobos', false, false, 4);
INSERT INTO public.moon VALUES (4, 'Adrasteas', false, true, 5);
INSERT INTO public.moon VALUES (5, 'Ananke', false, false, 5);
INSERT INTO public.moon VALUES (6, 'Carpo', false, false, 5);
INSERT INTO public.moon VALUES (7, 'Elara', false, false, 5);
INSERT INTO public.moon VALUES (8, 'Europa', false, false, 5);
INSERT INTO public.moon VALUES (9, 'Atlas', false, true, 6);
INSERT INTO public.moon VALUES (10, 'Calypso', false, false, 6);
INSERT INTO public.moon VALUES (11, 'Dione', false, false, 6);
INSERT INTO public.moon VALUES (12, 'Janus', false, false, 6);
INSERT INTO public.moon VALUES (13, 'Pan', false, false, 6);
INSERT INTO public.moon VALUES (14, 'Ariel', false, true, 7);
INSERT INTO public.moon VALUES (15, 'Caliban', false, false, 7);
INSERT INTO public.moon VALUES (16, 'Juliet', false, false, 7);
INSERT INTO public.moon VALUES (17, 'Puck', false, false, 7);
INSERT INTO public.moon VALUES (18, 'Sycorax', false, false, 7);
INSERT INTO public.moon VALUES (19, 'Despina', false, true, 8);
INSERT INTO public.moon VALUES (20, 'Larissa', false, false, 8);
INSERT INTO public.moon VALUES (21, 'Nereid', false, false, 8);
INSERT INTO public.moon VALUES (22, 'Proteus', false, false, 8);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Mercurio', 'primero', 4878.00, 1);
INSERT INTO public.planet VALUES (2, 'Venus', 'Segundo', 12100.00, 1);
INSERT INTO public.planet VALUES (3, 'Tierra', 'tercero', 12756.00, 1);
INSERT INTO public.planet VALUES (4, 'Marte', 'cuarto', 6787.00, 1);
INSERT INTO public.planet VALUES (5, 'Jupiter', 'quinto', 142984.00, 1);
INSERT INTO public.planet VALUES (6, 'Saturno', 'sexto', 120536.00, 1);
INSERT INTO public.planet VALUES (7, 'Urano', 'septimo', 51108.00, 1);
INSERT INTO public.planet VALUES (8, 'Neptuno', 'octavo', 49538.00, 1);
INSERT INTO public.planet VALUES (9, 'Ceres', 'enano', 952.00, 1);
INSERT INTO public.planet VALUES (10, 'Pluton', 'Enano', 2370.00, 1);
INSERT INTO public.planet VALUES (11, 'Haumea', 'enano', 1300.00, 1);
INSERT INTO public.planet VALUES (12, 'Makemake', 'enano', 1420.00, 1);
INSERT INTO public.planet VALUES (13, 'Eris', 'enano', 2326.00, 1);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'SOL', 'el que te alumbra', 15, 1);
INSERT INTO public.star VALUES (2, 'Alpha Centaur', 'tambien de la lechosa', 10, 1);
INSERT INTO public.star VALUES (3, 'Lynx', 'absolunto', 5115, 2);
INSERT INTO public.star VALUES (4, 'Eridanus', 'Acamar', 10, 3);
INSERT INTO public.star VALUES (5, 'Casiopaia', 'Archird', 10, 2);
INSERT INTO public.star VALUES (6, 'Scorpius', 'Acrab', 12, 1);


--
-- Name: favourite_planets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.favourite_planets_id_seq', 3, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 22, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 13, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: favourite_planets favourite_planets_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.favourite_planets
    ADD CONSTRAINT favourite_planets_name_key UNIQUE (name);


--
-- Name: favourite_planets favourite_planets_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.favourite_planets
    ADD CONSTRAINT favourite_planets_pkey PRIMARY KEY (favourite_planets_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: star galaxy_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT galaxy_id FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: moon planet_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT planet_id FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet star_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT star_id FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- PostgreSQL database dump complete
--

