export function NewsletterSignup() {
    return (
        <div className="flex flex-col justify-center items-center my-40">
            <p className="text-black text-md font-normal">Sign up to our newsletter for updates</p>
            <form className="flex flex-row items-center justify-center gap-4 mt-4">
                <input className="w-60 px-4 py-2 border border-black" placeholder="email@gmail.com" />
                <button className="px-4 py-2 text-black bg-[#FAD039]">Sign up</button>
            </form>
        </div>
    );
}