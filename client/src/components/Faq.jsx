import React, { useState, useEffect } from 'react';
import { Accordion, Container, Row, Col, Image } from 'react-bootstrap';
import { FaQuestionCircle, FaPlus } from 'react-icons/fa';
import faqImage from '../assets/faq.jpg';
import './Faq.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqItems = [
    {
      question: "How can I track my order?",
      answer: "After placing an order, you'll receive an email with a tracking link. You can also track it from your account under 'My Orders'.",
      eventKey: "0",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return window. Items must be unused and in original packaging. Read our Return Policy page for details.",
      eventKey: "1",
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free shipping on orders over 1000 ETB. Shipping costs for smaller orders vary based on location.",
      eventKey: "2",
    },
    {
      question: "Can I change or cancel my order?",
      answer: "Orders can be changed or canceled within 1 hour of placing them. Please contact our support team immediately.",
      eventKey: "3",
    },
  ];

  return (
    <Container className="mt-5 pt-5">
      <Row className="align-items-center">
        {/* Left Side - Image with AOS */}
        <Col lg={6} md={6} sm={12} className="mb-4" data-aos="fade-up">
          <Image src={faqImage} alt="FAQ" fluid rounded />
        </Col>

        {/* Right Side - Accordion with AOS */}
        <Col lg={6} md={6} sm={12} data-aos="fade-left">
          <div className="text-left my-4">
            <h2 className="d-inline-flex align-items-center justify-content-center">
              <span
                className="bg-primary me-2"
                style={{
                  borderRadius: '50px',
                  width: '30px',
                  height: '3px',
                  display: 'inline-block',
                }}
              ></span>
              Faq
            </h2>
          </div>

          <Accordion activeKey={activeKey} flush>
            {faqItems.map(({ question, answer, eventKey }) => (
              <Accordion.Item
                eventKey={eventKey}
                key={eventKey}
                style={{ border: 'none' }}
                data-aos="zoom-in-up"
              >
                <Accordion.Header onClick={() => handleToggle(eventKey)} style={{ borderBottom: '1px solid #ddd' }}>
                  <FaQuestionCircle className="me-2 text-primary" size={20} />
                  <span className="flex-grow-1 text-start">{question}</span>
                  <FaPlus className="text-primary" size={20} />
                </Accordion.Header>
                <Accordion.Body>{answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
