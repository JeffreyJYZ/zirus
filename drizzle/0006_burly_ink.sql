ALTER TABLE "users" ALTER COLUMN "current_game_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "current_game_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DATA TYPE timestamp USING "created_at"::timestamp;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now();