import Link from "next/link";

const WorksPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <Link
        href="https://calendra.atank.org/book/user_2zJdrcBZH78G6KOWTY3qZJaNm3b"
        className="text-2xl text-yellow-400 underline hover:text-yellow-600 transition-all duration-300"
      >
        Book my time
      </Link>
      <div className="h-px bg-stone-200 w-full"></div>
      <Link
        href="https://game-hub.atank.org"
        className="text-2xl text-amber-400 underline hover:text-yellow-600 transition-all duration-300"
      >
        Discover games
      </Link>
      <div className="h-px bg-stone-200 w-full"></div>
      <Link
        href="https://progress.atank.org"
        className="text-2xl text-orange-400 underline hover:text-yellow-600 transition-all duration-300"
      >
        Progress with me
      </Link>
    </section>
  );
};

export default WorksPage;
