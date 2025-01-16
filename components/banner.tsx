"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

type BannerType = "info" | "success" | "alert";

interface DismissibleBannerProps {
  type: BannerType;
  message: string;
  className?: string;
}

const bannerConfig = {
  info: {
    icon: Info,
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    iconColor: "text-blue-400",
  },
  success: {
    icon: CheckCircle,
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    iconColor: "text-green-400",
  },
  alert: {
    icon: AlertCircle,
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    iconColor: "text-red-400",
  },
};

export function InfoBanner({
  type,
  message,
  className,
}: DismissibleBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { icon: Icon, bgColor, textColor, iconColor } = bannerConfig[type];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "flex items-center justify-between px-4 py-3 rounded-md shadow-sm",
            bgColor,
            textColor,
            className
          )}
        >
          <div className="flex items-center">
            <Icon className={cn("w-5 h-5 mr-3", iconColor)} />
            <span className="text-sm font-medium">{message}</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
