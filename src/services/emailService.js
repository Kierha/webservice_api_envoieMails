// emailService.js
const nodemailer = require("nodemailer");
const emailConfig = require("../config/emailConfig");
const { welcomeEmailTemplate } = require("../templates/emailTemplates");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  async sendEmail(user) {
    const mailOptions = welcomeEmailTemplate(user);

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
}

module.exports = new EmailService();
