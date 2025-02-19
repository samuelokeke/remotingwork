"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AuthHeader = () => {
  return (
    <motion.div initial={{ x: -600 }} animate={{ x: 0 }}>
      <Link href="/" className="grid place-content-center mb-6">
        <Image src="/logo.png" priority width={64} height={64} alt="logo" />
      </Link>
    </motion.div>
  );
};

export default AuthHeader;
