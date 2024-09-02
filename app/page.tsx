import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-lg font-semibold">
          ✋ Hi there!
        </h2>
        <h1 className="text-4xl text-center p-8 font-bold">
          Welcome to Sixtus Aondoakaa's Blog app.
        </h1>

        <p className="text-center text-lg max-w-2xl leading-relaxed">
          I'm Sixtus Aondoakaa, a passionate software engineer with a love for
          coding, problem-solving, and sharing knowledge. This blog is my space
          to document my journey in the tech world, share insights, and
          collaborate with like-minded developers.
        </p>

        <p className="text-center text-lg mt-6 max-w-2xl leading-relaxed">
          Currently, the blog is undergoing some exciting updates and
          improvements. Unfortunately, it's temporarily unavailable, but I'll
          be back soon with more content. Please check back later, and thank
          you for your patience!
        </p>
       
        <a
          href="https://sixtusdev.net"
          className="text-center ring-1 text-xl font-medium text-white bg-blue-600 px-6 py-3 mt-8 rounded-full hover:bg-blue-800"
        >
          Visit my website
        </a>
      
      </div>
    </main>
  );
}
