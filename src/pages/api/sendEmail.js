import nodemailer from 'nodemailer';

const smtpOptions = {
    service: 'ElasticEmail',
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
}


export default async function handler(req, res) {
    const { name, email, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            ...smtpOptions,
        })

        // Prepare the email message
        const mailOptions = {
            from: 'ivan.matas2@gmail.com',
            to: 'ivan.matas@arsfutura.co',
            // to: 'split.solidus@gmail.com',
            subject: 'Upit sa stranice',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // // Send the email
        await transporter.sendMail(mailOptions);

        // Send a response back
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error sending email' });
    }
}
