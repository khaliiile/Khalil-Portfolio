import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up email data
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${fullName}`,
      text: message,
    };

    try {
      // Send mail with defined transport object
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error.message);
      res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
    