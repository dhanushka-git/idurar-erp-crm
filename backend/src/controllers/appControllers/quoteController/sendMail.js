const nodemailer = require('nodemailer');

const mail = async (req, res) => {
  try {
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'dhanushgeek@gmail.com', // Replace with your email
        pass: 'xlfq gkyl jjcb lrps', // Replace with your email password
      },
    });

    // Define email options
    let mailOptions = {
      from: '"Your Name" dhanushgeek@gmail.com', // Replace with your email
      // to: req.body.to, // Recipient email
      to: "dhanushka3420@gmail.com", // Recipient email
      subject: req.body.subject, // Subject line
      text: req.body.text, // Plain text body
      html: req.body.html, // HTML body
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      result: info,
      message: 'Email sent successfully ',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending email',
      error: error.message,
    });
  }
};

module.exports = mail;
