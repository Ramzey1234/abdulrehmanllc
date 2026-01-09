"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string || "New Contact Form Submission";
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  // Create Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: "owais.hassan@querytel.com",
      subject: `[Contact Form] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, message: "Message sent! We'll be in touch." };
  } catch (error) {
    console.error("Error sending email:", error);
    // For development purposes, if credentials aren't set, we might want to simulate success or be explicit.
    // But for a requested feature, we usually fail.
    // However, if the user hasn't set up credentials, this will fail. 
    // I'll return a generic error but also log it.
    return { success: false, message: "Failed to send email. Check configuration." };
  }
}
