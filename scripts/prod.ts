import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding FINTEENS database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert financial courses
    const courses = await db
      .insert(schema.courses)
      .values([
        { title: "Personal Budgeting 101", imageSrc: "/budget.svg" },
        { title: "Investing Basics for Teens", imageSrc: "/invest.svg" },
        { title: "Cryptocurrency & Blockchain", imageSrc: "/crypto.svg" },
        { title: "Financial Independence & FIRE", imageSrc: "/fire.svg" },
        { title: "Smart Money Management", imageSrc: "/money.svg" },
      ])
      .returning();

    // For each course, insert units (6 levels)
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Level 1: Foundations",
            description: `Master the fundamentals of ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Level 2: Building Blocks",
            description: `Build on your knowledge of ${course.title}`,
            order: 2,
          },
          {
            courseId: course.id,
            title: "Level 3: Advanced Concepts",
            description: `Explore advanced topics in ${course.title}`,
            order: 3,
          },
          {
            courseId: course.id,
            title: "Level 4: Real-World Application",
            description: `Apply lessons from ${course.title} to real scenarios`,
            order: 4,
          },
          {
            courseId: course.id,
            title: "Level 5: Strategic Thinking",
            description: `Develop strategic skills for ${course.title}`,
            order: 5,
          },
          {
            courseId: course.id,
            title: "Level 6: Mastery & Excellence",
            description: `Master excellence in ${course.title}`,
            order: 6,
          },
        ])
        .returning();

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Key Concepts", order: 1 },
            { unitId: unit.id, title: "Practical Examples", order: 2 },
            { unitId: unit.id, title: "Challenge Problems", order: 3 },
          ])
          .returning();

        // For each lesson, insert financial challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: "What is the primary benefit of budgeting?",
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: "Which is NOT a good financial habit?",
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: "What does diversification mean in investing?",
                order: 3,
              },
            ])
            .returning();

          // For each challenge, insert challenge options
          for (const challenge of challenges) {
            if (challenge.order === 1) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Tracking income and expenses",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Spending all your money each month",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Avoiding financial planning",
                },
              ]);
            }

            if (challenge.order === 2) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Living within your means",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Using credit cards without a plan",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Building an emergency fund",
                },
              ]);
            }

            if (challenge.order === 3) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Putting all money in one stock",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Spreading investments across different assets",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Investing only in bonds",
                },
              ]);
            }
          }
        }
      }
    }

    console.log("FINTEENS database seeded successfully!");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed FINTEENS database");
  }
};

void main();
