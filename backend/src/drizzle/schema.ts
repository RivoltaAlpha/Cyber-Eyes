import { pgTable,serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { url } from 'inspector';

export const users = pgTable('users', {
  user_id:serial('users_id').primaryKey(),
  firstName: varchar('first_name', {length: 50}).notNull(),
  lastName: varchar('last_name', {length: 50}).notNull(),
  username: varchar('username', {length: 50}).notNull().unique(),
  email: varchar('email', {length: 255}).notNull().unique(),
  password: varchar('password', {length: 255}).notNull(),
  contactPhone: varchar('contact_phone', {length: 20}).notNull(),
  address: text('address'),
  image: varchar('image', {length: 255}).notNull(),
  role: varchar('role', {length: 50}).default('user'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const admins = pgTable('admins', {
  id:serial('admins_id').primaryKey(),
  userId:serial('user_id').references(() => users.user_id, {onDelete: "cascade"}).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const pages = pgTable('pages', {
  id:serial('id').primaryKey(),
  title: varchar('title', {length: 255}).notNull(),
  content: text('content'),
  slug: varchar('slug', {length: 255}).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const articles = pgTable('articles', {
  id:serial('id').primaryKey(),
  title: varchar('title', {length: 255}).notNull(),
  content: text('content'),
  authorId:serial('author_id').references(() => users.user_id, {onDelete: "cascade"}).notNull(),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const ctfChallenges = pgTable('ctf_challenges', {
  id:serial('id').primaryKey(),
  title: varchar('title', {length: 255}).notNull(),
  description: text('description'),
  difficulty: varchar('difficulty', {length: 50}).notNull(),
  flag: varchar('flag', {length: 255}).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const cyberSecurityResources = pgTable('cyber_security_resources', {
  id:serial('id').primaryKey(),
  title: varchar('title', {length: 255}).notNull(),
  content: text('content'),
  url: varchar('url', {length: 255}).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const softwareEngineeringResources = pgTable('software_engineering_resources', {
  id:serial('id').primaryKey(),
  title: varchar('title', {length: 255}).notNull(),
  content: text('content'),
  url: varchar('url', {length: 255}).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const readingMaterials = pgTable('reading_materials', {
  id:serial('id').primaryKey(),
  title: varchar('title', {length: 255}).notNull(),
  author: varchar('author', {length: 255}).notNull(),
  type: varchar('type', {length: 50}).notNull(),
  content: text('content'),
  url: varchar('url', {length: 255}).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const contacts = pgTable('contacts', {
  id:serial('id').primaryKey(),
  name: varchar('name', {length: 255}).notNull(),
  email: varchar('email', {length: 255}).notNull(),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow()
});

export const registrations = pgTable('registrations', {
  id:serial('id').primaryKey(),
  userId:serial('user_id').references(() => users.user_id, {onDelete: "cascade"}).notNull(),ventId:serial('event_id'),  // Assuming you have an Events table
  registeredAt: timestamp('registered_at').defaultNow()
});


