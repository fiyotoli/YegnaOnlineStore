import React, { useEffect } from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import './Contact.css'; 

const { Title, Text } = Typography;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container my-5 pt-5">
      {/* Title and Introductory Paragraphs */}
      <div className="text-center my-3" data-aos="fade-down">
        <h2 className="d-inline-flex align-items-center justify-content-center">
          <span
            className="bg-primary me-2"
            style={{ borderRadius: '50px', width: '30px', height: '3px', display: 'inline-block' }}
          ></span>
          Get In Touch With Us
        </h2>
      </div>
      <Text
        className="mb-4 text-muted"
        style={{ fontSize: '18px', lineHeight: '1.7', textAlign: 'center', display: 'block' }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We're here to help you with any questions or issues you might have regarding our products, orders, or
        services. Feel free to reach out to us, and we'll get back to you as soon as possible.
      </Text>

      <Row gutter={[32, 32]} className="pt-4">
        {/* Form Section (Left) */}
        <Col xs={24} md={12} data-aos="fade-right" data-aos-delay="300">
          <div className="p-5 bg-primary bg-opacity-10" style={{ borderRadius: '8px' }}>
            <Form layout="vertical">
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
                <Input.TextArea rows={4} placeholder="Enter your message or inquiry" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        {/* Text Section (Right) */}
        <Col xs={24} md={12} className="d-flex flex-column justify-content-center" data-aos="fade-left" data-aos-delay="400">
          <Title level={2} style={{ color: '#0d6efd' }}>
            Contact Support
          </Title>
          <Text className="mb-4 text-muted" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            If you have any inquiries about our products, orders, or payment processes, our customer support team is here to assist.
            We strive to offer timely responses to all your ecommerce-related questions.
          </Text>
          <Text className="mb-4 text-muted" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            Feel free to reach out to us via email, phone, or visit our office in Addis Ababa. We're always ready to help you with any concerns or requests.
          </Text>

          <ul style={{ padding: 0, listStyle: 'none', fontSize: '16px' }}>
            <li className="mb-3">
              <FaEnvelope className="text-primary me-2" />
              <span>support@yegna.com</span>
            </li>
            <li className="mb-3">
              <FaPhone className="text-primary me-2" />
              <span>+251 987 654 321</span>
            </li>
            <li className="mb-3">
              <FaMapMarkerAlt className="text-primary me-2" />
              <span>Addis Ketama, Addis Ababa, Ethiopia</span>
            </li>
          </ul>

          
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
