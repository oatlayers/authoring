"use client";
import NavLinkButton from "@/components/NavLinkButton";
import { useState } from "react";

export default function StageOneSummary() {
  const [response, setResponses] = useState("");

  const handleChange = (e) => {
    setResponses(e.target.value); // Fix here: no need for an arrow function inside setResponses
    console.log(e.target.value); // This can be useful for debugging but might be removed in production
  };

  return (
    <>
      <h1>The Ideal Future: Complete Summary</h1>

      <section>
        <p>
          Now you have written briefly about your future, and have had some time
          to consider more specific issues. This step gives you the chance to
          integrate all the things that you have just thought and wrote about.
          Close your eyes.
        </p>
      </section>

      <section>
        <p>Daydream, if you can, and imagine your ideal future:</p>
      </section>

      <ul>
        <li>Who do you want to be?</li>
        <li>What do you want to do?</li>
        <li>Where do you want to end up?</li>
        <li>Why do you want these things?</li>
        <li>How do you plan to achieve your goals?</li>
        <li>When will you put your plans into action?</li>
      </ul>

      <section>
        <p>
          Dream while you write, and don't stop. Write at least until 15 minutes
          have passed. Be ambitious. Imagine a life that you would regard as
          honorable, exciting, productive, creative, and decent. Remember, you
          are writing only for yourself. Choose goals that you want to pursue
          for your own private reasons, not because someone else thinks that
          those goals are important. You don't want to live someone else's life.
          Include your deepest thoughts and feelings about all your personal
          goals. Try not to write more than 8000 words.
        </p>

        <form className="space-y-2">
          <textarea
            value={response}
            onChange={handleChange}
            rows={6}
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Write your thoughts here..."
          />
        </form>
      </section>

      <NavLinkButton href={"/stage1"}>Previous</NavLinkButton>
    </>
  );
}
