export function SectionHeadline({ title, color }: { title: string; color: string }) {
    return (
        <div className="flex items-center justify-center space-x-4 w-full py-20 px-20">
            <hr className="border border-yellow-400 flex-1" />
            <p className={`font-bold text-${color} text-4xl `}>{title}</p>
            <hr className="border border-yellow-400 flex-1" />
        </div>
    );
}