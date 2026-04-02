import { motion } from "framer-motion";

function GlobalBg() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* DARK MODE */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute w-full h-full opacity-20 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#00e5a0 1px, transparent 1px), linear-gradient(90deg, #00e5a0 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* LIGHT MODE */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute w-full h-full opacity-10 dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

    </div>
  );
}

export default GlobalBg;