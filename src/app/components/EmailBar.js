export default function Email() {
    return (
      <div className="fixed bottom-0 right-8 flex flex-col items-center space-y-1">
        <a
          href="mailto:devp1866@gmail.com"
          className="text-[#64ffda] text-sm tracking-widest hover:underline mb-4"
          style={{ writingMode: "vertical-rl" }}
        >
          devp1866@gmail.com
        </a>
        <div className="w-[2px] h-24 bg-[#ccd6f6]"></div>
      </div>
    );
  }
  