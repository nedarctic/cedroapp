export const colorMap: Record<string, string> = {
  black: "text-black",
  white: "text-white",
};

export const darkColorMap: Record<string, string> = {
  white: "dark:text-white",
  black: "dark:text-black",
};

export function SectionHeadline({
  title,
  color,
  darkModeColor,
}: {
  title: string;
  color: string;
  darkModeColor?: string;
}) {
  return (
    <div className="flex items-center justify-center space-x-4 w-full py-20 px-20">
      <hr className="border border-yellow-400 flex-1" />
      <p
        className={`font-bold text-4xl ${
          colorMap[color]
        } ${darkModeColor ? darkColorMap[darkModeColor] : ""}`}
      >
        {title}
      </p>
      <hr className="border border-yellow-400 flex-1" />
    </div>
  );
}