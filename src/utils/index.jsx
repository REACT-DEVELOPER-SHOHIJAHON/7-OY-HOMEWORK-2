const Container = ({ children }) => {
  return (
    <div className="container max-w-[1200px] mx-auto p-4 w-full">
      {children}
    </div>
  );
};

export { Container };
