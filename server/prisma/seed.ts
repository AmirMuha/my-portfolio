import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      admin_id: true,
      app_url: true,
      github_url: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      name: true,
      summary: true,
      type: true,
    },
  });
  const admins = await prisma.admin.findMany({
    select: {
      id: true,
      apikey: true,
      confirmed: true,
      createdAt: true,
      email: true,
      fname: true,
      lname: true,
      linkedIn: true,
      github: true,
      whatsapp: true,
      instagram: true,
      heroImage: true,
      updatedAt: true,
      password: true,
      resumes: true,
    },
  });
  const abouts = await prisma.about.findMany({
    select: {
      admin_id: true,
      body: true,
      title: true,
      id: true,
      updatedAt: true,
    },
  });
  const techCategories = await prisma.techCategory.findMany({
    select: {
      id: true,
      name: true,
      project_id: true,
    },
  });
  const techs = await prisma.tech.findMany({
    select: {
      id: true,
      name: true,
      tech_category_id: true,
    },
  });
  const messages = await prisma.message.findMany({
    select: {
      admin_id: true,
      id: true,
      body: true,
      answer_status: true,
      createdAd: true,
      answeredAt: true,
      read_status: true,
      from: true,
      subject: true,
    },
  });
  const sketches = await prisma.sketch.findMany({
    select: {
      id: true,
      project_id: true,
      download_link: true,
      description: true,
      summary: true,
      title: true,
      image: true,
    },
  });
  const questions = await prisma.question.findMany({
    select: {
      id: true,
      answer_id: true,
      answer: true,
      project_id: true,
      question: true,
    },
  });
  const answers = await prisma.answer.findMany({
    select: {
      id: true,
      answer: true,
    },
  });
  if (
    abouts &&
    messages &&
    projects &&
    admins &&
    techs &&
    techCategories &&
    sketches &&
    questions &&
    answers
  ) {
    await prisma.techCategory.createMany({
      data: techCategories,
    });
    await prisma.tech.createMany({
      data: techs,
    });
    await prisma.answer.createMany({
      data: answers,
    });
    await prisma.question.createMany({
      data: questions,
    });
    await prisma.sketch.createMany({
      data: sketches,
    });
    await prisma.message.createMany({
      data: messages,
    });
    await prisma.techCategory.createMany({
      data: techCategories,
    });
    await prisma.about.createMany({
      data: abouts,
    });
    await prisma.admin.createMany({
      data: admins,
    });
    await prisma.project.createMany({
      data: projects,
    });
  }
}
main()
  .then(() => {
    console.log("Seed completed successfully.");
  })
  .catch((e) => {
    console.error(e);
  });
