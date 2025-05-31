import NavLinkButton from "@/components/NavLinkButton";
export default function StageOne() {
  return (
    <>
      <main className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Stage 1: Imagining Your Ideal Future
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          In this exercise you will begin to create a version, in writing, of
          your ideal future. William James, the great American psychologist,
          once remarked that he did not know what he thought until he had
          written his thoughts down. When he didn’t know what to write, he wrote
          about anything that came to mind. Eventually, his ideas became focused
          and clarified.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          Brainstorm. Write whatever comes to mind. Don’t worry too much about
          sentence construction, spelling, or grammar. There will be plenty of
          time to write polished sentences later. Avoid criticizing what you
          write. Premature criticism interferes with the creative process.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          It might be best to concentrate on your future three to five years
          down the road, although you may have reasons to concentrate on a
          shorter or longer timespan (eighteen months to ten years).
        </p>
      </main>
      <NavLinkButton href={"/guide"} children={"Previous"} />
    </>
  );
}
