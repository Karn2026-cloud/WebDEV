import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const Messages = () => {

  const [messages, setMessages] = useState([]);

  const [replyModal, setReplyModal] =
    useState(false);

  const [selectedEmail,
    setSelectedEmail] =
    useState("");

  const [subject,
    setSubject] =
    useState("");

  const [message,
    setMessage] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  useEffect(() => {

    fetchMessages();

  }, []);

  const fetchMessages = async () => {

    try {

      const res =
        await axios.get(
          "http://localhost:5000/api/messages"
        );

      setMessages(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const openReply = (email) => {

    setSelectedEmail(email);

    setReplyModal(true);

  };

  const sendReply = async () => {

    if (!subject || !message) {

      alert(
        "Please fill subject and message"
      );

      return;
    }

    try {

      setLoading(true);

      await axios.post(

        "http://localhost:5000/api/email/send",

        {
          to: selectedEmail,
          subject,
          message
        }

      );

      alert(
        "Email Sent Successfully"
      );

      setReplyModal(false);

      setSubject("");

      setMessage("");

    } catch (err) {

      console.log(err);

      alert(
        "Failed To Send Email"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <Sidebar />

      <div className="page">

        <h1>
          Client Messages
        </h1>

        <div className="messages-grid">

          {messages.map((msg) => (

            <div
              key={msg._id}
              className="message-card"
            >

              <h3>
                {msg.name}
              </h3>

              <p>
                📧 {msg.email}
              </p>

              <p>
                📱 {msg.phone}
              </p>

              <p>
                {msg.message}
              </p>

              <div
                className="message-actions"
              >

                <button
                  className="reply-btn"
                  onClick={() =>
                    openReply(
                      msg.email
                    )
                  }
                >
                  Reply
                </button>

                <a
                  href={`https://wa.me/${msg.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-link"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

      {replyModal && (

        <div className="modal-overlay">

          <div
            className="reply-modal"
          >

            <h2>
              Reply To Client
            </h2>

            <input
              value={selectedEmail}
              readOnly
            />

            <input
              placeholder="Subject"
              value={subject}
              onChange={(e) =>
                setSubject(
                  e.target.value
                )
              }
            />

            <textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
            />

            <button
              onClick={sendReply}
              disabled={loading}
            >
              {
                loading
                  ? "Sending..."
                  : "Send Email"
              }
            </button>

            <button
              className="cancel-btn"
              onClick={() =>
                setReplyModal(false)
              }
            >
              Cancel
            </button>

          </div>

        </div>

      )}

    </>

  );

};

export default Messages;