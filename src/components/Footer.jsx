import React from "react";

import { motion } from "framer-motion";

import {
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 border-t border-white/10 bg-black"
    >
      <div className="flex flex-col gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
            className="flex flex-col gap-5"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text text-transparent cursor-pointer">
              INSTABIZ WEB
            </h1>

            <p className="text-gray-400 leading-relaxed">
              AI automation · SaaS development · CRM solutions · Web development
              · Mobile applications
            </p>

            <p className="flex items-center gap-2 text-gray-400">
              <FiMapPin />
              India · Canada · UK · France · International
            </p>

            <div className="flex items-center gap-4 mt-2">
              {[FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                  }}
                  viewport={{ amount: 0.2 }}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="cursor-pointer w-10 h-10 rounded-xl border border-white/10 hover:border-violet-500/40 hover:bg-violet-600/10 transition-all duration-300 flex items-center justify-center text-white/40 hover:text-white/80"
                >
                  <Icon size={18} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ amount: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h1 className="font-bold text-xl mb-2 cursor-pointer">Services</h1>

            {[
              "AI Automation",
              "SaaS Development",
              "CRM Systems",
              "Web Development",
              "Mobile Apps",
            ].map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                viewport={{ amount: 0.2 }}
                whileHover={{
                  x: 4,
                }}
                className="text-gray-400 cursor-pointer hover:text-gray-300 transition-all duration-300"
              >
                {item}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ amount: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h1 className="font-bold text-xl mb-2 cursor-pointer">Products</h1>

            {["Scout", "Ping", "Dialer", "Echo", "Instant Dukaan"].map(
              (item, index) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  viewport={{ amount: 0.2 }}
                  whileHover={{
                    x: 4,
                  }}
                  className="text-gray-400 cursor-pointer hover:text-gray-300 transition-all duration-300"
                >
                  {item}
                </motion.p>
              ),
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ amount: 0.2 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Instabiz Web. All rights reserved.
          </p>

          <motion.p
            whileHover={{
              scale: 1.03,
            }}
            className="flex items-center gap-2 text-gray-500 text-sm md:text-base cursor-pointer"
          >
            <FiMail />
            contact@instabizweb.com
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
