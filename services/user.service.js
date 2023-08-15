import sequelize from "./../libs/sequelize.js";
import boom from "@hapi/boom";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import nodemailer from "nodemailer";
import { html } from "./../assets/register.js";

dotenv.config();
const passwordMailer = process.env.APP_PASSWORD;
const userMailer = process.env.USER_MAILER;

class UserService {
  constructor() {}

  async find() {
    const users = await sequelize.models.User.findAll({
      attributes: [
        "id",
        "name",
        "email",
        "image",
        "phone_number",
        "area",
        "floors",
        "rooms",
        "appliances",
      ],
    });
    return users;
  }
  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }

  async findByEmail(email) {
    const user = await sequelize.models.User.findOne({
      where: { email: email },
    });
    return user;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await sequelize.models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password;
    const mail = await this.sendMail(newUser);
    if (mail) {
      return { ...newUser, message: "Mail send" };
    }
  }

  async delete(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    await user.destroy();
    return { message: "EL usuario se ha eliminado correctamente" };
  }
  async updatePreferences(id, data) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    await user.update({
      monthlyReceipt: data.monthlyReceipt,
      kWConsumedMonth: data.kWConsumedMonth,
      desiredConsumption: data.desiredConsumption,
    });
    return { message: "EL usuario se ha actualizado correctamente", ...user };
  }

  // async sendRegister(email) {
  //   const user = await service.findByEmail(email);
  //   if (!user) {
  //     throw boom.unauthorized();
  //   }
  //   const payload = { sub: user.id };
  //   // Generar jwt
  //   const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
  //   const link = `http://myfrontend.com/recovery?token=${token}`;
  //   await service.update(user.id, { recovery_token: token });
  //   const mail = {
  //     from: config.email, // sender address
  //     to: `${user.email}`, // list of receivers
  //     subject: 'Email para rcuperar contraseña', // Subject line
  //     html: `<b>Ingresa a este link para recuperar la contraseña => ${link}</b>`, // html body
  //   };

  //   const rta = await this.sendMail(mail);
  //   return rta;
  // }
  async sendMail(user) {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userMailer,
        pass: passwordMailer,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Energy Solution 🖥️💡" <foo@example.com>', // sender address
      to: user.email, // list of receivers
      subject: "!!FELICIDADES!! 🙌🥳", // Subject line
      text: "Hello world?", // plain text body
      html: html, // html body
    });
    return info;
  }
}

export default UserService;
