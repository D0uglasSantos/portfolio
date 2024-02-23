/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Div1,
  Forms,
  DivIConContact,
  DivInputs,
  Icon,
  IconSocial,
  InnerContainer,
  Inputs,
  SocialMedias,
  SubtitleIcon,
  TextArea,
  TextContact,
  TextIcon,
  TitleIcon,
} from "./style";
import React from "react";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Title from "../../components/Title";
import Button2 from "../../components/Button2";
import SectionTitle from "../../components/SectionTitle";
import { Container } from "../../GlobalStyle";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = () => {
    if (!name || !email || !message) {
      toast.error("Fill in all the fields please!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const formElement = e.target as HTMLFormElement; // Aqui fazemos a conversão de tipo

    emailjs
      .sendForm(
        "service_d2yq6fu",
        "template_eioxndu",
        formElement,
        "XxJFTqpoOwgnFbvEi"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks! I'll get back to you as soon as I can!");
        },
        (error) => {
          toast.error("Sorry, something went wrong!");
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <Title preTitle="Get in" positle="Touch" textBack="contact" />
      <InnerContainer>
        <Div1>
          <SectionTitle>Never Give Up!!</SectionTitle>
          <TextContact>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </TextContact>
          <DivIConContact>
            <Icon>
              <IoIosMailUnread />
            </Icon>
            <TextIcon>
              <TitleIcon>mail me</TitleIcon>
              <SubtitleIcon>douglasas410@gmail.com</SubtitleIcon>
            </TextIcon>
          </DivIConContact>
          <DivIConContact>
            <Icon>
              <FaPhoneSquare />
            </Icon>
            <TextIcon>
              <TitleIcon>call me</TitleIcon>
              <SubtitleIcon>+55 (61) 99924-2049</SubtitleIcon>
            </TextIcon>
          </DivIConContact>
          <SocialMedias>
            <a href="https://www.instagram.com/d0uglas_0203/" target="blank">
              <IconSocial>
                <AiFillInstagram />
              </IconSocial>
            </a>
            <a href="https://github.com/d0uglasSantos" target="blank">
              <IconSocial>
                <FaGithub />
              </IconSocial>
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-santos-813539234/"
              target="blank"
            >
              <IconSocial>
                <FaLinkedin />
              </IconSocial>
            </a>
          </SocialMedias>
        </Div1>
        <Forms onSubmit={handleSubmit}>
          <DivInputs>
            <Inputs
              placeholder="Your name"
              name="from_name"
              value={name}
              type="text"
              onChange={(e: { target: { value: any; }; }) => setName(e.target.value)}
            />
            <Inputs
              placeholder="Your email"
              name="from_email"
              type="email"
              value={email}
              onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)}
            />
          </DivInputs>
          <TextArea
            placeholder="Your message"
            cols={30}
            rows={10}
            name="message"
            value={message}
            onChange={(e: { target: { value: any; }; }) => setMessage(e.target.value)}
          />
          <Button2 children="Send Message" icon={<IoIosSend />} />
        </Forms>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
