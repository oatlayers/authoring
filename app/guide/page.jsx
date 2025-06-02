import NavLinkButton from "@/components/NavLinkButton";

export default function GuidePage() {
  return (
    <div>
      <h1>The Authoring Program Guide</h1>
      <p>
        The full future authoring exercise has 2 different stages, each with a
        number of steps. The exercise may take up to five hours to complete. In
        Stage 1, you will write generally about your goals. In Stage 2, you will
        specify and clarify the nature of those goals, and begin to strategize.
      </p>
      <p>
        We recommend that you complete the process over two or more separate
        days. People who allow themselves some time to sleep when they are
        making important decisions appear to do a better job and to benefit
        more. Our research indicates that better results are obtained as the
        amount written by participants increases.
      </p>
      <p>
        You will need to concentrate and process what you are writing, so try to
        complete this exercise when you are feeling alert and relatively
        unrushed. During some sections, you will be asked to write for specified
        amounts of time. Please try your best to write for the amount of time
        specified (so, if it asks you to write for 1-2 minutes, please write
        continuously for at least 60 seconds).
      </p>
      <NavLinkButton href={"/"} children={"Home"} />
      <NavLinkButton href={"/stage1"} children={"Next"} />
    </div>
  );
}
