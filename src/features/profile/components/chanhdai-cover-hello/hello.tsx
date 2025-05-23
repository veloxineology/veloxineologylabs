"use client";

import { RepeatIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useState } from "react";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import {
  AppleHelloEnglishEffect,
  AppleHelloVietnameseEffect,
} from "@/registry/apple-hello-effect";

const layers = ["xin-chao", "hello", "chanhdai-wordmark"] as const;

export function Hello() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canRestart = currentIndex === layers.length - 1;

  const nextAnimation = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % layers.length);
    }, 500);
  }, []);

  return (
    <>
      {/* <div
        className={cn(
          "absolute top-1/2 hidden h-12 w-full -translate-y-1/2 border-y border-grid transition-all duration-500 sm:block sm:h-16",
          {
            "h-10 sm:h-16": ["xin-chao", "hello"].includes(
              layers[currentIndex]
            ),
          }
        )}
      /> */}

      <AnimatePresence mode="wait">
        <div
          key={`layer-${currentIndex}`}
          className="flex items-center justify-center text-black dark:text-white"
        >
          {/* <motion.div
            className="hidden h-full w-px bg-grid sm:block"
            layoutId="layout-grid-left"
            transition={{
              duration: 0.5,
            }}
          /> */}

          {layers[currentIndex] === "xin-chao" && (
            <AppleHelloVietnameseEffect
              className="h-10 sm:h-16"
              exit={{ opacity: 0, scale: 0.8 }}
              onAnimationComplete={nextAnimation}
            />
          )}

          {layers[currentIndex] === "hello" && (
            <AppleHelloEnglishEffect
              className="h-10 sm:h-16"
              exit={{ opacity: 0, scale: 0.8 }}
              onAnimationComplete={nextAnimation}
            />
          )}

          {layers[currentIndex] === "chanhdai-wordmark" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <ChanhDaiMark className="h-12 sm:h-16" />
            </motion.div>
          )}

          {/* <motion.div
            className="hidden h-full w-px bg-grid sm:block"
            layoutId="layout-grid-right"
            transition={{
              duration: 0.5,
            }}
          /> */}
        </div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end justify-end">
        <SimpleTooltip content="Restart animation">
          <Button
            className="translate-px"
            variant="outline"
            size="icon"
            disabled={!canRestart}
            onClick={() => {
              setCurrentIndex(0);
            }}
          >
            <RepeatIcon />
            <span className="sr-only">Restart animation</span>
          </Button>
        </SimpleTooltip>
      </div>
    </>
  );
}
