CREATE TABLE "games" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"user_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	CONSTRAINT "games_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "games" ADD CONSTRAINT "games_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;