-- CreateTable
CREATE TABLE "Admin" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "heroImage" TEXT NOT NULL,
    "resumes" TEXT[],
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "apikey" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "admin_id" UUID NOT NULL,

    CONSTRAINT "Stack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "github_url" TEXT NOT NULL,
    "app_url" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "admin_id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechCategory" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "project_id" UUID NOT NULL,

    CONSTRAINT "TechCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tech" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "tech_category_id" UUID NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" UUID NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "project_id" UUID NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sketch" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "downloadables" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "project_id" UUID NOT NULL,

    CONSTRAINT "Sketch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "admin_id" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" UUID NOT NULL,
    "subject" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "files" TEXT NOT NULL DEFAULT E'',
    "body" TEXT NOT NULL,
    "read_status" BOOLEAN NOT NULL DEFAULT false,
    "answer_status" BOOLEAN NOT NULL DEFAULT false,
    "admin_id" UUID NOT NULL,
    "answeredAt" TIMESTAMP(3),
    "createdAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Stack_id_key" ON "Stack"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TechCategory_id_key" ON "TechCategory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tech_id_key" ON "Tech"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Question_id_key" ON "Question"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sketch_id_key" ON "Sketch"("id");

-- CreateIndex
CREATE UNIQUE INDEX "About_id_key" ON "About"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Message_id_key" ON "Message"("id");

-- AddForeignKey
ALTER TABLE "Stack" ADD CONSTRAINT "Stack_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechCategory" ADD CONSTRAINT "TechCategory_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tech" ADD CONSTRAINT "Tech_tech_category_id_fkey" FOREIGN KEY ("tech_category_id") REFERENCES "TechCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sketch" ADD CONSTRAINT "Sketch_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "About" ADD CONSTRAINT "About_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
