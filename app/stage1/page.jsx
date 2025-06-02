"use client";
import NavLinkButton from "@/components/NavLinkButton";
import React, { useState } from "react";

const questions = [
  {
    label:
      "If you could choose only one thing that you could do better, what would it be?",
    key: "doBetter",
  },
  {
    label:
      "What would you like to learn more about, in the next six months? Two years? Five years?",
    key: "learnMore",
  },
  {
    label:
      "What habits would you like to improve?\n- At school?\n- At work?\n- With friends and family?\n- For your health?\n- With regards to smoking/alcohol/drug use?",
    key: "habits",
  },
  {
    label: "Describe your ideal social life in the future.",
    key: "socialLife",
  },
  {
    label:
      "Describe your leisure life in the future if it was set up to be genuinely productive and enjoyable.",
    key: "leisureLife",
  },
  {
    label: "Describe your ideal family life in the future.",
    key: "familyLife",
  },
  {
    label: "Your career in the future.",
    key: "career",
  },
  {
    label: "Qualities you admire.",
    key: "qualities",
  },
];

export default function StageOne() {
  const [responses, setResponses] = useState({});

  const handleChange = (key, value) => {
    setResponses((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-6 text-gray-800">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Stage 1: Imagining Your Ideal Future
      </h1>
      <p className="mb-4 text-sm text-gray-600">
        For each question, think and write for at least two minutes, then move
        on. Try not to write more than 2000 words.
      </p>

      {questions.map(({ label, key }, index) => (
        <div key={key} className="space-y-2">
          <label className="block text-lg font-semibold whitespace-pre-line">
            {index + 1}. {label}
          </label>{" "}
          <br />
          <textarea
            value={responses[key] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            rows={6}
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Write your thoughts here..."
          />
        </div>
      ))}
      <NavLinkButton href={"/guide"}>Previous</NavLinkButton>
      <NavLinkButton href={"/stage1/summary"}>Next</NavLinkButton>
    </div>
  );
}
