-- Script for tables creating

BEGIN;


CREATE TABLE IF NOT EXISTS public.address
(
    id serial NOT NULL,
    country character varying COLLATE pg_catalog."default" NOT NULL,
    city character varying COLLATE pg_catalog."default" NOT NULL,
    street character varying COLLATE pg_catalog."default",
    "houseNumber" integer,
    "flatNumber" integer,
    CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.advertisement
(
    id serial NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default",
    price integer NOT NULL,
    "saleStatus" boolean NOT NULL DEFAULT false,
    photo character varying COLLATE pg_catalog."default",
    "categoryId" integer,
    "vendorId" integer,
    "buyerId" integer,
    CONSTRAINT "PK_c8486834e5ef704ec05b7564d89" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.category
(
    id serial NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.contact
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    post character varying COLLATE pg_catalog."default" NOT NULL,
    photo character varying COLLATE pg_catalog."default",
    about character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.faq
(
    id serial NOT NULL,
    question character varying COLLATE pg_catalog."default" NOT NULL,
    answer character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_d6f5a52b1a96dd8d0591f9fbc47" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.question
(
    id serial NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    answer character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.questions_category
(
    id serial NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_6004e23393f2a8efe414480b75d" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.questions_category_questions_question
(
    "questionsCategoryId" integer NOT NULL,
    "questionId" integer NOT NULL,
    CONSTRAINT "PK_3e57ec1d3102412f39dc14930cc" PRIMARY KEY ("questionsCategoryId", "questionId")
);

CREATE TABLE IF NOT EXISTS public.stored_file
(
    id serial NOT NULL,
    filename character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_e140967af84027b493a3ff04fbb" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."user"
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default",
    surname character varying COLLATE pg_catalog."default",
    "phoneNumber" character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    "registrationDate" timestamp without time zone NOT NULL DEFAULT now(),
    photo character varying COLLATE pg_catalog."default",
    "addressId" integer,
    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id),
    CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId")
);

CREATE TABLE IF NOT EXISTS public.user_wish_list_advertisement
(
    "userId" integer NOT NULL,
    "advertisementId" integer NOT NULL,
    CONSTRAINT "PK_b954a6d0f183b0ad052d680e1ce" PRIMARY KEY ("userId", "advertisementId")
);

ALTER TABLE IF EXISTS public.advertisement
    ADD CONSTRAINT "FK_2c4e765b44a3a1e4fb2fd883894" FOREIGN KEY ("vendorId")
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.advertisement
    ADD CONSTRAINT "FK_3a6b9e28fee630192f338b174a6" FOREIGN KEY ("categoryId")
    REFERENCES public.category (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.advertisement
    ADD CONSTRAINT "FK_e211f2be72a0c86077330f5ef7b" FOREIGN KEY ("buyerId")
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.questions_category_questions_question
    ADD CONSTRAINT "FK_1d846857772876949a0b4cd8246" FOREIGN KEY ("questionId")
    REFERENCES public.question (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
CREATE INDEX IF NOT EXISTS "IDX_1d846857772876949a0b4cd824"
    ON public.questions_category_questions_question("questionId");


ALTER TABLE IF EXISTS public.questions_category_questions_question
    ADD CONSTRAINT "FK_c83e0cfd39b62c9b18d7bc57adc" FOREIGN KEY ("questionsCategoryId")
    REFERENCES public.questions_category (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS "IDX_c83e0cfd39b62c9b18d7bc57ad"
    ON public.questions_category_questions_question("questionsCategoryId");


ALTER TABLE IF EXISTS public."user"
    ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId")
    REFERENCES public.address (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS "REL_217ba147c5de6c107f2fa7fa27"
    ON public."user"("addressId");


ALTER TABLE IF EXISTS public.user_wish_list_advertisement
    ADD CONSTRAINT "FK_3ee52453ad5a3dd59f44d2546c9" FOREIGN KEY ("userId")
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS "IDX_3ee52453ad5a3dd59f44d2546c"
    ON public.user_wish_list_advertisement("userId");


ALTER TABLE IF EXISTS public.user_wish_list_advertisement
    ADD CONSTRAINT "FK_4fe057c497ce2822e14f9261e15" FOREIGN KEY ("advertisementId")
    REFERENCES public.advertisement (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
CREATE INDEX IF NOT EXISTS "IDX_4fe057c497ce2822e14f9261e1"
    ON public.user_wish_list_advertisement("advertisementId");

END;