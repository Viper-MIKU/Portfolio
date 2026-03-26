import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const EMAIL = "vinayaksuryavanshi37@gmail.com"; 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    toast.success("Email copied!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        toast.success("Message Sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send");
      }

    } catch (error) {
      toast.error("Server error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex justify-center items-center py-24"
    >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full max-w-md gap-6 px-6 md:px-0"
      >

        <h2 className="text-4xl font-bold text-emerald-500 dark:text-emerald-400">
          Get In Touch
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* NAME */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 dark:border-zinc-700 
            p-3 rounded-lg 
            bg-white/60 dark:bg-zinc-900/40 
            backdrop-blur-md 
            text-black dark:text-white 
            placeholder-gray-500 
            focus:outline-none 
            focus:border-emerald-400 
            focus:bg-white dark:focus:bg-zinc-900
            focus:ring-2 focus:ring-emerald-400/50
            transition duration-300"
          />

          {/* EMAIL */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 dark:border-zinc-700 
            p-3 rounded-lg 
            bg-white/60 dark:bg-zinc-900/40 
            backdrop-blur-md 
            text-black dark:text-white 
            placeholder-gray-500 
            focus:outline-none 
            focus:border-emerald-400 
            focus:bg-white dark:focus:bg-zinc-900
            focus:ring-2 focus:ring-emerald-400/50
            transition duration-300"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 dark:border-zinc-700 
            p-3 rounded-lg 
            bg-white/60 dark:bg-zinc-900/40 
            backdrop-blur-md 
            text-black dark:text-white 
            placeholder-gray-500 
            focus:outline-none 
            focus:border-emerald-400 
            focus:bg-white dark:focus:bg-zinc-900
            focus:ring-2 focus:ring-emerald-400/50
            transition duration-300 resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="border border-emerald-500 dark:border-emerald-400 
            p-3 rounded-lg 
            hover:bg-emerald-500 dark:hover:bg-emerald-400 
            hover:text-black 
            transition duration-300 
            disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {/* DIRECT CONTACT */}
        <div className="mt-6 text-center space-y-2">

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Prefer direct contact?
          </p>

          <a
            href={`mailto:${EMAIL}?subject=Let's Work Together&body=Hi Vinayak,`}
            className="text-emerald-500 dark:text-emerald-400 font-medium hover:underline"
          >
            {EMAIL}
          </a>

          <div className="flex justify-center gap-4 mt-2">

            <button
              onClick={copyEmail}
              className="text-sm border border-emerald-500 px-3 py-1 rounded 
              hover:bg-emerald-500 hover:text-black transition"
            >
              Copy Email
            </button>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;