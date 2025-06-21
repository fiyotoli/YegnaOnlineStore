import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../components/Contact.css'; // Corrected import path

const { Title, Text } = Typography;

const Contact = () => {
  return (
    <div className="container my-5 pt-5">
      {/* Title and Introductory Paragraphs */}
      <div className="text-center my-4">
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
      >
        We're here to help you with any questions or issues you might have regarding our products, orders, or services.
        Feel free to reach out to us, and we'll get back to you as soon as possible.
      </Text>

      <Text
        className="mb-4 text-muted"
        style={{ fontSize: '18px', lineHeight: '1.7', textAlign: 'center', display: 'block' }}
      >
        Whether you're looking for more information about a product or need help with an order, our customer support team is ready to assist you.
      </Text>

      <Row gutter={[32, 32]} className="pt-5">
        {/* Form Section (Left) */}
        <Col xs={24} md={12}>
          <div className="p-5 bg-primary bg-opacity-10" style={{ borderRadius: '8px' }}>
            <Form layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
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
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea rows={4} placeholder="Enter your message or inquiry" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        {/* Text Section (Right) */}
        <Col xs={24} md={12} className="d-flex flex-column justify-content-center">
          <Title level={2} style={{ color: '#0d6efd' }}>Contact Support</Title>
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

      {/* Google Map */}
      <div className="mt-5 text-center">
         <h3 className="mb-3">Find Us On The Map</h3>
  <p className="text-muted mb-4" style={{ fontSize: '16px' }}>
    Our office is located in the heart of Addis Ketema, Addis Ababa. You can visit us in person or use the map below to get directions.
  </p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.3154022262454!2d38.74273951460182!3d9.01079369351781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853bf29c9c69%3A0xb5b4b13dfeb52d94!2sAddis%20Ketema%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1689938467081!5m2!1sen!2set"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
