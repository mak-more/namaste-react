const Shimmer = () => {
  return (
    <div className="container mx-auto m-4">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="flex flex-wrap items-center justify-around p-2 animate">card</div>
        <div className="flex flex-wrap items-center justify-around p-2 animate">card</div>
        <div className="flex flex-wrap items-center justify-around p-2 animate">card</div>
        <div className="flex flex-wrap items-center justify-around p-2 animate">card</div>
        <div className="flex flex-wrap items-center justify-around p-2 animate">card</div>
      </div>
    </div>
  );
}

export default Shimmer;