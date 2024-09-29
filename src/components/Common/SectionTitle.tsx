import clsx from "clsx";

const SectionTitle = ({
  title,
  paragraph,
  width = "90%",
  center,
  mb = "100px",
  titleStyle = 'text-3xl md:text-[45px]',
  paragraphStyle = 'text-base md:text-lg',
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  titleStyle?: string;
  paragraphStyle?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={clsx("mb-4 font-bold !leading-tight text-black dark:text-white sm:text-4xl", titleStyle)}>
          {title}
        </h2>
        <p className={clsx("!leading-relaxed text-body-color", paragraphStyle)}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
