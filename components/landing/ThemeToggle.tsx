"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-[var(--border)] bg-[var(--background-card)]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-card)] text-[var(--foreground-muted)] shadow-sm transition-colors hover:border-[var(--ruby-accent)] hover:text-[var(--ruby-accent)]"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </motion.div>
    </motion.button>
  );
}
