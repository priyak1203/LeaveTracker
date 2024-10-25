function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10">
      {children}
    </section>
  );
}

export default Container;
