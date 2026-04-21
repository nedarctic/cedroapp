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
    <div className="flex items-center justify-center space-x-3 sm:space-x-4 w-full py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-20">
      <hr className="border border-yellow-400 flex-1" />
      <p className={`font-bold text-2xl sm:text-3xl lg:text-4xl ${colorMap[color]} ${darkModeColor ? darkColorMap[darkModeColor] : ""}`}>
        {title}
      </p>
      <hr className="border border-yellow-400 flex-1" />
    </div>
  );
}