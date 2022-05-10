const nodemailer = require("nodemailer");

const send = async (userSupport, serversAlert) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mail = {
      from: "yonaldev@gmail.com",
      to: ["yonaldev@gmail.com"],
      subject: "Servidor con niveles altos",
      html: `Alerta!! algunos de nuestros servidores están saturados<br>. Ingresa a la <a href="http://localhost:3000/" target="_blank">Nuestra plataforma</a> para nivelarlos`,
    };
    const { messageId } = await transporter.sendMail(mail);
    return messageId;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  send,
};
